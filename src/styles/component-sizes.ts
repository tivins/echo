import { css } from 'lit';

/**
 * Shared size styles for Design Toolkit components
 *
 * This module provides CSS classes for different component sizes
 * that can be reused across multiple web components.
 *
 * Usage:
 * ```typescript
 * import { componentSizes } from '../styles/component-sizes.js';
 *
 * static styles = css`
 *   ${componentSizes}
 *   // ... other styles
 * `;
 * ```
 */
export const componentSizes = css`
  /* Component Sizes */
  .size--xs {
    padding: 4px 8px;
    font-size: 12px;
    height: 24px;
  }

  .size--small {
    padding: 6px 12px;
    font-size: 14px;
    height: 32px;
  }

  .size--medium {
    padding: 8px 16px;
    font-size: 16px;
    height: 40px;
  }

  .size--large {
    padding: 12px 24px;
    font-size: 18px;
    height: 48px;
  }
`;

/**
 * Component size CSS custom properties as a plain CSS string
 * Useful for non-Lit components or when you need raw CSS
 */
export const componentSizesCSS = `
  /* Component Sizes */
  .size--xs {
    padding: 4px 8px;
    font-size: 12px;
    height: 24px;
  }

  .size--small {
    padding: 6px 12px;
    font-size: 14px;
    height: 32px;
  }

  .size--medium {
    padding: 8px 16px;
    font-size: 16px;
    height: 40px;
  }

  .size--large {
    padding: 12px 24px;
    font-size: 18px;
    height: 48px;
  }
`;

/**
 * Available component size names
 */
export const componentSizeNames = ['xs', 'small', 'medium', 'large'] as const;

/**
 * Type for component size names
 */
export type ComponentSizeName = (typeof componentSizeNames)[number];
