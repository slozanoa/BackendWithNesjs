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
}
