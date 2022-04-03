import ProductModel from '../models/product.models';
import { IProduct } from '../interfaces/products';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async getProducts(): Promise<IProduct[]> {
    const products = await this.model.getProducts(); 
    return products;
  }

  public createProducts(products: IProduct): Promise<IProduct> {
    return this.model.createProducts(products); 
  }
}

export default ProductService;