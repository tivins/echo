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
  EchoLinkDisplay,
  EchoAlign,
} from '../types/index.js';
import { buttonLinkStyles } from '../styles/button-link-styles.js';
import { utilityStyles } from '../styles/utility-styles.js';

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

  @property({ type: String })
  display: EchoLinkDisplay = 'inline';

  @property({ type: String })
  align: EchoAlign = 'center';

  @property({ type: String })
  class = '';

  static styles = [buttonLinkStyles, utilityStyles];

  firstUpdated(): void {
    this._applyUtilityClasses();
  }

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    
    if (changedProperties.has('display') || changedProperties.has('align')) {
      this._applyUtilityClasses();
    }
  }

  private _applyUtilityClasses(): void {
    // Remove old utility classes
    this.classList.remove('u-block', 'u-inline-block', 'u-inline', 'u-flex', 'u-inline-flex', 'u-grid', 'u-hidden', 'u-w-100', 'u-text-left', 'u-text-center', 'u-text-right');
    
    // Apply utility classes to the host element
    const displayClass = this.display !== 'inline' ? `u-${this.display}` : '';
    const widthClass = this.display === 'block' ? 'u-w-100' : '';
    const alignClass = this.align !== 'center' ? `u-text-${this.align}` : '';
    const hostClasses = [
      displayClass,
      widthClass,
      alignClass,
    ]
      .filter(Boolean);
    
    if (hostClasses.length > 0) {
      this.classList.add(...hostClasses);
    }
    
    // Apply styles directly to ensure width: 100% works
    if (this.display === 'block') {
      this.style.display = 'block';
      this.style.width = '100%';
    }
  }

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

    const classes = [
      'button-link',
      `button-link--${this.variant}`,
      `context--${this.context}`,
      `size--${this.size}`,
      this.class,
    ]
      .filter(Boolean)
      .join(' ');

    // If disabled or no href, render as span
    if (this.disabled || !this.href) {
      return html`
        <span
          class="${classes}"
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
        class="${classes}"
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
        case 'display':
          this.display = 'inline';
          break;
        case 'align':
          this.align = 'center';
          break;
        case 'class':
          this.class = '';
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
