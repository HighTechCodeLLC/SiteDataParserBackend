import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminPanelService {
  async login() {
    return 'logged in';
  }
}
