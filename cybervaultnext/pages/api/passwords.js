import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import { addNewPassword, getPasswordsForUser } from '../../faunaDBModels'
import * as Yup from 'yup'

// This API component is responsible for all API requests regarding adding the password and getting user specific passwords
// all requests have been secured ( with user authentication requirement and server side data validation as well) 
// and proper exception/error handling has been conducted

const schema=Yup.object({
    accountName:Yup.string().matches(/^[aA-zZ\s]+$/).required(),
    accountUrl:Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/).required(),
    email:Yup.string().email().required(),
    encryptedPassword:Yup.string().required()
});

export default withApiAuthRequired(async (req, res) => {
    const user = getSession(req, res).user
    if (req.method === 'POST') {
        let {
            accountName, accountUrl, email,
            encryptedPassword, avatar
        } = req.body
        //The request body is being data validated using the Yup schema
        if(schema.validate(req.body)){
            let newPassword = await addNewPassword(
                accountName, accountUrl, 
                email, encryptedPassword,
                user,  
                avatar
            )
            res.status(201).json({ 
                message: 'Successfully created password',
                data: newPassword,
                status: 'ok'
            })
        }
        else{
            return res.status(400).json({
                message: 'Data validation failed',
                data: null,
                status: false
            })
        }
    } else if (req.method === 'GET') {
        let passwords = await getPasswordsForUser(user.sub)
        if (!passwords) return res.status(400).json({
            message: 'Something went wrong',
            data: null,
            status: false
        })
        res.status(200).json({
            message: 'Successfully retrieved passwords',
            data: passwords,
            status: true
        })
    } else {
        res.status(405).json({
            message: 'Method not allowed',
            data: null,
            status: false
        })
    }
})
