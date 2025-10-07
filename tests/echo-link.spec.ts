import { test, expect } from '@playwright/test';

test.describe('EchoLink Component', () => {
  test('should render as a link when href is provided', async ({ page }) => {
    await page.setContent(`
      <echo-link href="https://example.com" variant="default" context="primary">
        Test Link
      </echo-link>
    `);

    const link = page.locator('echo-link a');
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', 'https://example.com');
    await expect(link).toHaveText('Test Link');
    await expect(link).toHaveClass(/button-link--default/);
    await expect(link).toHaveClass(/context--primary/);
  });

  test('should render as span when disabled', async ({ page }) => {
    await page.setContent(`
      <echo-link href="https://example.com" disabled>
        Disabled Link
      </echo-link>
    `);

    const span = page.locator('echo-link span');
    await expect(span).toBeVisible();
    await expect(span).toHaveAttribute('role', 'button');
    await expect(span).toHaveText('Disabled Link');
    
    // Should not have href attribute
    const link = page.locator('echo-link a');
    await expect(link).toHaveCount(0);
  });

  test('should render as span when no href provided', async ({ page }) => {
    await page.setContent(`
      <echo-link variant="outline" context="success">
        No Href Link
      </echo-link>
    `);

    const span = page.locator('echo-link span');
    await expect(span).toBeVisible();
    await expect(span).toHaveAttribute('role', 'button');
    await expect(span).toHaveText('No Href Link');
    await expect(span).toHaveClass(/button-link--outline/);
    await expect(span).toHaveClass(/context--success/);
  });

  test('should support target and rel attributes', async ({ page }) => {
    await page.setContent(`
      <echo-link href="https://example.com" target="_blank" rel="noopener noreferrer">
        External Link
      </echo-link>
    `);

    const link = page.locator('echo-link a');
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should support icons', async ({ page }) => {
    await page.setContent(`
      <echo-link href="https://example.com" icon="external-link" icon-position="right">
        Link with Icon
      </echo-link>
    `);

    const link = page.locator('echo-link a');
    await expect(link).toBeVisible();
    
    const icon = page.locator('echo-link echo-icon');
    await expect(icon).toBeVisible();
    await expect(icon).toHaveAttribute('name', 'external-link');
  });

  test('should dispatch click event', async ({ page }) => {
    await page.setContent(`
      <echo-link href="https://example.com" id="test-link">
        Clickable Link
      </echo-link>
    `);

    const link = page.locator('echo-link a');
    
    // Listen for the custom event
    const clickEvent = page.waitForEvent('echo-link-click');
    
    await link.click();
    
    const event = await clickEvent;
    expect(event.detail.href).toBe('https://example.com');
  });

  test('should not navigate when disabled', async ({ page }) => {
    await page.setContent(`
      <echo-link href="https://example.com" disabled>
        Disabled Link
      </echo-link>
    `);

    const span = page.locator('echo-link span');
    
    // Click should not navigate
    await span.click();
    
    // Verify we're still on the same page (no navigation occurred)
    expect(page.url()).toBe('about:blank');
  });
});
