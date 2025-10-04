import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type {
  EchoButtonVariant,
  EchoSize,
  EchoContext,
  IconName,
  EchoIconSize,
  EchoIconVariant,
} from '../types/index.js';
import { contextColors } from '../styles/context-colors.js';
import { componentSizes } from '../styles/component-sizes.js';

@customElement('echo-button')
export class EchoButton extends LitElement {
  @property({ type: String })
  variant: EchoButtonVariant = 'default';

  @property({ type: String })
  size: EchoSize = 'medium';

  @property({ type: String })
  context: EchoContext = 'primary';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  icon: IconName | null = null;

  @property({ type: String, attribute: 'icon-position' })
  iconPosition: 'left' | 'right' = 'left';

  @property({ type: String, attribute: 'icon-size' })
  iconSize: EchoIconSize | null = null;

  @property({ type: String, attribute: 'icon-variant' })
  iconVariant: EchoIconVariant | null = null;

  @property({ type: Number, attribute: 'icon-stroke-width' })
  iconStrokeWidth: number | null = null;

  static styles = [
    contextColors,
    componentSizes,
    css`
      :host {
        display: inline-block;
      }

      .button {
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
      }

      .button:focus-visible {
        box-shadow: 0 0 0 2px currentColor;
      }

      .button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      /* Variants */
      .button--default {
        background-color: var(--context-color);
        color: white;
      }

      .button--default:hover:not(:disabled) {
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

      .button--soft {
        background-color: var(--context-color-alpha);
        color: var(--context-color);
        border: none;
      }

      .button--soft:hover:not(:disabled) {
        background-color: var(--context-color);
        color: white;
      }

      /* Icon styling */
      .button__icon {
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        line-height: 1;
      }

      /* Gap spacing for different sizes */
      .size--xs {
        --button-gap: 4px;
      }

      .size--small {
        --button-gap: 6px;
      }

      .size--medium {
        --button-gap: 8px;
      }

      .size--large {
        --button-gap: 10px;
      }
    `,
  ];

  render() {
    const iconElement = this.icon
      ? html`
          <echo-icon
            name=${this.icon}
            size=${this.iconSize || this._getIconSizeFromButtonSize()}
            variant=${this.iconVariant || 'default'}
            stroke-width=${this.iconStrokeWidth || 1.5}
            class="button__icon button__icon--${this.iconPosition}"
            style="--icon-color: currentColor;"
          ></echo-icon>
        `
      : null;

    const content = this.icon
      ? this.iconPosition === 'left'
        ? html`${iconElement}<slot></slot>`
        : html`<slot></slot>${iconElement}`
      : html`<slot></slot>`;

    return html`
      <button
        class="button button--${this.variant} context--${this
          .context} size--${this.size}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        ${content}
      </button>
    `;
  }

  private _getIconSizeFromButtonSize(): EchoIconSize {
    const sizeMap: Record<EchoSize, EchoIconSize> = {
      xs: 'small',
      small: 'small',
      medium: 'medium',
      large: 'large',
    };
    return sizeMap[this.size];
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
