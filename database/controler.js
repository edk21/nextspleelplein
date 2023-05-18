/** Controler */

import Child from "@/model/Child"

export async function getChildren(req, res) {
    try {
        const child = await Child.find()

        if (!child) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(child)
    } catch (error) {
        res.status(404).json({ error: "Error while fetching data "})
    }
}

export async function getChild(req, res, id) {
    try {
        if (id) {
            const child = await Child.findById(id)
            return res.status(200).json(child)
        }

        return res.status(404).json({ error: "Child not selected"})

    } catch (error) {
        res.status(404).json({ error: "Error while fetching the single data "})
    }
}


export async function updateChildren(req, res) {
    try {
        const { childId } = req.query
        const formData = req.body

        if(childId && formData) {
            const child = await Child.findByIdAndUpdate(childId, formData)
            res.status(200).json(child)
        }

        res.status(404).json({ error: "Child not selected..." })

    } catch (error) {
        res.status(400).json({ error: "Error Updating data" })
    }
}

export async function updateChild(req, res, id) {
    try {
        const formData = req.body

        if(id && formData) {
            const child = await Child.findByIdAndUpdate(id, formData)
            res.status(200).json(child)
        }

        res.status(404).json({ error: "Child not selected..." })

    } catch (error) {
        res.status(500).json({ error: "Error Updating data" })
    }
}

export async function deleteChildren(req, res) {
    try {
        const { childId } = req.query

        if (childId) {
            const child = await Child.findByIdAndRemove(childId)
            return res.status(200).json(child)
        }

        return res.status(404).json({ error: "Child not selected..." })
    } catch (error) {
        res.status(400).json({ error: "Error deletind data" })
    }
}

export async function deleteChild(req, res, id) {
    try {
        if (id) {
            const child = await Child.findByIdAndDelete(id)
            return res.status(200).json(child)
        }

        return res.status(404).json({ error: "Child not selected..." })
    } catch (error) {
        res.status(400).json({ error: "Error deletind data" })
    }
}