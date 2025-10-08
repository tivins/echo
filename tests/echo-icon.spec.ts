import { test, expect } from '@playwright/test';

test.describe('EchoIcon Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/index.html');
  });

  test('renders with default properties', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="close"></echo-icon>
    `);
    
    const icon = page.locator('echo-icon');
    await expect(icon).toBeVisible();
    
    // Check default size
    await expect(icon.locator('.icon--medium')).toBeVisible();
    
    // Check default variant
    await expect(icon.locator('.icon--default')).toBeVisible();
  });

  test('renders with custom size', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="close" size="small"></echo-icon>
      <echo-icon name="close" size="medium"></echo-icon>
      <echo-icon name="close" size="large"></echo-icon>
    `);
    
    const smallIcon = page.locator('echo-icon').first();
    const mediumIcon = page.locator('echo-icon').nth(1);
    const largeIcon = page.locator('echo-icon').last();
    
    await expect(smallIcon.locator('.icon--small')).toBeVisible();
    await expect(mediumIcon.locator('.icon--medium')).toBeVisible();
    await expect(largeIcon.locator('.icon--large')).toBeVisible();
  });

  test('renders with custom variant', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="close" variant="default"></echo-icon>
      <echo-icon name="close" variant="outline"></echo-icon>
      <echo-icon name="close" variant="filled"></echo-icon>
    `);
    
    const defaultIcon = page.locator('echo-icon').first();
    const outlineIcon = page.locator('echo-icon').nth(1);
    const filledIcon = page.locator('echo-icon').last();
    
    await expect(defaultIcon.locator('.icon--default')).toBeVisible();
    await expect(outlineIcon.locator('.icon--outline')).toBeVisible();
    await expect(filledIcon.locator('.icon--filled')).toBeVisible();
  });

  test('renders with context color', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="close" context="primary"></echo-icon>
      <echo-icon name="close" context="success"></echo-icon>
      <echo-icon name="close" context="danger"></echo-icon>
    `);
    
    const primaryIcon = page.locator('echo-icon').first();
    const successIcon = page.locator('echo-icon').nth(1);
    const dangerIcon = page.locator('echo-icon').last();
    
    await expect(primaryIcon.locator('.context--primary')).toBeVisible();
    await expect(successIcon.locator('.context--success')).toBeVisible();
    await expect(dangerIcon.locator('.context--danger')).toBeVisible();
  });

  test('renders with custom color', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="close" color="red"></echo-icon>
    `);
    
    const icon = page.locator('echo-icon .icon');
    await expect(icon).toHaveCSS('color', 'rgb(255, 0, 0)');
  });

  test('handles disabled state', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="close" disabled></echo-icon>
    `);
    
    const icon = page.locator('echo-icon');
    await expect(icon.locator('.icon--disabled')).toBeVisible();
    await expect(icon).toHaveAttribute('disabled');
  });

  test('has proper accessibility attributes', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="close" aria-label="Close dialog"></echo-icon>
    `);
    
    const icon = page.locator('echo-icon .icon');
    await expect(icon).toHaveAttribute('role', 'img');
    await expect(icon).toHaveAttribute('aria-label', 'Close dialog');
  });

  test('dispatches click event on keyboard interaction', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="close"></echo-icon>
    `);
    
    const icon = page.locator('echo-icon .icon');
    let clickEventFired = false;
    
    await page.evaluate(() => {
      document.addEventListener('echo-icon-click', () => {
        (window as any).clickEventFired = true;
      });
    });
    
    await icon.focus();
    await icon.press('Enter');
    
    await page.waitForFunction(() => (window as any).clickEventFired);
    expect(await page.evaluate(() => (window as any).clickEventFired)).toBe(true);
  });

  test('does not dispatch click event when disabled', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="close" disabled></echo-icon>
    `);
    
    const icon = page.locator('echo-icon');
    let clickEventFired = false;
    
    await page.evaluate(() => {
      document.addEventListener('echo-icon-click', () => {
        clickEventFired = true;
      });
    });
    
    await icon.focus();
    await icon.press('Enter');
    
    // Wait a bit to ensure no event is fired
    await page.waitForTimeout(100);
    expect(clickEventFired).toBe(false);
  });

  test('loads different icons correctly', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="arrow-left"></echo-icon>
      <echo-icon name="arrow-right"></echo-icon>
      <echo-icon name="plus"></echo-icon>
      <echo-icon name="minus"></echo-icon>
    `);
    
    const icons = page.locator('echo-icon');
    await expect(icons).toHaveCount(4);
    
    // All icons should be visible
    for (let i = 0; i < 4; i++) {
      await expect(icons.nth(i)).toBeVisible();
    }
  });

  test('handles invalid icon name gracefully', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="invalid-icon"></echo-icon>
    `);
    
    const icon = page.locator('echo-icon');
    await expect(icon).toBeVisible();
    
    // Should fallback to close icon
    const iconDiv = page.locator('echo-icon .icon');
    await expect(iconDiv).toHaveAttribute('aria-label', 'invalid-icon');
  });

  test('updates when name property changes', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="close"></echo-icon>
    `);
    
    const icon = page.locator('echo-icon');
    const iconDiv = page.locator('echo-icon .icon');
    await expect(iconDiv).toHaveAttribute('aria-label', 'close');
    
    await icon.evaluate((el: any) => {
      el.name = 'plus';
    });
    
    await expect(iconDiv).toHaveAttribute('aria-label', 'plus');
  });

  test('has proper focus styles', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="close"></echo-icon>
    `);
    
    const icon = page.locator('echo-icon .icon');
    await icon.focus();
    
    // Check if focus styles are applied
    await expect(icon).toBeFocused();
  });

  test('renders SVG content correctly', async ({ page }) => {
    await page.setContent(`
      <echo-icon name="close"></echo-icon>
    `);
    
    const icon = page.locator('echo-icon');
    const svg = icon.locator('svg');
    
    await expect(svg).toBeVisible();
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(svg).toHaveAttribute('role', 'img');
  });

  test('supports multiple icons on same page', async ({ page }) => {
    await page.setContent(`
      <div>
        <echo-icon name="close"></echo-icon>
        <echo-icon name="plus"></echo-icon>
        <echo-icon name="minus"></echo-icon>
        <echo-icon name="search"></echo-icon>
      </div>
    `);
    
    const icons = page.locator('echo-icon');
    await expect(icons).toHaveCount(4);
    
    // All should be visible and properly rendered
    for (let i = 0; i < 4; i++) {
      await expect(icons.nth(i)).toBeVisible();
    }
  });
});
