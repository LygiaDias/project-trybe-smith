import { Router } from 'express';
import UserController from '../src/controllers/user.controller';
import validation from '../src/middlewares/validations';

const router = Router();

const userController = new UserController();

router.post(
  '/users', 
  validation.usernameValidation,
  validation.classValidation,
  validation.levelValidation,
  validation.passwordValidation,
  userController.createUser,
);

export default router;