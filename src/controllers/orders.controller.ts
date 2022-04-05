import { Request, Response } from 'express';

import OrderService from '../services/orders.service';

class OrdersController {
  constructor(public orderService = new OrderService()) { }

  public getOrder = async (_req: Request, res: Response) => {
    const order = await this.orderService.getOrder();
    res.status(200).json(order);
  };
}

export default OrdersController;