import { Router } from "express";
import { addCategory, deleteCategory, getCategories } from "../controller/category.controller.js";

const router = Router();

router.route('/add-category').post(addCategory); 
router.route('/:id').delete(deleteCategory);
router.route('/').get(getCategories);

export default router;