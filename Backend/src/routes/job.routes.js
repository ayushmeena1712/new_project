import { Router } from "express";
import { createBlog, deleteBlog, updateBlog, getUserBlogs, getAllBlogs, getBlog } from "../controller/blog.controller.js"; 
import {verifyJWT} from "../middleware/auth.middleware.js"

const router = Router();

router.route('/').post(getAllBlogs);
router.route('/new-job').post(verifyJWT, upload.single('blogImage'), createBlog);
router.route('/:job').put(verifyJWT, updateBlog);
router.route('/:job').delete(verifyJWT, deleteBlog);
router.route('/:job').get(getBlog);
// router.route('/userProfile').post(verifyJWT, getUserBlogs);

export default router;