import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user';

const tokenConfig = { expiresIn: '7d' };

const SECRET = process.env.JWT_SECRET || 'secret';

export default (payload:IUser) => jwt.sign({ payload }, SECRET, tokenConfig);
