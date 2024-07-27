
import userModel from "../../database/models/user.model";
import bcrypt from 'bcrypt'; 


export const checkEmail=async(req,res,next)=>{
    let foundUser=await userModel.findOne({email:req.body.email});
    req.body.password= bcrypt.hashSync(req.body.password,8);
    
    if(foundUser) return res.status(409).json({message:`already sign`})

        next()
}
