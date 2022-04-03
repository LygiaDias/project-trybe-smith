import UserModel from '../models/user.model';
import { IUser } from '../interfaces/user';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public createUser(user: IUser): Promise<IUser> {
    return this.model.createUser(user); 
  }
}

export default UserService;