import { test, expect } from '@playwright/test';

// This loop automatically creates 100 mock tests for training
for (let i = 1; i <= 100; i++) {
  test(`Dummy Test Performance Number ${i}`, async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });
}
