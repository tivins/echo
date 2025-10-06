import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type {
  EchoCheckboxType,
  EchoCheckboxVariant,
  EchoCheckboxSize,
  EchoContext,
  EchoIconSize,
} from '../types/index.js';
import { contextColors } from '../styles/context-colors.js';
import { componentSizes } from '../styles/component-sizes.js';

@customElement('echo-checkbox')
export class EchoCheckbox extends LitElement {
  @property({ type: String })
  type: EchoCheckboxType = 'checkbox';

  @property({ type: String })
  variant: EchoCheckboxVariant = 'default';

  @property({ type: String })
  size: EchoCheckboxSize = 'medium';

  @property({ type: String })
  context: EchoContext = 'primary';

  @property({ type: String })
  label = '';

  @property({ type: String })
  description = '';

  @property({ type: Boolean })
  checked = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  name = '';

  @property({ type: String })
  id = '';

  @property({ type: String })
  value = '';

  static styles = [
    contextColors,
    componentSizes,
    css`
      :host {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .checkbox-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .checkbox-wrapper {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        cursor: pointer;
      }

      .checkbox-wrapper--disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }

      .checkbox-input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }

      .checkbox-visual {
        position: relative;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #d1d5db;
        background-color: white;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
      }

      .checkbox-visual--checked {
        border-color: var(--context-color);
        background-color: var(--context-color);
      }

      .checkbox-visual--disabled {
        border-color: #e5e7eb;
        background-color: #f9fafb;
        cursor: not-allowed;
      }

      .checkbox-visual--disabled.checkbox-visual--checked {
        border-color: #9ca3af;
        background-color: #9ca3af;
      }

      /* Checkbox styles */
      .checkbox-visual--checkbox {
        width: 18px;
        height: 18px;
        border-radius: 4px;
      }

      .checkbox-visual--checkbox.checkbox-visual--small {
        width: 16px;
        height: 16px;
        border-radius: 3px;
      }

      .checkbox-visual--checkbox.checkbox-visual--large {
        width: 20px;
        height: 20px;
        border-radius: 5px;
      }

      .checkbox-checkmark {
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .checkbox-checkmark echo-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        transform: translateY(-1px);
      }

      .checkbox-visual--checked .checkbox-checkmark {
        opacity: 1;
        transform: scale(1);
      }

      /* Radio styles */
      .checkbox-visual--radio {
        width: 18px;
        height: 18px;
        border-radius: 50%;
      }

      .checkbox-visual--radio.checkbox-visual--small {
        width: 16px;
        height: 16px;
      }

      .checkbox-visual--radio.checkbox-visual--large {
        width: 20px;
        height: 20px;
      }

      .checkbox-radio-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: white;
        opacity: 0;
        transform: scale(0);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .checkbox-visual--radio.checkbox-visual--small .checkbox-radio-dot {
        width: 6px;
        height: 6px;
      }

      .checkbox-visual--radio.checkbox-visual--large .checkbox-radio-dot {
        width: 10px;
        height: 10px;
      }

      .checkbox-visual--checked .checkbox-radio-dot {
        opacity: 1;
        transform: scale(1);
      }

      /* Toggle styles */
      .checkbox-visual--toggle {
        width: 44px;
        height: 24px;
        border-radius: 12px;
        background-color: #e5e7eb;
        position: relative;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .checkbox-visual--toggle.checkbox-visual--small {
        width: 36px;
        height: 20px;
        border-radius: 10px;
      }

      .checkbox-visual--toggle.checkbox-visual--large {
        width: 52px;
        height: 28px;
        border-radius: 14px;
      }

      .checkbox-visual--toggle.checkbox-visual--checked {
        background-color: var(--context-color);
        border-color: var(--context-color);
      }

      .checkbox-toggle-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .checkbox-visual--toggle.checkbox-visual--small .checkbox-toggle-thumb {
        width: 16px;
        height: 16px;
        top: 2px;
        left: 2px;
      }

      .checkbox-visual--toggle.checkbox-visual--large .checkbox-toggle-thumb {
        width: 24px;
        height: 24px;
        top: 2px;
        left: 2px;
      }

      .checkbox-visual--toggle.checkbox-visual--checked .checkbox-toggle-thumb {
        transform: translateX(20px);
      }

      .checkbox-visual--toggle.checkbox-visual--small.checkbox-visual--checked .checkbox-toggle-thumb {
        transform: translateX(16px);
      }

      .checkbox-visual--toggle.checkbox-visual--large.checkbox-visual--checked .checkbox-toggle-thumb {
        transform: translateX(24px);
      }

      .checkbox-content {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
      }

      .checkbox-label {
        font-size: 14px;
        font-weight: 500;
        color: #374151;
        line-height: 1.4;
        user-select: none;
      }

      .checkbox-label--small {
        font-size: 13px;
      }

      .checkbox-label--large {
        font-size: 15px;
      }

      .checkbox-label--required::after {
        content: '*';
        color: #ef4444;
        margin-left: 2px;
      }

      .checkbox-description {
        font-size: 12px;
        color: #6b7280;
        line-height: 1.4;
      }

      .checkbox-description--small {
        font-size: 11px;
      }

      .checkbox-description--large {
        font-size: 13px;
      }

      /* Focus styles */
      .checkbox-visual:focus-within {
        outline: 2px solid var(--context-color);
        outline-offset: 2px;
      }

      /* Variants */
      .checkbox-visual--outlined {
        border-width: 2px;
      }

      .checkbox-visual--filled {
        background-color: #f3f4f6;
        border-color: #d1d5db;
      }

      .checkbox-visual--filled.checkbox-visual--checked {
        background-color: var(--context-color);
        border-color: var(--context-color);
      }
    `,
  ];

