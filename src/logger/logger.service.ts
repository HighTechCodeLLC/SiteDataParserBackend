import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';

@Injectable()
export class LoggerService {
  async log(filename: string, data: string) {
    fs.appendFile(filename, `${Date.now()} - ${data}`);
  }
}
