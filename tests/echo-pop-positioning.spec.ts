import { test, expect } from '@playwright/test';

test.describe('Echo Pop Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080/test-positioning.html');
  });

  test('should display popup with correct positioning', async ({ page }) => {
    // Test basic popup
    const triggerButton = page.locator('echo-pop').first().locator('button');
    await triggerButton.click();
    
    const popup = page.locator('.pop-content').first();
    await expect(popup).toBeVisible();
    
    // Check if popup is positioned correctly
    const popupBox = await popup.boundingBox();
    const triggerBox = await triggerButton.boundingBox();
    
    expect(popupBox).toBeTruthy();
    expect(triggerBox).toBeTruthy();
    
    // Popup should be positioned relative to trigger
    if (popupBox && triggerBox) {
      // For bottom placement, popup should be below trigger
      expect(popupBox.y).toBeGreaterThan(triggerBox.y + triggerBox.height);
    }
  });

  test('should handle different placements correctly', async ({ page }) => {
    // Test top placement
    const topButton = page.locator('echo-pop[placement="top"] button');
    await topButton.click();
    
    const topPopup = page.locator('echo-pop[placement="top"] .pop-content');
    await expect(topPopup).toBeVisible();
    
    const topPopupBox = await topPopup.boundingBox();
    const topButtonBox = await topButton.boundingBox();
    
    if (topPopupBox && topButtonBox) {
      // For top placement, popup should be above button
      expect(topPopupBox.y + topPopupBox.height).toBeLessThan(topButtonBox.y);
    }
    
    // Close popup
    await page.keyboard.press('Escape');
    
    // Test left placement
    const leftButton = page.locator('echo-pop[placement="left"] button');
    await leftButton.click();
    
    const leftPopup = page.locator('echo-pop[placement="left"] .pop-content');
    await expect(leftPopup).toBeVisible();
    
    const leftPopupBox = await leftPopup.boundingBox();
    const leftButtonBox = await leftButton.boundingBox();
    
    if (leftPopupBox && leftButtonBox) {
      // For left placement, popup should be to the left of button
      expect(leftPopupBox.x + leftPopupBox.width).toBeLessThan(leftButtonBox.x);
    }
  });

  test('should handle modal variant correctly', async ({ page }) => {
    const modalButton = page.locator('echo-pop[variant="modal"] button');
    await modalButton.click();
    
    const modalPopup = page.locator('echo-pop[variant="modal"] .pop-content');
    await expect(modalPopup).toBeVisible();
    
    // Modal should be centered
    const modalBox = await modalPopup.boundingBox();
    const viewport = page.viewportSize();
    
    if (modalBox && viewport) {
      const centerX = viewport.width / 2;
      const centerY = viewport.height / 2;
      
      // Modal should be roughly centered (allowing for some tolerance)
      expect(Math.abs(modalBox.x + modalBox.width / 2 - centerX)).toBeLessThan(50);
      expect(Math.abs(modalBox.y + modalBox.height / 2 - centerY)).toBeLessThan(50);
    }
  });

  test('should handle scroll positioning correctly', async ({ page }) => {
    // Scroll to the scroll test section
    const scrollTest = page.locator('.scroll-test');
    await scrollTest.scrollIntoViewIfNeeded();
    
    // Scroll down within the scroll container
    await scrollTest.evaluate(el => el.scrollTop = 200);
    
    // Click the button in the scrolled content
    const scrollButton = page.locator('.scroll-test echo-pop button');
    await scrollButton.click();
    
    const scrollPopup = page.locator('.scroll-test echo-pop .pop-content');
    await expect(scrollPopup).toBeVisible();
    
    // Popup should still be positioned correctly relative to the button
    const scrollPopupBox = await scrollPopup.boundingBox();
    const scrollButtonBox = await scrollButton.boundingBox();
    
    if (scrollPopupBox && scrollButtonBox) {
      // Popup should be positioned relative to the button, not the viewport
      expect(Math.abs(scrollPopupBox.x - scrollButtonBox.x)).toBeLessThan(100);
    }
  });

  test('should handle dismissible behavior', async ({ page }) => {
    const triggerButton = page.locator('echo-pop').first().locator('button');
    await triggerButton.click();
    
    const popup = page.locator('.pop-content').first();
    await expect(popup).toBeVisible();
    
    // Click outside should close popup
    await page.click('body', { position: { x: 10, y: 10 } });
    await expect(popup).not.toBeVisible();
  });

  test('should handle persistent popup', async ({ page }) => {
    const persistentButton = page.locator('echo-pop[persistent] button');
    await persistentButton.click();
    
    const persistentPopup = page.locator('echo-pop[persistent] .pop-content');
    await expect(persistentPopup).toBeVisible();
    
    // Click outside should NOT close persistent popup
    await page.click('body', { position: { x: 10, y: 10 } });
    await expect(persistentPopup).toBeVisible();
    
    // But Escape should still close it
    await page.keyboard.press('Escape');
    await expect(persistentPopup).not.toBeVisible();
  });

  test('should handle different sizes correctly', async ({ page }) => {
    const smallButton = page.locator('echo-pop[size="small"] button');
    await smallButton.click();
    
    const smallPopup = page.locator('echo-pop[size="small"] .pop-content');
    await expect(smallPopup).toBeVisible();
    
    const smallBox = await smallPopup.boundingBox();
    expect(smallBox?.width).toBeLessThan(150); // Small popup should be narrow
    
    await page.keyboard.press('Escape');
    
    const largeButton = page.locator('echo-pop[size="large"] button');
    await largeButton.click();
    
    const largePopup = page.locator('echo-pop[size="large"] .pop-content');
    await expect(largePopup).toBeVisible();
    
    const largeBox = await largePopup.boundingBox();
    expect(largeBox?.width).toBeGreaterThan(200); // Large popup should be wide
  });

  test('should handle animations correctly', async ({ page }) => {
    const fadeButton = page.locator('echo-pop[animation="fade"] button');
    await fadeButton.click();
    
    const fadePopup = page.locator('echo-pop[animation="fade"] .pop-content');
    await expect(fadePopup).toBeVisible();
    
    // Check if animation classes are applied
    await expect(fadePopup).toHaveClass(/pop-content--fade/);
    await expect(fadePopup).toHaveClass(/pop-content--visible/);
  });
});

