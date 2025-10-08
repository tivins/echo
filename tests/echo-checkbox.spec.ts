import { expect, test } from '@playwright/test';

test.describe('EchoCheckbox Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/echo-checkbox-demo.html');
  });

  test('should render checkbox with default properties', async ({ page }) => {
    const checkbox = page.locator('echo-checkbox[type="checkbox"]').first();
    await expect(checkbox).toBeVisible();
    
    const input = checkbox.locator('input[type="checkbox"]');
    await expect(input).toBeVisible();
    
    const label = checkbox.locator('label');
    await expect(label).toHaveText('Accept terms and conditions');
  });

  test('should render radio button with correct properties', async ({ page }) => {
    const radio = page.locator('echo-checkbox[type="radio"]').first();
    await expect(radio).toBeVisible();
    
    const input = radio.locator('input[type="radio"]');
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute('name', 'payment');
    await expect(input).toHaveAttribute('value', 'credit-card');
  });

  test('should render toggle switch', async ({ page }) => {
    const toggle = page.locator('echo-checkbox[type="toggle"]').first();
    await expect(toggle).toBeVisible();
    
    const input = toggle.locator('input[type="checkbox"]');
    await expect(input).toBeVisible();
    
    const visual = toggle.locator('.checkbox-visual--toggle');
    await expect(visual).toBeVisible();
  });

  test('should handle checkbox click events', async ({ page }) => {
    const checkbox = page.locator('echo-checkbox[type="checkbox"]').first();
    const input = checkbox.locator('input[type="checkbox"]');
    
    // Initially checked
    await expect(input).toBeChecked();
    
    // Click to uncheck
    await checkbox.click();
    await expect(input).not.toBeChecked();
    
    // Click again to check
    await checkbox.click();
    await expect(input).toBeChecked();
  });

  test('should handle radio button selection', async ({ page }) => {
    const radio1 = page.locator('echo-checkbox[type="radio"][value="credit-card"]');
    const radio2 = page.locator('echo-checkbox[type="radio"][value="paypal"]');
    
    const input1 = radio1.locator('input[type="radio"]');
    const input2 = radio2.locator('input[type="radio"]');
    
    // Initially first radio is checked
    await expect(input1).toBeChecked();
    await expect(input2).not.toBeChecked();
    
    // Click second radio
    await radio2.click();
    await expect(input1).not.toBeChecked();
    await expect(input2).toBeChecked();
  });

  test('should handle toggle switch', async ({ page }) => {
    const toggle = page.locator('echo-checkbox[type="toggle"]').first();
    const input = toggle.locator('input[type="checkbox"]');
    
    // Initially checked
    await expect(input).toBeChecked();
    
    // Click to toggle off
    await toggle.click();
    await expect(input).not.toBeChecked();
    
    // Click to toggle on
    await toggle.click();
    await expect(input).toBeChecked();
  });

  test('should respect disabled state', async ({ page }) => {
    const disabledCheckbox = page.locator('echo-checkbox[disabled]').first();
    const input = disabledCheckbox.locator('input');
    
    await expect(input).toBeDisabled();
    
    // Should not change state when clicked
    await disabledCheckbox.click();
    await expect(input).not.toBeChecked();
  });

  test('should display different sizes correctly', async ({ page }) => {
    const smallCheckbox = page.locator('echo-checkbox[size="small"]').first();
    const mediumCheckbox = page.locator('echo-checkbox[size="medium"]').first();
    const largeCheckbox = page.locator('echo-checkbox[size="large"]').first();
    
    await expect(smallCheckbox).toBeVisible();
    await expect(mediumCheckbox).toBeVisible();
    await expect(largeCheckbox).toBeVisible();
    
    // Check that visual elements have correct size classes
    const smallVisual = smallCheckbox.locator('.checkbox-visual--small');
    const mediumVisual = mediumCheckbox.locator('.checkbox-visual--medium');
    const largeVisual = largeCheckbox.locator('.checkbox-visual--large');
    
    await expect(smallVisual).toBeVisible();
    await expect(mediumVisual).toBeVisible();
    await expect(largeVisual).toBeVisible();
  });

  test('should display descriptions', async ({ page }) => {
    const checkboxWithDescription = page.locator('echo-checkbox').filter({ hasText: 'Accept terms and conditions' });
    const description = checkboxWithDescription.locator('.checkbox-description');
    
    await expect(description).toBeVisible();
    await expect(description).toHaveText('Please read our terms before proceeding');
  });

  test('should handle required state', async ({ page }) => {
    const requiredCheckbox = page.locator('echo-checkbox[required]').first();
    const input = requiredCheckbox.locator('input');
    const label = requiredCheckbox.locator('label');
    
    await expect(input).toHaveAttribute('required');
    await expect(label).toHaveClass(/checkbox-label--required/);
  });

  test('should emit custom events', async ({ page }) => {
    const demoCheckbox = page.locator('#demo-checkbox');
    const statusDiv = page.locator('#status');
    
    // Listen for custom events
    let eventReceived = false;
    page.on('console', msg => {
      if (msg.text().includes('echo-checkbox-change')) {
        eventReceived = true;
      }
    });
    
    // Click the checkbox
    await demoCheckbox.click();
    
    // Check that status was updated
    await expect(statusDiv).toContainText('Checkbox changed to');
  });

  test('should work with different context colors', async ({ page }) => {
    const primaryCheckbox = page.locator('echo-checkbox[context="primary"]').first();
    const successCheckbox = page.locator('echo-checkbox[context="success"]').first();
    const dangerCheckbox = page.locator('echo-checkbox[context="danger"]').first();
    
    await expect(primaryCheckbox).toBeVisible();
    await expect(successCheckbox).toBeVisible();
    await expect(dangerCheckbox).toBeVisible();
    
    // Check that context classes are applied
    await expect(primaryCheckbox).toHaveClass(/context--primary/);
    await expect(successCheckbox).toHaveClass(/context--success/);
    await expect(dangerCheckbox).toHaveClass(/context--danger/);
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    const checkbox = page.locator('echo-checkbox[type="checkbox"]').first();
    const visual = checkbox.locator('.checkbox-visual');
    const input = checkbox.locator('input');
    
    // Check ARIA attributes
    await expect(visual).toHaveAttribute('role', 'checkbox');
    await expect(visual).toHaveAttribute('aria-checked', 'true');
    
    // Check that input is properly associated with label
    const label = checkbox.locator('label');
    const inputId = await input.getAttribute('id');
    const labelFor = await label.getAttribute('for');
    
    expect(inputId).toBe(labelFor);
  });

  test('should handle keyboard navigation', async ({ page }) => {
    const checkbox = page.locator('echo-checkbox[type="checkbox"]').first();
    const input = checkbox.locator('input');
    
    // Focus the checkbox
    await checkbox.focus();
    await expect(input).toBeFocused();
    
    // Press space to toggle
    await page.keyboard.press('Space');
    await expect(input).not.toBeChecked();
    
    // Press space again
    await page.keyboard.press('Space');
    await expect(input).toBeChecked();
  });

  test('should maintain state consistency', async ({ page }) => {
    const checkbox = page.locator('echo-checkbox[type="checkbox"]').first();
    const input = checkbox.locator('input');
    const visual = checkbox.locator('.checkbox-visual');
    
    // Check initial state
    await expect(input).toBeChecked();
    await expect(visual).toHaveClass(/checkbox-visual--checked/);
    
    // Click and verify both input and visual update
    await checkbox.click();
    await expect(input).not.toBeChecked();
    await expect(visual).not.toHaveClass(/checkbox-visual--checked/);
  });
});
