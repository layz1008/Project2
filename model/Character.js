import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Character = new Schema({
  name: String,
  species: String,
  gender: String,
  status: String,
});

export default mongoose.model("characters", Character);
