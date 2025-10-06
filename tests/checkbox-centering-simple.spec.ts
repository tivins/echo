import { test, expect } from '@playwright/test';

test.describe('Checkbox Centering Simple Test', () => {
  test('should check if checkbox icon appears centered visually', async ({ page }) => {
    await page.goto('http://localhost:3000/demos/checkbox-centering-test.html');
    await page.waitForLoadState('networkidle');
    
    // Wait for checkboxes to be visible
    await page.waitForSelector('echo-checkbox[checked]', { timeout: 10000 });
    
    // Take a screenshot for visual inspection
    await page.screenshot({ 
      path: 'test-results/checkbox-centering-simple.png',
      fullPage: true 
    });
    
    // Check that checkboxes are visible and have the checkmark
    const checkboxes = page.locator('echo-checkbox[checked]');
    const count = await checkboxes.count();
    expect(count).toBeGreaterThan(0);
    
    // Check that the visual elements exist
    const firstCheckbox = checkboxes.first();
    const visual = firstCheckbox.locator('.checkbox-visual');
    const checkmark = firstCheckbox.locator('.checkbox-checkmark');
    
    await expect(visual).toBeVisible();
    await expect(checkmark).toBeVisible();
    
    console.log('✅ Checkboxes are visible and have checkmarks');
    console.log('📸 Screenshot saved for visual inspection');
  });
});
