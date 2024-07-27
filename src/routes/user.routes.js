
import express from 'express';
import { signIn, signUp, verifyAccount } from '../controllers/user.controllers.js';
import { checkEmail } from '../../middlewares/checkEmail.js';


const userRoutes = express.Router();


userRoutes.post("/signUp",checkEmail,signUp);
userRoutes.post("/signIn",signIn);
userRoutes.get("/verify",verifyAccount);



export default userRoutes;