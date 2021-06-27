import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

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
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): string {
    return `products: limit=> ${limit} offset => ${offset} brand=> ${brand}`;
  }
  @Get('/products/:productId')
  getProduct(@Param() params: any): string {
    console.log(params);
    return `product ${params.productId} `;
  }
  @Get('/categories/:id/products/:productId')
  getCategory(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ): string {
    return `product ${productId} and ${id} `;
  }
}
