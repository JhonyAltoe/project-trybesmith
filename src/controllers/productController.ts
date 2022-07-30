import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public addProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const result = await this.productService.addProduct(product);
    res.status(201).json(result);
  };

  public listAllProducts = async (req: Request, res: Response) => {
    const result = await this.productService.listAllProducts();
    res.status(200).json(result);
  };
}