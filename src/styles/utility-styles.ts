import { css } from 'lit';

/**
 * Utility styles for Design Toolkit components
 *
 * This module provides utility CSS classes for common styling needs
 * like margins, paddings, display properties, and widths.
 *
 * Usage:
 * ```typescript
 * import { utilityStyles } from '../styles/utility-styles.js';
 *
 * static styles = css`
 *   ${utilityStyles}
 *   // ... other styles
 * `;
 * ```
 */
export const utilityStyles = css`
  /* Display utilities */
  .u-block {
    display: block !important;
  }

  .u-inline-block {
    display: inline-block !important;
  }

  .u-inline {
    display: inline !important;
  }

  .u-flex {
    display: flex !important;
  }

  .u-inline-flex {
    display: inline-flex !important;
  }

  .u-grid {
    display: grid !important;
  }

  .u-hidden {
    display: none !important;
  }

  /* Width utilities */
  .u-w-100 {
    width: 100% !important;
  }

  .u-w-auto {
    width: auto !important;
  }

  .u-w-fit {
    width: fit-content !important;
  }

  .u-w-max {
    width: max-content !important;
  }

  .u-w-min {
    width: min-content !important;
  }

  /* Margin utilities */
  .u-m-none {
    margin: 0 !important;
  }

  .u-m-xs {
    margin: 4px !important;
  }

  .u-m-sm {
    margin: 8px !important;
  }

  .u-m-md {
    margin: 16px !important;
  }

  .u-m-lg {
    margin: 24px !important;
  }

  .u-m-xl {
    margin: 32px !important;
  }

  /* Margin top */
  .u-mt-none {
    margin-top: 0 !important;
  }

  .u-mt-xs {
    margin-top: 4px !important;
  }

  .u-mt-sm {
    margin-top: 8px !important;
  }

  .u-mt-md {
    margin-top: 16px !important;
  }

  .u-mt-lg {
    margin-top: 24px !important;
  }

  .u-mt-xl {
    margin-top: 32px !important;
  }

  /* Margin bottom */
  .u-mb-none {
    margin-bottom: 0 !important;
  }

  .u-mb-xs {
    margin-bottom: 4px !important;
  }

  .u-mb-sm {
    margin-bottom: 8px !important;
  }

  .u-mb-md {
    margin-bottom: 16px !important;
  }

  .u-mb-lg {
    margin-bottom: 24px !important;
  }

  .u-mb-xl {
    margin-bottom: 32px !important;
  }

  /* Margin left */
  .u-ml-none {
    margin-left: 0 !important;
  }

  .u-ml-xs {
    margin-left: 4px !important;
  }

  .u-ml-sm {
    margin-left: 8px !important;
  }

  .u-ml-md {
    margin-left: 16px !important;
  }

  .u-ml-lg {
    margin-left: 24px !important;
  }

  .u-ml-xl {
    margin-left: 32px !important;
  }

  /* Margin right */
  .u-mr-none {
    margin-right: 0 !important;
  }

  .u-mr-xs {
    margin-right: 4px !important;
  }

  .u-mr-sm {
    margin-right: 8px !important;
  }

  .u-mr-md {
    margin-right: 16px !important;
  }

  .u-mr-lg {
    margin-right: 24px !important;
  }

  .u-mr-xl {
    margin-right: 32px !important;
  }

  /* Margin horizontal */
  .u-mx-none {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .u-mx-xs {
    margin-left: 4px !important;
    margin-right: 4px !important;
  }

  .u-mx-sm {
    margin-left: 8px !important;
    margin-right: 8px !important;
  }

  .u-mx-md {
    margin-left: 16px !important;
    margin-right: 16px !important;
  }

  .u-mx-lg {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }

  .u-mx-xl {
    margin-left: 32px !important;
    margin-right: 32px !important;
  }

  /* Margin vertical */
  .u-my-none {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .u-my-xs {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }

  .u-my-sm {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .u-my-md {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .u-my-lg {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .u-my-xl {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }

  /* Padding utilities */
  .u-p-none {
    padding: 0 !important;
  }

  .u-p-xs {
    padding: 4px !important;
  }

  .u-p-sm {
    padding: 8px !important;
  }

  .u-p-md {
    padding: 16px !important;
  }

  .u-p-lg {
    padding: 24px !important;
  }

  .u-p-xl {
    padding: 32px !important;
  }

  /* Padding top */
  .u-pt-none {
    padding-top: 0 !important;
  }

  .u-pt-xs {
    padding-top: 4px !important;
  }

  .u-pt-sm {
    padding-top: 8px !important;
  }

  .u-pt-md {
    padding-top: 16px !important;
  }

  .u-pt-lg {
    padding-top: 24px !important;
  }

  .u-pt-xl {
    padding-top: 32px !important;
  }

  /* Padding bottom */
  .u-pb-none {
    padding-bottom: 0 !important;
  }

  .u-pb-xs {
    padding-bottom: 4px !important;
  }

  .u-pb-sm {
    padding-bottom: 8px !important;
  }

  .u-pb-md {
    padding-bottom: 16px !important;
  }

  .u-pb-lg {
    padding-bottom: 24px !important;
  }

  .u-pb-xl {
    padding-bottom: 32px !important;
  }

  /* Padding left */
  .u-pl-none {
    padding-left: 0 !important;
  }

  .u-pl-xs {
    padding-left: 4px !important;
  }

  .u-pl-sm {
    padding-left: 8px !important;
  }

  .u-pl-md {
    padding-left: 16px !important;
  }

  .u-pl-lg {
    padding-left: 24px !important;
  }

  .u-pl-xl {
    padding-left: 32px !important;
  }

  /* Padding right */
  .u-pr-none {
    padding-right: 0 !important;
  }

  .u-pr-xs {
    padding-right: 4px !important;
  }

  .u-pr-sm {
    padding-right: 8px !important;
  }

  .u-pr-md {
    padding-right: 16px !important;
  }

  .u-pr-lg {
    padding-right: 24px !important;
  }

  .u-pr-xl {
    padding-right: 32px !important;
  }

  /* Padding horizontal */
  .u-px-none {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .u-px-xs {
    padding-left: 4px !important;
    padding-right: 4px !important;
  }

  .u-px-sm {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .u-px-md {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  .u-px-lg {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .u-px-xl {
    padding-left: 32px !important;
    padding-right: 32px !important;
  }

  /* Padding vertical */
  .u-py-none {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .u-py-xs {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }

  .u-py-sm {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .u-py-md {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  .u-py-lg {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }

  .u-py-xl {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
`;

