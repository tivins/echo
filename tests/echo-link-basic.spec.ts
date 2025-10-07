import { test, expect } from '@playwright/test';

test.describe('EchoLink Component Basic Test', () => {
  test('should render echo-link component', async ({ page }) => {
    await page.setContent(`
      <script type="module" src="../docs/design-toolkit.esm.bundled.js"></script>
      <echo-link href="https://example.com">Test Link</echo-link>
    `);

    // Wait for the component to be defined
    await page.waitForFunction(() => customElements.get('echo-link'));
    
    const link = page.locator('echo-link');
    await expect(link).toBeVisible();
    
    // Check if it renders as a link or span
    const linkElement = page.locator('echo-link a');
    const spanElement = page.locator('echo-link span');
    
    // One of them should exist
    const hasLink = await linkElement.count() > 0;
    const hasSpan = await spanElement.count() > 0;
    
    expect(hasLink || hasSpan).toBe(true);
  });
});
