import { Body, Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get('hello/:id/:name')
  getHello(@Req() req: Request, @Body() Body, @Param() param): string {
    // console.log(req);
    // console.log(param);
    // return 'hello world';
    return this.appService.getHello(Body, param);
  }
}
