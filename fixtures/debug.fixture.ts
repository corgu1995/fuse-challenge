import {
  ConsoleMessage,
  LaunchOptions,
  Logger,
  Page,
  Request,
  test as base,
} from '@playwright/test';

type LogSeverity = 'verbose' | 'info' | 'warning' | 'error';

const getDate = (): string => new Date().toISOString();

const createLogger = (nameFilter: string): Logger => ({
  isEnabled: (name: string) => name === nameFilter,
  // eslint-disable-next-line
  log: (name: string, severity: LogSeverity, message: string, args: any[]) =>
    console.log(`${name} ${severity} ${message} ${args.join(' ')}`),
});

const logPageEvent = (page: Page, label: string) => {
  console.log(`${getDate()} ${label}: ${page.url()}`);
};

const logConsoleMessage = (message: ConsoleMessage) => {
  console.log(`${getDate()} Event Console: ${message.text()}`);
};

const logPageError = (error: Error) => {
  console.log(`${getDate()} ## PAGE ERROR ##: ${error.message}`);
};

const logRequestEvent = (request: Request, label: string) => {
  console.log(
    `${getDate()} ${label}: ${request.url()} ${request.resourceType()}`,
  );
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
