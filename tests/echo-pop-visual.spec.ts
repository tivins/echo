import { test, expect } from '@playwright/test';

test.describe('Echo Pop Visual Test', () => {
  test('should display pop-in demo page', async ({ page }) => {
    // Navigate to the demo page directly
    await page.goto('file:///C:/docs/projects/apps/design4/demos/echo-pop-demo.html');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Take a screenshot to see what's happening
    await page.screenshot({ path: 'test-results/echo-pop-demo.png', fullPage: true });
    
    // Check if the page loaded
    const title = await page.title();
    expect(title).toBe('Echo Pop Component Demo');
    
    // Check if any echo-pop elements exist
    const popElements = await page.locator('echo-pop').count();
    console.log(`Found ${popElements} echo-pop elements`);
    
    // Try to find a button to click
    const firstButton = page.locator('echo-button').first();
    if (await firstButton.count() > 0) {
      console.log('Found echo-button, trying to click...');
      await firstButton.click();
      
      // Wait a bit and take another screenshot
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'test-results/echo-pop-after-click.png', fullPage: true });
      
      // Check if pop-in appeared
      const popContent = page.locator('.pop-content');
      const popCount = await popContent.count();
      console.log(`Found ${popCount} pop-content elements after click`);
    }
  });
});

