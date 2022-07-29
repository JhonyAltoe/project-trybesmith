import { FieldPacket, Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/IProduct';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async addProduct(product: IProduct) {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [response]: [ResultSetHeader, FieldPacket[]] = await this.connection
      .execute(query, [name, amount]);
    return { id: response.insertId, name, amount };
  }
}
