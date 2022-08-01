import jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';

export default (payload: IUser): string => {
  const token = jwt.sign(payload, 'secret', { expiresIn: '7d', algorithm: 'HS256' });
  return token;
};