import { Module } from '@nestjs/common';
import { ParserGatewayController } from './parser-gateway.controller';
import { ParserGatewayService } from './parser-gateway.service';

@Module({
  controllers: [ParserGatewayController],
  providers: [ParserGatewayService]
})
export class ParserGatewayModule {}
