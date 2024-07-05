import { test, expect } from '@playwright/test';

test.describe('Calculator', () => {
  test('should display 0 at the start', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const screenText = await page.textContent('.screen');
    expect(screenText).toBe('0');
  });

  test('should add numbers correctly', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('#1');
    await page.click('text=+');
    await page.click('#2');
    await page.click('.btnEqual');
    const screenText = await page.textContent('.screen');
    expect(screenText).toBe('3');
  });

  test('should multiply numbers correctly', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('#2');
    await page.click('text=x');
    await page.click('#3');
    await page.click('.btnEqual');
    const screenText = await page.textContent('.screen');
    expect(screenText).toBe('6');
  });

  test('should subtract numbers correctly', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('#5');
    await page.click('text=-');
    await page.click('#2');
    await page.click('.btnEqual');
    const screenText = await page.textContent('.screen');
    expect(screenText).toBe('3');
  });

  test('should reset the display when C is clicked', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('#1');
    await page.click('text=+');
    await page.click('#2');
    await page.click('text=C');
    const screenText = await page.textContent('.screen');
    expect(screenText).toBe('0');
  });

  test('should display the = button in red', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const equalButtonColor = await page.evaluate(() => {
      return getComputedStyle(document.querySelector('.btnEqual')).backgroundColor;
    });
    expect(equalButtonColor).toBe('rgb(255, 0, 0)'); // RGB for red
  });

  test('should handle negative numbers', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('#3');
    await page.click('text=+/-');
    const screenText = await page.textContent('.screen');
    expect(screenText).toBe('-3');
  });

  test('should add negative numbers correctly', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('#5');
    await page.click('text=+/-');
    await page.click('text=+');
    await page.click('#2');
    await page.click('.btnEqual');
    const screenText = await page.textContent('.screen');
    expect(screenText).toBe('3'); // -5 + 2 = -3
  });

  test('should handle decimal numbers correctly', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('#1');
    await page.click('text=.');
    await page.click('#5');
    const screenText = await page.textContent('.screen');
    expect(screenText).toBe('1.5');
  });
});
