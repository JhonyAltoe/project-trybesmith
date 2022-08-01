import { RowDataPacket } from 'mysql2/promise';

export default interface IOrder extends RowDataPacket {
  id: number;
  userId: number;
  productsIds: number;
}