import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type {
  EchoSelectVariant,
  EchoSelectSize,
  EchoContext,
  IconName,
  EchoIconSize,
  EchoIconVariant,
  EchoSelectOption,
} from '../types/index.js';
import { contextColors } from '../styles/context-colors.js';
import { componentSizes } from '../styles/component-sizes.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement('echo-select')
export class EchoSelect extends LitElement {
  @property({ type: String })
  variant: EchoSelectVariant = 'default';

  @property({ type: String })
  size: EchoSelectSize = 'medium';

  @property({ type: String })
  context: EchoContext = 'primary';

  @property({ type: String })
  label = '';

  @property({ type: String })
  placeholder = '';

  @property({ type: String })
  value = '';

  @property({ type: String })
  description = '';

  @property({ type: String })
  icon: IconName | null = null;

  @property({ type: String, attribute: 'icon-position' })
  iconPosition: 'left' | 'right' = 'left';

  @property({ type: String, attribute: 'icon-size' })
  iconSize: EchoIconSize | null = null;

  @property({ type: String, attribute: 'icon-variant' })
  iconVariant: EchoIconVariant | null = null;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  name = '';

  @property({ type: String })
  id = '';

  @property({ type: Boolean })
  multiple = false;

  @property({ type: Array })
  options: EchoSelectOption[] = [];

  static styles = [
    contextColors,
    componentSizes,
    css`
      :host {
        display: block;
        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .select-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .select-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }

      .select-label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        color: #374151;
        margin-bottom: 4px;
      }

      .select-label--required::after {
        content: '*';
        color: #ef4444;
        margin-left: 2px;
      }

      .select-field {
        width: 100%;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        padding: 12px 16px;
        font-size: 14px;
        font-family: inherit;
        background-color: white;
        color: #111827;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        box-sizing: border-box;
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 12px center;
        background-repeat: no-repeat;
        background-size: 16px;
        padding-right: 40px;
      }

      .select-field:focus {
        border-color: var(--context-color);
        box-shadow: 0 0 0 3px var(--context-color-alpha);
      }

      .select-field:disabled {
        background-color: #f9fafb;
        color: #9ca3af;
        cursor: not-allowed;
        border-color: #e5e7eb;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
      }

      .select-field::placeholder {
        color: #9ca3af;
      }

      .select-icon {
        position: absolute;
        color: #6b7280;
        pointer-events: none;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);
      }

      .select-icon--left {
        left: 12px;
      }

      .select-icon--right {
        right: 12px;
      }

      .select-description {
        font-size: 12px;
        color: #6b7280;
        margin-top: 2px;
        line-height: 1.4;
      }

      /* Variants */
      .select-field--default {
        border: 1px solid #d1d5db;
        background-color: white;
      }

      .select-field--outlined {
        border: 2px solid #d1d5db;
        background-color: white;
      }

      .select-field--outlined:focus {
        border-color: var(--context-color);
        box-shadow: 0 0 0 3px var(--context-color-alpha);
      }

      .select-field--filled {
        border: none;
        background-color: #f3f4f6;
        border-bottom: 2px solid #d1d5db;
        border-radius: 6px 6px 0 0;
      }

      .select-field--filled:focus {
        background-color: white;
        border-bottom-color: var(--context-color);
        box-shadow: 0 2px 0 0 var(--context-color);
      }

      .select-field--underlined {
        border: none;
        border-bottom: 2px solid #d1d5db;
        background-color: transparent;
        border-radius: 0;
        padding-left: 0;
        padding-right: 0;
      }

      .select-field--underlined:focus {
        border-bottom-color: var(--context-color);
        box-shadow: 0 2px 0 0 var(--context-color);
      }

      .select-field--underlined.select-field--with-icon {
        padding-left: 28px;
      }

      /* Sizes */
      .select-field--small {
        padding: 8px 12px;
        font-size: 13px;
        padding-right: 36px;
      }

      .select-field--medium {
        padding: 12px 16px;
        font-size: 14px;
        padding-right: 40px;
      }

      .select-field--large {
        padding: 16px 20px;
        font-size: 16px;
        padding-right: 48px;
      }

      /* Icon padding overrides for different sizes */
      .select-field--small.select-field--with-icon-left {
        padding-left: 36px !important;
      }

      .select-field--small.select-field--with-icon-right {
        padding-right: 60px !important;
      }

      .select-field--medium.select-field--with-icon-left {
        padding-left: 40px !important;
      }

      .select-field--medium.select-field--with-icon-right {
        padding-right: 64px !important;
      }

      .select-field--large.select-field--with-icon-left {
        padding-left: 48px !important;
      }

      .select-field--large.select-field--with-icon-right {
        padding-right: 72px !important;
      }

      .select-label--small {
        font-size: 13px;
      }

      .select-label--large {
        font-size: 15px;
      }

      .select-description--small {
        font-size: 11px;
      }

      .select-description--large {
        font-size: 13px;
      }

      /* Icon sizing */
      .select-icon--small.select-icon--left {
        left: 10px;
      }

      .select-icon--small.select-icon--right {
        right: 10px;
      }

      .select-icon--large.select-icon--left {
        left: 14px;
      }

      .select-icon--large.select-icon--right {
        right: 14px;
      }

      /* Error state */
      .select-field--error {
        border-color: #ef4444;
      }

      .select-field--error:focus {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
      }

      .select-description--error {
        color: #ef4444;
      }

      /* Success state */
      .select-field--success {
        border-color: #10b981;
      }

      .select-field--success:focus {
        border-color: #10b981;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
      }

      .select-description--success {
        color: #10b981;
      }

      /* Multiple select styling */
      .select-field--multiple {
        min-height: 40px;
        padding: 8px 12px;
      }

      .select-field--multiple option {
        padding: 8px 12px;
      }
    `,
  ];

