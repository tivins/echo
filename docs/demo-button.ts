import type {
  EchoButtonVariant,
  EchoSize,
  EchoContext,
  IconName,
  EchoIconSize,
  EchoIconVariant,
} from '../src/types/index.js';
import {
  iconNames,
  echoIconSizeNames,
  echoIconVariantNames,
} from '../src/types/index.js';

interface DemoControls {
  variant: HTMLSelectElement;
  context: HTMLSelectElement;
  size: HTMLSelectElement;
  disabled: HTMLInputElement;
  icon: HTMLSelectElement;
  iconPosition: HTMLSelectElement;
  iconSize: HTMLSelectElement;
  iconVariant: HTMLSelectElement;
  iconStrokeWidth: HTMLInputElement;
}

interface DemoElements {
  button: HTMLElement;
  htmlCode: HTMLElement;
}

class ButtonDemo {
  private controls: DemoControls;
  private elements: DemoElements;

  constructor() {
    this.controls = this.getControls();
    this.elements = this.getElements();
    this.populateSelectors();
    this.setupEventListeners();
    this.updateHtmlCode();
  }

  private getControls(): DemoControls {
    return {
      variant: document.querySelector('select[name="variant"]')!,
      context: document.querySelector('select[name="context"]')!,
      size: document.querySelector('select[name="size"]')!,
      disabled: document.querySelector('input[name="disabled"]')!,
      icon: document.querySelector('select[name="icon"]')!,
      iconPosition: document.querySelector('select[name="icon-position"]')!,
      iconSize: document.querySelector('select[name="icon-size"]')!,
      iconVariant: document.querySelector('select[name="icon-variant"]')!,
      iconStrokeWidth: document.querySelector('input[name="icon-stroke-width"]')!,
    };
  }

  private getElements(): DemoElements {
    return {
      button: document.querySelector('echo-button')!,
      htmlCode: document.querySelector('#html-code')!,
    };
  }

  private populateSelectors(): void {
    this.populateVariantSelector();
    this.populateContextSelector();
    this.populateSizeSelector();
    this.populateIconSelector();
    this.populateIconPositionSelector();
    this.populateIconSizeSelector();
    this.populateIconVariantSelector();
  }

