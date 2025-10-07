import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type {
  EchoPopVariant,
  EchoPopSize,
  EchoPopPlacement,
  EchoPopAnimation,
  EchoPopTrigger,
  EchoContext,
  IconName,
  EchoIconSize,
  EchoIconVariant,
} from '../types/index.js';
import { contextColors } from '../styles/context-colors.js';
import { componentSizes } from '../styles/component-sizes.js';

interface PopPosition {
  x: number;
  y: number;
  placement: EchoPopPlacement;
}

@customElement('echo-pop')
export class EchoPop extends LitElement {
  @property({ type: String })
  variant: EchoPopVariant = 'default';

  @property({ type: String })
  size: EchoPopSize = 'medium';

  @property({ type: String })
  context: EchoContext = 'primary';

  @property({ type: String })
  placement: EchoPopPlacement = 'auto';

  @property({ type: String })
  animation: EchoPopAnimation = 'fade';

  @property({ type: String })
  trigger: EchoPopTrigger = 'click';

  @property({ type: Boolean })
  open = false;

  @property({ type: Boolean })
  dismissible = true;

  @property({ type: Boolean })
  persistent = false;

  @property({ type: String })
  title = '';

  @property({ type: String })
  content = '';

  @property({ type: String })
  icon: IconName | null = null;

  @property({ type: String, attribute: 'icon-size' })
  iconSize: EchoIconSize | null = null;

  @property({ type: String, attribute: 'icon-variant' })
  iconVariant: EchoIconVariant | null = null;

  @property({ type: Number, attribute: 'animation-duration' })
  animationDuration = 200;

  @property({ type: String, attribute: 'anchor-selector' })
  anchorSelector = '';

  @state()
  private _isVisible = false;

  @state()
  private _isAnimating = false;

  @state()
  private _isClosing = false;

  @state()
  private _position: PopPosition = { x: 0, y: 0, placement: 'bottom' };

  private _anchorElement: HTMLElement | null = null;
  private _portalElement: HTMLElement | null = null;
  private _resizeObserver: ResizeObserver | null = null;
  private _scrollListener: (() => void) | null = null;
  private _previousFocus: HTMLElement | null = null;

