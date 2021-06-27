import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getProduct(): string {
    return `Users`;
  }
}
