import { Body, Controller, Post } from '@nestjs/common';
import { ParseDto } from './dto/parse.dto';
import { ParserGatewayService } from './parser-gateway.service';

@Controller('parser-gateway')
export class ParserGatewayController {
  constructor(private readonly parserGatewayService: ParserGatewayService) {}

  @Post('parse')
  async parse(@Body() params: ParseDto) {
    return this.parserGatewayService.parse(params);
  }
}
