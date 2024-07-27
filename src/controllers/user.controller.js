import userModel from '../../../database/models/user.model.js';
import bcrypt, { hashSync } from 'bcrypt';
import sendOurEmail from '../../util/sendEmail.js';
import jwt from 'jsonwebtoken';



// ? sign up
const signUp= async(req,res)=>{

    await userModel.insertMany(req.body);
    sendOurEmail(req.body.email);
    res.json({message:"add"})
}

// ? sign in
const signIn= async(req,res)=>{

    let foundUser=await userModel.findOne({email:req.body.email});

    if(foundUser) {
        let matching=bcrypt.compareSync(req.body.password,foundUser.password);
        if(matching){



            let token=jwt.sign({id:foundUser._id,role:foundUser.role},'goat',{expiresIn:'48h'})
            res.status(200).json({message:"welcome",token})
        }
        else{
            res.status(422).json({message:"wrong password"})
        }

    }
    else{
        res.status(404).json({message:`you should register only`});
    }
if(foundUser.isConfirmed==false)
    return res.status(401).json({message:"confirm your mail only!!! "})
}
const verifyAccount=async(req,res)=>{

    let updatedUser= await userModel.findOneAndUpdate({email:req.params.email},{isConfirmed:true},{new:true})
    res.json({message:"welcome",updatedUser})
}

// const deleteAccount=async(req,res)=>{

//     let deletedUser= await userModel.deleteOne({_id:req.params.id},{new:true})
//     res.json({message:"deleted success",})
// }

export{
    signUp,
    signIn,
    verifyAccount,
    // deleteAccount
} 