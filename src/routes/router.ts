import express from 'express';
import ProductController from '../controllers/productController';
import UserController from '../controllers/userController';
import OrderController from '../controllers/orderController';

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

const route = express.Router();

route.post('/products', productController.addProduct);
route.get('/products', productController.listAllProducts);

route.post('/users', userController.createUser);

route.get('/orders', orderController.listAllOrders);

export default route;