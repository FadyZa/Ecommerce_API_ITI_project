import wishListModel from "../../DB/models/wishList.model.js";
import userModel from "../db/models/user.model.js";


const showWishList = async (req,res)=>{
    let userWishList = await wishListModel.findOne({userId:req.userInfo.id});

    if(!userWishList){
        return res.json({message:"the cart is empty"});
    }

    res.json(userWishList);
}

const addToWishList = async (req,res)=>{
    const user = req.userInfo;
    let userWishList = await wishListModel.findOne({userId:user.id});

    // check if the cart is empty make first model with user Id
    if(!userWishList){
        userWishList = new wishListModel({
            userId:user.id,
            products:[{productId:req.params.prodId,quantity:req.body.quantity}]
        });
        await userWishList.save();

        // link cart id with user
        let userInDb = await userModel.findOneAndUpdate({_id:user.id},{wishList:userWishList},{new:true});
        return res.json({messge:"this is my first time add to cart, cart created!",userInDb})
    }

    // check if user already have this product
    const hasThisProduct = userWishList.products.find((prod)=>prod.productId == req.params.prodId);
    if(hasThisProduct){
        hasThisProduct.quantity++;  // just inc the quantity
    }else{
        userWishList.products.push({productId:req.params.prodId,quantity:req.body.quantity}); // push it as new product
    }
    
    await userWishList.save();
    res.json({userWishList});
}

const removeFromWishList = async (req,res)=>{
    let wishList = await wishListModel.findOne({userId:req.userInfo.id})
    wishList.products = wishList.products.filter((prod)=> prod.productId != req.params.prodId);
    
    await wishList.save();
    res.json(wishList);
}

const updateQty = async (req,res)=>{
    let wihsList = await wishListModel.findOne({userId:req.userInfo.id});
    let product = wihsList.products.find((prod)=> prod.productId == req.params.prodId);
    product.quantity = req.body.quantity;

    await wihsList.save();
    res.json(product);
}


export {showWishList,addToWishList,removeFromWishList,updateQty};