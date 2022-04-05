import { Router } from 'express';
import OrderController from '../src/controllers/orders.controller';

const router = Router();

const orderController = new OrderController();

router.get('/orders', orderController.getOrder);

export default router;