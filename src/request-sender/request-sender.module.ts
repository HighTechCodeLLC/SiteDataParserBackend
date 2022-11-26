import { Module } from '@nestjs/common';
import { RequestSenderService } from './request-sender.service';

@Module({
  providers: [RequestSenderService],
})
export class RequestSenderModule {}
