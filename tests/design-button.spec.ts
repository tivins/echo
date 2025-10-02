import { test, expect } from '@playwright/test';

test.describe('DesignButton Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    // Wait for the component to be defined
    await page.waitForFunction(() => customElements.get('design-button'));
  });

  test('should render button with default properties', async ({ page }) => {
    const button = page.locator('design-button').first();
    await expect(button).toBeVisible();
    await expect(button).toHaveText('Primary Button');
  });

  test('should render different variants', async ({ page }) => {
    const primaryButton = page.locator('design-button[variant="primary"]').first();
    const secondaryButton = page.locator('design-button[variant="secondary"]');
    const outlineButton = page.locator('design-button[variant="outline"]');

    await expect(primaryButton).toBeVisible();
    await expect(secondaryButton).toBeVisible();
    await expect(outlineButton).toBeVisible();
  });

  test('should render different sizes', async ({ page }) => {
    const smallButton = page.locator('design-button[size="small"]');
    const mediumButton = page.locator('design-button[size="medium"]');
    const largeButton = page.locator('design-button[size="large"]');

    await expect(smallButton).toBeVisible();
    await expect(mediumButton).toBeVisible();
    await expect(largeButton).toBeVisible();
  });

  test('should handle disabled state', async ({ page }) => {
    const disabledButton = page.locator('design-button[disabled]');
    await expect(disabledButton).toBeVisible();
    
    // Check the button inside shadow DOM
    const button = disabledButton.locator('button');
    await expect(button).toBeDisabled();
  });

  test('should emit click event', async ({ page }) => {
    const component = page.locator('design-button').first();
    
    // Listen for the custom event on the component
    const eventPromise = component.evaluateHandle(el => {
      return new Promise(resolve => {
        el.addEventListener('design-button-click', resolve, { once: true });
      });
    });
    
    // Click the button inside shadow DOM
    const button = component.locator('button');
    await button.click();
    
    const event = await eventPromise;
    expect(event).toBeTruthy();
  });
});
