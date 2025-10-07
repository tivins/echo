import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type {
  EchoButtonVariant,
  EchoSize,
  EchoContext,
  IconName,
  EchoIconSize,
  EchoIconVariant,
} from '../types/index.js';
import { buttonLinkStyles } from '../styles/button-link-styles.js';

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

  static styles = buttonLinkStyles;

  render() {
    const iconElement = this.icon
      ? html`
          <echo-icon
            name=${this.icon}
            size=${this.iconSize || this._getIconSizeFromButtonSize()}
            variant=${this.iconVariant || 'default'}
            stroke-width=${this.iconStrokeWidth || 1.5}
            class="button-link__icon button-link__icon--${this.iconPosition}"
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
        class="button-link button-link--${this.variant} context--${this
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

  /**
   * Handle attribute changes to reset properties to default values when attributes are removed
   */
  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ): void {
    super.attributeChangedCallback(name, oldValue, newValue);

    // If attribute is removed (newValue is null), reset property to default value
    if (newValue === null) {
      switch (name) {
        case 'variant':
          this.variant = 'default';
          break;
        case 'size':
          this.size = 'medium';
          break;
        case 'context':
          this.context = 'primary';
          break;
        case 'disabled':
          this.disabled = false;
          break;
        case 'icon':
          this.icon = null;
          break;
        case 'icon-position':
          this.iconPosition = 'left';
          break;
        case 'icon-size':
          this.iconSize = null;
          break;
        case 'icon-variant':
          this.iconVariant = null;
          break;
        case 'icon-stroke-width':
          this.iconStrokeWidth = null;
          break;
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'echo-button': EchoButton;
  }
}
