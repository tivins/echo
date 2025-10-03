import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { EchoButtonVariant, EchoSize, EchoContext } from '../types/index.js';

@customElement('echo-button')
export class EchoButton extends LitElement {
  
  @property({ type: String })
  variant: EchoButtonVariant = 'primary';

  @property({ type: String })
  size: EchoSize = 'medium';

  @property({ type: String })
  context: EchoContext = 'primary';

  @property({ type: Boolean })
  disabled = false;

  static styles = css`
    :host {
      display: inline-block;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 4px;
      font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.124s ease-in-out;
      text-decoration: none;
      outline: none;
    }

    .button:focus-visible {
      box-shadow: 0 0 0 2px currentColor;
    }

    .button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Variants */
    .button--primary {
      background-color: var(--context-color);
      color: white;
    }

    .button--primary:hover:not(:disabled) {
      background-color: var(--context-color-hover);
    }

    .button--link {
      background-color: transparent;
      color: var(--context-color);
    }

    .button--link:hover:not(:disabled) {
      color: var(--context-color-hover);
      text-decoration: underline;
    }

    .button--secondary {
      background-color: var(--context-color);
      color: white;
    }

    .button--secondary:hover:not(:disabled) {
      background-color: var(--context-color-hover);
    }

    .button--outline {
      background-color: transparent;
      color: var(--context-color);
      border: 1px solid var(--context-color);
    }

    .button--outline:hover:not(:disabled) {
      background-color: var(--context-color);
      color: white;
    }

    .button--ghost {
      background-color: transparent;
      color: var(--context-color);
      border: none;
    }

    .button--ghost:hover:not(:disabled) {
      background-color: var(--context-color-alpha);
    }

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

    /* Sizes */
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

  render() {
    return html`
      <button
        class="button button--${this.variant} context--${this.context} size--${this.size}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.dispatchEvent(
      new CustomEvent('echo-button-click', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'echo-button': EchoButton;
  }
}
