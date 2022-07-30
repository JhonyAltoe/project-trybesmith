import express from 'express';
import ProductController from '../controllers/productController';
import UserController from '../controllers/userController';

const productController = new ProductController();
const userController = new UserController();

const route = express.Router();

route.post('/products', productController.addProduct);
route.get('/products', productController.listAllProducts);

route.post('/users', userController.createUser);

export default route;