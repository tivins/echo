import { test, expect } from '@playwright/test';

test.describe('EchoButton Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/test.html');
    // Wait for the component to be defined
    await page.waitForFunction(() => customElements.get('echo-button'));
  });

  test('should render button with default properties', async ({ page }) => {
    const button = page.locator('echo-button').first();
    await expect(button).toBeVisible();
    await expect(button).toHaveText('Primary Button');
  });

  test('should render different variants', async ({ page }) => {
    const defaultButton = page.locator('echo-button[variant="default"]').first();
    const linkButton = page.locator('echo-button[variant="link"]').first();
    const outlineButton = page.locator('echo-button[variant="outline"]').first();
    const ghostButton = page.locator('echo-button[variant="ghost"]').first();

    await expect(defaultButton).toBeVisible();
    await expect(linkButton).toBeVisible();
    await expect(outlineButton).toBeVisible();
    await expect(ghostButton).toBeVisible();
  });

  test('should render different contexts', async ({ page }) => {
    const primaryButton = page.locator('echo-button[context="primary"]').first();
    const secondaryButton = page.locator('echo-button[context="secondary"]').first();
    const successButton = page.locator('echo-button[context="success"]').first();
    const dangerButton = page.locator('echo-button[context="danger"]').first();
    const warningButton = page.locator('echo-button[context="warning"]').first();
    const infoButton = page.locator('echo-button[context="info"]').first();

    await expect(primaryButton).toBeVisible();
    await expect(secondaryButton).toBeVisible();
    await expect(successButton).toBeVisible();
    await expect(dangerButton).toBeVisible();
    await expect(warningButton).toBeVisible();
    await expect(infoButton).toBeVisible();
  });

  test('should render combinations of variants and contexts', async ({ page }) => {
    const successDefaultButton = page.locator('echo-button[variant="default"][context="success"]');
    const dangerOutlineButton = page.locator('echo-button[variant="outline"][context="danger"]');
    const warningGhostButton = page.locator('echo-button[variant="ghost"][context="warning"]');
    const infoLinkButton = page.locator('echo-button[variant="link"][context="info"]');

    await expect(successDefaultButton).toBeVisible();
    await expect(dangerOutlineButton).toBeVisible();
    await expect(warningGhostButton).toBeVisible();
    await expect(infoLinkButton).toBeVisible();
  });

  test('should render different sizes', async ({ page }) => {
    const smallButton = page.locator('echo-button[size="small"]').first();
    const mediumButton = page.locator('echo-button[size="medium"]').first();
    const largeButton = page.locator('echo-button[size="large"]').first();

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
