import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { EchoSeparatorVariant, EchoSeparatorMargin, EchoSeparatorThickness, EchoSeparatorOrientation, EchoContext } from '../types/index.js';
import { contextColors } from '../styles/context-colors.js';

@customElement('echo-separator')
export class EchoSeparator extends LitElement {
  
  @property({ type: String })
  variant: EchoSeparatorVariant = 'solid';

  @property({ type: String })
  margin: EchoSeparatorMargin = 'medium';

  @property({ type: String })
  orientation: EchoSeparatorOrientation = 'horizontal';

  @property({ type: String })
  thickness: EchoSeparatorThickness = 'medium';

  @property({ type: String })
  context: EchoContext = 'secondary';

  @property({ type: String })
  color: string | null = null;

  static styles = [
    contextColors,
    css`
      :host {
        display: block;
      }

      /* Horizontal separator */
      .separator--horizontal {
        width: 100%;
        border: none;
        border-top-style: var(--separator-variant);
        border-top-width: var(--separator-thickness);
        border-top-color: var(--separator-color, var(--context-color, currentColor));
        margin: var(--separator-margin) 0;
      }

      /* Vertical separator */
      .separator--vertical {
        display: inline-block;
        height: 100%;
        min-height: 20px;
        width: 0;
        border: none;
        border-left-style: var(--separator-variant);
        border-left-width: var(--separator-thickness);
        border-left-color: var(--separator-color, var(--context-color, currentColor));
        margin: 0 var(--separator-margin);
        vertical-align: middle;
      }

      /* Variants */
      .separator--solid {
        --separator-variant: solid;
      }

      .separator--dotted {
        --separator-variant: dotted;
      }

      .separator--dashed {
        --separator-variant: dashed;
      }

      .separator--double {
        --separator-variant: double;
      }

      .separator--gradient {
        border: none;
        background: linear-gradient(
          to right,
          transparent,
          var(--separator-color, var(--context-color, currentColor)),
          transparent
        );
        height: var(--separator-thickness);
      }

      .separator--gradient.separator--vertical {
        width: var(--separator-thickness);
        height: 100%;
        background: linear-gradient(
          to bottom,
          transparent,
          var(--separator-color, var(--context-color, currentColor)),
          transparent
        );
      }

      /* Thickness */
      .thickness--thin {
        --separator-thickness: 1px;
      }

      .thickness--medium {
        --separator-thickness: 2px;
      }

      .thickness--thick {
        --separator-thickness: 4px;
      }

      /* Margins */
      .margin--small {
        --separator-margin: 8px;
      }

      .margin--medium {
        --separator-margin: 16px;
      }

      .margin--large {
        --separator-margin: 32px;
      }

      /* Separator with content */
      .separator-container {
        display: flex;
        align-items: center;
        width: 100%;
        margin: var(--separator-margin) 0;
      }

      .separator-container--vertical {
        flex-direction: column;
        height: 100%;
        width: auto;
        margin: 0 var(--separator-margin);
      }

      .separator-line {
        flex: 1;
        border: none;
        border-top-style: var(--separator-variant);
        border-top-width: var(--separator-thickness);
        border-top-color: var(--separator-color, var(--context-color, currentColor));
        margin: 0;
      }

      .separator-line--vertical {
        flex: 1;
        border: none;
        border-left-style: var(--separator-variant);
        border-left-width: var(--separator-thickness);
        border-left-color: var(--separator-color, var(--context-color, currentColor));
        min-height: 20px;
      }

      .separator-content {
        padding: 0 12px;
        color: var(--separator-color, var(--context-color, currentColor));
        font-size: 14px;
        white-space: nowrap;
      }

      .separator-content--vertical {
        padding: 12px 0;
      }

      /* Gradient variant for content separator */
      .separator-container--gradient .separator-line {
        border: none;
        background: linear-gradient(
          to right,
          transparent,
          var(--separator-color, var(--context-color, currentColor)),
          transparent
        );
        height: var(--separator-thickness);
      }

      .separator-container--gradient.separator-container--vertical .separator-line--vertical {
        border: none;
        background: linear-gradient(
          to bottom,
          transparent,
          var(--separator-color, var(--context-color, currentColor)),
          transparent
        );
        width: var(--separator-thickness);
        height: auto;
      }
    `
  ];

  render() {
    const hasContent = this._hasSlottedContent();
    const classes = [
      `separator--${this.variant}`,
      `thickness--${this.thickness}`,
      `margin--${this.margin}`,
      `context--${this.context}`
    ].join(' ');

    const customColor = this.color ? `--separator-color: ${this.color}` : '';

    if (hasContent) {
      // Render separator with content
      const containerClasses = [
        'separator-container',
        this.orientation === 'vertical' ? 'separator-container--vertical' : '',
        this.variant === 'gradient' ? 'separator-container--gradient' : '',
        `thickness--${this.thickness}`,
        `margin--${this.margin}`,
        `context--${this.context}`
      ].filter(Boolean).join(' ');

      const lineClasses = [
        this.orientation === 'vertical' ? 'separator-line--vertical' : 'separator-line',
        `separator--${this.variant}`
      ].join(' ');

      const contentClasses = [
        'separator-content',
        this.orientation === 'vertical' ? 'separator-content--vertical' : ''
      ].filter(Boolean).join(' ');

      return html`
        <div class="${containerClasses}" style="${customColor}">
          <hr class="${lineClasses}" aria-hidden="true" />
          <div class="${contentClasses}">
            <slot></slot>
          </div>
          <hr class="${lineClasses}" aria-hidden="true" />
        </div>
      `;
    }

    // Render simple separator
    return html`
      <hr 
        class="separator--${this.orientation} ${classes}"
        style="${customColor}"
        role="separator"
        aria-orientation="${this.orientation}"
      />
    `;
  }

  private _hasSlottedContent(): boolean {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return false;
    const nodes = slot.assignedNodes({ flatten: true });
    return nodes.some(node => 
      node.nodeType === Node.ELEMENT_NODE || 
      (node.nodeType === Node.TEXT_NODE && node.textContent?.trim())
    );
  }

  protected firstUpdated(): void {
    // Force re-render after slot content is available
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'echo-separator': EchoSeparator;
  }
}

