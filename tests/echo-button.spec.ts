import { test, expect } from '@playwright/test';

test.describe('EchoButton Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    // Wait for the component to be defined
    await page.waitForFunction(() => customElements.get('echo-button'));
  });

  test('should render button with default properties', async ({ page }) => {
    const button = page.locator('echo-button').first();
    await expect(button).toBeVisible();
    await expect(button).toHaveText('Primary Button');
  });

  test('should render different variants', async ({ page }) => {
    const primaryButton = page.locator('echo-button[variant="primary"]').first();
    const secondaryButton = page.locator('echo-button[variant="secondary"]');
    const outlineButton = page.locator('echo-button[variant="outline"]');
    const ghostButton = page.locator('echo-button[variant="ghost"]');

    await expect(primaryButton).toBeVisible();
    await expect(secondaryButton).toBeVisible();
    await expect(outlineButton).toBeVisible();
    await expect(ghostButton).toBeVisible();
  });

  test('should render different sizes', async ({ page }) => {
    const smallButton = page.locator('echo-button[size="small"]');
    const mediumButton = page.locator('echo-button[size="medium"]');
    const largeButton = page.locator('echo-button[size="large"]');

    await expect(smallButton).toBeVisible();
    await expect(mediumButton).toBeVisible();
    await expect(largeButton).toBeVisible();
  });

  test('should handle disabled state', async ({ page }) => {
    const disabledButton = page.locator('echo-button[disabled]');
    await expect(disabledButton).toBeVisible();
    
    // Check the button inside shadow DOM
    const button = disabledButton.locator('button');
    await expect(button).toBeDisabled();
  });

  test('should emit click event', async ({ page }) => {
    const component = page.locator('echo-button').first();
    
    // Listen for the custom event on the component
    const eventPromise = component.evaluateHandle(el => {
      return new Promise(resolve => {
        el.addEventListener('echo-button-click', resolve, { once: true });
      });
    });
    
    // Click the button inside shadow DOM
    const button = component.locator('button');
    await button.click();
    
    const event = await eventPromise;
    expect(event).toBeTruthy();
  });
});
