import mongoose from "mongoose";

const Schema = mongoose.Schema; //constructor
const categorySchema = new Schema({
  title: {
    type: String,
    required : true
  },
  description: {
    type: String,
    required : true
  },
  image: {
  type: String,
  required : true
  },
  exercises: {
    type: Array, //TODO: Change to list of exercise IDs
    required: false 
  },
});

const Category = mongoose.model('Category', categorySchema)
export default Category;
