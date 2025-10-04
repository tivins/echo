import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type {
  EchoLayoutDisplay,
  EchoLayoutDirection,
  EchoLayoutWrap,
  EchoLayoutAlign,
  EchoLayoutJustify,
  EchoLayoutGap,
  EchoLayoutColumns,
  EchoLayoutRows,
  EchoSize,
} from '../types/index.js';
import { layoutStyles } from '../styles/layout-styles.js';

@customElement('echo-layout')
export class EchoLayout extends LitElement {
  @property({ type: String })
  display: EchoLayoutDisplay = 'flex';

  @property({ type: String })
  direction: EchoLayoutDirection = 'row';

  @property({ type: String })
  wrap: EchoLayoutWrap = 'nowrap';

  @property({ type: String })
  align: EchoLayoutAlign = 'stretch';

  @property({ type: String })
  justify: EchoLayoutJustify = 'start';

  @property({ type: String })
  gap: EchoLayoutGap = 'medium';

  @property({ type: [Number, String] })
  columns: EchoLayoutColumns = 'auto';

  @property({ type: [Number, String] })
  rows: EchoLayoutRows = 'auto';

  @property({ type: String })
  size: EchoSize = 'medium';

  static styles = [
    layoutStyles,
    css`
      :host {
        display: block;
        --layout-columns: var(--layout-columns-custom, auto);
        --layout-rows: var(--layout-rows-custom, auto);
      }

      .layout {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }

      /* Grid specific styles */
      .layout--grid-custom-columns {
        grid-template-columns: var(--layout-columns);
      }

      .layout--grid-custom-rows {
        grid-template-rows: var(--layout-rows);
      }

      /* Responsive behavior */
      @media (max-width: 768px) {
        .layout--responsive {
          flex-direction: column;
        }
      }
    `,
  ];

  render() {
    const classes = this._buildClassList();
    const styles = this._buildCustomStyles();

    return html`
      <div class="${classes}" style="${styles}">
        <slot></slot>
      </div>
    `;
  }

  private _buildClassList(): string {
    const classes = [
      'layout',
      `layout--${this.display}`,
      `layout--gap-${this.gap}`,
      `layout--size-${this.size}`,
    ];

    // Add flex-specific classes
    if (this.display === 'flex' || this.display === 'inline-flex') {
      classes.push(
        `layout--${this.direction}`,
        `layout--${this.wrap}`,
        `layout--align-${this.align}`,
        `layout--justify-${this.justify}`
      );
    }

    // Add grid-specific classes
    if (this.display === 'grid' || this.display === 'inline-grid') {
      if (typeof this.columns === 'number') {
        classes.push('layout--grid-custom-columns');
      } else if (this.columns === 'auto-fit') {
        classes.push('layout--grid-auto-fit');
      } else if (this.columns === 'auto-fill') {
        classes.push('layout--grid-auto-fill');
      } else {
        classes.push('layout--grid-auto');
      }

      if (typeof this.rows === 'number') {
        classes.push('layout--grid-custom-rows');
      }
    }

    return classes.filter(Boolean).join(' ');
  }

  private _buildCustomStyles(): string {
    const styles: string[] = [];

    // Handle custom grid columns
    if (this.display === 'grid' || this.display === 'inline-grid') {
      if (typeof this.columns === 'number') {
        styles.push(`--layout-columns-custom: repeat(${this.columns}, 1fr)`);
      }
    }

    // Handle custom grid rows
    if (this.display === 'grid' || this.display === 'inline-grid') {
      if (typeof this.rows === 'number') {
        styles.push(`--layout-rows-custom: repeat(${this.rows}, 1fr)`);
      }
    }

    return styles.join('; ');
  }

  // Public methods for dynamic updates
  public setDisplay(display: EchoLayoutDisplay): void {
    this.display = display;
  }

  public setDirection(direction: EchoLayoutDirection): void {
    this.direction = direction;
  }

  public setAlign(align: EchoLayoutAlign): void {
    this.align = align;
  }

  public setJustify(justify: EchoLayoutJustify): void {
    this.justify = justify;
  }

  public setGap(gap: EchoLayoutGap): void {
    this.gap = gap;
  }

  public setColumns(columns: EchoLayoutColumns): void {
    this.columns = columns;
  }

  public setRows(rows: EchoLayoutRows): void {
    this.rows = rows;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'echo-layout': EchoLayout;
  }
}
