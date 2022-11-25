import { Injectable } from '@nestjs/common';
import { request } from 'undici';
import { parse } from 'node-html-parser';

@Injectable()
export class ParserGatewayService {
  async parse(url: string) {
    const { body } = await request(url);
    const rawBody = await body.text();

    const dom = parse(rawBody);
    dom.querySelectorAll('a').map((item) => {
      console.log(item.textContent);
      console.log(item.attributes['href']);
    });

    return '';
  }
}
