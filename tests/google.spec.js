const { test, expect } = require('@playwright/test');

test('Open Google and check title', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Verify title contains Google
  await expect(page).toHaveTitle(/Google/);

  await page.pause(); // 👈 This will open Inspector
});
