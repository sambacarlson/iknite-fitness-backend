import Exercise from "../models/exerciseModel";

/** METHODS:
 * exercise_all
 * exercise_create_post
 * exercise_edit_post
 * exercise_delete
 */

/** Get all exercises from database */
const exercise_all = (req, res) => {
  Exercise.find()
    .then(result => res.json(result))
    .catch(err => res.json({message: err.message}));
}

/** Add and execise to the database. ensure all required attributes are available with their right types */
const exercise_create_post = (req, res) => {
  const exercise = new Exercise(req.body);
  exercise.save()
    .then(result => res.status(201)) //TODO: send back appropriate success response
    .catch(err => res.json({message: err.message}));
}

/** Edit an existing exercise on the database with entry */
const exercise_edit_post = (req, res) => {
  const id = req.params.id;
  Exercise.findByIdAndUpdate(id, req.body)
  .then(result => res.status(201)) // TODO: send back appropriate success message
  .catch(err => res.json({message: err.message}));
}

/** Deletes the exercise whose is provided to the req params */
const exercise_delete = (req, res) => {
  const id = req.params.id;
  Exercise.findByIdAndDelete(id)
    .then(result => res.status(200)) //TODO: send back appropriate success response
    .catch(err => res.json({message: err.message}));
}

// Export all methods
export const exerciseController = {exercise_all, exercise_create_post, exercise_edit_post, exercise_delete};
