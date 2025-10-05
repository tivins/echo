import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type {
  EchoCardVariant,
  EchoCardSize,
  EchoContext,
  IconName,
  EchoIconSize,
  EchoIconVariant,
} from '../types/index.js';
import { contextColors } from '../styles/context-colors.js';
import { componentSizes } from '../styles/component-sizes.js';

@customElement('echo-card')
export class EchoCard extends LitElement {
  @property({ type: String })
  variant: EchoCardVariant = 'default';

  @property({ type: String })
  size: EchoCardSize = 'medium';

  @property({ type: String })
  context: EchoContext = 'primary';

  @property({ type: String, attribute: 'card-title' })
  cardTitle = '';

  @property({ type: String })
  icon: IconName | null = null;

  @property({ type: String, attribute: 'icon-size' })
  iconSize: EchoIconSize | null = null;

  @property({ type: String, attribute: 'icon-variant' })
  iconVariant: EchoIconVariant | null = null;

  @property({ type: Boolean, attribute: 'closable' })
  closable = false;

  @property({ type: Boolean })
  disabled = false;

  @state()
  private _isVisible = true;

  @state()
  private _hasFooterContent = false;

  @state()
  private _hasMainContent = true;

  static styles = [
    contextColors,
    componentSizes,
    css`
      :host {
        display: block;
        --card-border-radius: 1px;
        --card-padding: 10px;
        --card-shadow:
          0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
        --card-border: 1px solid rgba(0, 0, 0, 0.06);
        --card-hover-shadow:
          0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);
      }

      .card {
        display: flex;
        flex-direction: column;
        border-radius: var(--card-border-radius);
        background-color: white;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      /*
      .card:hover {
        box-shadow: var(--card-hover-shadow);
      }
      */

      .card:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      /* Variants */
      .card--default {
        box-shadow: var(--card-shadow);
        border: var(--card-border);
      }

      .card--outlined {
        border: 1px solid var(--context-color);
        box-shadow: none;
        background-color: rgba(255, 255, 255, 0.95);
      }

      .card--elevated {
        box-shadow:
          0 8px 25px rgba(0, 0, 0, 0.12),
          0 3px 10px rgba(0, 0, 0, 0.08);
        border: none;
        background-color: white;
      }

      .card--flat {
        box-shadow: none;
        border: none;
        background-color: var(--context-color-alpha);
      }

      /* Sizes */
      .card--small {
        --card-padding: 12px;
        --card-border-radius: 6px;
      }

      .card--medium {
        --card-padding: 16px;
        --card-border-radius: 8px;
      }

      .card--large {
        --card-padding: 24px;
        --card-border-radius: 12px;
      }

      /* Header */
      .card__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--card-padding);
        padding-bottom: 12px;
        min-height: 52px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }

      .card__header-content {
        display: flex;
        align-items: center;
        flex: 1;
        gap: 14px;
      }

      .card__title {
        font-size: 17px;
        font-weight: 500;
        color: #1a1a1a;
        margin: 0;
        line-height: 1.3;
        letter-spacing: -0.01em;
      }

      .card__title--small {
        font-size: 15px;
      }

      .card__title--large {
        font-size: 19px;
      }

      .card__header-actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .card__close-button {
        background: none;
        border: none;
        padding: 6px;
        cursor: pointer;
        border-radius: 6px;
        color: #666;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
      }

      .card__close-button:hover:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.05);
        opacity: 1;
        color: #333;
      }

      .card__close-button:focus-visible {
        outline: 2px solid var(--context-color);
        outline-offset: 2px;
      }

      .card__close-button:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      /* Content */
      .card__content {
        padding: var(--card-padding);
        flex: 1;
        color: #4a4a4a;
        line-height: 1.6;
        font-size: 14px;
      }

      .card__content--no-header {
        padding-top: var(--card-padding);
      }

      .card__content--no-footer {
        padding-bottom: var(--card-padding);
      }

      .card__content--hidden {
        display: none;
      }

      /* Footer */
      .card__footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: var(--card-padding);
        padding-top: 16px;
        gap: 10px;
        min-height: 52px;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        background-color: rgba(0, 0, 0, 0.01);
      }

      .card__footer[hidden] {
        display: none;
      }

      .card__footer--left {
        justify-content: flex-start;
      }

      .card__footer--center {
        justify-content: center;
      }

      .card__footer--space-between {
        justify-content: space-between;
      }

      /* Separator */
      .card__separator {
        margin: 0 var(--card-padding);
      }

      /* Hidden state */
      .card--hidden {
        display: none;
      }

      /* Context colors for flat variant */
      .card--flat.context--primary {
        background-color: rgba(59, 130, 246, 0.1);
      }

      .card--flat.context--secondary {
        background-color: rgba(107, 114, 128, 0.1);
      }

      .card--flat.context--success {
        background-color: rgba(34, 197, 94, 0.1);
      }

      .card--flat.context--warning {
        background-color: rgba(245, 158, 11, 0.1);
      }

      .card--flat.context--danger {
        background-color: rgba(239, 68, 68, 0.1);
      }

      .card--flat.context--info {
        background-color: rgba(59, 130, 246, 0.1);
      }
    `,
  ];

