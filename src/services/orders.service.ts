import OrderModel from '../models/order.model';
import { IOrder } from '../interfaces/orders';

class OrderService {
  public model: OrderModel;
  
  constructor() {
    this.model = new OrderModel();
  }

  public async getOrder() {
    const getOrder = await this.model.getOrder(); 
    const createObject = getOrder.map(async (key) => {
      const query = await this.model.getProductById(key.id);
      return { 
        id: key.id,
        userId: key.userId,
        products: query.map((productkey) => productkey.id) } as IOrder; 
    });
    const promiseAll = await Promise.all(createObject);
    return promiseAll;
  }
}
export default OrderService;