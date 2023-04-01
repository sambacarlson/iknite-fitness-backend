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
  }
});

const Category = mongoose.model('Category', categorySchema)
export default Category;
