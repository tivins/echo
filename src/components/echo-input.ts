import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type {
  EchoInputVariant,
  EchoInputSize,
  EchoInputType,
  EchoContext,
  IconName,
  EchoIconSize,
  EchoIconVariant,
} from '../types/index.js';
import { contextColors } from '../styles/context-colors.js';
import { componentSizes } from '../styles/component-sizes.js';

@customElement('echo-input')
export class EchoInput extends LitElement {
  @property({ type: String })
  variant: EchoInputVariant = 'default';

  @property({ type: String })
  size: EchoInputSize = 'medium';

  @property({ type: String })
  context: EchoContext = 'primary';

  @property({ type: String })
  type: EchoInputType = 'text';

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

  @property({ type: Boolean })
  readonly = false;

  @property({ type: String })
  name = '';

  @property({ type: String })
  id = '';

  @property({ type: Number })
  minlength: number | null = null;

  @property({ type: Number })
  maxlength: number | null = null;

  @property({ type: String })
  pattern: string | null = null;

  @property({ type: Number })
  step: number | null = null;

  @property({ type: Number })
  min: number | null = null;

  @property({ type: Number })
  max: number | null = null;


  static styles = [
    contextColors,
    componentSizes,
    css`
      :host {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .input-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }

      .input-label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        color: #374151;
        margin-bottom: 4px;
      }

      .input-label--required::after {
        content: '*';
        color: #ef4444;
        margin-left: 2px;
      }

      .input-field {
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
      }

      .input-field:focus {
        border-color: var(--context-color);
        box-shadow: 0 0 0 3px var(--context-color-alpha);
      }

      .input-field:disabled {
        background-color: #f9fafb;
        color: #9ca3af;
        cursor: not-allowed;
        border-color: #e5e7eb;
      }

      .input-field:read-only {
        background-color: #f9fafb;
        cursor: default;
      }

      .input-field::placeholder {
        color: #9ca3af;
      }

      .input-icon {
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

      .input-icon--left {
        left: 12px;
      }

      .input-icon--right {
        right: 12px;
      }


      .input-description {
        font-size: 12px;
        color: #6b7280;
        margin-top: 2px;
        line-height: 1.4;
      }

      /* Variants */
      .input-field--default {
        border: 1px solid #d1d5db;
        background-color: white;
      }

      .input-field--outlined {
        border: 2px solid #d1d5db;
        background-color: white;
      }

      .input-field--outlined:focus {
        border-color: var(--context-color);
        box-shadow: 0 0 0 3px var(--context-color-alpha);
      }

      .input-field--filled {
        border: none;
        background-color: #f3f4f6;
        border-bottom: 2px solid #d1d5db;
        border-radius: 6px 6px 0 0;
      }

      .input-field--filled:focus {
        background-color: white;
        border-bottom-color: var(--context-color);
        box-shadow: 0 2px 0 0 var(--context-color);
      }

      .input-field--underlined {
        border: none;
        border-bottom: 2px solid #d1d5db;
        background-color: transparent;
        border-radius: 0;
        padding-left: 0;
        padding-right: 0;
      }

      .input-field--underlined:focus {
        border-bottom-color: var(--context-color);
        box-shadow: 0 2px 0 0 var(--context-color);
      }

      .input-field--underlined.input-field--with-icon {
        padding-left: 28px;
      }

      /* Sizes */
      .input-field--small {
        padding: 8px 12px;
        font-size: 13px;
      }

      .input-field--medium {
        padding: 12px 16px;
        font-size: 14px;
      }

      .input-field--large {
        padding: 16px 20px;
        font-size: 16px;
      }

      /* Icon padding overrides for different sizes */
      .input-field--small.input-field--with-icon-left {
        padding-left: 36px !important;
      }

      .input-field--small.input-field--with-icon-right {
        padding-right: 36px !important;
      }

      .input-field--medium.input-field--with-icon-left {
        padding-left: 40px !important;
      }

      .input-field--medium.input-field--with-icon-right {
        padding-right: 40px !important;
      }

      .input-field--large.input-field--with-icon-left {
        padding-left: 48px !important;
      }

      .input-field--large.input-field--with-icon-right {
        padding-right: 48px !important;
      }

      .input-label--small {
        font-size: 13px;
      }

      .input-label--large {
        font-size: 15px;
      }

      .input-description--small {
        font-size: 11px;
      }

      .input-description--large {
        font-size: 13px;
      }

      /* Icon sizing */
      .input-icon--small.input-icon--left {
        left: 10px;
      }

      .input-icon--small.input-icon--right {
        right: 10px;
      }

      .input-icon--large.input-icon--left {
        left: 14px;
      }

      .input-icon--large.input-icon--right {
        right: 14px;
      }

      /* Error state */
      .input-field--error {
        border-color: #ef4444;
      }

      .input-field--error:focus {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
      }

      .input-description--error {
        color: #ef4444;
      }

      /* Success state */
      .input-field--success {
        border-color: #10b981;
      }

      .input-field--success:focus {
        border-color: #10b981;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
      }

      .input-description--success {
        color: #10b981;
      }
    `,
  ];

