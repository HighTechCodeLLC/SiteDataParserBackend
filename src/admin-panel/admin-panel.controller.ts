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
import { AddWebsiteDto } from './dto/add-website.dto';
import { EditWebsiteDto } from './dto/edit-website.dto';

@Controller('admin-panel')
export class AdminPanelController {
  constructor(private readonly adminPanelService: AdminPanelService) {}

  @Get('login')
  async login() {
    return this.adminPanelService.login();
  }

  @Get('getWebsites')
  async getWebsites() {
    return this.adminPanelService.getWebsites();
  }

  @Post('addWebsite')
  async addWebsite(@Body() data: AddWebsiteDto) {
    return this.adminPanelService.addWebsite(data);
  }

  @Put('editWebsite/:id')
  async editWebsite(@Param('id') id: string, @Body() data: EditWebsiteDto) {
    return this.adminPanelService.editWebsite({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete('deleteWebsite/:id')
  async deleteWebsite(@Param('id') id: string) {
    return this.adminPanelService.deleteWebsite({ id: Number(id) });
  }
}
