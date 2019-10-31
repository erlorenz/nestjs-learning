import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ShipmentModule } from './shipment/shipment.module';
import { TwilioModule } from './twilio/twilio.module';

@Module({
  imports: [ShipmentModule, TwilioModule, HttpModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
