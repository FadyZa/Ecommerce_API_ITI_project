import productModel from "../../DB/models/product.model.js";
import {SUCCESS ,FAIL ,ERROR} from '../../utility/sendResText.js';
import asyncWrapper from "../../middlewares/asyncWrapper.js";

const createProduct = asyncWrapper(async(req,res) => {
    const newProduct = req.body;
    await productModel.insertMany(newProduct);
    res.status(200).json({status:SUCCESS , data: {newProduct}});

})


const getAllProducts = async(req,res) => {
    const prodcts = await productModel.find();
    res.status(200).json({status:SUCCESS , data: {prodcts}});
}

const getSingleProduct = asyncWrapper(async(req,res) => {
    const productID = req.params.productID;
    const product = await productModel.findOne({_id:productID});
    if (!product) {
        return res.status(404).json({status:FAIL , message: 'Product not found'});
    }
    res.status(200).json({status:SUCCESS , data: {product}});

})


const updateProduct = asyncWrapper(async(req,res) => {
    const productID = req.params.productID;
    let product = await productModel.findByIdAndUpdate({_id:productID},{$set:{...req.body}},{new:true});
    res.status(200).json({status:SUCCESS , data: {product}});
})

const deleteProduct = asyncWrapper(async(req,res) => {
    const productID = req.params.productID;
    let product = await productModel.deleteOne({_id:productID});
    res.status(200).json({status:SUCCESS , data: null});
})



export {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}