  render() {
    if (!this._isVisible) {
      return html`<div class="card--hidden"></div>`;
    }

    const classes = [
      'card',
      `card--${this.variant}`,
      `card--${this.size}`,
      `context--${this.context}`,
      this.disabled ? 'card--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const hasHeader = !!this.cardTitle || !!this.icon || this.closable;

    return html`
      <div class="${classes}" ?disabled=${this.disabled}>
        ${hasHeader ? this._renderHeader() : ''}
        ${this._renderContent(hasHeader)} ${this._renderFooter()}
      </div>
    `;
  }

  private _renderHeader() {
    const titleClasses = ['card__title', `card__title--${this.size}`].join(' ');

    const iconElement = this.icon
      ? html`
          <echo-icon
            name=${this.icon}
            size=${this.iconSize || this._getIconSizeFromCardSize()}
            variant=${this.iconVariant || 'default'}
            context=${this.context}
          ></echo-icon>
        `
      : null;

    const closeButton = this.closable
      ? html`
          <echo-button
            variant="ghost"
            size="small"
            @click=${this._handleClose}
            ?disabled=${this.disabled}
            aria-label="Close card"
            icon="x"
          >
          </echo-button>
        `
      : null;

    return html`
      <div class="card__header">
        <div class="card__header-content">
          ${iconElement}
          ${this.cardTitle
            ? html`<h3 class="${titleClasses}">${this.cardTitle}</h3>`
            : ''}
          <slot name="header-actions"></slot>
        </div>
        <div class="card__header-actions">${closeButton}</div>
      </div>
    `;
  }

  private _renderContent(hasHeader: boolean) {
    const contentClasses = [
      'card__content',
      !hasHeader ? 'card__content--no-header' : '',
      !this._hasMainContent ? 'card__content--hidden' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <div class="${contentClasses}">
        <slot
          data-main-content
          @slotchange=${this._handleMainContentSlotChange}
        ></slot>
      </div>
    `;
  }

  private _renderFooter() {
    return html`
      <div class="card__footer" ?hidden=${!this._hasFooterContent}>
        <slot name="footer" @slotchange=${this._handleFooterSlotChange}></slot>
      </div>
    `;
  }

  private _getIconSizeFromCardSize(): EchoIconSize {
    const sizeMap: Record<EchoCardSize, EchoIconSize> = {
      small: 'small',
      medium: 'medium',
      large: 'large',
    };
    return sizeMap[this.size];
  }

  private _handleFooterSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    const nodes = slot.assignedNodes({ flatten: true });
    const hasContent = nodes.some(
      (node) =>
        node.nodeType === Node.ELEMENT_NODE ||
        (node.nodeType === Node.TEXT_NODE && node.textContent?.trim())
    );

    if (hasContent !== this._hasFooterContent) {
      this._hasFooterContent = hasContent;
    }
  }

  private _handleMainContentSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    const nodes = slot.assignedNodes({ flatten: true });
    const hasContent = nodes.some(
      (node) =>
        node.nodeType === Node.ELEMENT_NODE ||
        (node.nodeType === Node.TEXT_NODE && node.textContent?.trim())
    );
    if (hasContent !== this._hasMainContent) {
      this._hasMainContent = hasContent;
    }
  }

  firstUpdated(): void {
    // Use setTimeout to ensure slots are fully initialized
    setTimeout(() => {
      this._checkSlotContent();
    }, 0);
  }

  private _checkSlotContent(): void {
    // Check footer slot
    const footerSlot = this.shadowRoot?.querySelector(
      'slot[name="footer"]'
    ) as HTMLSlotElement;
    if (footerSlot) {
      const nodes = footerSlot.assignedNodes({ flatten: true });
      const hasContent = nodes.some(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE ||
          (node.nodeType === Node.TEXT_NODE && node.textContent?.trim())
      );
      if (hasContent !== this._hasFooterContent) {
        this._hasFooterContent = hasContent;
        this.requestUpdate();
      }
    }

    // Check main content slot
    const mainContentSlot = this.shadowRoot?.querySelector(
      'slot[data-main-content]'
    ) as HTMLSlotElement;
    if (mainContentSlot) {
      const nodes = mainContentSlot.assignedNodes({ flatten: true });
      const hasContent = nodes.some(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE ||
          (node.nodeType === Node.TEXT_NODE && node.textContent?.trim())
      );
      if (hasContent !== this._hasMainContent) {
        this._hasMainContent = hasContent;
        this.requestUpdate();
      }
    }
  }

  private _handleClose(): void {
    if (this.disabled) return;

    this._isVisible = false;
    this.dispatchEvent(
      new CustomEvent('echo-card-close', {
        detail: { card: this },
        bubbles: true,
        composed: true,
      })
    );
  }

  // Public method to show the card again
  public show(): void {
    this._isVisible = true;
  }

  // Public method to hide the card
  public hide(): void {
    this._isVisible = false;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'echo-card': EchoCard;
  }
}
