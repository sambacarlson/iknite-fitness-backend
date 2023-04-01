import express from "express";
import { categoryController } from "../controllers/categoryController";

const router = express.Router();

router.get('/', categoryController.category_all);
router.post('/', categoryController.category_create_post);

//routes with cutom parts should always be placed at the bottom
router.put('/:id', categoryController.category_edit_post);
router.delete('/:id', categoryController.category_delete);

//export
export default router;
