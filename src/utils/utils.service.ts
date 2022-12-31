import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

@Injectable()
export class UtilsService {
  standartizeSize(size: string) {
    const splitedSizeStr = size.trim().split(' ');
    splitedSizeStr[1] =
      splitedSizeStr[1][0].toUpperCase() === 'G' ? 'GB' : 'MB';

    return splitedSizeStr.join(' ');
  }

  standartizeDate(date: string, format: string) {
    const regex = new RegExp(/[^\.?!`'<>\=\+\*\@\#\$\%\^\|\&]/gm);

    const newFormat = format.match(regex).join('');
    const newDate = date.match(regex).join('');

    const standartizedDate = dayjs(newDate, newFormat).format('YYYY-MM-DD');
    return standartizedDate;
  }
}
