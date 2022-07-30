import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  private UserService = new UserService();

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.UserService.createUser(user);
    res.status(201).json(token);
  };
}