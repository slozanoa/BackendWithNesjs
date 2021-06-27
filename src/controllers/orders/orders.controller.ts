import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getProduct(): string {
    return `Orders`;
  }
}
