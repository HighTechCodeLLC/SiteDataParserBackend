import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AdminPanelController } from './admin-panel.controller';
import { AdminPanelService } from './admin-panel.service';

@Module({
  controllers: [AdminPanelController],
  providers: [AdminPanelService, PrismaService],
})
export class AdminPanelModule {}
