import mongoose from 'mongoose';

//! Gmail
//! noteappiti@gmail.com
//! pass=> Test@1234

// 1- create schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    isConfirmed:{
        type:Boolean,
        default:false
    },
    OTPCode:String,
    OPTExpire:Date
},{
    versionKey:false,
    timestamps:true,
});

// 2- create model
const userModel= mongoose.model("User",userSchema);

export default userModel;