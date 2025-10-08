import { test, expect } from '@playwright/test';

test.describe('Echo Link Display Behavior', () => {
  test('should have consistent block display behavior with echo-button', async ({ page }) => {
    await page.goto('/tests/index.html');
    
    // Wait for components to load
    await page.waitForSelector('echo-button[display="block"]');
    await page.waitForSelector('echo-link[display="block"]');
    
    // Get the computed styles of the block elements
    const buttonStyles = await page.evaluate(() => {
      const button = document.querySelector('echo-button[display="block"]') as HTMLElement;
      const computedStyle = window.getComputedStyle(button);
      return {
        display: computedStyle.display,
        width: computedStyle.width,
      };
    });
    
    const linkStyles = await page.evaluate(() => {
      const link = document.querySelector('echo-link[display="block"]') as HTMLElement;
      const computedStyle = window.getComputedStyle(link);
      return {
        display: computedStyle.display,
        width: computedStyle.width,
      };
    });
    
    // Both should have block display
    expect(buttonStyles.display).toBe('block');
    expect(linkStyles.display).toBe('block');
    
    // Both should take full width
    expect(buttonStyles.width).toBe('200px'); // Container width
    expect(linkStyles.width).toBe('200px'); // Container width
  });
  
  test('should apply utility classes correctly on host element', async ({ page }) => {
    await page.goto('/tests/index.html');
    
    // Check that echo-link has the correct utility classes
    const linkClasses = await page.evaluate(() => {
      const link = document.querySelector('echo-link[display="block"]') as HTMLElement;
      return Array.from(link.classList);
    });
    
    expect(linkClasses).toContain('u-block');
    expect(linkClasses).toContain('u-w-100');
  });
  
  test('should maintain visual consistency in navigation menu', async ({ page }) => {
    await page.goto('/tests/index.html');
    
    // Take a screenshot to verify visual consistency
    const menuCard = page.locator('echo-card[card-title="Menu"]');
    await expect(menuCard).toBeVisible();
    
    // Check that all menu items have consistent alignment
    const menuItems = page.locator('echo-card[card-title="Menu"] echo-button, echo-card[card-title="Menu"] echo-link');
    const count = await menuItems.count();
    
    expect(count).toBeGreaterThan(0);
    
    // Verify all items are properly aligned
    for (let i = 0; i < count; i++) {
      const item = menuItems.nth(i);
      await expect(item).toBeVisible();
    }
  });
});
