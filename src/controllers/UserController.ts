import { Request, Response } from 'express';
import UserModel from '../models/UserModel';

class UserController {
  async getAll(req: Request, res: Response) {
    try {
      const users = await UserModel.getAll();
      res.send(users);
    } catch (error) {
      res.status(500).send('Error');
    }
  }
}

export default new UserController();
