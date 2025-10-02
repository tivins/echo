import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('design-button')
export class DesignButton extends LitElement {
  @property({ type: String })
  variant: 'primary' | 'secondary' | 'outline' = 'primary';
  
  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';
  
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
      border-radius: 6px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      outline: none;
    }

    .button:focus-visible {
      box-shadow: 0 0 0 2px #3b82f6;
    }

    .button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Variants */
    .button--primary {
      background-color: #3b82f6;
      color: white;
    }

    .button--primary:hover:not(:disabled) {
      background-color: #2563eb;
    }

    .button--secondary {
      background-color: #6b7280;
      color: white;
    }

    .button--secondary:hover:not(:disabled) {
      background-color: #4b5563;
    }

    .button--outline {
      background-color: transparent;
      color: #3b82f6;
      border: 1px solid #3b82f6;
    }

    .button--outline:hover:not(:disabled) {
      background-color: #3b82f6;
      color: white;
    }

    /* Sizes */
    .button--small {
      padding: 6px 12px;
      font-size: 14px;
      height: 32px;
    }

    .button--medium {
      padding: 8px 16px;
      font-size: 16px;
      height: 40px;
    }

    .button--large {
      padding: 12px 24px;
      font-size: 18px;
      height: 48px;
    }
  `;

  render() {
    return html`
      <button
        class="button button--${this.variant} button--${this.size}"
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
      new CustomEvent('design-button-click', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'design-button': DesignButton;
  }
}
