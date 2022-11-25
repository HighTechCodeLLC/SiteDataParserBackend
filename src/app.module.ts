import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { ParserGatewayModule } from './parser-gateway/parser-gateway.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AdminPanelModule,
    ParserGatewayModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
