import express from "express";
import { exercise_all, exercise_create_post, exercise_edit_post, exercise_delete } from "../controllers/exerciseController";

const router = express.Router();

router.get('/', exercise_all );
router.post('/', exercise_create_post);

//routes with cutom parts should always be placed at the bottom
router.delete('/:id', exercise_delete);
router.patch('/:id', exercise_edit_post);

//export
export default router;
