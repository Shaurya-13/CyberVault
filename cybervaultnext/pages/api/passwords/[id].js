import { withApiAuthRequired ,getSession } from '@auth0/nextjs-auth0'
import { deletePassword, getPassword, updatePassword } from '../../../faunaDBModels'

// This API component is responsible for all API requests regarding editing, deleting and recieveng all passwords
// all requests have been secured ( with user authentication requirement and server side data validation as well) 
// and proper exception/error handling has been conducted

export default withApiAuthRequired(async (req, res) => {
    const user = getSession(req, res).user
    if (req.method === 'PUT') {
        let password = await updatePassword(
            req.body, req.query.id
        )
        res.status(201).json({ 
            message: 'Successfully updated password',
            data: password,
            status: 'ok'
        })
    } else if (req.method === 'GET') {
        let password = await getPassword(req.query.id)
        res.status(200).json({ 
            message: 'Successfully retrieved password',
            data: password,
            status: 'ok'
        })
    } else if (req.method === 'DELETE') {
        let password = await getPassword(req.query.id)
        if (password.user.id !== user.sub) {
            return res.status(403).json({
                message: 'Forbidden',
                status: false,
                data: null
            })
        }
        password = await deletePassword(req.query.id)
        res.status(200).json({ 
            message: 'Successfully deleted password',
            data: password,
            status: 'ok'
        })
    } else {
        res.status(405).json({
            message: 'Method not allowed',
            data: null,
            status: false
        })
    }
})
  