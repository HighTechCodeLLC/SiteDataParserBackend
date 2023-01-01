import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AdminPanelService } from './admin-panel.service';
import { WebsiteDataDto } from './dto/website-data.dto';

@Controller('admin-panel')
export class AdminPanelController {
  constructor(private readonly adminPanelService: AdminPanelService) {}

  @Get('updateDb')
  async updateDb() {
    const client = await this.adminPanelService.login();
    const siteDataArray: WebsiteDataDto[] =
      await this.adminPanelService.listData(client);
    return await this.adminPanelService.updateDb(siteDataArray);
  }
}
