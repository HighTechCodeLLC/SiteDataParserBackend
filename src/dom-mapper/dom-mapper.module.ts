import { Module } from '@nestjs/common';
import { UtilsService } from 'src/utils/utils.service';
import { DomMapperService } from './dom-mapper.service';

@Module({
  providers: [DomMapperService, UtilsService],
})
export class DomMapperModule {}
