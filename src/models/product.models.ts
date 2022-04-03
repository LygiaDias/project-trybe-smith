import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IProduct } from '../interfaces/products';

export default class ProductModel {
  public connection : Pool;

  constructor() {
    this.connection = connection;
  }

  public async getProducts(): Promise<IProduct[]> {
    const productQuery = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    const [rows] = productQuery;
    return rows as IProduct[];
  }
  
  public async createProducts(products: IProduct): Promise<IProduct> {
    const { name, amount } = products;
    const productQuery = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = productQuery;
    const { insertId } = dataInserted;
    return { id: insertId, ...products };
  }
}