import { UserInfo } from '../types';
import users from './../data/users.json';

class UserModal {
  async getAll(): Promise<UserInfo[]> {
    return new Promise((resolve) => {
      resolve(users);
    });
  }
}

export default new UserModal();
