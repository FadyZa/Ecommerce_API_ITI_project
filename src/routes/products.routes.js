import express from 'express';
import { createProduct , getAllProducts , updateProduct , deleteProduct , getSingleProduct } from '../controllers/products.controller.js';
import verifyToken from '../../middlewares/verifyToken.js';
import isAllow from '../../middlewares/isAllow.js';

const productRoutes = express.Router();

productRoutes.use(verifyToken);

productRoutes.post('/product',isAllow("admin"),createProduct);

productRoutes.get('/product',isAllow("admin","user"),getAllProducts);

productRoutes.get('/product/:productID',isAllow("admin","user"),getSingleProduct);

productRoutes.put('/product/:productID',isAllow("admin"),updateProduct);

productRoutes.delete('/product/:productID',isAllow("admin"),deleteProduct);






export default productRoutes;