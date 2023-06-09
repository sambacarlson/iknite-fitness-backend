import mongoose from "mongoose";

const Schema = mongoose.Schema; //contructor
const exerciseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  rest: {
    type: Number,
    required: true,
    default: 5
  },
  images: {
    type: [String], 
    required: false
  }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
export default Exercise;
