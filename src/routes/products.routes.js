import express from 'express';
import { createProduct , getAllProducts , updateProduct , deleteProduct , getSingleProduct } from '../controllers/products.controller.js';

const productRoutes = express.Router();


productRoutes.post('/api/product',createProduct);

productRoutes.get('/api/product',getAllProducts);

productRoutes.get('/api/product/:productID',getSingleProduct);

productRoutes.put('/api/product/:productID',updateProduct);

productRoutes.delete('/api/product/:productID',deleteProduct);






export default productRoutes;