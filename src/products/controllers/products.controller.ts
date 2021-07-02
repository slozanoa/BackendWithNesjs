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
  // ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { ProductsService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
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
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    // response.status(200).send({
    //   message: `product ${params.productId} `,
    // });
    return this.productsServices.findOne(+productId);
  }
  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsServices.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    console.log('id', id);
    return this.productsServices.update(+id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsServices.delete(+id);
  }
}
