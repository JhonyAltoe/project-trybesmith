import { Pool } from 'mysql2/promise';
import IUser from '../interfaces/IUser';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public createUser = async (user: IUser): Promise<boolean> => {
    const { username, classe, level, password } = user;
    const query = `
      INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)`;
    const [row] = await this.connection.execute(query, [username, classe, level, password]);
    return !!row;
  };
}