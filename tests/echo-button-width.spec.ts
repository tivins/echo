import { test, expect } from '@playwright/test';

test.describe('Echo Button Width', () => {
  test('button with display="block" should have width: 100%', async ({ page }) => {
    await page.goto('/tests/button-width-test.html');
    
    // Wait for the component to load
    await page.waitForSelector('echo-button');
    
    // Get the container width to compare
    const containerWidth = await page.locator('.container').first().evaluate(el => el.offsetWidth);
    
    // Get the block button host element width (not the internal button)
    const blockButton = page.locator('echo-button[display="block"]').first();
    const blockButtonWidth = await blockButton.evaluate(el => {
      return el.offsetWidth;
    });
    
    // The block button should take most of the container width (accounting for padding)
    // Container has 20px padding on each side, so available width is containerWidth - 40px
    const availableWidth = containerWidth - 40;
    expect(blockButtonWidth).toBeGreaterThan(availableWidth * 0.9);
  });

  test('button with display="block" should have u-w-100 class', async ({ page }) => {
    await page.goto('/tests/button-width-test.html');
    
    // Wait for the component to load
    await page.waitForSelector('echo-button');
    
    // Check that the block button has the u-w-100 class on the host element
    const blockButton = page.locator('echo-button[display="block"]').first();
    const hasWidthClass = await blockButton.evaluate(el => {
      return el.classList.contains('u-w-100');
    });
    
    expect(hasWidthClass).toBe(true);
  });

  test('button with display="inline" should not have u-w-100 class', async ({ page }) => {
    await page.goto('/tests/button-width-test.html');
    
    // Wait for the component to load
    await page.waitForSelector('echo-button');
    
    // Check that the inline button does not have the u-w-100 class on the host element
    const inlineButton = page.locator('echo-button').first();
    const hasWidthClass = await inlineButton.evaluate(el => {
      return el.classList.contains('u-w-100');
    });
    
    expect(hasWidthClass).toBe(false);
  });
});
