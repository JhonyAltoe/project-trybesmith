import express from 'express';
import ProductController from '../controllers/productController';

const productController = new ProductController();

const route = express.Router();

route.post('/products', productController.addProduct);
route.get('/products', productController.listAllProducts);

export default route;