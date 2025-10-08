import { test, expect } from '@playwright/test';

test.describe('Checkbox Centering Visual Test', () => {
  test('should capture screenshot of checkbox centering test', async ({ page }) => {
    await page.goto('/tests/checkbox-centering-test.html');
    
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    
    // Take a screenshot of the entire page
    await page.screenshot({ 
      path: 'test-results/checkbox-centering-test.png',
      fullPage: true 
    });
    
    // Also take a screenshot of just the checkbox area
    const checkboxSection = page.locator('.test-section').first();
    await checkboxSection.screenshot({ 
      path: 'test-results/checkbox-centering-detail.png' 
    });
    
    // Verify that checkboxes are visible
    const checkboxes = page.locator('echo-checkbox[checked]');
    await expect(checkboxes).toHaveCount(6);
    
    console.log('Screenshots saved to test-results/');
  });
});
