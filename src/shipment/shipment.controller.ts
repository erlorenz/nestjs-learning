import { Controller, Post } from '@nestjs/common';

@Controller('shipment')
export class ShipmentController {

    @Post()
    receiveWebhook() {
        console.log('API HIT');
    }
}
