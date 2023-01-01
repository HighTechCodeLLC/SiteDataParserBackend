import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DomMapperService } from 'src/dom-mapper/dom-mapper.service';
import { LoggerService } from 'src/logger/logger.service';
import { RequestSenderService } from 'src/request-sender/request-sender.service';
import { UtilsService } from 'src/utils/utils.service';
import { ParserGatewayController } from './parser-gateway.controller';
import { ParserGatewayService } from './parser-gateway.service';
import { ParserService } from './parser/parser.service';

@Module({
  controllers: [ParserGatewayController],
  providers: [
    ParserGatewayService,
    PrismaService,
    RequestSenderService,
    DomMapperService,
    ParserService,
    UtilsService,
    LoggerService,
  ],
})
export class ParserGatewayModule {}
