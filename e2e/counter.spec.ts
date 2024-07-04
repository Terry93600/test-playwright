import { test, expect } from '@playwright/test';

test.describe('Counter', () => {
  test('should be 0 at the start', async ({ page }) => {
    await page.goto('/');
    const countText = await page.textContent('p');
    expect(countText).toBe('Count: 0');
  });

  test('should increment to 2 after two clicks', async ({ page }) => {
    await page.goto('/');
    await page.click('button');
    await page.click('button');
    const countText = await page.textContent('p');
    expect(countText).toBe('Count: 2');
  });
});
