import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): string {
    return `products: limit=> ${limit} offset => ${offset} brand=> ${brand}`;
  }
  @Get(':productId')
  getProduct(@Param() params: any): string {
    console.log(params);
    return `product ${params.productId} `;
  }
}
