import Stats from "@/model/Stats"
import Child from "@/model/Child"

dbConnect()

export default async function handler(req, res) {
    const  { method, body, query: {id} } = req

    switch(method) {
        case 'GET': {
            try {
                if (id) {
                    const child = await Stats.findById(id)
                    return res.status(200).json(child)
                }
        
                return res.status(404).json({ error: "Child not selected"})
        
            } catch (error) {
                res.status(404).json({ error: "Error while fetching the single data "})
            }
        }
        case 'PUT': {
            try {
                const formData = req.body
        
                if(id && formData) {
                    const child = await Stats.findByIdAndUpdate(id, formData)
                    res.status(200).json(child)
                }
        
                res.status(404).json({ error: "Child not selected..." })
        
            } catch (error) {
                res.status(500).json({ error: "Error Updating data" })
            }
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