import { Controller, Get, Post, Query, Param, Body, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit=> ${limit} offset => ${offset} brand=> ${brand}`,
    };
  }
  @Get(':productId')
  getOne(@Param() params: any): string {
    console.log(params);
    return `product ${params.productId} `;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }
}
