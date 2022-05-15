import faunadb, { query as q } from 'faunadb'

const faunaClient = new faunadb.Client({secret: process.env.REACT_APP_FAUNA_KEY})

export const addNewPassword = async (accountName, accountUrl, email, encryptedPassword, user, avatar) => {
    const date = new Date()
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    try{    
        let newAddedPassword = await faunaClient.query(
            q.Create(
                q.Collection('passwords'),
                {
                    data: {
                        accountName,
                        accountUrl,
                        email,
                        encryptedPassword,
                        avatar,
                        created__at: `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`,
                        user: {
                            id: user.sub
                        }
                    }
                }
            )
        )
        if (newAddedPassword.name === 'BadRequest') {
            return 'Sorry, there was a problem with the request, Database Server issue!'
        }
        newAddedPassword.data.id = newAddedPassword.ref.value.id
        return newAddedPassword.data
    }catch(error){
        return error.message
    }
}

export const getPasswordsForUser = async id => {
    try {
        let passwordsForUser = await faunaClient.query(
            q.Paginate(
                q.Match(q.Index('user_passwords'), id)
            )
        )
        if (passwordsForUser.name === 'NotFound') {
            return 'Passwords for the user were not found!'
        }
        if (passwordsForUser.name === 'BadRequest') {
            return 'Sorry, there was a problem with the request, Database Server issue!'
        }
        let passwords = []
        for (let passwordId of passwordsForUser.data) {
            let password = await getPassword(passwordId.value.id)
            passwords.push(password)
        }
        return passwords
    } catch (error) {
        if (error.message === 'instance not found') {
            return []
        }
        return
    }
}

export const getPassword = async id => {
    try{
        let password = await faunaClient.query(
            q.Get(q.Ref(q.Collection('passwords'), id))
        )
        if (password.name === 'NotFound') {
            return 'Passwords for the user were not found!'
        }
        if (password.name === 'BadRequest') {
            return 'Sorry, there was a problem with the request, Database Server issue!'
        }
        password.data.id = password.ref.value.id
        return password.data
    }catch(error){
        return error.message
    }
}

export const updatePassword = async (payload, id) => {
    try{
        let password = await faunaClient.query(
            q.Update(
                q.Ref(q.Collection('passwords'), id),
                { data: payload }
            )
        )
        if (password.name === 'NotFound') {
            return 'Required password data Not found'
        }
        if (password.name === 'BadRequest') {
            return 'Something went wrong, Database Server issue!'
        }
        password.data.id = password.ref.value.id
        return password.data
    }catch(error){
        return error.message
    }
}

export const deletePassword = async id => {
    try{
        let password = await faunaClient.query(
            q.Delete(
                q.Ref(q.Collection('passwords'), id)
            )
        )
        if (password.name === 'NotFound') {
            return 'Required password data Not found'
        }
        if (password.name === 'BadRequest') {
            return 'Something went wrong, Database Server issue!'
        }
        password.data.id = password.ref.value.id
        return password.data
    }catch(error){
        return error.message
    }
}
