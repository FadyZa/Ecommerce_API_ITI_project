import express from "express";
import dbConnection from "./DB/connection.js";
import wishListRoute from "./src/routes/wishList.route.js";

const app = express();

app.use(express.json());
dbConnection;

app.use(wishListRoute);

app.listen(3000,()=>{
    console.log("App is running")
})