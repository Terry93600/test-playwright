import { test, expect } from '@playwright/test';

test.describe('Jupiterian Time E2E Tests', () => {
  test('should display correct Jupiterian time for lune=1, terre=1, soleil=1', async ({ page }) => {
    await page.goto('/');
    await page.selectOption('select[name="lune"]', '1');
    await page.selectOption('select[name="terre"]', '1');
    await page.selectOption('select[name="soleil"]', '1');
    await expect(page.locator('text=Jupiterian Time: mortin')).toBeVisible();
  });

  test('should display correct Jupiterian time for lune=1, terre=1, soleil=2', async ({ page }) => {
    await page.goto('/');
    await page.selectOption('select[name="lune"]', '1');
    await page.selectOption('select[name="terre"]', '1');
    await page.selectOption('select[name="soleil"]', '2');
    await expect(page.locator('text=Jupiterian Time: aprenoon')).toBeVisible();
  });

  test('should display correct Jupiterian time for lune=1, terre=2, soleil=1', async ({ page }) => {
    await page.goto('/');
    await page.selectOption('select[name="lune"]', '1');
    await page.selectOption('select[name="terre"]', '2');
    await page.selectOption('select[name="soleil"]', '1');
    await expect(page.locator('text=Jupiterian Time: aprenoon')).toBeVisible();
  });

  test('should display correct Jupiterian time for lune=1, terre=2, soleil=2', async ({ page }) => {
    await page.goto('/');
    await page.selectOption('select[name="lune"]', '1');
    await page.selectOption('select[name="terre"]', '2');
    await page.selectOption('select[name="soleil"]', '2');
    await expect(page.locator('text=Jupiterian Time: aprenoon')).toBeVisible();
  });

  test('should display correct Jupiterian time for lune=2, terre=1, soleil=1', async ({ page }) => {
    await page.goto('/');
    await page.selectOption('select[name="lune"]', '2');
    await page.selectOption('select[name="terre"]', '1');
    await page.selectOption('select[name="soleil"]', '1');
    await expect(page.locator('text=Jupiterian Time: aprenoon')).toBeVisible();
  });

  test('should display correct Jupiterian time for lune=2, terre=1, soleil=2', async ({ page }) => {
    await page.goto('/');
    await page.selectOption('select[name="lune"]', '2');
    await page.selectOption('select[name="terre"]', '1');
    await page.selectOption('select[name="soleil"]', '2');
    await expect(page.locator('text=Jupiterian Time: soirning')).toBeVisible();
  });

  test('should display correct Jupiterian time for lune=2, terre=2, soleil=1', async ({ page }) => {
    await page.goto('/');
    await page.selectOption('select[name="lune"]', '2');
    await page.selectOption('select[name="terre"]', '2');
    await page.selectOption('select[name="soleil"]', '1');
    await expect(page.locator('text=Jupiterian Time: aprenoon')).toBeVisible();
  });

  test('should display correct Jupiterian time for lune=2, terre=2, soleil=2', async ({ page }) => {
    await page.goto('/');
    await page.selectOption('select[name="lune"]', '2');
    await page.selectOption('select[name="terre"]', '2');
    await page.selectOption('select[name="soleil"]', '2');
    await expect(page.locator('text=Jupiterian Time: nuight')).toBeVisible();
  });
});
