import Stats from "@/model/Stats"

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
            try {
                if (id) {
                    const child = await Stats.findByIdAndDelete(id)
                    // console.log("child single :", child )
                    return res.status(200).json(child)
                }
        
                return res.status(404).json({ error: "Child not selected..." })
            } catch (error) {
                res.status(400).json({ error: "Error deletind data" })
            }
        }
        default:
            return res.status(400).json({msg: "This method is not supported"})
    }
}