import { test, expect } from '@playwright/test';

test('Basic Smoke Test - Title Check', async ({ page }) => {
  await page.goto('https://www.expedia.com/');
  await expect(page).toHaveTitle('Bot or Not?');
});
