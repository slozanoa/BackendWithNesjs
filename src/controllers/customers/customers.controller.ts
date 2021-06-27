import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getProduct(): string {
    return `customers`;
  }
}
