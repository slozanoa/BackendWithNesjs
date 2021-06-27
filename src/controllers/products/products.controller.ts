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

import { response, Response } from 'express';
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
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Res() response: Response, @Param() params: any) {
    response.status(200).send({
      message: `product ${params.productId} `,
    });
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
  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
