import { Controller, Get, Body, Post, HttpService } from '@nestjs/common';
import twilio from 'twilio';
import Axios from 'axios';


const client = twilio();

@Controller()
export class AppController {
  constructor(private readonly httpService: HttpService) { }

  @Get()
  getHello(): string {
    return 'Server is running....';
  }

  @Post()
  sendText(@Body() body: any): void {
    client.messages.create({
      body: 'Your ManaMed order TEST SHIPMENT has been shipped under tracking number 1Z6W9Y560397844107. Please email orders@manamed.net with any questions.',
      to: '+4802418725',
      from: '+17255021369',
    }).then((message) => console.log(message))

    console.log(body);
  }

}
