import {
  ConsoleMessage,
  LaunchOptions,
  Logger,
  Page,
  Request,
  test as base,
} from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const logFile = path.join(__dirname, '../executionlogs.txt');

type LogSeverity = 'verbose' | 'info' | 'warning' | 'error';

const getDate = (): string => new Date().toISOString();

const writeLog = (message: string) => {
  fs.appendFileSync(logFile, `${message}\n`);
};

const createLogger = (nameFilter: string): Logger => ({
  isEnabled: (name: string) => name === nameFilter,
  // eslint-disable-next-line
  log: (name: string, severity: LogSeverity, message: string, args: any[]) => {
    const logMessage = `${name} ${severity} ${message} ${args.join(' ')}`;
    console.log(logMessage);
    writeLog(logMessage);
  },
});

const logPageEvent = (page: Page, label: string) => {
  const logMessage = `${getDate()} ${label}: ${page.url()}`;
  console.log(logMessage);
  writeLog(logMessage);
};

const logConsoleMessage = (message: ConsoleMessage) => {
  const logMessage = `${getDate()} Event Console: ${message.text()}`;
  console.log(logMessage);
  writeLog(logMessage);
};

const logPageError = (error: Error) => {
  const logMessage = `${getDate()} ## PAGE ERROR ##: ${error.message}`;
  console.log(logMessage);
  writeLog(logMessage);
};

const logRequestEvent = (request: Request, label: string) => {
  const logMessage = `${getDate()} ${label}: ${request.url()} ${request.resourceType()}`;
  console.log(logMessage);
  writeLog(logMessage);
};

export const test = base.extend<{
  launchOptions: LaunchOptions;
  saveLogs: void;
}>({
  // eslint-disable-next-line
  launchOptions: async ({}, use) => {
    const logger = createLogger('api');
    await use({ logger });
  },
  saveLogs: [
    async ({ page }, use) => {
      page.on('domcontentloaded', (page) =>
        logPageEvent(page, 'Event DOMContentLoad'),
      );
      page.on('load', (page) => logPageEvent(page, 'Event Load'));
      page.on('console', logConsoleMessage);
      page.on('pageerror', logPageError);
      page.on('request', (request) => logRequestEvent(request, 'Request'));
      page.on('requestfinished', (request) =>
        logRequestEvent(request, 'Request Finished'),
      );
      page.on('requestfailed', (request) =>
        logRequestEvent(request, '## REQUEST FAILED ##'),
      );

      await use();
    },
    { auto: true },
  ],
});

export { expect } from '@playwright/test';
