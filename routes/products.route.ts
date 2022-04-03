import { Router } from 'express';
import ProductsController from '../src/controllers/products.controller';
import validation from '../src/middlewares/validations';

const router = Router();

const productsController = new ProductsController();

router.get('/products', productsController.getProducts);
router.post(
  '/products', 
  validation.nameValidation,
  validation.amountValidation,
  productsController.createProducts,
);

export default router;