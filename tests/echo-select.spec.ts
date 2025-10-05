import { test, expect } from '@playwright/test';

test.describe('EchoSelect Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/test.html');
    // Wait for the component to be defined
    await page.waitForFunction(() => customElements.get('echo-select'));
  });

  test('should render select with default properties', async ({ page }) => {
    const select = page.locator('echo-select').first();
    await expect(select).toBeVisible();
    
    const selectField = select.locator('select');
    await expect(selectField).toBeVisible();
  });

  test('should render different variants', async ({ page }) => {
    const defaultSelect = page.locator('echo-select[variant="default"]').first();
    const outlinedSelect = page.locator('echo-select[variant="outlined"]').first();
    const filledSelect = page.locator('echo-select[variant="filled"]').first();
    const underlinedSelect = page.locator('echo-select[variant="underlined"]').first();

    await expect(defaultSelect).toBeVisible();
    await expect(outlinedSelect).toBeVisible();
    await expect(filledSelect).toBeVisible();
    await expect(underlinedSelect).toBeVisible();
  });

  test('should render different contexts', async ({ page }) => {
    const primarySelect = page.locator('echo-select[context="primary"]').first();
    const secondarySelect = page.locator('echo-select[context="secondary"]').first();
    const successSelect = page.locator('echo-select[context="success"]').first();
    const dangerSelect = page.locator('echo-select[context="danger"]').first();
    const warningSelect = page.locator('echo-select[context="warning"]').first();
    const infoSelect = page.locator('echo-select[context="info"]').first();

    await expect(primarySelect).toBeVisible();
    await expect(secondarySelect).toBeVisible();
    await expect(successSelect).toBeVisible();
    await expect(dangerSelect).toBeVisible();
    await expect(warningSelect).toBeVisible();
    await expect(infoSelect).toBeVisible();
  });

  test('should render different sizes', async ({ page }) => {
    const smallSelect = page.locator('echo-select[size="small"]').first();
    const mediumSelect = page.locator('echo-select[size="medium"]').first();
    const largeSelect = page.locator('echo-select[size="large"]').first();

    await expect(smallSelect).toBeVisible();
    await expect(mediumSelect).toBeVisible();
    await expect(largeSelect).toBeVisible();
  });

  test('should render with label', async ({ page }) => {
    const select = page.locator('echo-select[label="Test Label"]').first();
    await expect(select).toBeVisible();
    
    const label = select.locator('label');
    await expect(label).toBeVisible();
    await expect(label).toHaveText('Test Label');
  });

  test('should render with placeholder', async ({ page }) => {
    const select = page.locator('echo-select[placeholder="Choose an option"]').first();
    await expect(select).toBeVisible();
    
    const selectField = select.locator('select');
    await expect(selectField).toBeVisible();
    
    const placeholderOption = selectField.locator('option[disabled]').first();
    await expect(placeholderOption).toHaveText('Choose an option');
  });

  test('should render with description', async ({ page }) => {
    const select = page.locator('echo-select[description="This is a description"]').first();
    await expect(select).toBeVisible();
    
    const description = select.locator('.select-description');
    await expect(description).toBeVisible();
    await expect(description).toHaveText('This is a description');
  });

  test('should render with icon', async ({ page }) => {
    const select = page.locator('echo-select[icon="mail"]').first();
    await expect(select).toBeVisible();
    
    const icon = select.locator('echo-icon');
    await expect(icon).toBeVisible();
    await expect(icon).toHaveAttribute('name', 'mail');
  });

  test('should render with icon on right side', async ({ page }) => {
    const select = page.locator('echo-select[icon="mail"][icon-position="right"]').first();
    await expect(select).toBeVisible();
    
    const icon = select.locator('echo-icon');
    await expect(icon).toBeVisible();
    await expect(icon).toHaveClass(/select-icon--right/);
  });

  test('should render disabled state', async ({ page }) => {
    const select = page.locator('echo-select[disabled]').first();
    await expect(select).toBeVisible();
    
    const selectField = select.locator('select');
    await expect(selectField).toBeDisabled();
  });

  test('should render required state', async ({ page }) => {
    const select = page.locator('echo-select[required]').first();
    await expect(select).toBeVisible();
    
    const selectField = select.locator('select');
    await expect(selectField).toHaveAttribute('required');
    
    const label = select.locator('label');
    await expect(label).toHaveClass(/select-label--required/);
  });

  test('should render multiple select', async ({ page }) => {
    const select = page.locator('echo-select[multiple]').first();
    await expect(select).toBeVisible();
    
    const selectField = select.locator('select');
    await expect(selectField).toHaveAttribute('multiple');
  });

  test('should render options', async ({ page }) => {
    const select = page.locator('echo-select').first();
    await expect(select).toBeVisible();
    
    const selectField = select.locator('select');
    const options = selectField.locator('option');
    
    // Should have at least some options
    await expect(options).toHaveCount({ min: 1 });
  });

  test('should handle value changes', async ({ page }) => {
    const select = page.locator('echo-select').first();
    await expect(select).toBeVisible();
    
    const selectField = select.locator('select');
    
    // Listen for the custom event
    const eventPromise = page.waitForEvent('echo-select-change');
    
    // Change the value
    await selectField.selectOption({ index: 1 });
    
    // Wait for the event
    const event = await eventPromise;
    expect(event).toBeTruthy();
  });

  test('should handle focus events', async ({ page }) => {
    const select = page.locator('echo-select').first();
    await expect(select).toBeVisible();
    
    const selectField = select.locator('select');
    
    // Listen for the custom event
    const eventPromise = page.waitForEvent('echo-select-focus');
    
    // Focus the select
    await selectField.focus();
    
    // Wait for the event
    const event = await eventPromise;
    expect(event).toBeTruthy();
  });

  test('should handle blur events', async ({ page }) => {
    const select = page.locator('echo-select').first();
    await expect(select).toBeVisible();
    
    const selectField = select.locator('select');
    
    // Focus first, then blur
    await selectField.focus();
    
    // Listen for the custom event
    const eventPromise = page.waitForEvent('echo-select-blur');
    
    // Blur the select
    await selectField.blur();
    
    // Wait for the event
    const event = await eventPromise;
    expect(event).toBeTruthy();
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    const select = page.locator('echo-select[label="Test Label"]').first();
    await expect(select).toBeVisible();
    
    const label = select.locator('label');
    const selectField = select.locator('select');
    
    // Check that label is properly associated with select
    const labelFor = await label.getAttribute('for');
    const selectId = await selectField.getAttribute('id');
    expect(labelFor).toBe(selectId);
  });

  test('should support custom name attribute', async ({ page }) => {
    const select = page.locator('echo-select[name="custom-name"]').first();
    await expect(select).toBeVisible();
    
    const selectField = select.locator('select');
    await expect(selectField).toHaveAttribute('name', 'custom-name');
  });

  test('should support custom id attribute', async ({ page }) => {
    const select = page.locator('echo-select[id="custom-id"]').first();
    await expect(select).toBeVisible();
    
    const selectField = select.locator('select');
    await expect(selectField).toHaveAttribute('id', 'custom-id');
  });

  test('should render with different icon sizes', async ({ page }) => {
    const smallIconSelect = page.locator('echo-select[icon="mail"][icon-size="small"]').first();
    const mediumIconSelect = page.locator('echo-select[icon="mail"][icon-size="medium"]').first();
    const largeIconSelect = page.locator('echo-select[icon="mail"][icon-size="large"]').first();

    await expect(smallIconSelect).toBeVisible();
    await expect(mediumIconSelect).toBeVisible();
    await expect(largeIconSelect).toBeVisible();
    
    const smallIcon = smallIconSelect.locator('echo-icon');
    const mediumIcon = mediumIconSelect.locator('echo-icon');
    const largeIcon = largeIconSelect.locator('echo-icon');
    
    await expect(smallIcon).toHaveAttribute('size', 'small');
    await expect(mediumIcon).toHaveAttribute('size', 'medium');
    await expect(largeIcon).toHaveAttribute('size', 'large');
  });

  test('should render with different icon variants', async ({ page }) => {
    const defaultIconSelect = page.locator('echo-select[icon="mail"][icon-variant="default"]').first();
    const filledIconSelect = page.locator('echo-select[icon="mail"][icon-variant="filled"]').first();
    const outlinedIconSelect = page.locator('echo-select[icon="mail"][icon-variant="outlined"]').first();

    await expect(defaultIconSelect).toBeVisible();
    await expect(filledIconSelect).toBeVisible();
    await expect(outlinedIconSelect).toBeVisible();
    
    const defaultIcon = defaultIconSelect.locator('echo-icon');
    const filledIcon = filledIconSelect.locator('echo-icon');
    const outlinedIcon = outlinedIconSelect.locator('echo-icon');
    
    await expect(defaultIcon).toHaveAttribute('variant', 'default');
    await expect(filledIcon).toHaveAttribute('variant', 'filled');
    await expect(outlinedIcon).toHaveAttribute('variant', 'outlined');
  });
});
