import { test, expect } from '@playwright/test';

test('title is correct', async ({ page }) => {
  await page.goto("/400");

  await expect(page).toHaveTitle('400 - Bad Request');
});

test('twitter image url is correct', async ({ page }) => {
  await page.goto("/400");

  const metaDescription = page.locator('meta[name="twitter:image"]');
  await expect(metaDescription).toHaveAttribute('content', 'http://localhost:4321/400.jpg')
});

test('og image url is correct', async ({ page }) => {
  await page.goto("/400");

  const metaDescription = page.locator('meta[property="og:image"]');
  await expect(metaDescription).toHaveAttribute('content', 'http://localhost:4321/400.jpg')
});
