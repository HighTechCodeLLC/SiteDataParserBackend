import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { PrismaService } from './database/prisma.service';
import { ParserGatewayModule } from './parser-gateway/parser-gateway.module';
import { RequestSenderModule } from './request-sender/request-sender.module';
import { DomMapperModule } from './dom-mapper/dom-mapper.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AdminPanelModule,
    ParserGatewayModule,
    RequestSenderModule,
    DomMapperModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
