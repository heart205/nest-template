import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getProvinces() {
    return this.appService.getProvinces();
  }
}
