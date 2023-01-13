import mongoose from "mongoose"

const Schema = mongoose.Schema

let Character = new Schema({
    "name": String,
    "species": String,
    "gender": String,
    "age": Number,
   
})

export default mongoose.model("characters", Character)