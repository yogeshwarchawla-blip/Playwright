const { test, expect } = require('@playwright/test');

test('Open Google and search Playwright', async ({ page }) => {
  await page.goto('https://www.google.com');

  await page.getByRole('textbox', { name: 'Search' }).fill('Playwright automation');
  await page.keyboard.press('Enter');

  await expect(page).toHaveTitle(/Playwright/);
});