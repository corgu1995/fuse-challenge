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
      },
    ],
  ],
  use: {
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
