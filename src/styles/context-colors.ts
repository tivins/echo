import { css } from 'lit';

/**
 * Shared context color styles for Design Toolkit components
 * 
 * This module provides CSS custom properties for different context colors
 * that can be reused across multiple web components.
 * 
 * Usage:
 * ```typescript
 * import { contextColors } from '../styles/context-colors.js';
 * 
 * static styles = css`
 *   ${contextColors}
 *   // ... other styles
 * `;
 * ```
 */
export const contextColors = css`
  /* Context Colors */
  .context--primary {
    --context-color: #3b82f6;
    --context-color-hover: #2563eb;
    --context-color-alpha: rgba(59, 130, 246, 0.1);
  }

  .context--secondary {
    --context-color: #6b7280;
    --context-color-hover: #4b5563;
    --context-color-alpha: rgba(107, 114, 128, 0.1);
  }

  .context--success {
    --context-color: #10b981;
    --context-color-hover: #059669;
    --context-color-alpha: rgba(16, 185, 129, 0.1);
  }

  .context--danger {
    --context-color: #ef4444;
    --context-color-hover: #dc2626;
    --context-color-alpha: rgba(239, 68, 68, 0.1);
  }

  .context--warning {
    --context-color: #f59e0b;
    --context-color-hover: #d97706;
    --context-color-alpha: rgba(245, 158, 11, 0.1);
  }

  .context--info {
    --context-color: #06b6d4;
    --context-color-hover: #0891b2;
    --context-color-alpha: rgba(6, 182, 212, 0.1);
  }
`;

/**
 * Context color CSS custom properties as a plain CSS string
 * Useful for non-Lit components or when you need raw CSS
 */
export const contextColorsCSS = `
  /* Context Colors */
  .context--primary {
    --context-color: #3b82f6;
    --context-color-hover: #2563eb;
    --context-color-alpha: rgba(59, 130, 246, 0.1);
  }

  .context--secondary {
    --context-color: #6b7280;
    --context-color-hover: #4b5563;
    --context-color-alpha: rgba(107, 114, 128, 0.1);
  }

  .context--success {
    --context-color: #10b981;
    --context-color-hover: #059669;
    --context-color-alpha: rgba(16, 185, 129, 0.1);
  }

  .context--danger {
    --context-color: #ef4444;
    --context-color-hover: #dc2626;
    --context-color-alpha: rgba(239, 68, 68, 0.1);
  }

  .context--warning {
    --context-color: #f59e0b;
    --context-color-hover: #d97706;
    --context-color-alpha: rgba(245, 158, 11, 0.1);
  }

  .context--info {
    --context-color: #06b6d4;
    --context-color-hover: #0891b2;
    --context-color-alpha: rgba(6, 182, 212, 0.1);
  }
`;

/**
 * Available context color names
 */
export const contextColorNames = [
  'primary',
  'secondary', 
  'success',
  'danger',
  'warning',
  'info'
] as const;

/**
 * Type for context color names
 */
export type ContextColorName = typeof contextColorNames[number];
