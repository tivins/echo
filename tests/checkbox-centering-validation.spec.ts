import { test, expect } from '@playwright/test';

test.describe('Checkbox Centering Validation', () => {
  test('should verify checkbox icon is properly centered', async ({ page }) => {
    await page.goto('http://localhost:3000/demos/checkbox-centering-test.html');
    await page.waitForLoadState('networkidle');
    
    // Get the first checkbox
    const checkbox = page.locator('echo-checkbox[checked]').first();
    const checkboxVisual = checkbox.locator('.checkbox-visual');
    const checkboxIcon = checkbox.locator('.checkbox-checkmark echo-icon');
    
    // Get bounding boxes
    const visualBox = await checkboxVisual.boundingBox();
    const iconBox = await checkboxIcon.boundingBox();
    
    if (visualBox && iconBox) {
      // Calculate center positions
      const visualCenterX = visualBox.x + visualBox.width / 2;
      const visualCenterY = visualBox.y + visualBox.height / 2;
      const iconCenterX = iconBox.x + iconBox.width / 2;
      const iconCenterY = iconBox.y + iconBox.height / 2;
      
      // Calculate offsets from center
      const offsetX = Math.abs(iconCenterX - visualCenterX);
      const offsetY = Math.abs(iconCenterY - visualCenterY);
      
      console.log('Visual box:', visualBox);
      console.log('Icon box:', iconBox);
      console.log('Visual center:', { x: visualCenterX, y: visualCenterY });
      console.log('Icon center:', { x: iconCenterX, y: iconCenterY });
      console.log('Offset:', { x: offsetX, y: offsetY });
      
      // Allow for small tolerance (2px) due to subpixel rendering
      expect(offsetX).toBeLessThan(2);
      expect(offsetY).toBeLessThan(2);
    }
    
    // Take final screenshot
    await page.screenshot({ 
      path: 'test-results/checkbox-centering-final.png',
      fullPage: true 
    });
  });
});
