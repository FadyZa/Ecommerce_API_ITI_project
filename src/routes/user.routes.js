
import express from 'express';
import { signIn, signUp, verifyAccount } from './user.controller.js';
import { checkEmail } from '../../middelWare/checkEmail.js';


const userRoutes=express.Router();


userRoutes.post("/signUp",checkEmail,signUp);
userRoutes.post("/signIn",signIn);
userRoutes.get("/verify",verifyAccount);





export default userRoutes;