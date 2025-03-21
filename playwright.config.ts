import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 15 * 1000,
  },
  fullyParallel: true,
  reporter: [
    ['list'],
    ['allure-playwright'],
    [
      './node_modules/playwright-slack-report/dist/src/SlackReporter.js',
      {
        channels: ['qa-ui-automation'],
        sendResults: 'always',
        slackWebHookUrl: process.env.SLACK_WEBHOOK_URL,
        meta: [
          {
            key: 'BUILD_NUMBER',
            value: process.env.GITHUB_RUN_NUMBER || 'N/A',
          },
          {
            key: 'BRANCH_NAME',
            value: process.env.GITHUB_REF_NAME || 'main',
          },
          {
            key: 'REPORT_URL',
            value: '<https://corgu1995.github.io/fuse-challenge|View Report>',
          },
        ],
      },
    ],
  ],
  use: {
    baseURL: 'https://www.expedia.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'desktop-chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
