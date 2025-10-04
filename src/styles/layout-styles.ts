import { css } from 'lit';

/**
 * Shared layout styles for Design Toolkit components
 *
 * This module provides CSS classes for different layout properties
 * that can be reused across multiple web components.
 *
 * Usage:
 * ```typescript
 * import { layoutStyles } from '../styles/layout-styles.js';
 *
 * static styles = css`
 *   ${layoutStyles}
 *   // ... other styles
 * `;
 * ```
 */
export const layoutStyles = css`
  /* Layout Display */
  .layout--flex {
    display: flex;
  }

  .layout--grid {
    display: grid;
  }

  .layout--block {
    display: block;
  }

  .layout--inline-flex {
    display: inline-flex;
  }

  .layout--inline-grid {
    display: inline-grid;
  }

  /* Flex Direction */
  .layout--row {
    flex-direction: row;
  }

  .layout--column {
    flex-direction: column;
  }

  .layout--row-reverse {
    flex-direction: row-reverse;
  }

  .layout--column-reverse {
    flex-direction: column-reverse;
  }

  /* Flex Wrap */
  .layout--nowrap {
    flex-wrap: nowrap;
  }

  .layout--wrap {
    flex-wrap: wrap;
  }

  .layout--wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* Alignment */
  .layout--align-start {
    align-items: flex-start;
  }

  .layout--align-end {
    align-items: flex-end;
  }

  .layout--align-center {
    align-items: center;
  }

  .layout--align-stretch {
    align-items: stretch;
  }

  .layout--align-baseline {
    align-items: baseline;
  }

  /* Justification */
  .layout--justify-start {
    justify-content: flex-start;
  }

  .layout--justify-end {
    justify-content: flex-end;
  }

  .layout--justify-center {
    justify-content: center;
  }

  .layout--justify-between {
    justify-content: space-between;
  }

  .layout--justify-around {
    justify-content: space-around;
  }

  .layout--justify-evenly {
    justify-content: space-evenly;
  }

  /* Gap Sizes */
  .layout--gap-none {
    gap: 0;
  }

  .layout--gap-xs {
    gap: 4px;
  }

  .layout--gap-small {
    gap: 8px;
  }

  .layout--gap-medium {
    gap: 16px;
  }

  .layout--gap-large {
    gap: 24px;
  }

  .layout--gap-xl {
    gap: 32px;
  }

  /* Layout Sizes 
  .layout--size-xs {
    padding: 4px;
  }

  .layout--size-small {
    padding: 8px;
  }

  .layout--size-medium {
    padding: 16px;
  }

  .layout--size-large {
    padding: 24px;
  }
*/
  /* Grid specific */
  .layout--grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .layout--grid-auto-fill {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .layout--grid-auto-fit {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

/**
 * Layout styles CSS custom properties as a plain CSS string
 * Useful for non-Lit components or when you need raw CSS
 */
export const layoutStylesCSS = `
  /* Layout Display */
  .layout--flex {
    display: flex;
  }

  .layout--grid {
    display: grid;
  }

  .layout--block {
    display: block;
  }

  .layout--inline-flex {
    display: inline-flex;
  }

  .layout--inline-grid {
    display: inline-grid;
  }

  /* Flex Direction */
  .layout--row {
    flex-direction: row;
  }

  .layout--column {
    flex-direction: column;
  }

  .layout--row-reverse {
    flex-direction: row-reverse;
  }

  .layout--column-reverse {
    flex-direction: column-reverse;
  }

  /* Flex Wrap */
  .layout--nowrap {
    flex-wrap: nowrap;
  }

  .layout--wrap {
    flex-wrap: wrap;
  }

  .layout--wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* Alignment */
  .layout--align-start {
    align-items: flex-start;
  }

  .layout--align-end {
    align-items: flex-end;
  }

  .layout--align-center {
    align-items: center;
  }

  .layout--align-stretch {
    align-items: stretch;
  }

  .layout--align-baseline {
    align-items: baseline;
  }

  /* Justification */
  .layout--justify-start {
    justify-content: flex-start;
  }

  .layout--justify-end {
    justify-content: flex-end;
  }

  .layout--justify-center {
    justify-content: center;
  }

  .layout--justify-between {
    justify-content: space-between;
  }

  .layout--justify-around {
    justify-content: space-around;
  }

  .layout--justify-evenly {
    justify-content: space-evenly;
  }

  /* Gap Sizes */
  .layout--gap-none {
    gap: 0;
  }

  .layout--gap-xs {
    gap: 4px;
  }

  .layout--gap-small {
    gap: 8px;
  }

  .layout--gap-medium {
    gap: 16px;
  }

  .layout--gap-large {
    gap: 24px;
  }

  .layout--gap-xl {
    gap: 32px;
  }

  /* Layout Sizes */
  .layout--size-xs {
    padding: 4px;
  }

  .layout--size-small {
    padding: 8px;
  }

  .layout--size-medium {
    padding: 16px;
  }

  .layout--size-large {
    padding: 24px;
  }

  /* Grid specific */
  .layout--grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .layout--grid-auto-fill {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .layout--grid-auto-fit {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

/**
 * Available layout display names
 */
export const layoutDisplayNames = ['flex', 'grid', 'block', 'inline-flex', 'inline-grid'] as const;

/**
 * Available layout direction names
 */
export const layoutDirectionNames = ['row', 'column', 'row-reverse', 'column-reverse'] as const;

/**
 * Available layout wrap names
 */
export const layoutWrapNames = ['nowrap', 'wrap', 'wrap-reverse'] as const;

/**
 * Available layout align names
 */
export const layoutAlignNames = ['start', 'end', 'center', 'stretch', 'baseline'] as const;

/**
 * Available layout justify names
 */
export const layoutJustifyNames = ['start', 'end', 'center', 'between', 'around', 'evenly'] as const;

/**
 * Available layout gap names
 */
export const layoutGapNames = ['none', 'xs', 'small', 'medium', 'large', 'xl'] as const;

/**
 * Available layout size names
 */
export const layoutSizeNames = ['xs', 'small', 'medium', 'large'] as const;

/**
 * Type for layout display names
 */
export type LayoutDisplayName = (typeof layoutDisplayNames)[number];

/**
 * Type for layout direction names
 */
export type LayoutDirectionName = (typeof layoutDirectionNames)[number];

/**
 * Type for layout wrap names
 */
export type LayoutWrapName = (typeof layoutWrapNames)[number];

/**
 * Type for layout align names
 */
export type LayoutAlignName = (typeof layoutAlignNames)[number];

/**
 * Type for layout justify names
 */
export type LayoutJustifyName = (typeof layoutJustifyNames)[number];

/**
 * Type for layout gap names
 */
export type LayoutGapName = (typeof layoutGapNames)[number];

/**
 * Type for layout size names
 */
export type LayoutSizeName = (typeof layoutSizeNames)[number];
