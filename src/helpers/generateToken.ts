import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';

dotenv.config();

export default (payload: IUser): string => {
  const secret = process.env.JWT_SECRET as string;

  const token = jwt.sign(payload, secret, { expiresIn: '7d', algorithm: 'HS256' });
  return token;
};