import { deleteChild, getChild, updateChild } from "@/database/controler"

export default async function handler(req, res) {
    const  { method, body, query: {id} } = req

    switch(method) {
        case 'GET': {
            return getChild(req, res, id)
        }
        case 'PUT': {
            return updateChild(req, res, id)
        }
        case 'DELETE': {
            return deleteChild(req, res, id)
        }
        default:
            return res.status(400).json({msg: "This method is not supported"})
    }
}