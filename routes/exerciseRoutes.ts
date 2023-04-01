import express from "express";
import { exerciseController } from "../controllers/exerciseController";

const router = express.Router();

router.get('/', exerciseController.exercise_all );
router.post('/', exerciseController.exercise_create_post);

//routes with cutom parts should always be placed at the bottom
router.put('/:id', exerciseController.exercise_edit_post);
router.delete('/:id', exerciseController.exercise_delete);

//export
export default router;
