import IUser from '../interfaces/IUser';
import connection from '../models/connection';
import UserModel from '../models/userModel';
import generateToken from '../helpers/generateToken';
import IToken from '../interfaces/IToken';

export default class UserService {
  public UserModel: UserModel;

  constructor() {
    this.UserModel = new UserModel(connection);
  }

  public async createUser(user: IUser): Promise<IToken> {
    const { password, ...rest } = user;
    await this.UserModel.createUser(user);
    const token = generateToken(rest);
    return { token };
  }
}