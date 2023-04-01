import Category from "../models/categoryModel";

/** METHODS:
 * category_all
 * category_create_post
 * category_edit_post
 * category_delete
 */

/** Get all Categories from db */
const category_all = (req, res) => {
  Category.find()
    .then(result => res.json(result))
    .catch(err => res.json({message: err.message}))
}

/** Add a Category to db */
const category_create_post = (req, res) => {
  const category = new Category(req.body)
  category.save()
    .then(result => res.status(201)) //TODO: send back appropriate success message
    .catch(err => res.json({message: err.message}));
}

/** Edit category of given id */
const category_edit_post = (req, res) => {
  const id = req.params.id;
  Category.findByIdAndUpdate(id, req.body)
    .then(result => res.status(200)) //TODO: send back the appropriate success message
    .catch(err => res.json({message: err.message}));
}

/** delete a particular id */
const category_delete = (req, res) => {
  const id = req.params.id;
  Category.findByIdAndDelete(id)
    .then(result => res.status(200)) //TODO: send back response message
    .catch(err => res.json({message: err.message}))
}

//exports 
export const categoryController = {category_all, category_create_post, category_edit_post, category_delete};
