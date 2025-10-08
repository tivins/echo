import { test, expect } from '@playwright/test';

test.describe('Echo Button and Link Alignment', () => {
  test('should have centered content by default', async ({ page }) => {
    await page.goto('/demos/index.html');
    
    // Wait for components to load
    await page.waitForSelector('echo-button');
    await page.waitForSelector('echo-link');
    
    // Check default alignment (center)
    const defaultButtonStyles = await page.evaluate(() => {
      const button = document.querySelector('echo-link[align="center"], echo-link:not([align])') as HTMLElement;
      if (!button) return null;
      const computedStyle = window.getComputedStyle(button.querySelector('.button-link') as HTMLElement);
      return {
        justifyContent: computedStyle.justifyContent,
        textAlign: computedStyle.textAlign,
      };
    });
    
    expect(defaultButtonStyles?.justifyContent).toBe('center');
    expect(defaultButtonStyles?.textAlign).toBe('center');
  });
  
  test('should support left alignment', async ({ page }) => {
    await page.goto('/demos/index.html');
    
    // Check left alignment
    const leftButtonStyles = await page.evaluate(() => {
      const button = document.querySelector('echo-button[align="left"]') as HTMLElement;
      if (!button) return null;
      const computedStyle = window.getComputedStyle(button.querySelector('.button-link') as HTMLElement);
      return {
        justifyContent: computedStyle.justifyContent,
        textAlign: computedStyle.textAlign,
      };
    });
    
    expect(leftButtonStyles?.justifyContent).toBe('flex-start');
    expect(leftButtonStyles?.textAlign).toBe('left');
  });
  
  test('should support right alignment', async ({ page }) => {
    await page.goto('/demos/index.html');
    
    // Check right alignment
    const rightButtonStyles = await page.evaluate(() => {
      const button = document.querySelector('echo-link[align="right"]') as HTMLElement;
      if (!button) return null;
      const computedStyle = window.getComputedStyle(button.querySelector('.button-link') as HTMLElement);
      return {
        justifyContent: computedStyle.justifyContent,
        textAlign: computedStyle.textAlign,
      };
    });
    
    expect(rightButtonStyles?.justifyContent).toBe('flex-end');
    expect(rightButtonStyles?.textAlign).toBe('right');
  });
  
  test('should apply utility classes correctly for alignment', async ({ page }) => {
    await page.goto('/demos/index.html');
    
    // Check that utility classes are applied
    const leftButtonClasses = await page.evaluate(() => {
      const button = document.querySelector('echo-button[align="left"]') as HTMLElement;
      return Array.from(button.classList);
    });
    
    const rightButtonClasses = await page.evaluate(() => {
      const button = document.querySelector('echo-link[align="right"]') as HTMLElement;
      return Array.from(button.classList);
    });
    
    expect(leftButtonClasses).toContain('u-text-left');
    expect(rightButtonClasses).toContain('u-text-right');
  });
  
  test('should maintain consistent behavior between button and link', async ({ page }) => {
    await page.goto('/demos/index.html');
    
    // Compare button and link with same alignment
    const buttonStyles = await page.evaluate(() => {
      const button = document.querySelector('echo-button[align="left"]') as HTMLElement;
      const computedStyle = window.getComputedStyle(button.querySelector('.button-link') as HTMLElement);
      return {
        justifyContent: computedStyle.justifyContent,
        textAlign: computedStyle.textAlign,
      };
    });
    
    const linkStyles = await page.evaluate(() => {
      const link = document.querySelector('echo-link[align="left"]') as HTMLElement;
      const computedStyle = window.getComputedStyle(link.querySelector('.button-link') as HTMLElement);
      return {
        justifyContent: computedStyle.justifyContent,
        textAlign: computedStyle.textAlign,
      };
    });
    
    expect(buttonStyles.justifyContent).toBe(linkStyles.justifyContent);
    expect(buttonStyles.textAlign).toBe(linkStyles.textAlign);
  });
});