  render() {
    const selectId =
      this.id || `echo-select-${Math.random().toString(36).substr(2, 9)}`;

    const selectClasses = [
      'select-field',
      `select-field--${this.variant}`,
      `select-field--${this.size}`,
      this.icon ? `select-field--with-icon-${this.iconPosition}` : '',
      this.disabled ? 'select-field--disabled' : '',
      this.multiple ? 'select-field--multiple' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = [
      'select-label',
      `select-label--${this.size}`,
      this.required ? 'select-label--required' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const descriptionClasses = [
      'select-description',
      `select-description--${this.size}`,
    ]
      .filter(Boolean)
      .join(' ');

    const iconElement = this.icon
      ? html`
          <echo-icon
            name=${this.icon}
            size=${this.iconSize || this._getIconSizeFromSelectSize()}
            variant=${this.iconVariant || 'default'}
            class="select-icon select-icon--${this
              .iconPosition} select-icon--${this.size}"
            style="--icon-color: #6b7280;"
          ></echo-icon>
        `
      : null;

    return html`
      <div class="select-container context--${this.context}">
        ${this.label
          ? html`
              <label for="${selectId}" class="${labelClasses}">
                ${this.label}
              </label>
            `
          : ''}

        <div class="select-wrapper">
          <select
            id="${selectId}"
            class="${selectClasses}"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
            name="${this.name}"
            @change="${this._handleChange}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
          >
            ${this.placeholder && !this.multiple
              ? html`<option value="" disabled>${this.placeholder}</option>`
              : ''}
            ${this.options.map(
              (option) => html`
                <option
                  value="${option.value}"
                  ?disabled="${option.disabled}"
                  ?selected="${option.selected}"
                >
                  ${option.label}
                </option>
              `
            )}
          </select>
          ${iconElement}
        </div>

        ${this.description
          ? html`<div class="${descriptionClasses}">
              ${unsafeHTML(this.description)}
            </div>`
          : ''}
      </div>
    `;
  }

  private _getIconSizeFromSelectSize(): EchoIconSize {
    const sizeMap: Record<EchoSelectSize, EchoIconSize> = {
      small: 'small',
      medium: 'medium',
      large: 'large',
    };
    return sizeMap[this.size];
  }

  private _handleChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.value = select.value;

    this.dispatchEvent(
      new CustomEvent('echo-select-change', {
        detail: {
          value: this.value,
          selectedIndex: select.selectedIndex,
          originalEvent: event,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleFocus(event: Event): void {
    this.dispatchEvent(
      new CustomEvent('echo-select-focus', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleBlur(event: Event): void {
    this.dispatchEvent(
      new CustomEvent('echo-select-blur', {
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
        case 'label':
          this.label = '';
          break;
        case 'placeholder':
          this.placeholder = '';
          break;
        case 'value':
          this.value = '';
          break;
        case 'description':
          this.description = '';
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
        case 'disabled':
          this.disabled = false;
          break;
        case 'required':
          this.required = false;
          break;
        case 'name':
          this.name = '';
          break;
        case 'id':
          this.id = '';
          break;
        case 'multiple':
          this.multiple = false;
          break;
      }
    }
  }

  // Public methods
  public focus(): void {
    const select = this.shadowRoot?.querySelector(
      'select'
    ) as HTMLSelectElement;
    if (select) {
      select.focus();
    }
  }

  public blur(): void {
    const select = this.shadowRoot?.querySelector(
      'select'
    ) as HTMLSelectElement;
    if (select) {
      select.blur();
    }
  }

  public get validity(): ValidityState | null {
    const select = this.shadowRoot?.querySelector(
      'select'
    ) as HTMLSelectElement;
    return select ? select.validity : null;
  }

  public checkValidity(): boolean {
    const select = this.shadowRoot?.querySelector(
      'select'
    ) as HTMLSelectElement;
    return select ? select.checkValidity() : false;
  }

  public reportValidity(): boolean {
    const select = this.shadowRoot?.querySelector(
      'select'
    ) as HTMLSelectElement;
    return select ? select.reportValidity() : false;
  }

  public addOption(option: EchoSelectOption): void {
    this.options = [...this.options, option];
  }

  public removeOption(value: string): void {
    this.options = this.options.filter((option) => option.value !== value);
  }

  public clearOptions(): void {
    this.options = [];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'echo-select': EchoSelect;
  }
}
