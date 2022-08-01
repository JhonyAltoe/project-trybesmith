import connection from '../models/connection';
import OrderModel from '../models/orderModel';

export default class OrderService {
  public OrderModel: OrderModel;

  constructor() {
    this.OrderModel = new OrderModel(connection);
  }

  public async listAllOrders() {
    const orders = await this.OrderModel.listAllOrders();
    return orders;
  }
}