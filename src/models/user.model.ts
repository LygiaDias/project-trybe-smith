import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IUser } from '../interfaces/user';

export default class ProductModel {
  public connection : Pool;

  constructor() {
    this.connection = connection;
  }

  public async createUser(users: IUser): Promise<IUser> {
    const { username, classe, level, password } = users;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    
    return users;
  }
}