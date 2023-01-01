import { Injectable } from '@nestjs/common';
import { ParseDto } from './dto/parse.dto';
import { PrismaService } from 'src/database/prisma.service';
import { ParserService } from './parser/parser.service';
import { Website } from '@prisma/client';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class ParserGatewayService {
  constructor(
    private parserService: ParserService,
    private loggerService: LoggerService,
    private prisma: PrismaService,
  ) {}

  async parse(params: ParseDto) {
    const websites: Website[] = await this.prisma.website.findMany();

    const parseRequests = [];
    for await (const website of websites) {
      parseRequests.push(this.parserService.parse({ ...website, ...params }));
    }

    const responses = await Promise.allSettled(parseRequests);

    const result = [];

    for (const response of responses) {
      if (response.status === 'fulfilled') {
        result.push(...response.value);
      } else {
        this.loggerService.log('errors.txt', `${response.reason.toString()}\n`);
      }
    }

    return result.sort((a, b) => b.seeds - a.seeds);
  }
}
