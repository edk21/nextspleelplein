import { dbConnect } from "@/utils/mongoose";
import Stats from "@/model/Stats";

dbConnect()

export default async function handler(req, res) {
    const { method, body } = req
    
    switch(method) {
        case 'GET': {
            try {
                const child = await Stats.find()
                // console.log("child: ", child)
        
                if (!child) return res.status(404).json({ error: "Data not found" })
                res.status(200).json(child)
            } catch (error) {
                res.status(404).json({ error: "Error while fetching data "})
            }
        }
        case 'POST': {
            try {
                const newTask = new Stats(body)
                const savedTask = await newTask.save()
                return res.status(201).json(savedTask)
            } catch (error) {
                return res.status(500).json({ error: error.message})
            }
        }
        case 'DELETE': {
            try {        
                const child = await Stats.deleteMany({})
                console.log("child many :", child )
                return res.status(200).json(child)
        
            } catch (error) {
                res.status(400).json({ error: "Error deleting data" })
            }
        }
        default:
            return res.status(400).json({msg: "This method is not supported"})
    }
}
