import { FullConfig, chromium } from '@playwright/test';
import path from 'path';

const numScrolls = 1;
const numMouseMovements = 3;

export default async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({
    headless: false,
  });

  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
  });

  const page = await context.newPage();
  await page.goto('https://www.expedia.com/');

  // Simulate scrolling
  await page.evaluate(async (numScrolls) => {
    for (let i = 0; i < numScrolls; i++) {
      window.scrollBy(0, 300);
      await new Promise((r) => setTimeout(r, 500 + Math.random() * 1000));
    }
  }, numScrolls);

  // Simulate random mouse movements
  const viewportSize = page.viewportSize() || { width: 1280, height: 720 };
  for (let i = 0; i < numMouseMovements; i++) {
    const x = Math.floor(Math.random() * viewportSize.width);
    const y = Math.floor(Math.random() * viewportSize.height);
    await page.mouse.move(x, y, { steps: 5 });
    await page.waitForTimeout(500 + Math.random() * 1000);
  }

  // Save storage state to a file
  await page
    .context()
    .storageState({ path: path.resolve(__dirname, 'storageState.json') });

  await context.close();
  await browser.close();
}