  static styles = [
    contextColors,
    componentSizes,
    css`
      :host {
        display: inline-block;
        position: relative;
        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      /* Portal container for popup content */
      .pop-portal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        pointer-events: none;
      }

      .pop-portal--modal {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
      }

      /* Popup content */
      .pop-content {
        position: fixed;
        z-index: 1001;
        background: white;
        border-radius: 8px;
        box-shadow:
          0 4px 6px rgba(0, 0, 0, 0.07),
          0 2px 4px rgba(0, 0, 0, 0.06);
        border: 1px solid rgba(0, 0, 0, 0.06);
        opacity: 0;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: auto;
        overflow: hidden;
        max-width: 90vw;
        max-height: 90vh;
      }

      .pop-content--visible {
        opacity: 1;
      }

      .pop-content--animating {
        transition-duration: var(--animation-duration, 200ms);
      }

      /* Variants */
      .pop-content--default {
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.06);
        box-shadow:
          0 4px 6px rgba(0, 0, 0, 0.07),
          0 2px 4px rgba(0, 0, 0, 0.06);
      }

      .pop-content--overlay {
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(4px);
        border: none;
        box-shadow:
          0 8px 25px rgba(0, 0, 0, 0.12),
          0 3px 10px rgba(0, 0, 0, 0.08);
        color: white;
      }

      .pop-content--tooltip {
        background: #1f2937;
        color: white;
        border: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-size: 12px;
        padding: 6px 8px;
        border-radius: 4px;
        max-width: 200px;
      }

      .pop-content--dropdown {
        background: white;
        border: 1px solid #e5e7eb;
        box-shadow:
          0 10px 15px rgba(0, 0, 0, 0.1),
          0 4px 6px rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        min-width: 120px;
      }

      .pop-content--modal {
        background: white;
        border: none;
        box-shadow:
          0 20px 25px rgba(0, 0, 0, 0.1),
          0 10px 10px rgba(0, 0, 0, 0.04);
        border-radius: 12px;
        max-width: 90vw;
        max-height: 90vh;
        position: relative;
        transform: none;
      }

      /* Sizes */
      .pop-content--small {
        font-size: 13px;
        min-width: 80px;
      }

      .pop-content--medium {
        font-size: 14px;
        min-width: 120px;
      }

      .pop-content--large {
        font-size: 16px;
        min-width: 200px;
      }

      .pop-content--auto {
        font-size: 14px;
        width: max-content;
        max-width: 300px;
      }

      /* Header */
      .pop-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        background-color: rgba(0, 0, 0, 0.01);
      }

      .pop-header-content {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
      }

      .pop-title {
        font-size: 16px;
        font-weight: 500;
        color: #1a1a1a;
        margin: 0;
        line-height: 1.3;
      }

      .pop-close-button {
        background: none;
        border: none;
        padding: 4px;
        cursor: pointer;
        border-radius: 4px;
        color: #666;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
      }

      .pop-close-button:hover:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.05);
        opacity: 1;
        color: #333;
      }

      .pop-close-button:focus-visible {
        outline: 2px solid var(--context-color);
        outline-offset: 2px;
      }

      /* Content */
      .pop-body {
        padding: 12px 16px;
        color: #4a4a4a;
        line-height: 1.6;
      }

      .pop-body--no-header {
        padding-top: 16px;
      }

      .pop-body--no-footer {
        padding-bottom: 16px;
      }

      /* Footer */
      .pop-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 12px 16px;
        gap: 8px;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        background-color: rgba(0, 0, 0, 0.01);
      }

      .pop-footer[hidden] {
        display: none;
      }

      /* Placement-specific transform origins and centering */
      .pop-content[data-placement='top'] {
        transform-origin: center bottom;
        transform: translateX(-50%) translateY(-100%) scale(0.95);
      }

      .pop-content[data-placement='bottom'] {
        transform-origin: center top;
        transform: translateX(-50%) scale(0.95);
      }

      .pop-content[data-placement='left'] {
        transform-origin: right center;
        transform: translateX(-100%) translateY(-50%) scale(0.95);
      }

      .pop-content[data-placement='right'] {
        transform-origin: left center;
        transform: translateY(-50%) scale(0.95);
      }

      /* Animations */
      .pop-content--fade {
        opacity: 0;
      }

      .pop-content--fade.pop-content--visible {
        opacity: 1;
      }

      .pop-content--slide-top {
        opacity: 0;
      }

      .pop-content--slide-top.pop-content--visible {
        opacity: 1;
      }

      .pop-content--slide-bottom {
        opacity: 0;
      }

      .pop-content--slide-bottom.pop-content--visible {
        opacity: 1;
      }

      .pop-content--scale {
        opacity: 0;
      }

      .pop-content--scale.pop-content--visible {
        opacity: 1;
      }

      /* Animation transforms - override placement transforms when animating */
      .pop-content--slide-top[data-placement='top'] {
        transform: translateX(-50%) translateY(-100%) translateY(10px) scale(0.95) !important;
      }

      .pop-content--slide-top[data-placement='top'].pop-content--visible {
        transform: translateX(-50%) translateY(-100%) scale(0.95) !important;
      }

      .pop-content--slide-bottom[data-placement='bottom'] {
        transform: translateX(-50%) translateY(-10px) scale(0.95) !important;
      }

      .pop-content--slide-bottom[data-placement='bottom'].pop-content--visible {
        transform: translateX(-50%) scale(0.95) !important;
      }

      .pop-content--slide-top[data-placement='left'] {
        transform: translateX(-100%) translateY(-50%) translateX(10px) scale(0.95) !important;
      }

      .pop-content--slide-top[data-placement='left'].pop-content--visible {
        transform: translateX(-100%) translateY(-50%) scale(0.95) !important;
      }

      .pop-content--slide-bottom[data-placement='right'] {
        transform: translateY(-50%) translateX(-10px) scale(0.95) !important;
      }

      .pop-content--slide-bottom[data-placement='right'].pop-content--visible {
        transform: translateY(-50%) scale(0.95) !important;
      }

      .pop-content--scale[data-placement='top'] {
        transform: translateX(-50%) translateY(-100%) scale(0.8) !important;
      }

      .pop-content--scale[data-placement='top'].pop-content--visible {
        transform: translateX(-50%) translateY(-100%) scale(0.95) !important;
      }

      .pop-content--scale[data-placement='bottom'] {
        transform: translateX(-50%) scale(0.8) !important;
      }

      .pop-content--scale[data-placement='bottom'].pop-content--visible {
        transform: translateX(-50%) scale(0.95) !important;
      }

      .pop-content--scale[data-placement='left'] {
        transform: translateX(-100%) translateY(-50%) scale(0.8) !important;
      }

      .pop-content--scale[data-placement='left'].pop-content--visible {
        transform: translateX(-100%) translateY(-50%) scale(0.95) !important;
      }

      .pop-content--scale[data-placement='right'] {
        transform: translateY(-50%) scale(0.8) !important;
      }

      .pop-content--scale[data-placement='right'].pop-content--visible {
        transform: translateY(-50%) scale(0.95) !important;
      }

      /* Context colors */
      .pop-content.context--primary {
        --context-color: #3b82f6;
        --context-color-alpha: rgba(59, 130, 246, 0.1);
      }

      .pop-content.context--secondary {
        --context-color: #6b7280;
        --context-color-alpha: rgba(107, 114, 128, 0.1);
      }

      .pop-content.context--success {
        --context-color: #10b981;
        --context-color-alpha: rgba(16, 185, 129, 0.1);
      }

      .pop-content.context--warning {
        --context-color: #f59e0b;
        --context-color-alpha: rgba(245, 158, 11, 0.1);
      }

      .pop-content.context--danger {
        --context-color: #ef4444;
        --context-color-alpha: rgba(239, 68, 68, 0.1);
      }

      .pop-content.context--info {
        --context-color: #3b82f6;
        --context-color-alpha: rgba(59, 130, 246, 0.1);
      }
    `,
  ];

