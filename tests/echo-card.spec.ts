import { test, expect } from '@playwright/test';

test.describe('EchoCard Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/test.html');
    // Wait for the component to be defined
    await page.waitForFunction(() => customElements.get('echo-card'));
  });

  test('should render card with default properties', async ({ page }) => {
    const card = page.locator('echo-card').first();
    await expect(card).toBeVisible();
  });

  test('should render different variants', async ({ page }) => {
    const defaultCard = page.locator('echo-card[variant="default"]').first();
    const outlinedCard = page.locator('echo-card[variant="outlined"]').first();
    const elevatedCard = page.locator('echo-card[variant="elevated"]').first();
    const flatCard = page.locator('echo-card[variant="flat"]').first();

    await expect(defaultCard).toBeVisible();
    await expect(outlinedCard).toBeVisible();
    await expect(elevatedCard).toBeVisible();
    await expect(flatCard).toBeVisible();
  });

  test('should render different sizes', async ({ page }) => {
    const smallCard = page.locator('echo-card[size="small"]').first();
    const mediumCard = page.locator('echo-card[size="medium"]').first();
    const largeCard = page.locator('echo-card[size="large"]').first();

    await expect(smallCard).toBeVisible();
    await expect(mediumCard).toBeVisible();
    await expect(largeCard).toBeVisible();
  });

  test('should render different contexts', async ({ page }) => {
    const primaryCard = page.locator('echo-card[context="primary"]').first();
    const secondaryCard = page.locator('echo-card[context="secondary"]').first();
    const successCard = page.locator('echo-card[context="success"]').first();
    const dangerCard = page.locator('echo-card[context="danger"]').first();
    const warningCard = page.locator('echo-card[context="warning"]').first();
    const infoCard = page.locator('echo-card[context="info"]').first();

    await expect(primaryCard).toBeVisible();
    await expect(secondaryCard).toBeVisible();
    await expect(successCard).toBeVisible();
    await expect(dangerCard).toBeVisible();
    await expect(warningCard).toBeVisible();
    await expect(infoCard).toBeVisible();
  });

  test('should render card with title', async ({ page }) => {
    const cardWithTitle = page.locator('echo-card[title="Test Card"]').first();
    await expect(cardWithTitle).toBeVisible();
    await expect(cardWithTitle.locator('.card__title')).toHaveText('Test Card');
  });

  test('should render card with icon', async ({ page }) => {
    const cardWithIcon = page.locator('echo-card[icon="star"]').first();
    await expect(cardWithIcon).toBeVisible();
    await expect(cardWithIcon.locator('echo-icon[name="star"]')).toBeVisible();
  });

  test('should render card with title and icon', async ({ page }) => {
    const cardWithBoth = page.locator('echo-card[title="Card with Icon"][icon="heart"]').first();
    await expect(cardWithBoth).toBeVisible();
    await expect(cardWithBoth.locator('.card__title')).toHaveText('Card with Icon');
    await expect(cardWithBoth.locator('echo-icon[name="heart"]')).toBeVisible();
  });

  test('should render closable card', async ({ page }) => {
    const closableCard = page.locator('echo-card[closable]').first();
    await expect(closableCard).toBeVisible();
    await expect(closableCard.locator('.card__close-button')).toBeVisible();
    await expect(closableCard.locator('echo-icon[name="x"]')).toBeVisible();
  });

  test('should handle close button click', async ({ page }) => {
    const closableCard = page.locator('echo-card[closable]').first();
    await expect(closableCard).toBeVisible();
    
    // Click the close button
    await closableCard.locator('.card__close-button').click();
    
    // Card should be hidden
    await expect(closableCard).not.toBeVisible();
  });

  test('should render disabled card', async ({ page }) => {
    const disabledCard = page.locator('echo-card[disabled]').first();
    await expect(disabledCard).toBeVisible();
    
    // Check if disabled styling is applied
    const cardElement = disabledCard.locator('.card');
    await expect(cardElement).toHaveClass(/card--disabled/);
  });

  test('should render card with content', async ({ page }) => {
    const cardWithContent = page.locator('echo-card').first();
    await expect(cardWithContent).toBeVisible();
    await expect(cardWithContent.locator('.card__content')).toBeVisible();
  });

  test('should render card with footer', async ({ page }) => {
    const cardWithFooter = page.locator('echo-card').first();
    await expect(cardWithFooter).toBeVisible();
    
    // Check if footer slot exists
    const footerSlot = cardWithFooter.locator('slot[name="footer"]');
    await expect(footerSlot).toBeVisible();
  });

  test('should render card with header actions', async ({ page }) => {
    const cardWithHeaderActions = page.locator('echo-card').first();
    await expect(cardWithHeaderActions).toBeVisible();
    
    // Check if header actions slot exists
    const headerActionsSlot = cardWithHeaderActions.locator('slot[name="header-actions"]');
    await expect(headerActionsSlot).toBeVisible();
  });

  test('should emit close event when closed', async ({ page }) => {
    const closableCard = page.locator('echo-card[closable]').first();
    
    // Listen for the close event
    const closeEventPromise = page.waitForEvent('echo-card-close');
    
    // Click the close button
    await closableCard.locator('.card__close-button').click();
    
    // Wait for the event
    const event = await closeEventPromise;
    expect(event.detail.card).toBeDefined();
  });

  test('should not close when disabled', async ({ page }) => {
    const disabledClosableCard = page.locator('echo-card[closable][disabled]').first();
    await expect(disabledClosableCard).toBeVisible();
    
    // Try to click the close button
    await disabledClosableCard.locator('.card__close-button').click();
    
    // Card should still be visible
    await expect(disabledClosableCard).toBeVisible();
  });

  test('should handle different icon sizes', async ({ page }) => {
    const cardWithSmallIcon = page.locator('echo-card[icon="star"][icon-size="small"]').first();
    const cardWithLargeIcon = page.locator('echo-card[icon="star"][icon-size="large"]').first();

    await expect(cardWithSmallIcon).toBeVisible();
    await expect(cardWithLargeIcon).toBeVisible();
    
    // Check if icons have correct size classes
    await expect(cardWithSmallIcon.locator('echo-icon')).toHaveAttribute('size', 'small');
    await expect(cardWithLargeIcon.locator('echo-icon')).toHaveAttribute('size', 'large');
  });

  test('should handle different icon variants', async ({ page }) => {
    const cardWithFilledIcon = page.locator('echo-card[icon="star"][icon-variant="filled"]').first();
    const cardWithOutlineIcon = page.locator('echo-card[icon="star"][icon-variant="outline"]').first();

    await expect(cardWithFilledIcon).toBeVisible();
    await expect(cardWithOutlineIcon).toBeVisible();
    
    // Check if icons have correct variant classes
    await expect(cardWithFilledIcon.locator('echo-icon')).toHaveAttribute('variant', 'filled');
    await expect(cardWithOutlineIcon.locator('echo-icon')).toHaveAttribute('variant', 'outline');
  });

  test('should render card without header when no title, icon, or close button', async ({ page }) => {
    const simpleCard = page.locator('echo-card').first();
    await expect(simpleCard).toBeVisible();
    
    // Check if header is not rendered
    const header = simpleCard.locator('.card__header');
    await expect(header).not.toBeVisible();
  });

  test('should apply correct CSS classes based on properties', async ({ page }) => {
    const card = page.locator('echo-card[variant="elevated"][size="large"][context="success"]').first();
    await expect(card).toBeVisible();
    
    const cardElement = card.locator('.card');
    await expect(cardElement).toHaveClass(/card--elevated/);
    await expect(cardElement).toHaveClass(/card--large/);
    await expect(cardElement).toHaveClass(/context--success/);
  });

  test('should not show footer when footer slot is empty', async ({ page }) => {
    // Navigate to our specific test page
    await page.goto('http://localhost:3000/demos/echo-card-footer-test.html');
    await page.waitForFunction(() => customElements.get('echo-card'));
    
    // Test card without footer content
    const cardWithoutFooter = page.locator('echo-card[title="Card without footer"]').first();
    await expect(cardWithoutFooter).toBeVisible();
    
    // Footer should not be visible
    const footer = cardWithoutFooter.locator('.card__footer');
    await expect(footer).not.toBeVisible();
  });

  test('should show footer when footer slot has content', async ({ page }) => {
    // Navigate to our specific test page
    await page.goto('http://localhost:3000/demos/echo-card-footer-test.html');
    await page.waitForFunction(() => customElements.get('echo-card'));
    
    // Test card with footer content
    const cardWithFooter = page.locator('echo-card[title="Card with footer"]').first();
    await expect(cardWithFooter).toBeVisible();
    
    // Footer should be visible
    const footer = cardWithFooter.locator('.card__footer');
    await expect(footer).toBeVisible();
    
    // Footer should contain buttons
    await expect(footer.locator('echo-button')).toHaveCount(2);
  });

  test('should not show footer when footer slot contains only whitespace', async ({ page }) => {
    // Navigate to our specific test page
    await page.goto('http://localhost:3000/demos/echo-card-footer-test.html');
    await page.waitForFunction(() => customElements.get('echo-card'));
    
    // Test card with whitespace-only footer
    const cardWithWhitespaceFooter = page.locator('echo-card[title="Card with whitespace footer"]').first();
    await expect(cardWithWhitespaceFooter).toBeVisible();
    
    // Footer should not be visible
    const footer = cardWithWhitespaceFooter.locator('.card__footer');
    await expect(footer).not.toBeVisible();
  });

  test('should show footer when footer slot has text content', async ({ page }) => {
    // Navigate to our specific test page
    await page.goto('http://localhost:3000/demos/echo-card-footer-test.html');
    await page.waitForFunction(() => customElements.get('echo-card'));
    
    // Test card with text-only footer
    const cardWithTextFooter = page.locator('echo-card[title="Card with text footer"]').first();
    await expect(cardWithTextFooter).toBeVisible();
    
    // Footer should be visible
    const footer = cardWithTextFooter.locator('.card__footer');
    await expect(footer).toBeVisible();
    
    // Footer should contain text
    await expect(footer.locator('span')).toHaveText('Footer text content');
  });
});
