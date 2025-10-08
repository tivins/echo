import { css } from 'lit';
import { contextColors } from './context-colors.js';
import { componentSizes } from './component-sizes.js';

/**
 * Shared styles for button and link components
 * This allows both components to have consistent styling while maintaining semantic HTML
 */
export const buttonLinkStyles = [
  contextColors,
  componentSizes,
  css`
    :host {
      display: inline-block;
    }

    :host(.u-block) {
      display: block !important;
    }

    :host(.u-inline-block) {
      display: inline-block !important;
    }

    :host(.u-inline) {
      display: inline !important;
    }

    :host(.u-flex) {
      display: flex !important;
    }

    :host(.u-inline-flex) {
      display: inline-flex !important;
    }

    :host(.u-grid) {
      display: grid !important;
    }

    :host(.u-hidden) {
      display: none !important;
    }

    :host(.u-w-100) {
      width: 100% !important;
    }

    :host(.u-text-left) .button-link {
      justify-content: flex-start !important;
      text-align: left !important;
    }

    :host(.u-text-center) .button-link {
      justify-content: center !important;
      text-align: center !important;
    }

    :host(.u-text-right) .button-link {
      justify-content: flex-end !important;
      text-align: right !important;
    }

    .button-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--button-gap, 8px);
      border: none;
      border-radius: 4px;
      font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.124s ease-in-out;
      text-decoration: none;
      outline: none;
      vertical-align: middle;
      line-height: 1;
      text-align: center;
      /* Force consistent sizing - override browser defaults */
      box-sizing: border-box;
      margin: 0;
      padding: 8px 16px;
      font-size: 16px;
      height: 40px;
    }

    .button-link:focus-visible {
      box-shadow: 0 0 0 2px currentColor;
    }

    .button-link:disabled,
    .button-link[aria-disabled='true'] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Variants */
    .button-link--default {
      background-color: var(--context-color);
      color: white;
    }

    .button-link--default:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: var(--context-color-hover);
    }

    .button-link--link {
      background-color: transparent;
      color: var(--context-color);
    }

    .button-link--link:hover:not(:disabled):not([aria-disabled='true']) {
      color: var(--context-color-hover);
      text-decoration: underline;
    }

    .button-link--outline {
      background-color: transparent;
      color: var(--context-color);
      border: 1px solid var(--context-color);
    }

    .button-link--outline:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: var(--context-color);
      color: white;
    }

    .button-link--ghost {
      background-color: transparent;
      color: var(--context-color);
      border: none;
    }

    .button-link--ghost:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: var(--context-color-alpha);
    }

    .button-link--soft {
      background-color: var(--context-color-alpha);
      color: var(--context-color);
      border: none;
    }

    .button-link--soft:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: var(--context-color);
      color: white;
    }

    /* Icon styling */
    .button-link__icon {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      line-height: 1;
    }

    /* Size overrides - ensure consistent sizing across button and link */
    .button-link.size--xs {
      padding: 4px 8px !important;
      font-size: 12px !important;
      height: 24px !important;
      --button-gap: 4px;
    }

    .button-link.size--small {
      padding: 6px 12px !important;
      font-size: 14px !important;
      height: 32px !important;
      --button-gap: 6px;
    }

    .button-link.size--medium {
      padding: 8px 16px !important;
      font-size: 16px !important;
      height: 40px !important;
      --button-gap: 8px;
    }

    .button-link.size--large {
      padding: 12px 24px !important;
      font-size: 18px !important;
      height: 48px !important;
      --button-gap: 10px;
    }
  `,
];