  render() {
    const inputId = this.id || `echo-input-${Math.random().toString(36).substr(2, 9)}`;
    
    const inputClasses = [
      'input-field',
      `input-field--${this.variant}`,
      `input-field--${this.size}`,
      this.icon ? `input-field--with-icon-${this.iconPosition}` : '',
      this.disabled ? 'input-field--disabled' : '',
      this.readonly ? 'input-field--readonly' : '',
    ].filter(Boolean).join(' ');

    const labelClasses = [
      'input-label',
      `input-label--${this.size}`,
      this.required ? 'input-label--required' : '',
    ].filter(Boolean).join(' ');

    const descriptionClasses = [
      'input-description',
      `input-description--${this.size}`,
    ].filter(Boolean).join(' ');


    const iconElement = this.icon
      ? html`
          <echo-icon
            name=${this.icon}
            size=${this.iconSize || this._getIconSizeFromInputSize()}
            variant=${this.iconVariant || 'default'}
            class="input-icon input-icon--${this.iconPosition} input-icon--${this.size}"
            style="--icon-color: #6b7280;"
          ></echo-icon>
        `
      : null;

    return html`
      <div class="input-container context--${this.context}">
        ${this.label
          ? html`
              <label for="${inputId}" class="${labelClasses}">
                ${this.label}
              </label>
            `
          : ''}
        
        <div class="input-wrapper">
          <input
            id="${inputId}"
            class="${inputClasses}"
            type="${this.type}"
            placeholder="${this.placeholder}"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            ?required="${this.required}"
            ?readonly="${this.readonly}"
            name="${this.name}"
            minlength="${ifDefined(this.minlength)}"
            maxlength="${ifDefined(this.maxlength)}"
            pattern="${ifDefined(this.pattern)}"
            step="${ifDefined(this.step)}"
            min="${ifDefined(this.min)}"
            max="${ifDefined(this.max)}"
            @input="${this._handleInput}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @change="${this._handleChange}"
          />
          ${iconElement}
        </div>
        
        ${this.description
          ? html`<div class="${descriptionClasses}">${this.description}</div>`
          : ''}
      </div>
    `;
  }

  private _getIconSizeFromInputSize(): EchoIconSize {
    const sizeMap: Record<EchoInputSize, EchoIconSize> = {
      small: 'small',
      medium: 'medium',
      large: 'large',
    };
    return sizeMap[this.size];
  }

  private _handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    
    this.dispatchEvent(
      new CustomEvent('echo-input-change', {
        detail: { 
          value: this.value,
          originalEvent: event 
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleFocus(event: Event): void {
    this.dispatchEvent(
      new CustomEvent('echo-input-focus', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleBlur(event: Event): void {
    this.dispatchEvent(
      new CustomEvent('echo-input-blur', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    
    this.dispatchEvent(
      new CustomEvent('echo-input-change', {
        detail: { 
          value: this.value,
          originalEvent: event 
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Handle attribute changes to reset properties to default values when attributes are removed
   */
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
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
        case 'type':
          this.type = 'text';
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
        case 'readonly':
          this.readonly = false;
          break;
        case 'name':
          this.name = '';
          break;
        case 'id':
          this.id = '';
          break;
        case 'minlength':
          this.minlength = null;
          break;
        case 'maxlength':
          this.maxlength = null;
          break;
        case 'pattern':
          this.pattern = null;
          break;
        case 'step':
          this.step = null;
          break;
        case 'min':
          this.min = null;
          break;
        case 'max':
          this.max = null;
          break;
      }
    }
  }

  // Public methods
  public focus(): void {
    const input = this.shadowRoot?.querySelector('input') as HTMLInputElement;
    if (input) {
      input.focus();
    }
  }

  public blur(): void {
    const input = this.shadowRoot?.querySelector('input') as HTMLInputElement;
    if (input) {
      input.blur();
    }
  }

  public select(): void {
    const input = this.shadowRoot?.querySelector('input') as HTMLInputElement;
    if (input) {
      input.select();
    }
  }

  public get validity(): ValidityState | null {
    const input = this.shadowRoot?.querySelector('input') as HTMLInputElement;
    return input ? input.validity : null;
  }

  public checkValidity(): boolean {
    const input = this.shadowRoot?.querySelector('input') as HTMLInputElement;
    return input ? input.checkValidity() : false;
  }

  public reportValidity(): boolean {
    const input = this.shadowRoot?.querySelector('input') as HTMLInputElement;
    return input ? input.reportValidity() : false;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'echo-input': EchoInput;
  }
}