  render() {
    const checkboxId = this.id || `echo-checkbox-${Math.random().toString(36).substr(2, 9)}`;
    
    const wrapperClasses = [
      'checkbox-wrapper',
      this.disabled ? 'checkbox-wrapper--disabled' : '',
    ].filter(Boolean).join(' ');

    const visualClasses = [
      'checkbox-visual',
      `checkbox-visual--${this.type}`,
      `checkbox-visual--${this.size}`,
      `checkbox-visual--${this.variant}`,
      this.checked ? 'checkbox-visual--checked' : '',
      this.disabled ? 'checkbox-visual--disabled' : '',
    ].filter(Boolean).join(' ');

    const labelClasses = [
      'checkbox-label',
      `checkbox-label--${this.size}`,
      this.required ? 'checkbox-label--required' : '',
    ].filter(Boolean).join(' ');

    const descriptionClasses = [
      'checkbox-description',
      `checkbox-description--${this.size}`,
    ].filter(Boolean).join(' ');

    const visualElement = this._renderVisualElement();

    return html`
      <div class="checkbox-container context--${this.context}">
        <div class="${wrapperClasses}" @click="${this._handleClick}">
          <input
            id="${checkboxId}"
            class="checkbox-input"
            type="${this.type === 'toggle' ? 'checkbox' : this.type}"
            ?checked="${this.checked}"
            ?disabled="${this.disabled}"
            ?required="${this.required}"
            name="${ifDefined(this.name || undefined)}"
            value="${ifDefined(this.value || undefined)}"
            @change="${this._handleChange}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
          />
          <div class="${visualClasses}" tabindex="0" role="checkbox" aria-checked="${this.checked}">
            ${visualElement}
          </div>
          <div class="checkbox-content">
            ${this.label
              ? html`
                  <label for="${checkboxId}" class="${labelClasses}">
                    ${this.label}
                  </label>
                `
              : ''}
            ${this.description
              ? html`<div class="${descriptionClasses}">${this.description}</div>`
              : ''}
          </div>
        </div>
      </div>
    `;
  }

  private _renderVisualElement() {
    switch (this.type) {
      case 'checkbox':
        return html`
          <echo-icon
            name="check"
            size="${this._getIconSizeFromCheckboxSize()}"
            variant="default"
            class="checkbox-checkmark"
            color="white"
            stroke-width="2"
          ></echo-icon>
        `;
      case 'radio':
        return html`<div class="checkbox-radio-dot"></div>`;
      case 'toggle':
        return html`<div class="checkbox-toggle-thumb"></div>`;
      default:
        return html`
          <echo-icon
            name="check"
            size="${this._getIconSizeFromCheckboxSize()}"
            variant="default"
            class="checkbox-checkmark"
            style="--icon-color: white;"
          ></echo-icon>
        `;
    }
  }

  private _getIconSizeFromCheckboxSize(): EchoIconSize {
    const sizeMap: Record<EchoCheckboxSize, EchoIconSize> = {
      small: 'small',
      medium: 'small', // Use smaller icon for better centering
      large: 'medium', // Use smaller icon for better centering
    };
    return sizeMap[this.size];
  }

  private _handleClick(event: Event): void {
    if (this.disabled) {
      return;
    }
    
    event.preventDefault();
    this.checked = !this.checked;
    this._dispatchChangeEvent();
  }

  private _handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this._dispatchChangeEvent();
  }

  private _handleFocus(event: Event): void {
    this.dispatchEvent(
      new CustomEvent('echo-checkbox-focus', {
        detail: { 
          checked: this.checked,
          originalEvent: event 
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleBlur(event: Event): void {
    this.dispatchEvent(
      new CustomEvent('echo-checkbox-blur', {
        detail: { 
          checked: this.checked,
          originalEvent: event 
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _dispatchChangeEvent(): void {
    this.dispatchEvent(
      new CustomEvent('echo-checkbox-change', {
        detail: { 
          checked: this.checked,
          value: this.value,
          type: this.type
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
        case 'type':
          this.type = 'checkbox';
          break;
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
        case 'description':
          this.description = '';
          break;
        case 'checked':
          this.checked = false;
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
        case 'value':
          this.value = '';
          break;
      }
    }
  }

  // Public methods
  public focus(): void {
    const visual = this.shadowRoot?.querySelector('.checkbox-visual') as HTMLElement;
    if (visual) {
      visual.focus();
    }
  }

  public blur(): void {
    const visual = this.shadowRoot?.querySelector('.checkbox-visual') as HTMLElement;
    if (visual) {
      visual.blur();
    }
  }

  public click(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      this._dispatchChangeEvent();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'echo-checkbox': EchoCheckbox;
  }
}
