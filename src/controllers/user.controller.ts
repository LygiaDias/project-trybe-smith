import { Request, Response } from 'express';
import getToken from '../helpers/token';

import UserService from '../services/user.service';

class UserController {
  constructor(public userService = new UserService()) { }
  
  public createUser = async (req: Request, res: Response) => {
    const userBody = req.body;
    const createUser = await this.userService.createUser(userBody);
    const picToken = getToken(createUser);
    res.status(201).json({ token: picToken });
  };
}

export default UserController;