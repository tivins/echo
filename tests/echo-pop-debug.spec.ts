import { test, expect } from '@playwright/test';

test.describe('Echo Pop Debug Test', () => {
  test('should debug pop-in issues', async ({ page }) => {
    // Listen for console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
        console.log('Console error:', msg.text());
      }
    });

    // Navigate to the demo page
    await page.goto('file:///C:/docs/projects/apps/design4/demos/echo-pop-demo.html');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check if echo-pop is defined
    const isEchoPopDefined = await page.evaluate(() => {
      return typeof customElements.get('echo-pop') !== 'undefined';
    });
    console.log('echo-pop custom element defined:', isEchoPopDefined);
    
    // Check if echo-button is defined
    const isEchoButtonDefined = await page.evaluate(() => {
      return typeof customElements.get('echo-button') !== 'undefined';
    });
    console.log('echo-button custom element defined:', isEchoButtonDefined);
    
    // Try to manually trigger a pop-in
    const result = await page.evaluate(() => {
      const firstPop = document.querySelector('echo-pop');
      if (firstPop) {
        console.log('Found echo-pop element:', firstPop);
        console.log('echo-pop properties:', {
          open: firstPop.open,
          variant: firstPop.variant,
          size: firstPop.size
        });
        
        // Try to open it programmatically
        firstPop.open = true;
        console.log('Set open to true');
        
        // Check if pop-content appeared
        const popContent = document.querySelector('.pop-content');
        return {
          popContentFound: !!popContent,
          popContentVisible: popContent ? popContent.offsetParent !== null : false,
          errors: errors
        };
      }
      return { error: 'No echo-pop element found' };
    });
    
    console.log('Debug result:', result);
    
    // Take final screenshot
    await page.screenshot({ path: 'test-results/echo-pop-debug.png', fullPage: true });
    
    // Check for errors
    if (errors.length > 0) {
      console.log('JavaScript errors found:', errors);
    }
  });
});

