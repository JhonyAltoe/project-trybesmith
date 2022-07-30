import IUser from '../interfaces/IUser';
import connection from '../models/connection';
import UserModel from '../models/userModel';

export default class UserService {
  public UserModel: UserModel;

  constructor() {
    this.UserModel = new UserModel(connection);
  }

  public async createUser(user: IUser) {
    await this.UserModel.createUser(user);
  }
}