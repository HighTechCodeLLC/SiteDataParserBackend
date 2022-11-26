import { Injectable } from '@nestjs/common';
import { DomMapperService } from 'src/dom-mapper/dom-mapper.service';
import { RequestSenderService } from 'src/request-sender/request-sender.service';

@Injectable()
export class ParserService {
  constructor(
    private requestSenderService: RequestSenderService,
    private domMapperService: DomMapperService,
  ) {}
  async parse(params: any) {
    const rawHTML = await this.requestSenderService.getHTMLPage({
      searchUrl: params.searchUrl,
      searchRequest: params.searchRequest,
      spaceHandler: params.spaceHandler,
      endSymbols: params.endSymbols,
    });

    const dom = await this.domMapperService.mapRawHtmlToDom(rawHTML);
    return await this.domMapperService.getElementsBySelector(dom, params);
  }
}
