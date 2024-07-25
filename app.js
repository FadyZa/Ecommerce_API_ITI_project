import express from "express";
import dbConnection from "./DB/connection.js";
import wishListRoute from "./src/routes/wishList.route.js";

const app = express();

app.use(express.json());
dbConnection;

app.use(wishListRoute);


//! Mahmoud Amer (start)
import productRoutes from './src/routes/products.routes.js';
import { ERROR } from './utility/sendResText.js';

app.use(productRoutes)


// Global middleware handler (url)
app.all('*',(req,res,next) => {
    res.json({Status:ERROR , message: 'This resourse not found.'});
    next()
})


// Global middleware Error handler (without try catch)
app.use((error,req,res,next) => {
    res.status(500).json({Status:ERROR , message: error.message});
    next()
})
//! Mahmoud Amer (end)




app.listen(3000,()=>{
    console.log("App is running")
})