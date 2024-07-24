import mongoose, { Schema } from "mongoose";

const wishListSchema = new mongoose.Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    products:[{
        productId:{
            type:Schema.Types.ObjectId,
            ref:"Product"
        },
        quantity:{
            type:Number,
            default:1
        }
    }]
},{
    versionKey:false
});

const wishListModel = mongoose.model("WishList",wishListSchema);

export default wishListModel;