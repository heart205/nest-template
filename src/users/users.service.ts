import { Injectable } from '@nestjs/common';

import type { Users } from './interfaces/users';

@Injectable()
export class UserService {
  getProvinces() {
    const user: Users.User = {
      name: 'John',
      email: 'email',
      id: 1,
    };
    return user;
  }
}
