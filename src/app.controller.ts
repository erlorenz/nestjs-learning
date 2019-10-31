import { Controller, Get, Body, Post, HttpService } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getServerStatus(): string {
    return 'Server is running....';
  }
}
