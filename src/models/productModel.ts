import { FieldPacket, Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/IProduct';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async addProduct(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [result]: [ResultSetHeader, FieldPacket[]] = await this.connection
      .execute(query, [name, amount]);
    return { id: result.insertId, name, amount } as IProduct;
  }

  public async listAllProducts(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [rows] = await this.connection
      .execute(query);
    return rows as IProduct[];
  }
}
