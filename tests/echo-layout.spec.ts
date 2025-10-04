import { test, expect } from '@playwright/test';

test.describe('EchoLayout Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/test.html');
    // Wait for the component to be defined
    await page.waitForFunction(() => customElements.get('echo-layout'));
  });

  test('should render layout with default properties', async ({ page }) => {
    const layout = page.locator('echo-layout').first();
    await expect(layout).toBeVisible();
    
    // Check default classes are applied
    const layoutElement = layout.locator('.layout');
    await expect(layoutElement).toHaveClass(/layout--flex/);
    await expect(layoutElement).toHaveClass(/layout--row/);
    await expect(layoutElement).toHaveClass(/layout--gap-medium/);
    await expect(layoutElement).toHaveClass(/layout--size-medium/);
  });

  test('should render different display types', async ({ page }) => {
    const flexLayout = page.locator('echo-layout[display="flex"]').first();
    const gridLayout = page.locator('echo-layout[display="grid"]').first();
    const inlineFlexLayout = page.locator('echo-layout[display="inline-flex"]').first();
    const inlineGridLayout = page.locator('echo-layout[display="inline-grid"]').first();

    await expect(flexLayout).toBeVisible();
    await expect(gridLayout).toBeVisible();
    await expect(inlineFlexLayout).toBeVisible();
    await expect(inlineGridLayout).toBeVisible();

    // Check that correct display classes are applied
    await expect(flexLayout.locator('.layout')).toHaveClass(/layout--flex/);
    await expect(gridLayout.locator('.layout')).toHaveClass(/layout--grid/);
    await expect(inlineFlexLayout.locator('.layout')).toHaveClass(/layout--inline-flex/);
    await expect(inlineGridLayout.locator('.layout')).toHaveClass(/layout--inline-grid/);
  });

  test('should render different flex directions', async ({ page }) => {
    const rowLayout = page.locator('echo-layout[direction="row"]').first();
    const columnLayout = page.locator('echo-layout[direction="column"]').first();
    const rowReverseLayout = page.locator('echo-layout[direction="row-reverse"]').first();
    const columnReverseLayout = page.locator('echo-layout[direction="column-reverse"]').first();

    await expect(rowLayout).toBeVisible();
    await expect(columnLayout).toBeVisible();
    await expect(rowReverseLayout).toBeVisible();
    await expect(columnReverseLayout).toBeVisible();

    // Check that correct direction classes are applied
    await expect(rowLayout.locator('.layout')).toHaveClass(/layout--row/);
    await expect(columnLayout.locator('.layout')).toHaveClass(/layout--column/);
    await expect(rowReverseLayout.locator('.layout')).toHaveClass(/layout--row-reverse/);
    await expect(columnReverseLayout.locator('.layout')).toHaveClass(/layout--column-reverse/);
  });

  test('should render different gap sizes', async ({ page }) => {
    const noGapLayout = page.locator('echo-layout[gap="none"]').first();
    const xsGapLayout = page.locator('echo-layout[gap="xs"]').first();
    const smallGapLayout = page.locator('echo-layout[gap="small"]').first();
    const mediumGapLayout = page.locator('echo-layout[gap="medium"]').first();
    const largeGapLayout = page.locator('echo-layout[gap="large"]').first();
    const xlGapLayout = page.locator('echo-layout[gap="xl"]').first();

    await expect(noGapLayout).toBeVisible();
    await expect(xsGapLayout).toBeVisible();
    await expect(smallGapLayout).toBeVisible();
    await expect(mediumGapLayout).toBeVisible();
    await expect(largeGapLayout).toBeVisible();
    await expect(xlGapLayout).toBeVisible();

    // Check that correct gap classes are applied
    await expect(noGapLayout.locator('.layout')).toHaveClass(/layout--gap-none/);
    await expect(xsGapLayout.locator('.layout')).toHaveClass(/layout--gap-xs/);
    await expect(smallGapLayout.locator('.layout')).toHaveClass(/layout--gap-small/);
    await expect(mediumGapLayout.locator('.layout')).toHaveClass(/layout--gap-medium/);
    await expect(largeGapLayout.locator('.layout')).toHaveClass(/layout--gap-large/);
    await expect(xlGapLayout.locator('.layout')).toHaveClass(/layout--gap-xl/);
  });

  test('should render different alignment options', async ({ page }) => {
    const alignStartLayout = page.locator('echo-layout[align="start"]').first();
    const alignCenterLayout = page.locator('echo-layout[align="center"]').first();
    const alignEndLayout = page.locator('echo-layout[align="end"]').first();
    const alignStretchLayout = page.locator('echo-layout[align="stretch"]').first();
    const alignBaselineLayout = page.locator('echo-layout[align="baseline"]').first();

    await expect(alignStartLayout).toBeVisible();
    await expect(alignCenterLayout).toBeVisible();
    await expect(alignEndLayout).toBeVisible();
    await expect(alignStretchLayout).toBeVisible();
    await expect(alignBaselineLayout).toBeVisible();

    // Check that correct align classes are applied
    await expect(alignStartLayout.locator('.layout')).toHaveClass(/layout--align-start/);
    await expect(alignCenterLayout.locator('.layout')).toHaveClass(/layout--align-center/);
    await expect(alignEndLayout.locator('.layout')).toHaveClass(/layout--align-end/);
    await expect(alignStretchLayout.locator('.layout')).toHaveClass(/layout--align-stretch/);
    await expect(alignBaselineLayout.locator('.layout')).toHaveClass(/layout--align-baseline/);
  });

  test('should render different justify options', async ({ page }) => {
    const justifyStartLayout = page.locator('echo-layout[justify="start"]').first();
    const justifyCenterLayout = page.locator('echo-layout[justify="center"]').first();
    const justifyEndLayout = page.locator('echo-layout[justify="end"]').first();
    const justifyBetweenLayout = page.locator('echo-layout[justify="between"]').first();
    const justifyAroundLayout = page.locator('echo-layout[justify="around"]').first();
    const justifyEvenlyLayout = page.locator('echo-layout[justify="evenly"]').first();

    await expect(justifyStartLayout).toBeVisible();
    await expect(justifyCenterLayout).toBeVisible();
    await expect(justifyEndLayout).toBeVisible();
    await expect(justifyBetweenLayout).toBeVisible();
    await expect(justifyAroundLayout).toBeVisible();
    await expect(justifyEvenlyLayout).toBeVisible();

    // Check that correct justify classes are applied
    await expect(justifyStartLayout.locator('.layout')).toHaveClass(/layout--justify-start/);
    await expect(justifyCenterLayout.locator('.layout')).toHaveClass(/layout--justify-center/);
    await expect(justifyEndLayout.locator('.layout')).toHaveClass(/layout--justify-end/);
    await expect(justifyBetweenLayout.locator('.layout')).toHaveClass(/layout--justify-between/);
    await expect(justifyAroundLayout.locator('.layout')).toHaveClass(/layout--justify-around/);
    await expect(justifyEvenlyLayout.locator('.layout')).toHaveClass(/layout--justify-evenly/);
  });

  test('should render different wrap options', async ({ page }) => {
    const nowrapLayout = page.locator('echo-layout[wrap="nowrap"]').first();
    const wrapLayout = page.locator('echo-layout[wrap="wrap"]').first();
    const wrapReverseLayout = page.locator('echo-layout[wrap="wrap-reverse"]').first();

    await expect(nowrapLayout).toBeVisible();
    await expect(wrapLayout).toBeVisible();
    await expect(wrapReverseLayout).toBeVisible();

    // Check that correct wrap classes are applied
    await expect(nowrapLayout.locator('.layout')).toHaveClass(/layout--nowrap/);
    await expect(wrapLayout.locator('.layout')).toHaveClass(/layout--wrap/);
    await expect(wrapReverseLayout.locator('.layout')).toHaveClass(/layout--wrap-reverse/);
  });

  test('should render different size options', async ({ page }) => {
    const xsLayout = page.locator('echo-layout[size="xs"]').first();
    const smallLayout = page.locator('echo-layout[size="small"]').first();
    const mediumLayout = page.locator('echo-layout[size="medium"]').first();
    const largeLayout = page.locator('echo-layout[size="large"]').first();

    await expect(xsLayout).toBeVisible();
    await expect(smallLayout).toBeVisible();
    await expect(mediumLayout).toBeVisible();
    await expect(largeLayout).toBeVisible();

    // Check that correct size classes are applied
    await expect(xsLayout.locator('.layout')).toHaveClass(/layout--size-xs/);
    await expect(smallLayout.locator('.layout')).toHaveClass(/layout--size-small/);
    await expect(mediumLayout.locator('.layout')).toHaveClass(/layout--size-medium/);
    await expect(largeLayout.locator('.layout')).toHaveClass(/layout--size-large/);
  });

  test('should render grid with different column configurations', async ({ page }) => {
    const autoFitGrid = page.locator('echo-layout[columns="auto-fit"]').first();
    const autoFillGrid = page.locator('echo-layout[columns="auto-fill"]').first();
    const fixedColumnsGrid = page.locator('echo-layout[columns="3"]').first();

    await expect(autoFitGrid).toBeVisible();
    await expect(autoFillGrid).toBeVisible();
    await expect(fixedColumnsGrid).toBeVisible();

    // Check that correct grid classes are applied
    await expect(autoFitGrid.locator('.layout')).toHaveClass(/layout--grid-auto-fit/);
    await expect(autoFillGrid.locator('.layout')).toHaveClass(/layout--grid-auto-fill/);
    await expect(fixedColumnsGrid.locator('.layout')).toHaveClass(/layout--grid-custom-columns/);
  });

  test('should render grid with different row configurations', async ({ page }) => {
    const autoRowsGrid = page.locator('echo-layout[rows="auto"]').first();
    const fixedRowsGrid = page.locator('echo-layout[rows="2"]').first();

    await expect(autoRowsGrid).toBeVisible();
    await expect(fixedRowsGrid).toBeVisible();

    // Check that correct grid classes are applied
    await expect(fixedRowsGrid.locator('.layout')).toHaveClass(/layout--grid-custom-rows/);
  });

  test('should render slot content', async ({ page }) => {
    const layout = page.locator('echo-layout').first();
    const slotContent = layout.locator('div').first();
    
    await expect(slotContent).toBeVisible();
    await expect(slotContent).toHaveText('Item 1');
  });

  test('should update properties dynamically', async ({ page }) => {
    const layout = page.locator('echo-layout').first();
    
    // Test setting display
    await layout.evaluate((el) => el.setDisplay('grid'));
    await expect(layout.locator('.layout')).toHaveClass(/layout--grid/);
    
    // Test setting direction
    await layout.evaluate((el) => el.setDirection('column'));
    await expect(layout.locator('.layout')).toHaveClass(/layout--column/);
    
    // Test setting align
    await layout.evaluate((el) => el.setAlign('center'));
    await expect(layout.locator('.layout')).toHaveClass(/layout--align-center/);
    
    // Test setting justify
    await layout.evaluate((el) => el.setJustify('between'));
    await expect(layout.locator('.layout')).toHaveClass(/layout--justify-between/);
    
    // Test setting gap
    await layout.evaluate((el) => el.setGap('large'));
    await expect(layout.locator('.layout')).toHaveClass(/layout--gap-large/);
    
    // Test setting columns
    await layout.evaluate((el) => el.setColumns(4));
    await expect(layout.locator('.layout')).toHaveClass(/layout--grid-custom-columns/);
    
    // Test setting rows
    await layout.evaluate((el) => el.setRows(3));
    await expect(layout.locator('.layout')).toHaveClass(/layout--grid-custom-rows/);
  });

  test('should handle complex combinations of properties', async ({ page }) => {
    const complexLayout = page.locator('echo-layout[display="flex"][direction="column"][align="center"][justify="between"][gap="large"][size="large"]').first();
    
    await expect(complexLayout).toBeVisible();
    
    const layoutElement = complexLayout.locator('.layout');
    await expect(layoutElement).toHaveClass(/layout--flex/);
    await expect(layoutElement).toHaveClass(/layout--column/);
    await expect(layoutElement).toHaveClass(/layout--align-center/);
    await expect(layoutElement).toHaveClass(/layout--justify-between/);
    await expect(layoutElement).toHaveClass(/layout--gap-large/);
    await expect(layoutElement).toHaveClass(/layout--size-large/);
  });

  test('should render inline variants correctly', async ({ page }) => {
    const inlineFlexLayout = page.locator('echo-layout[display="inline-flex"]').first();
    const inlineGridLayout = page.locator('echo-layout[display="inline-grid"]').first();

    await expect(inlineFlexLayout).toBeVisible();
    await expect(inlineGridLayout).toBeVisible();

    // Check that inline display classes are applied
    await expect(inlineFlexLayout.locator('.layout')).toHaveClass(/layout--inline-flex/);
    await expect(inlineGridLayout.locator('.layout')).toHaveClass(/layout--inline-grid/);
  });
});
