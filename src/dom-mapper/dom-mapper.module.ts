import { Module } from '@nestjs/common';
import { DomMapperService } from './dom-mapper.service';

@Module({
  providers: [DomMapperService],
})
export class DomMapperModule {}
