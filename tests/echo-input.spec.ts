import { test, expect } from '@playwright/test';

test.describe('EchoInput Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tests/echo-input-test.html');
    // Wait for the component to be defined
    await page.waitForFunction(() => customElements.get('echo-input'));
  });

  test('should render input with default properties', async ({ page }) => {
    const input = page.locator('echo-input').first();
    await expect(input).toBeVisible();
    
    const inputField = input.locator('input');
    await expect(inputField).toBeVisible();
    await expect(inputField).toHaveAttribute('type', 'text');
  });

  test('should render different variants', async ({ page }) => {
    const defaultInput = page.locator('echo-input[variant="default"]').first();
    const outlinedInput = page.locator('echo-input[variant="outlined"]').first();
    const filledInput = page.locator('echo-input[variant="filled"]').first();
    const underlinedInput = page.locator('echo-input[variant="underlined"]').first();

    await expect(defaultInput).toBeVisible();
    await expect(outlinedInput).toBeVisible();
    await expect(filledInput).toBeVisible();
    await expect(underlinedInput).toBeVisible();
  });

  test('should render different contexts', async ({ page }) => {
    const primaryInput = page.locator('echo-input[context="primary"]').first();
    const secondaryInput = page.locator('echo-input[context="secondary"]').first();
    const successInput = page.locator('echo-input[context="success"]').first();
    const dangerInput = page.locator('echo-input[context="danger"]').first();
    const warningInput = page.locator('echo-input[context="warning"]').first();
    const infoInput = page.locator('echo-input[context="info"]').first();

    await expect(primaryInput).toBeVisible();
    await expect(secondaryInput).toBeVisible();
    await expect(successInput).toBeVisible();
    await expect(dangerInput).toBeVisible();
    await expect(warningInput).toBeVisible();
    await expect(infoInput).toBeVisible();
  });

  test('should render different sizes', async ({ page }) => {
    const smallInput = page.locator('echo-input[size="small"]').first();
    const mediumInput = page.locator('echo-input[size="medium"]').first();
    const largeInput = page.locator('echo-input[size="large"]').first();

    await expect(smallInput).toBeVisible();
    await expect(mediumInput).toBeVisible();
    await expect(largeInput).toBeVisible();
  });

  test('should render different input types', async ({ page }) => {
    const textInput = page.locator('echo-input[type="text"]').first();
    const emailInput = page.locator('echo-input[type="email"]').first();
    const passwordInput = page.locator('echo-input[type="password"]').first();
    const numberInput = page.locator('echo-input[type="number"]').first();

    await expect(textInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(numberInput).toBeVisible();

    // Check the actual input type attributes
    await expect(textInput.locator('input')).toHaveAttribute('type', 'text');
    await expect(emailInput.locator('input')).toHaveAttribute('type', 'email');
    await expect(passwordInput.locator('input')).toHaveAttribute('type', 'password');
    await expect(numberInput.locator('input')).toHaveAttribute('type', 'number');
  });

  test('should render label when provided', async ({ page }) => {
    const inputWithLabel = page.locator('echo-input[label="Username"]').first();
    await expect(inputWithLabel).toBeVisible();
    
    const label = inputWithLabel.locator('label');
    await expect(label).toBeVisible();
    await expect(label).toHaveText('Username');
  });

  test('should render description when provided', async ({ page }) => {
    const inputWithDescription = page.locator('echo-input[description="Enter your username"]').first();
    await expect(inputWithDescription).toBeVisible();
    
    const description = inputWithDescription.locator('.input-description');
    await expect(description).toBeVisible();
    await expect(description).toHaveText('Enter your username');
  });

  test('should render icon when provided', async ({ page }) => {
    const inputWithIcon = page.locator('echo-input[icon="user"]').first();
    await expect(inputWithIcon).toBeVisible();
    
    const icon = inputWithIcon.locator('echo-icon');
    await expect(icon).toBeVisible();
    await expect(icon).toHaveAttribute('name', 'user');
  });

  test('should render icon with different positions', async ({ page }) => {
    const inputWithLeftIcon = page.locator('echo-input[icon="user"][icon-position="left"]').first();
    const inputWithRightIcon = page.locator('echo-input[icon="user"][icon-position="right"]').first();
    
    await expect(inputWithLeftIcon).toBeVisible();
    await expect(inputWithRightIcon).toBeVisible();
    
    const leftIcon = inputWithLeftIcon.locator('echo-icon');
    const rightIcon = inputWithRightIcon.locator('echo-icon');
    
    await expect(leftIcon).toBeVisible();
    await expect(rightIcon).toBeVisible();
    
    await expect(leftIcon).toHaveClass(/input-icon--left/);
    await expect(rightIcon).toHaveClass(/input-icon--right/);
  });

  test('should handle disabled state', async ({ page }) => {
    const disabledInput = page.locator('echo-input[disabled]').first();
    await expect(disabledInput).toBeVisible();
    
    const inputField = disabledInput.locator('input');
    await expect(inputField).toBeDisabled();
  });

  test('should handle readonly state', async ({ page }) => {
    const readonlyInput = page.locator('echo-input[readonly]').first();
    await expect(readonlyInput).toBeVisible();
    
    const inputField = readonlyInput.locator('input');
    await expect(inputField).toHaveAttribute('readonly');
  });

  test('should handle required state', async ({ page }) => {
    const requiredInput = page.locator('echo-input[required]').first();
    await expect(requiredInput).toBeVisible();
    
    const inputField = requiredInput.locator('input');
    await expect(inputField).toHaveAttribute('required');
    
    // Check for required indicator in label
    const label = requiredInput.locator('label');
    await expect(label).toHaveClass(/input-label--required/);
  });

  test('should handle placeholder', async ({ page }) => {
    const inputWithPlaceholder = page.locator('echo-input[placeholder="Enter text here"]').first();
    await expect(inputWithPlaceholder).toBeVisible();
    
    const inputField = inputWithPlaceholder.locator('input');
    await expect(inputField).toHaveAttribute('placeholder', 'Enter text here');
  });

  test('should handle value', async ({ page }) => {
    const inputWithValue = page.locator('echo-input[value="test value"]').first();
    await expect(inputWithValue).toBeVisible();
    
    const inputField = inputWithValue.locator('input');
    await expect(inputField).toHaveValue('test value');
  });

  test('should emit input change event', async ({ page }) => {
    const component = page.locator('echo-input').first();
    const inputField = component.locator('input');
    
    // Listen for the custom event on the component
    const eventPromise = component.evaluateHandle(el => {
      return new Promise(resolve => {
        el.addEventListener('echo-input-change', resolve, { once: true });
      });
    });
    
    // Type in the input field
    await inputField.fill('test input');
    
    const event = await eventPromise;
    expect(event).toBeTruthy();
  });

  test('should emit focus event', async ({ page }) => {
    const component = page.locator('echo-input').first();
    const inputField = component.locator('input');
    
    // Listen for the custom event on the component
    const eventPromise = component.evaluateHandle(el => {
      return new Promise(resolve => {
        el.addEventListener('echo-input-focus', resolve, { once: true });
      });
    });
    
    // Focus the input field
    await inputField.focus();
    
    const event = await eventPromise;
    expect(event).toBeTruthy();
  });

  test('should emit blur event', async ({ page }) => {
    const component = page.locator('echo-input').first();
    const inputField = component.locator('input');
    
    // Listen for the custom event on the component
    const eventPromise = component.evaluateHandle(el => {
      return new Promise(resolve => {
        el.addEventListener('echo-input-blur', resolve, { once: true });
      });
    });
    
    // Focus then blur the input field
    await inputField.focus();
    await inputField.blur();
    
    const event = await eventPromise;
    expect(event).toBeTruthy();
  });

  test('should handle validation attributes', async ({ page }) => {
    const inputWithValidation = page.locator('echo-input[minlength="3"][maxlength="10"]').first();
    await expect(inputWithValidation).toBeVisible();
    
    const inputField = inputWithValidation.locator('input');
    await expect(inputField).toHaveAttribute('minlength', '3');
    await expect(inputField).toHaveAttribute('maxlength', '10');
  });

  test('should handle pattern attribute', async ({ page }) => {
    const inputWithPattern = page.locator('echo-input[pattern="[0-9]+"]').first();
    await expect(inputWithPattern).toBeVisible();
    
    const inputField = inputWithPattern.locator('input');
    await expect(inputField).toHaveAttribute('pattern', '[0-9]+');
  });

  test('should handle name and id attributes', async ({ page }) => {
    const inputWithAttributes = page.locator('echo-input[name="username"][id="user-input"]').first();
    await expect(inputWithAttributes).toBeVisible();
    
    const inputField = inputWithAttributes.locator('input');
    await expect(inputField).toHaveAttribute('name', 'username');
    await expect(inputField).toHaveAttribute('id', 'user-input');
  });


  test('should handle combinations of properties', async ({ page }) => {
    const complexInput = page.locator('echo-input[variant="outlined"][context="success"][size="large"][required]').first();
    await expect(complexInput).toBeVisible();
    
    const inputField = complexInput.locator('input');
    await expect(inputField).toHaveAttribute('required');
    
    const label = complexInput.locator('label');
    await expect(label).toHaveClass(/input-label--required/);
  });
});
