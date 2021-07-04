/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';

import { ProductsModule } from './../products/products.module';
@Module({
  imports: [ProductsModule],
  controllers: [UsersController, CustomersController],
  providers: [UsersService, CustomersService],
})
export class UsersModule { }
