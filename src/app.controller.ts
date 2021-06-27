import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'santiago lozano';
  }

  @Get('nuevo')
  newEndpoint(): string {
    return 'nuevo santiago lozano';
  }
  @Get('/ruta/')
  hello(): string {
    return 'con /sas/';
  }
  @Get('/products/:productId')
  getProduct(@Param('productId') productId: any): string {
    return `product ${productId} `;
  }
  @Get('/categories/:id/products/:productId')
  getCategory(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ): string {
    return `product ${productId} and ${id} `;
  }
}
