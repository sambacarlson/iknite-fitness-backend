import express from "express";
import { category_all, category_create_post, category_delete, category_edit_post } from "../controllers/categoryController";

const router = express.Router();

router.get('/', category_all);
router.post('/', category_create_post);

//routes with cutom parts should always be placed at the bottom
router.patch('/:id', category_edit_post);
router.delete('/:id', category_delete);

//export
export default router;
