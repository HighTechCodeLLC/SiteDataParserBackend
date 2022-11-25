import { Body, Controller, Post } from '@nestjs/common';
import { ParserGatewayService } from './parser-gateway.service';

@Controller('parser-gateway')
export class ParserGatewayController {
  constructor(private readonly parserGatewayService: ParserGatewayService) {}

  @Post('parse')
  async parse(@Body() params: { url: string }) {
    return this.parserGatewayService.parse(params.url);
  }
}
