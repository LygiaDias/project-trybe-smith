import { Request, Response } from 'express';

import ProductsService from '../services/products.service';

class ProductsController {
  constructor(public productService = new ProductsService()) { }

  public getProducts = async (_req: Request, res: Response) => {
    const product = await this.productService.getProducts();
    res.status(200).json(product);
  };

  public createProducts = async (req: Request, res: Response) => {
    const productBody = req.body;

    const createProduct = await this.productService.createProducts(productBody);
    res.status(201).json({ item: createProduct });
  };
}

export default ProductsController;