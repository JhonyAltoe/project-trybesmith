import { Pool, RowDataPacket } from 'mysql2/promise';
import Refactor from '../helpers/ordersRefactor';
import IOrderArr from '../interfaces/IOrderArr';
import IOrder from '../interfaces/IOrders';

const refactor = new Refactor();

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async listAllOrders(): Promise<IOrderArr[]> {
    // const query2 = `
    // SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds FROM Trybesmith.Orders AS O
    // INNER JOIN Trybesmith.Products AS P
    // ON O.id = P.orderId
    // WHERE P.orderId IS NOT null
    // GROUP BY O.id`;
    
    const query = `
      SELECT O.id, O.userId, P.id AS productsIds FROM Trybesmith.Orders AS O
      INNER JOIN Trybesmith.Products AS P
      ON O.id = P.orderId
      WHERE P.orderId IS NOT null
      ORDER BY O.id`;
    
    const [orders] = await this
      .connection.query<RowDataPacket[]>(query);
    const newOrders = refactor.order(orders as IOrder[]);
    return newOrders as IOrderArr[];
  }
}
