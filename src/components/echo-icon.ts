import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js';
import type {
  EchoIconSize,
  EchoIconVariant,
  IconName,
  EchoContext,
} from '../types/index.js';
import { loadIcon } from '../icons/icon-registry.js';
import { contextColors } from '../styles/context-colors.js';

@customElement('echo-icon')
export class EchoIcon extends LitElement {
  @property({ type: String })
  name: IconName = 'x';

  @property({ type: String })
  size: EchoIconSize = 'medium';

  @property({ type: String })
  variant: EchoIconVariant = 'default';

  @property({ type: String })
  color = 'currentColor';

  @property({ type: String })
  context: EchoContext | null = null;

  @property({ type: String, attribute: 'aria-label' })
  ariaLabel: string | null = null;

  @property({ type: Boolean })
  disabled = false;

  private _svgContent = '';
  private _isLoading = false;

  static styles = [
    contextColors,
    css`
      :host {
        display: inline-block;
        vertical-align: middle;
      }

      .icon {
        display: inline-block;
        color: var(--icon-color, var(--context-color, currentColor));
        transition: color 0.124s ease-in-out;
      }

      .icon:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      /* Size variants */
      .icon--small {
        width: 16px;
        height: 16px;
      }

      .icon--medium {
        width: 24px;
        height: 24px;
      }

      .icon--large {
        width: 32px;
        height: 32px;
      }

      /* Variant styles */
      .icon--outline {
        /* Outline variant uses stroke only */
      }

      .icon--filled {
        /* Filled variant uses fill */
      }

      .icon--default {
        /* Default variant uses stroke */
      }

      /* Loading state */
      .icon--loading {
        opacity: 0.6;
      }

      /* Accessibility */
      .icon:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
        border-radius: 2px;
      }
    `,
  ];

  connectedCallback(): void {
    super.connectedCallback();
    this._loadIcon();
  }

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('name') || changedProperties.has('variant')) {
      this._loadIcon();
    }
  }

  private async _loadIcon(): Promise<void> {
    if (this._isLoading) return;

    this._isLoading = true;
    this.requestUpdate();

    try {
      let svgContent = await loadIcon(this.name);
      this._svgContent = this._transformSVGForVariant(svgContent);
    } catch (error) {
      console.error(`Failed to load icon: ${this.name}`, error);
      // Fallback to a default icon
      let svgContent = await loadIcon('x');
      this._svgContent = this._transformSVGForVariant(svgContent);
    } finally {
      this._isLoading = false;
      this.requestUpdate();
    }
  }

  private _transformSVGForVariant(svgContent: string): string {
    if (this.variant === 'filled') {
      // For filled variant, replace stroke with fill and set stroke to none
      return svgContent
        .replace(/stroke="currentColor"/g, 'fill="currentColor" stroke="none"')
        .replace(/fill="none"/g, '');
    }
    return svgContent;
  }

  render() {
    const classes = [
      'icon',
      `icon--${this.size}`,
      `icon--${this.variant}`,
      this.context ? `context--${this.context}` : '',
      this._isLoading ? 'icon--loading' : '',
      this.disabled ? 'icon--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const style =
      this.color !== 'currentColor' ? `--icon-color: ${this.color}` : '';

    return html`
      <div
        class="${classes}"
        style="${style}"
        role="img"
        aria-label="${this.ariaLabel || this.name}"
        ?disabled="${this.disabled}"
        tabindex="${this.disabled ? -1 : 0}"
        @keydown="${this._handleKeydown}"
      >
        ${this._svgContent
          ? unsafeHTML(this._svgContent)
          : html`<div class="icon-placeholder"></div>`}
      </div>
    `;
  }

  private _handleKeydown(event: KeyboardEvent): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    // Handle Enter and Space key presses
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.dispatchEvent(
        new CustomEvent('echo-icon-click', {
          detail: {
            iconName: this.name,
            originalEvent: event,
          },
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'echo-icon': EchoIcon;
  }
}
