import { Router } from 'express';
import { login, register, logout, verify, forgotPassword, verifyForgotPassword, refreshAuthToken, verifyPhoneNo } from '../controller/user.controller.js';
import { upload } from '../middleware/multer.middleware.js';

const router = Router();

router.route('/register').post(upload.single('userImage'), register);
router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/verify-email/:userId').post(verifyOtp);
router.route('/verify-phone_no/:userId').post(verifyOtp);
router.route('/forgot-password').post(forgotPassword);
router.route('/verify-forgot-password/:secret').post(verifyForgotPassword);
router.post('/refresh-token', refreshAuthToken); 

export default router;