import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type {
  EchoLinkVariant,
  EchoSize,
  EchoContext,
  IconName,
  EchoIconSize,
  EchoIconVariant,
  EchoLinkTarget,
  EchoLinkRel,
} from '../types/index.js';
import { buttonLinkStyles } from '../styles/button-link-styles.js';

@customElement('echo-link')
export class EchoLink extends LitElement {
  @property({ type: String })
  variant: EchoLinkVariant = 'default';

  @property({ type: String })
  size: EchoSize = 'medium';

  @property({ type: String })
  context: EchoContext = 'primary';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  href: string | null = null;

  @property({ type: String })
  target: EchoLinkTarget | null = null;

  @property({ type: String })
  rel: EchoLinkRel | null = null;

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
            size=${this.iconSize || this._getIconSizeFromLinkSize()}
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

    // If disabled or no href, render as span
    if (this.disabled || !this.href) {
      return html`
        <span
          class="button-link button-link--${this.variant} context--${this
            .context} size--${this.size}"
          role="button"
          tabindex=${this.disabled ? '-1' : '0'}
          aria-disabled=${this.disabled}
          @click=${this._handleClick}
          @keydown=${this._handleKeydown}
        >
          ${content}
        </span>
      `;
    }

    // Render as proper link
    return html`
      <a
        class="button-link button-link--${this.variant} context--${this
          .context} size--${this.size}"
        href=${this.href}
        target=${this.target || ''}
        rel=${this.rel || ''}
        @click=${this._handleClick}
      >
        ${content}
      </a>
    `;
  }

  private _getIconSizeFromLinkSize(): EchoIconSize {
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
      new CustomEvent('echo-link-click', {
        detail: { originalEvent: event, href: this.href },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleKeydown(event: KeyboardEvent): void {
    // Handle Enter and Space keys for disabled links rendered as spans
    if (this.disabled || !this.href) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this._handleClick(event);
      }
    }
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
        case 'href':
          this.href = null;
          break;
        case 'target':
          this.target = null;
          break;
        case 'rel':
          this.rel = null;
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
    'echo-link': EchoLink;
  }
}
