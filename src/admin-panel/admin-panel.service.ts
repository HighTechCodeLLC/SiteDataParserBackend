import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { authenticate } from '@google-cloud/local-auth';
import { google } from 'googleapis';
import { promises as fs } from 'fs';
import * as path from 'path';
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth';
import { WebsiteDataDto } from './dto/website-data.dto';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AdminPanelService {
  private TOKEN_PATH = path.join(process.cwd(), 'token.json');
  private CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');
  constructor(private prisma: PrismaService) {}

  async login() {
    let client = await this.loadSavedCredentialsIfExist();

    if (client) {
      return client;
    }

    client = (await authenticate({
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
      keyfilePath: this.CREDENTIALS_PATH,
    })) as JSONClient;

    if (client.credentials) {
      await this.saveCredentials(client);
    }

    return client;
  }

  async loadSavedCredentialsIfExist() {
    try {
      const content = await fs.readFile(this.TOKEN_PATH);
      const credentials = JSON.parse(content.toString());
      return google.auth.fromJSON(credentials);
    } catch (err) {
      return null;
    }
  }

  async saveCredentials(client: JSONClient) {
    const content = await fs.readFile(this.CREDENTIALS_PATH);
    const keys = JSON.parse(content.toString());
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
      type: 'authorized_user',
      client_id: key.client_id,
      client_secret: key.client_secret,
      refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(this.TOKEN_PATH, payload);
  }

  async updateDb(siteDataArray: WebsiteDataDto[]) {
    try {
      for (const siteData of siteDataArray) {
        const site = await this.prisma.website.findUnique({
          where: { name: siteData.name },
        });

        if (site) {
          await this.prisma.website.update({
            data: siteData,
            where: { name: site.name },
          });
        } else {
          await this.prisma.website.create({ data: siteData });
        }
      }

      return 'Success';
    } catch (error) {
      return error;
    }
  }

  async listData(auth: JSONClient) {
    const sheets = google.sheets({ version: 'v4', auth });
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'A1:Q',
    });
    const rows = res.data.values;
    if (!rows || rows.length === 0) {
      console.log('No data found.');
      return;
    }

    const keys = rows.shift();
    const result = [];

    for (const row of rows) {
      const siteData = {};
      for (let i = 0; i < row.length; i++) {
        if (row[i] === 'TRUE') {
          row[i] = true;
        }
        if (row[i] === 'FALSE') {
          row[i] = false;
        }
        if (row[i] == parseInt(row[i])) {
          row[i] = parseInt(row[i]);
        }
        siteData[keys[i]] = row[i];
      }
      result.push(siteData);
    }

    return result;
  }
}
