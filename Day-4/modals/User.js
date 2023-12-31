import mongoose from "mongoose"
import { Schema } from "mongoose"

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    number:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
})

export default mongoose.model("User", userSchema)