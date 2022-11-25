import { Injectable } from '@nestjs/common';
import { request } from 'undici';
import { parse } from 'node-html-parser';
// import { JSDOM } from 'jsdom';

// import { parse, walk, SyntaxKind } from 'html5parser';
// import * as htmlparser2 from 'htmlparser2';
// import parse from 'html-dom-parser';

@Injectable()
export class ParserGatewayService {
  async parse(url: string) {
    const { body } = await request(url);
    const rawBody = await body.text();

    //    html-dom-parser
    // const dom = parse(rawBody);
    // console.log(dom);

    //    htmlparser2
    // const dom = htmlparser2.parseDocument(rawBody);
    // console.log(dom);

    //    html5parser
    // const ast = parse(rawBody);
    // walk(ast, {
    //   enter: (node) => {
    //     if (
    //       node.type === SyntaxKind.Tag &&
    //       node.name === 'a' &&
    //       Array.isArray(node.body)
    //     ) {
    //       console.log(node);
    //     }
    //   },
    // });

    //    jsdom
    // const dom = new JSDOM(rawBody);
    // Array.from(dom.window.document.querySelectorAll('a')).map(
    //   (item) => {
    //     console.log(item.textContent);
    //     // console.log(item.href);
    //     console.log(item.attributes['href'].value);
    //   },
    // );

    //  node-html-parser
    const dom = parse(rawBody);
    dom.querySelectorAll('a').map((item) => {
      console.log(item.textContent);
      console.log(item.attributes['href']);
    });

    return '';
  }
}
