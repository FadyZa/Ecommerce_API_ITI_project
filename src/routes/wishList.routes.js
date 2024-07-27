import express from "express";
import {showWishList, addToWishList, removeFromWishList, updateQty } from "../controllers/wishList.controller.js";
import verifyToken from "../../middlewares/verifyToken.js";

const wishListRoute = express.Router();

wishListRoute.use(verifyToken);

wishListRoute.get("/wishList",showWishList);
wishListRoute.post("/wishList/:prodId",addToWishList);
wishListRoute.delete("/wishList/:prodId",removeFromWishList);
wishListRoute.put("/wishList/:prodId",updateQty);


export default wishListRoute;