import { test, expect } from '@playwright/test';

test.describe('EchoSeparator Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/separator-test.html');
    // Wait for the component to be defined
    await page.waitForFunction(() => customElements.get('echo-separator'));
  });

  test('should render separator with default properties', async ({ page }) => {
    const separator = page.locator('echo-separator').first();
    await expect(separator).toBeVisible();
  });

  test('should render different variants', async ({ page }) => {
    const solidSeparator = page.locator('echo-separator[variant="solid"]').first();
    const dottedSeparator = page.locator('echo-separator[variant="dotted"]').first();
    const dashedSeparator = page.locator('echo-separator[variant="dashed"]').first();
    const doubleSeparator = page.locator('echo-separator[variant="double"]').first();
    const gradientSeparator = page.locator('echo-separator[variant="gradient"]').first();

    await expect(solidSeparator).toBeVisible();
    await expect(dottedSeparator).toBeVisible();
    await expect(dashedSeparator).toBeVisible();
    await expect(doubleSeparator).toBeVisible();
    await expect(gradientSeparator).toBeVisible();
  });

  test('should render different margins', async ({ page }) => {
    const smallMargin = page.locator('echo-separator[margin="small"]').first();
    const mediumMargin = page.locator('echo-separator[margin="medium"]').first();
    const largeMargin = page.locator('echo-separator[margin="large"]').first();

    await expect(smallMargin).toBeVisible();
    await expect(mediumMargin).toBeVisible();
    await expect(largeMargin).toBeVisible();
  });

  test('should render different orientations', async ({ page }) => {
    const horizontalSeparator = page.locator('echo-separator[orientation="horizontal"]').first();
    const verticalSeparator = page.locator('echo-separator[orientation="vertical"]').first();

    await expect(horizontalSeparator).toBeVisible();
    await expect(verticalSeparator).toBeVisible();
  });

  test('should render different thickness', async ({ page }) => {
    const thinSeparator = page.locator('echo-separator[thickness="thin"]').first();
    const mediumSeparator = page.locator('echo-separator[thickness="medium"]').first();
    const thickSeparator = page.locator('echo-separator[thickness="thick"]').first();

    await expect(thinSeparator).toBeVisible();
    await expect(mediumSeparator).toBeVisible();
    await expect(thickSeparator).toBeVisible();
  });

  test('should render different contexts', async ({ page }) => {
    const primarySeparator = page.locator('echo-separator[context="primary"]').first();
    const secondarySeparator = page.locator('echo-separator[context="secondary"]').first();
    const successSeparator = page.locator('echo-separator[context="success"]').first();
    const dangerSeparator = page.locator('echo-separator[context="danger"]').first();
    const warningSeparator = page.locator('echo-separator[context="warning"]').first();
    const infoSeparator = page.locator('echo-separator[context="info"]').first();

    await expect(primarySeparator).toBeVisible();
    await expect(secondarySeparator).toBeVisible();
    await expect(successSeparator).toBeVisible();
    await expect(dangerSeparator).toBeVisible();
    await expect(warningSeparator).toBeVisible();
    await expect(infoSeparator).toBeVisible();
  });

  test('should render separator with custom color', async ({ page }) => {
    const customColorSeparator = page.locator('echo-separator[color="#ff6b6b"]').first();
    await expect(customColorSeparator).toBeVisible();
  });

  test('should render separator with content', async ({ page }) => {
    const separatorWithText = page.locator('echo-separator:has-text("OR")').first();
    await expect(separatorWithText).toBeVisible();
    await expect(separatorWithText).toContainText('OR');
  });

  test('should render combinations of properties', async ({ page }) => {
    const dashedPrimarySeparator = page.locator('echo-separator[variant="dashed"][context="primary"]').first();
    const dottedDangerSeparator = page.locator('echo-separator[variant="dotted"][context="danger"]').first();
    const thickSuccessSeparator = page.locator('echo-separator[thickness="thick"][context="success"]').first();

    await expect(dashedPrimarySeparator).toBeVisible();
    await expect(dottedDangerSeparator).toBeVisible();
    await expect(thickSuccessSeparator).toBeVisible();
  });

  test('should have proper ARIA attributes', async ({ page }) => {
    const separator = page.locator('echo-separator').first();
    const hr = separator.locator('hr').first();
    
    await expect(hr).toHaveAttribute('role', 'separator');
    await expect(hr).toHaveAttribute('aria-orientation', 'horizontal');
  });

  test('should render vertical separator with proper ARIA orientation', async ({ page }) => {
    const verticalSeparator = page.locator('echo-separator[orientation="vertical"]').first();
    const hr = verticalSeparator.locator('hr').first();
    
    await expect(hr).toHaveAttribute('aria-orientation', 'vertical');
  });
});

