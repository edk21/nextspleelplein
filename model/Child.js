import { Schema, models, model } from "mongoose"

const childSchema = new Schema({
    name: String,
    surname: String,
    dateOfBirth: String,
    school: String,
    level: Number,
    street: String,
    postalCode: Number,
    city: String,
    contact1: String,
    tel1: String,
    contact2: String,
    tel2: String,
    parentSSN: String,
    parentDOB: String,
    childSSN: String,
    email: String,
    allergies: String,
    medicals: String,
    parentRemarks: String,
    teamRemarks: String,
    week1: String,
    week2: String,
    week3: String,
    week4: String,
    presence: String,
    balance: Number,
    social: String,
    totalAmount: Number
}, {
    timestamps: true,
    versionKey: false
})
export default models.Child || model("Child", childSchema)