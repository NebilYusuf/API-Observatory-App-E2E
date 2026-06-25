// @ts-check
import { test, expect } from '@playwright/test';

test('page gets loaded', async ({ page }) => {
  await page.goto('https://www.nebilyusuf.dev/');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', { name: '🚀 API Observatory' }));
});

test('test url and get result', async ({ page }) => {
  await page.goto('https://www.nebilyusuf.dev/');

  await page.getByRole('textbox', { name: 'Enter a URL like api.github.' }).fill('https://www.nebilyusuf.dev/');

  await page.getByRole('button', { name: 'Check Status' }).click();

  await page.waitForLoadState('networkidle');
  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', { name: 'Check Result' })).toBeVisible();
});
