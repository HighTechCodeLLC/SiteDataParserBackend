import { Injectable } from '@nestjs/common';
import { request } from 'undici';
import { RequestSenderDto } from './dto/request-sender.dto';

@Injectable()
export class RequestSenderService {
  async getHTMLPage(params: RequestSenderDto): Promise<string> {
    const { searchUrl, spaceHandler, searchRequest, endSymbols } = params;

    let handeledSearchRequest = searchRequest.split(' ').join(spaceHandler);
    handeledSearchRequest = endSymbols
      ? `${handeledSearchRequest}${endSymbols}`
      : handeledSearchRequest;

    const requestUrl = `${searchUrl}${handeledSearchRequest}`;

    const { body } = await request(requestUrl);
    return body.text();
  }
}
