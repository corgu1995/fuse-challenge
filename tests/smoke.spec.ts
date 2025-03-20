import { test, expect } from '../fixtures/debug.fixture';

test('Basic Smoke Test - Title Check', async ({ page }) => {
  await page.goto('https://www.expedia.com/');
  await expect(page).not.toHaveTitle('Bot or Not?');
});
