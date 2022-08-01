import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  private OrderService = new OrderService();

  public listAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.OrderService.listAllOrders();
    res.status(200).json(orders);
  };
}