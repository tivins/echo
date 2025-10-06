import { test, expect } from '@playwright/test';

test.describe('Echo Pop Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/demos/echo-pop-demo.html');
  });

  test('should render basic pop-in', async ({ page }) => {
    const popTrigger = page.locator('echo-pop').first().locator('echo-button');
    await expect(popTrigger).toBeVisible();
  });

  test('should open pop-in on trigger click', async ({ page }) => {
    const popTrigger = page.locator('echo-pop').first().locator('echo-button');
    const popContent = page.locator('echo-pop').first().locator('.pop-content');
    
    await popTrigger.click();
    await expect(popContent).toBeVisible();
  });

  test('should close pop-in when clicking outside', async ({ page }) => {
    const popTrigger = page.locator('echo-pop').first().locator('echo-button');
    const popContent = page.locator('echo-pop').first().locator('.pop-content');
    
    await popTrigger.click();
    await expect(popContent).toBeVisible();
    
    // Click outside the pop-in
    await page.click('body', { position: { x: 10, y: 10 } });
    await expect(popContent).not.toBeVisible();
  });

  test('should close pop-in with escape key', async ({ page }) => {
    const popTrigger = page.locator('echo-pop').first().locator('echo-button');
    const popContent = page.locator('echo-pop').first().locator('.pop-content');
    
    await popTrigger.click();
    await expect(popContent).toBeVisible();
    
    await page.keyboard.press('Escape');
    await expect(popContent).not.toBeVisible();
  });

  test('should display tooltip variant correctly', async ({ page }) => {
    const tooltipPop = page.locator('echo-pop[variant="tooltip"]').first();
    const tooltipTrigger = tooltipPop.locator('echo-button');
    const tooltipContent = tooltipPop.locator('.pop-content');
    
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
    await expect(tooltipContent).toHaveClass(/pop-content--tooltip/);
  });

  test('should display dropdown variant correctly', async ({ page }) => {
    const dropdownPop = page.locator('echo-pop[variant="dropdown"]').first();
    const dropdownTrigger = dropdownPop.locator('echo-button');
    const dropdownContent = dropdownPop.locator('.pop-content');
    
    await dropdownTrigger.click();
    await expect(dropdownContent).toBeVisible();
    await expect(dropdownContent).toHaveClass(/pop-content--dropdown/);
  });

  test('should display modal variant correctly', async ({ page }) => {
    const modalPop = page.locator('echo-pop[variant="modal"]').first();
    const modalTrigger = modalPop.locator('echo-button');
    const modalPortal = page.locator('.pop-portal');
    
    await modalTrigger.click();
    await expect(modalPortal).toBeVisible();
  });

  test('should handle different sizes', async ({ page }) => {
    const smallPop = page.locator('echo-pop[size="small"]').first();
    const smallTrigger = smallPop.locator('echo-button');
    const smallContent = smallPop.locator('.pop-content');
    
    await smallTrigger.click();
    await expect(smallContent).toBeVisible();
    await expect(smallContent).toHaveClass(/pop-content--small/);
  });

  test('should handle different placements', async ({ page }) => {
    const topPop = page.locator('echo-pop[placement="top"]').first();
    const topTrigger = topPop.locator('echo-button');
    const topContent = topPop.locator('.pop-content');
    
    await topTrigger.click();
    await expect(topContent).toBeVisible();
  });

  test('should handle different animations', async ({ page }) => {
    const fadePop = page.locator('echo-pop[animation="fade"]').first();
    const fadeTrigger = fadePop.locator('echo-button');
    const fadeContent = fadePop.locator('.pop-content');
    
    await fadeTrigger.click();
    await expect(fadeContent).toBeVisible();
    await expect(fadeContent).toHaveClass(/pop-content--fade/);
  });

  test('should handle different contexts', async ({ page }) => {
    const primaryPop = page.locator('echo-pop[context="primary"]').first();
    const primaryTrigger = primaryPop.locator('echo-button');
    const primaryContent = primaryPop.locator('.pop-content');
    
    await primaryTrigger.click();
    await expect(primaryContent).toBeVisible();
    await expect(primaryContent).toHaveClass(/context--primary/);
  });

  test('should support custom content', async ({ page }) => {
    const customPop = page.locator('echo-pop').filter({ hasText: 'Custom Content' }).first();
    const customTrigger = customPop.locator('echo-button');
    const customContent = customPop.locator('.pop-content');
    
    await customTrigger.click();
    await expect(customContent).toBeVisible();
    
    // Check for custom elements inside the pop
    const input = customContent.locator('echo-input');
    await expect(input).toBeVisible();
  });

  test('should support footer slot', async ({ page }) => {
    const footerPop = page.locator('echo-pop').filter({ hasText: 'Dropdown Menu' }).first();
    const footerTrigger = footerPop.locator('echo-button');
    const footerContent = footerPop.locator('.pop-content');
    const footer = footerContent.locator('.pop-footer');
    
    await footerTrigger.click();
    await expect(footerContent).toBeVisible();
    await expect(footer).toBeVisible();
  });

  test('should handle programmatic control', async ({ page }) => {
    const toggleButton = page.locator('#toggle-button');
    const interactivePop = page.locator('#interactive-pop');
    const popContent = interactivePop.locator('.pop-content');
    
    await toggleButton.click();
    await expect(popContent).toBeVisible();
    
    await toggleButton.click();
    await expect(popContent).not.toBeVisible();
  });

  test('should update properties dynamically', async ({ page }) => {
    const variantSelect = page.locator('#variant-select');
    const interactivePop = page.locator('#interactive-pop');
    const popContent = interactivePop.locator('.pop-content');
    
    // Open the pop
    await interactivePop.locator('echo-button').click();
    await expect(popContent).toBeVisible();
    
    // Change variant
    await variantSelect.selectOption('tooltip');
    await expect(popContent).toHaveClass(/pop-content--tooltip/);
  });

  test('should emit events correctly', async ({ page }) => {
    const interactivePop = page.locator('#interactive-pop');
    const toggleButton = page.locator('#toggle-button');
    
    // Listen for events
    const openEvent = page.waitForEvent('echo-pop-open');
    const closeEvent = page.waitForEvent('echo-pop-close');
    
    await toggleButton.click();
    await openEvent;
    
    await toggleButton.click();
    await closeEvent;
  });

  test('should handle non-dismissible modal', async ({ page }) => {
    const nonDismissibleModal = page.locator('echo-pop[dismissible="false"]').first();
    const modalTrigger = nonDismissibleModal.locator('echo-button');
    const modalPortal = page.locator('.pop-portal');
    
    await modalTrigger.click();
    await expect(modalPortal).toBeVisible();
    
    // Try to close by clicking outside - should not close
    await page.click('body', { position: { x: 10, y: 10 } });
    await expect(modalPortal).toBeVisible();
    
    // Try to close with escape - should not close
    await page.keyboard.press('Escape');
    await expect(modalPortal).toBeVisible();
  });

  test('should handle persistent pop-in', async ({ page }) => {
    const persistentPop = page.locator('echo-pop[persistent="true"]').first();
    const persistentTrigger = persistentPop.locator('echo-button');
    const persistentContent = persistentPop.locator('.pop-content');
    
    await persistentTrigger.click();
    await expect(persistentContent).toBeVisible();
    
    // Try to close by clicking outside - should not close
    await page.click('body', { position: { x: 10, y: 10 } });
    await expect(persistentContent).toBeVisible();
  });

  test('should handle icon in header', async ({ page }) => {
    const iconPop = page.locator('echo-pop').filter({ hasText: 'Default Pop' }).first();
    const iconTrigger = iconPop.locator('echo-button');
    const iconContent = iconPop.locator('.pop-content');
    const icon = iconContent.locator('echo-icon');
    
    await iconTrigger.click();
    await expect(iconContent).toBeVisible();
    await expect(icon).toBeVisible();
  });

  test('should handle close button', async ({ page }) => {
    const closablePop = page.locator('echo-pop').filter({ hasText: 'Default Pop' }).first();
    const closableTrigger = closablePop.locator('echo-button');
    const closableContent = closablePop.locator('.pop-content');
    const closeButton = closableContent.locator('.pop-close-button');
    
    await closableTrigger.click();
    await expect(closableContent).toBeVisible();
    await expect(closeButton).toBeVisible();
    
    await closeButton.click();
    await expect(closableContent).not.toBeVisible();
  });

  test('should handle responsive behavior', async ({ page }) => {
    // Test on mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    const modalPop = page.locator('echo-pop[variant="modal"]').first();
    const modalTrigger = modalPop.locator('echo-button');
    const modalPortal = page.locator('.pop-portal');
    
    await modalTrigger.click();
    await expect(modalPortal).toBeVisible();
    
    // Check that modal is properly sized for mobile
    const modalContent = modalPortal.locator('.pop-content--modal');
    await expect(modalContent).toBeVisible();
  });
});

