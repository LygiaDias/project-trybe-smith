import express from 'express';
import ProductsRoutes from '../routes/products.route';
import UserRoutes from '../routes/user.route';

const app = express();

app.use(express.json());
app.use(ProductsRoutes);
app.use(UserRoutes);
export default app;
