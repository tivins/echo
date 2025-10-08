import { test, expect } from '@playwright/test';

test.describe('Echo Pop HTTP Test', () => {
  test('should test pop-in via HTTP server', async ({ page }) => {
    // Start a simple HTTP server
    const { spawn } = require('child_process');
    const server = spawn('node', ['test-server.js'], { 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    
    // Wait for server to start
    await page.waitForTimeout(2000);
    
    try {
      // Navigate to the demo page via HTTP
      await page.goto('/tests/echo-pop-demo.html');
      
      // Wait for the page to load
      await page.waitForLoadState('networkidle');
      
      // Check if echo-pop is defined
      const isEchoPopDefined = await page.evaluate(() => {
        return typeof customElements.get('echo-pop') !== 'undefined';
      });
      console.log('echo-pop custom element defined:', isEchoPopDefined);
      
      // Try to click a button and see if pop-in appears
      const firstButton = page.locator('echo-button').first();
      if (await firstButton.count() > 0) {
        console.log('Found echo-button, clicking...');
        await firstButton.click();
        
        // Wait for pop-in to appear
        await page.waitForTimeout(1000);
        
        // Check if pop-content appeared
        const popContent = page.locator('.pop-content');
        const popCount = await popContent.count();
        console.log(`Found ${popCount} pop-content elements after click`);
        
        if (popCount > 0) {
          console.log('✅ Pop-in is working!');
          await page.screenshot({ path: 'test-results/echo-pop-working.png', fullPage: true });
        } else {
          console.log('❌ Pop-in not appearing');
          await page.screenshot({ path: 'test-results/echo-pop-not-working.png', fullPage: true });
        }
      }
      
    } finally {
      // Clean up server
      server.kill();
    }
  });
});