  connectedCallback(): void {
    super.connectedCallback();
    this._setupEventListeners();
    this._setupResizeObserver();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._cleanupEventListeners();
    this._cleanupResizeObserver();
    this._removePortal();
  }

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('open')) {
      this._handleOpenChange();
    }

    if (changedProperties.has('anchorSelector')) {
      this._updateAnchorElement();
    }
  }

  render() {
    return html`
      <slot name="trigger" @click="${this._handleTriggerClick}"></slot>
      ${this._isVisible ? this._renderPortal() : ''}
    `;
  }

  private _renderPortal() {
    if (this.variant === 'modal') {
      return this._renderModalPortal();
    }
    return this._renderPopupPortal();
  }

  private _renderModalPortal() {
    const classes = [
      'pop-content',
      'pop-content--modal',
      `pop-content--${this.size}`,
      `context--${this.context}`,
    ];

    if (this._isVisible && !this._isClosing) {
      classes.push('pop-content--visible');
    }

    if (this._isAnimating) {
      classes.push('pop-content--animating');
    }

    return html`
      <div
        class="pop-portal pop-portal--modal"
        @click="${this._handlePortalClick}"
      >
        <div
          class="${classes.join(' ')}"
          style="--animation-duration: ${this.animationDuration}ms;"
          @click="${this._handleContentClick}"
        >
          ${this._renderHeader()} ${this._renderBody()} ${this._renderFooter()}
        </div>
      </div>
    `;
  }

  private _renderPopupPortal() {
    const classes = [
      'pop-content',
      `pop-content--${this.variant}`,
      `pop-content--${this.size}`,
      `context--${this.context}`,
      `pop-content--${this.animation}`,
    ];

    if (this._isVisible && !this._isClosing) {
      classes.push('pop-content--visible');
    }

    if (this._isAnimating) {
      classes.push('pop-content--animating');
    }

    return html`
      <div class="pop-portal">
        <div
          class="${classes.join(' ')}"
          data-placement="${this._position.placement}"
          style="--animation-duration: ${this.animationDuration}ms; left: ${this
            ._position.x}px; top: ${this._position.y}px;"
          @click="${this._handleContentClick}"
        >
          ${this._renderHeader()} ${this._renderBody()} ${this._renderFooter()}
        </div>
      </div>
    `;
  }

  private _renderHeader() {
    if (!this.title && !this.icon) return html``;

    return html`
      <div class="pop-header">
        <div class="pop-header-content">
          ${this.icon
            ? html`
                <echo-icon
                  name="${this.icon}"
                  size="${this.iconSize || 'medium'}"
                  variant="${this.iconVariant || 'default'}"
                ></echo-icon>
              `
            : ''}
          ${this.title ? html`<h3 class="pop-title">${this.title}</h3>` : ''}
        </div>
        ${this.dismissible
          ? html`
              <button
                class="pop-close-button"
                @click="${this._handleClose}"
                aria-label="Close"
              >
                <echo-icon name="x" size="small"></echo-icon>
              </button>
            `
          : ''}
      </div>
    `;
  }

  private _renderBody() {
    const hasHeader = this.title || this.icon;
    const hasFooter = this._hasFooterSlot();

    const bodyClasses = ['pop-body'];
    if (!hasHeader) {
      bodyClasses.push('pop-body--no-header');
    }
    if (!hasFooter) {
      bodyClasses.push('pop-body--no-footer');
    }

    return html`
      <div class="${bodyClasses.join(' ')}">
        ${this.content ? html`<p>${this.content}</p>` : ''}
        <slot></slot>
      </div>
    `;
  }

  private _renderFooter() {
    if (!this._hasFooterSlot()) return html``;

    return html`
      <div class="pop-footer">
        <slot name="footer"></slot>
      </div>
    `;
  }

  private _hasFooterSlot(): boolean {
    return this.querySelector('[slot="footer"]') !== null;
  }

  private _handleTriggerClick = (): void => {
    if (this.trigger === 'click' || this.trigger === 'manual') {
      this.toggle();
    }
  };

  private _handleOpenChange(): void {
    if (this.open) {
      this._show();
    } else {
      this._hide();
    }
  }

  private _show(): void {
    this._isVisible = true;
    this._isAnimating = true;

    // Store current focus
    this._previousFocus = document.activeElement as HTMLElement;

    // Update position immediately and after rendering
    this._updatePosition();

    requestAnimationFrame(() => {
      this._updatePosition();
      this._isAnimating = false;
    });

    this.dispatchEvent(
      new CustomEvent('echo-pop-open', {
        detail: { placement: this._position.placement },
        bubbles: true,
        composed: true,
      })
    );

    // Focus management
    this._trapFocus();
  }

  private _hide(): void {
    this._isClosing = true;
    this._isAnimating = true;

    setTimeout(() => {
      this._isVisible = false;
      this._isClosing = false;
      this._isAnimating = false;
    }, this.animationDuration);

    this.dispatchEvent(
      new CustomEvent('echo-pop-close', {
        bubbles: true,
        composed: true,
      })
    );

    // Restore focus
    this._restoreFocus();
  }

  private _updatePosition(): void {
    if (this.variant === 'modal') {
      return; // Modal doesn't need positioning
    }

    // Find anchor element
    if (!this._anchorElement) {
      if (this.anchorSelector) {
        this._anchorElement = document.querySelector(
          this.anchorSelector
        ) as HTMLElement;
      } else {
        // Use the trigger slot element
        const triggerSlot = this.querySelector(
          '[slot="trigger"]'
        ) as HTMLElement;
        this._anchorElement = triggerSlot;
      }
    }

    if (!this._anchorElement) {
      console.warn('EchoPop: No anchor element found');
      return;
    }

    const anchorRect = this._anchorElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get popup size if available
    const popupElement = this.shadowRoot?.querySelector('.pop-content') as HTMLElement;
    const popupSize = popupElement ? {
      width: popupElement.offsetWidth || 200,
      height: popupElement.offsetHeight || 100
    } : undefined;

    // Calculate optimal placement with collision detection
    const computedPlacement = this._calculateOptimalPlacement(
      anchorRect,
      viewportWidth,
      viewportHeight,
      popupSize
    );

    // Calculate position based on computed placement
    let x = 0;
    let y = 0;

    switch (computedPlacement) {
      case 'top':
        x = anchorRect.left + anchorRect.width / 2;
        y = anchorRect.top - 8; // Position du TOP du popup
        break;
      case 'bottom':
        x = anchorRect.left + anchorRect.width / 2;
        y = anchorRect.bottom + 8; // Position du TOP du popup
        break;
      case 'left':
        x = anchorRect.left - 8; // Position du RIGHT du popup
        y = anchorRect.top + anchorRect.height / 2;
        break;
      case 'right':
        x = anchorRect.right + 8; // Position du LEFT du popup
        y = anchorRect.top + anchorRect.height / 2;
        break;
      default:
        x = anchorRect.left + anchorRect.width / 2;
        y = anchorRect.bottom + 8;
    }

    // Adjust position if popup would go outside viewport
    const adjustedPosition = this._adjustPositionForViewport(
      { x, y, placement: computedPlacement },
      popupSize,
      viewportWidth,
      viewportHeight
    );

    this._position = adjustedPosition;
  }

  private _calculateOptimalPlacement(
    anchorRect: DOMRect,
    viewportWidth: number,
    viewportHeight: number,
    popupSize?: { width: number; height: number }
  ): EchoPopPlacement {
    if (this.placement !== 'auto') {
      return this.placement;
    }

    // Estimate popup size if not provided
    const estimatedPopupSize = popupSize || { width: 200, height: 100 };
    const margin = 16; // Minimum margin from viewport edge

    const spaceAbove = anchorRect.top - margin;
    const spaceBelow = viewportHeight - anchorRect.bottom - margin;
    const spaceLeft = anchorRect.left - margin;
    const spaceRight = viewportWidth - anchorRect.right - margin;

    // Check if popup fits in each direction
    const fitsAbove = spaceAbove >= estimatedPopupSize.height;
    const fitsBelow = spaceBelow >= estimatedPopupSize.height;
    const fitsLeft = spaceLeft >= estimatedPopupSize.width;
    const fitsRight = spaceRight >= estimatedPopupSize.width;

    // Smart placement logic
    // 1. If both vertical directions fit, prefer bottom
    if (fitsAbove && fitsBelow) return 'bottom';
    
    // 2. If both horizontal directions fit, prefer right
    if (fitsLeft && fitsRight) return 'right';
    
    // 3. Choose the direction that fits
    if (fitsBelow) return 'bottom';
    if (fitsAbove) return 'top';
    if (fitsRight) return 'right';
    if (fitsLeft) return 'left';

    // 4. Fallback: choose placement with most space
    const maxSpace = Math.max(spaceAbove, spaceBelow, spaceLeft, spaceRight);
    if (maxSpace === spaceAbove) return 'top';
    if (maxSpace === spaceBelow) return 'bottom';
    if (maxSpace === spaceLeft) return 'left';
    return 'right';
  }

  private _adjustPositionForViewport(
    position: PopPosition,
    popupSize?: { width: number; height: number },
    viewportWidth?: number,
    viewportHeight?: number
  ): PopPosition {
    if (!popupSize || !viewportWidth || !viewportHeight) {
      return position;
    }

    const margin = 16;
    let { x, y, placement } = position;

    // Adjust horizontal position
    if (placement === 'top' || placement === 'bottom') {
      const halfWidth = popupSize.width / 2;
      if (x - halfWidth < margin) {
        x = margin + halfWidth;
      } else if (x + halfWidth > viewportWidth - margin) {
        x = viewportWidth - margin - halfWidth;
      }
    }

    // Adjust vertical position
    if (placement === 'left' || placement === 'right') {
      const halfHeight = popupSize.height / 2;
      if (y - halfHeight < margin) {
        y = margin + halfHeight;
      } else if (y + halfHeight > viewportHeight - margin) {
        y = viewportHeight - margin - halfHeight;
      }
    }

    return { x, y, placement };
  }

  private _updateAnchorElement(): void {
    if (this.anchorSelector) {
      this._anchorElement = document.querySelector(
        this.anchorSelector
      ) as HTMLElement;
    } else {
      this._anchorElement = null;
    }
  }

  private _setupEventListeners(): void {
    // Keyboard events
    document.addEventListener('keydown', this._handleKeydown);

    // Click outside
    document.addEventListener('click', this._handleOutsideClick);

    // Scroll events for position updates
    this._scrollListener = () => this._updatePosition();
    window.addEventListener('scroll', this._scrollListener, true);
  }

  private _cleanupEventListeners(): void {
    document.removeEventListener('keydown', this._handleKeydown);
    document.removeEventListener('click', this._handleOutsideClick);

    if (this._scrollListener) {
      window.removeEventListener('scroll', this._scrollListener, true);
    }
  }

  private _setupResizeObserver(): void {
    if (typeof ResizeObserver !== 'undefined') {
      this._resizeObserver = new ResizeObserver(() => {
        this._updatePosition();
      });

      if (this._anchorElement) {
        this._resizeObserver.observe(this._anchorElement);
      }
    }
  }

  private _cleanupResizeObserver(): void {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
    }
  }

  private _removePortal(): void {
    if (this._portalElement) {
      this._portalElement.remove();
      this._portalElement = null;
    }
  }

  private _handleKeydown = (event: KeyboardEvent): void => {
    if (!this._isVisible) return;

    if (event.key === 'Escape' && this.dismissible) {
      this._handleClose();
    }
  };

  private _handleOutsideClick = (event: Event): void => {
    if (!this._isVisible || this.persistent) return;

    const target = event.target as HTMLElement;
    const isInsidePop =
      this.shadowRoot?.contains(target) || this.contains(target);

    if (!isInsidePop) {
      this._handleClose();
    }
  };

  private _handlePortalClick = (event: Event): void => {
    if (this.persistent) return;

    const target = event.target as HTMLElement;
    if (target.classList.contains('pop-portal')) {
      this._handleClose();
    }
  };

  private _handleContentClick = (event: Event): void => {
    // Prevent event bubbling for content clicks
    event.stopPropagation();
  };

  private _handleClose = (): void => {
    this.open = false;
  };

  private _trapFocus(): void {
    // Simple focus trap - can be enhanced
    const focusableElements = this.shadowRoot?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }

  private _restoreFocus(): void {
    // Restore focus to previous element
    if (this._previousFocus) {
      this._previousFocus.focus();
      this._previousFocus = null;
    }
  }

  // Public methods
  public show(): void {
    this.open = true;
  }

  public hide(): void {
    this.open = false;
  }

  public toggle(): void {
    this.open = !this.open;
  }

  public updatePosition(): void {
    this._updatePosition();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'echo-pop': EchoPop;
  }
}
