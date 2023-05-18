import { dbConnect } from "@/utils/mongoose";
import { deleteChildren, getChildren, postChildren, updateChildren } from "@/database/controler";
import Child from "@/model/Child";

dbConnect()

export default async function handler(req, res) {
    const { method, body } = req
    
    switch(method) {
        case 'GET': {
            return getChildren(req, res)
        }
        case 'POST': {
            try {
                const newTask = new Child(body)
                const savedTask = await newTask.save()
                return res.status(201).json(savedTask)
            } catch (error) {
                return res.status(500).json({ error: error.message})
            }
        }
        case 'PUT': {
            try {
                const updatedChild = await Child.findByIdAndUpdate(id, body, {
                    new: true
                })
                if(!updateChildren) return res.status(404).json({ msg: "child not selected"})
                return res.status(200).json(updatedChild)
            } catch (error) {
                return res.status(500).json({msg: error.message})
            }
        }
        case 'DELETE': {
            return deleteChildren(req, res)
        }
        default:
            return res.status(400).json({msg: "This method is not supported"})
    }
}
