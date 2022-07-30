import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';

dotenv.config();

type jwtConfig = {
  expiresIn: string,
  algorithm: string,
};
const segredo = process.env.JWT_SECRET;

export default (payload: IUser) => {
  const jwtConfig: jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, 'segredo', {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};