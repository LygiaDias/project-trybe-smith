import { Pool } from 'mysql2/promise';
import connection from './connection';
import { IOrder } from '../interfaces/orders';
import { IProduct } from '../interfaces/products';

export default class ProductModel {
  public connection : Pool;

  constructor() {
    this.connection = connection;
  }

  public async getOrder(): Promise<IOrder[]> {
    const orderQuery = await this.connection.execute('SELECT * FROM Trybesmith.Orders');
    const [rows] = orderQuery;
    return rows as IOrder[];
  }

  public async getProductById(id: number): Promise<IProduct[]> {
    const productQuery = await this.connection
      .execute('SELECT * FROM Trybesmith.Products WHERE orderId=?', [id]);
    const [rows] = productQuery;
    return rows as IProduct[];
  }
}