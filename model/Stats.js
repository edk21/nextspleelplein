import { Schema, models, model } from "mongoose"

const statsSchema = new Schema({
    name: String,
    surname: String,
    balance: Number,
    social: String,
    date: String,
    totalAmount: Number,
}, {
    timestamps: true,
    versionKey: false
})
export default models.Stats || model("Stats", statsSchema)