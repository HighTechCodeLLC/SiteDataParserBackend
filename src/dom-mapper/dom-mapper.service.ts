import { Injectable } from '@nestjs/common';
import { HTMLElement, parse } from 'node-html-parser';

@Injectable()
export class DomMapperService {
  async mapRawHtmlToDom(rawHtml: string) {
    return parse(rawHtml);
  }

  async getElementsBySelector(dom: HTMLElement, params: any) {
    const rows = dom.querySelectorAll(params.rowSelector);

    params.skipRows ? rows.shift() : rows;

    return rows.map((item) => {
      const splitedSizeStr = item
        .querySelector(params.sizeSelector)
        .textContent.trim()
        .split(' ');
      splitedSizeStr[1] =
        splitedSizeStr[1][0].toUpperCase() === 'G' ? 'GB' : 'MB';

      return {
        name: item.querySelector(params.nameSelector).textContent.trim(),
        link: `${params.baseUrl}${
          item.querySelector(params.linkSelector).attributes['href']
        }`,
        seeds: Number(
          item.querySelector(params.seedsSelector).textContent.trim(),
        ),
        leeches: Number(
          item.querySelector(params.leechesSelector).textContent.trim(),
        ),
        date: item.querySelector(params.dateSelector).textContent.trim(),
        size: splitedSizeStr.join(' '),
        magnet: item.querySelector(params.magnetSelector).attributes['href'],
      };
    });
  }
}
