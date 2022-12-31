import { Injectable } from '@nestjs/common';
import { HTMLElement, parse } from 'node-html-parser';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
export class DomMapperService {
  constructor(private utilsService: UtilsService) {}
  async mapRawHtmlToDom(rawHtml: string) {
    return parse(rawHtml);
  }

  async getElementsBySelector(dom: HTMLElement, params: any) {
    const rows = dom.querySelectorAll(params.rowSelector);

    params.skipStartRows !== 0 ? rows.shift() : rows;
    params.skipEndRows !== 0 ? rows.pop() : rows;

    return rows.map((item) => {
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
        date: this.utilsService.standartizeDate(
          item.querySelector(params.dateSelector).textContent.trim(),
          params.dateFormat,
        ),
        size: this.utilsService.standartizeSize(
          item.querySelector(params.sizeSelector).textContent,
        ),
        magnet: params.magnetSelector
          ? item.querySelector(params.magnetSelector).attributes['href']
          : '',
      };
    });
  }
}
