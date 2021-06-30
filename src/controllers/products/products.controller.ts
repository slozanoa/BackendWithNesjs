import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express';
import { ProductsService } from './../../services/products.service';
@Controller('products')
export class ProductsController {
  constructor(private productsServices: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsServices.findAll();
  }
  @Get(':productId')
  getOne(@Param('productId') productId: string) {
    // response.status(200).send({
    //   message: `product ${params.productId} `,
    // });
    return this.productsServices.findOne(+productId);
  }
  @Post()
  create(@Body() payload: any) {
    return this.productsServices.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    console.log('id', id);
    return this.productsServices.update(+id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsServices.delete(+id);
  }
}