/**
 * Utility styles CSS custom properties as a plain CSS string
 * Useful for non-Lit components or when you need raw CSS
 */
export const utilityStylesCSS = `
  /* Display utilities */
  .u-block {
    display: block !important;
  }

  .u-inline-block {
    display: inline-block !important;
  }

  .u-inline {
    display: inline !important;
  }

  .u-flex {
    display: flex !important;
  }

  .u-inline-flex {
    display: inline-flex !important;
  }

  .u-grid {
    display: grid !important;
  }

  .u-hidden {
    display: none !important;
  }

  /* Width utilities */
  .u-w-100 {
    width: 100% !important;
  }

  .u-w-auto {
    width: auto !important;
  }

  .u-w-fit {
    width: fit-content !important;
  }

  .u-w-max {
    width: max-content !important;
  }

  .u-w-min {
    width: min-content !important;
  }

  /* Margin utilities */
  .u-m-none {
    margin: 0 !important;
  }

  .u-m-xs {
    margin: 4px !important;
  }

  .u-m-sm {
    margin: 8px !important;
  }

  .u-m-md {
    margin: 16px !important;
  }

  .u-m-lg {
    margin: 24px !important;
  }

  .u-m-xl {
    margin: 32px !important;
  }

  /* Margin top */
  .u-mt-none {
    margin-top: 0 !important;
  }

  .u-mt-xs {
    margin-top: 4px !important;
  }

  .u-mt-sm {
    margin-top: 8px !important;
  }

  .u-mt-md {
    margin-top: 16px !important;
  }

  .u-mt-lg {
    margin-top: 24px !important;
  }

  .u-mt-xl {
    margin-top: 32px !important;
  }

  /* Margin bottom */
  .u-mb-none {
    margin-bottom: 0 !important;
  }

  .u-mb-xs {
    margin-bottom: 4px !important;
  }

  .u-mb-sm {
    margin-bottom: 8px !important;
  }

  .u-mb-md {
    margin-bottom: 16px !important;
  }

  .u-mb-lg {
    margin-bottom: 24px !important;
  }

  .u-mb-xl {
    margin-bottom: 32px !important;
  }

  /* Margin left */
  .u-ml-none {
    margin-left: 0 !important;
  }

  .u-ml-xs {
    margin-left: 4px !important;
  }

  .u-ml-sm {
    margin-left: 8px !important;
  }

  .u-ml-md {
    margin-left: 16px !important;
  }

  .u-ml-lg {
    margin-left: 24px !important;
  }

  .u-ml-xl {
    margin-left: 32px !important;
  }

  /* Margin right */
  .u-mr-none {
    margin-right: 0 !important;
  }

  .u-mr-xs {
    margin-right: 4px !important;
  }

  .u-mr-sm {
    margin-right: 8px !important;
  }

  .u-mr-md {
    margin-right: 16px !important;
  }

  .u-mr-lg {
    margin-right: 24px !important;
  }

  .u-mr-xl {
    margin-right: 32px !important;
  }

  /* Margin horizontal */
  .u-mx-none {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .u-mx-xs {
    margin-left: 4px !important;
    margin-right: 4px !important;
  }

  .u-mx-sm {
    margin-left: 8px !important;
    margin-right: 8px !important;
  }

  .u-mx-md {
    margin-left: 16px !important;
    margin-right: 16px !important;
  }

  .u-mx-lg {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }

  .u-mx-xl {
    margin-left: 32px !important;
    margin-right: 32px !important;
  }

  /* Margin vertical */
  .u-my-none {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .u-my-xs {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }

  .u-my-sm {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .u-my-md {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .u-my-lg {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .u-my-xl {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }

  /* Padding utilities */
  .u-p-none {
    padding: 0 !important;
  }

  .u-p-xs {
    padding: 4px !important;
  }

  .u-p-sm {
    padding: 8px !important;
  }

  .u-p-md {
    padding: 16px !important;
  }

  .u-p-lg {
    padding: 24px !important;
  }

  .u-p-xl {
    padding: 32px !important;
  }

  /* Padding top */
  .u-pt-none {
    padding-top: 0 !important;
  }

  .u-pt-xs {
    padding-top: 4px !important;
  }

  .u-pt-sm {
    padding-top: 8px !important;
  }

  .u-pt-md {
    padding-top: 16px !important;
  }

  .u-pt-lg {
    padding-top: 24px !important;
  }

  .u-pt-xl {
    padding-top: 32px !important;
  }

  /* Padding bottom */
  .u-pb-none {
    padding-bottom: 0 !important;
  }

  .u-pb-xs {
    padding-bottom: 4px !important;
  }

  .u-pb-sm {
    padding-bottom: 8px !important;
  }

  .u-pb-md {
    padding-bottom: 16px !important;
  }

  .u-pb-lg {
    padding-bottom: 24px !important;
  }

  .u-pb-xl {
    padding-bottom: 32px !important;
  }

  /* Padding left */
  .u-pl-none {
    padding-left: 0 !important;
  }

  .u-pl-xs {
    padding-left: 4px !important;
  }

  .u-pl-sm {
    padding-left: 8px !important;
  }

  .u-pl-md {
    padding-left: 16px !important;
  }

  .u-pl-lg {
    padding-left: 24px !important;
  }

  .u-pl-xl {
    padding-left: 32px !important;
  }

  /* Padding right */
  .u-pr-none {
    padding-right: 0 !important;
  }

  .u-pr-xs {
    padding-right: 4px !important;
  }

  .u-pr-sm {
    padding-right: 8px !important;
  }

  .u-pr-md {
    padding-right: 16px !important;
  }

  .u-pr-lg {
    padding-right: 24px !important;
  }

  .u-pr-xl {
    padding-right: 32px !important;
  }

  /* Padding horizontal */
  .u-px-none {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .u-px-xs {
    padding-left: 4px !important;
    padding-right: 4px !important;
  }

  .u-px-sm {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .u-px-md {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  .u-px-lg {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .u-px-xl {
    padding-left: 32px !important;
    padding-right: 32px !important;
  }

  /* Padding vertical */
  .u-py-none {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .u-py-xs {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }

  .u-py-sm {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .u-py-md {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  .u-py-lg {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }

  .u-py-xl {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
`;

/**
 * Available utility display names
 */
export const utilityDisplayNames = [
  'block',
  'inline-block',
  'inline',
  'flex',
  'inline-flex',
  'grid',
  'hidden',
] as const;

/**
 * Available utility width names
 */
export const utilityWidthNames = ['100', 'auto', 'fit', 'max', 'min'] as const;

/**
 * Available utility spacing names
 */
export const utilitySpacingNames = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
] as const;

/**
 * Type for utility display names
 */
export type UtilityDisplayName = (typeof utilityDisplayNames)[number];

/**
 * Type for utility width names
 */
export type UtilityWidthName = (typeof utilityWidthNames)[number];

/**
 * Type for utility spacing names
 */
export type UtilitySpacingName = (typeof utilitySpacingNames)[number];

