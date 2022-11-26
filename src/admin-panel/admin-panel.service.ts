import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Website, Prisma } from '@prisma/client';

@Injectable()
export class AdminPanelService {
  constructor(private prisma: PrismaService) {}

  async login() {
    return 'logged in';
  }

  async getWebsites(): Promise<Website[]> {
    return this.prisma.website.findMany();
  }

  async addWebsite(data: Prisma.WebsiteCreateInput): Promise<Website> {
    return this.prisma.website.create({ data });
  }

  async editWebsite(params: {
    where: Prisma.WebsiteWhereUniqueInput;
    data: Prisma.WebsiteUpdateInput;
  }): Promise<Website> {
    const { data, where } = params;
    return this.prisma.website.update({ data, where });
  }

  async deleteWebsite(where: Prisma.WebsiteWhereUniqueInput): Promise<Website> {
    return this.prisma.website.delete({ where });
  }
}