  private populateVariantSelector(): void {
    const variants: EchoButtonVariant[] = ['default', 'link', 'outline', 'ghost', 'soft'];
    
    // Clear existing options except the first empty one
    this.controls.variant.innerHTML = '<option></option>';
    
    variants.forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = this.capitalizeFirst(variant);
      this.controls.variant.appendChild(option);
    });
  }

  private populateContextSelector(): void {
    const contexts: EchoContext[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
    
    // Clear existing options except the first empty one
    this.controls.context.innerHTML = '<option></option>';
    
    contexts.forEach(context => {
      const option = document.createElement('option');
      option.value = context;
      option.textContent = this.capitalizeFirst(context);
      this.controls.context.appendChild(option);
    });
  }

  private populateSizeSelector(): void {
    const sizes: EchoSize[] = ['xs', 'small', 'medium', 'large'];
    
    // Clear existing options except the first empty one
    this.controls.size.innerHTML = '<option></option>';
    
    sizes.forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = this.getSizeDisplayName(size);
      this.controls.size.appendChild(option);
    });
  }

  private populateIconSelector(): void {
    // Clear existing options except the first empty one
    this.controls.icon.innerHTML = '<option></option>';
    
    iconNames.forEach(iconName => {
      const option = document.createElement('option');
      option.value = iconName;
      option.textContent = this.getIconDisplayName(iconName);
      this.controls.icon.appendChild(option);
    });
  }

  private populateIconPositionSelector(): void {
    const positions: ('left' | 'right')[] = ['left', 'right'];
    
    // Clear existing options except the first empty one
    this.controls.iconPosition.innerHTML = '<option></option>';
    
    positions.forEach(position => {
      const option = document.createElement('option');
      option.value = position;
      option.textContent = this.capitalizeFirst(position);
      this.controls.iconPosition.appendChild(option);
    });
  }

  private populateIconSizeSelector(): void {
    // Clear existing options except the first empty one
    this.controls.iconSize.innerHTML = '<option></option>';
    
    echoIconSizeNames.forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = this.capitalizeFirst(size);
      this.controls.iconSize.appendChild(option);
    });
  }

  private populateIconVariantSelector(): void {
    // Clear existing options except the first empty one
    this.controls.iconVariant.innerHTML = '<option></option>';
    
    echoIconVariantNames.forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = this.capitalizeFirst(variant);
      this.controls.iconVariant.appendChild(option);
    });
  }

  private setupEventListeners(): void {
    this.controls.variant.addEventListener('change', () => this.handleVariantChange());
    this.controls.context.addEventListener('change', () => this.handleContextChange());
    this.controls.size.addEventListener('change', () => this.handleSizeChange());
    this.controls.disabled.addEventListener('change', () => this.handleDisabledChange());
    this.controls.icon.addEventListener('change', () => this.handleIconChange());
    this.controls.iconPosition.addEventListener('change', () => this.handleIconPositionChange());
    this.controls.iconSize.addEventListener('change', () => this.handleIconSizeChange());
    this.controls.iconVariant.addEventListener('change', () => this.handleIconVariantChange());
    this.controls.iconStrokeWidth.addEventListener('change', () => this.handleIconStrokeWidthChange());
  }

  private handleVariantChange(): void {
    if (this.controls.variant.value === '') {
      this.elements.button.removeAttribute('variant');
    } else {
      this.elements.button.setAttribute('variant', this.controls.variant.value);
    }
    this.updateHtmlCode();
  }

  private handleContextChange(): void {
    if (this.controls.context.value === '') {
      this.elements.button.removeAttribute('context');
    } else {
      this.elements.button.setAttribute('context', this.controls.context.value);
    }
    this.updateHtmlCode();
  }

  private handleSizeChange(): void {
    if (this.controls.size.value === '') {
      this.elements.button.removeAttribute('size');
    } else {
      this.elements.button.setAttribute('size', this.controls.size.value);
    }
    this.updateHtmlCode();
  }

  private handleDisabledChange(): void {
    if (this.controls.disabled.checked) {
      this.elements.button.setAttribute('disabled', '');
    } else {
      this.elements.button.removeAttribute('disabled');
    }
    this.updateHtmlCode();
  }

  private handleIconChange(): void {
    if (this.controls.icon.value === '') {
      this.elements.button.removeAttribute('icon');
    } else {
      this.elements.button.setAttribute('icon', this.controls.icon.value);
    }
    this.updateHtmlCode();
  }

  private handleIconPositionChange(): void {
    if (this.controls.iconPosition.value === '') {
      this.elements.button.removeAttribute('icon-position');
    } else {
      this.elements.button.setAttribute('icon-position', this.controls.iconPosition.value);
    }
    this.updateHtmlCode();
  }

  private handleIconSizeChange(): void {
    if (this.controls.iconSize.value === '') {
      this.elements.button.removeAttribute('icon-size');
    } else {
      this.elements.button.setAttribute('icon-size', this.controls.iconSize.value);
    }
    this.updateHtmlCode();
  }

  private handleIconVariantChange(): void {
    if (this.controls.iconVariant.value === '') {
      this.elements.button.removeAttribute('icon-variant');
    } else {
      this.elements.button.setAttribute('icon-variant', this.controls.iconVariant.value);
    }
    this.updateHtmlCode();
  }

  private handleIconStrokeWidthChange(): void {
    if (this.controls.iconStrokeWidth.value === '') {
      this.elements.button.removeAttribute('icon-stroke-width');
    } else {
      this.elements.button.setAttribute('icon-stroke-width', this.controls.iconStrokeWidth.value);
    }
    this.updateHtmlCode();
  }

  private updateHtmlCode(): void {
    const html = this.elements.button.outerHTML;
    this.elements.htmlCode.textContent = html;
  }

  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private getSizeDisplayName(size: EchoSize): string {
    const sizeMap: Record<EchoSize, string> = {
      xs: 'Extra Small',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
    };
    return sizeMap[size];
  }

  private getIconDisplayName(iconName: IconName): string {
    // Convert kebab-case to Title Case
    return iconName
      .split('-')
      .map(word => this.capitalizeFirst(word))
      .join(' ');
  }
}

// Initialize the demo when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ButtonDemo();
});
