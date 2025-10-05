import {
  iconNames,
  echoIconSizeNames,
  echoIconVariantNames,
  echoButtonVariantNames,
  echoSizeNames,
  echoContextNames,
} from './design-toolkit.esm.bundled.js';

class ButtonDemo {
  constructor() {
    this.controls = this.getControls();
    this.elements = this.getElements();
    this.populateSelectors();
    this.setupEventListeners();
    this.updateHtmlCode();
  }

  getControls() {
    return {
      variant: document.querySelector('echo-select[name="variant"]'),
      context: document.querySelector('echo-select[name="context"]'),
      size: document.querySelector('echo-select[name="size"]'),
      disabled: document.querySelector('input[name="disabled"]'),
      icon: document.querySelector('echo-select[name="icon"]'),
      iconPosition: document.querySelector('echo-select[name="icon-position"]'),
      iconSize: document.querySelector('echo-select[name="icon-size"]'),
      iconVariant: document.querySelector('echo-select[name="icon-variant"]'),
      iconStrokeWidth: document.querySelector('echo-input[name="icon-stroke-width"]'),
      text: document.querySelector('echo-input[name="text"]'), 
    };
  }

  getElements() {
    return {
      button: document.querySelector('#preview-button'),
      htmlCode: document.querySelector('#html-code'),
    };
  }

  populateSelectors() {
    this.populateVariantSelector();
    this.populateContextSelector();
    this.populateSizeSelector();
    this.populateIconSelector();
    this.populateIconPositionSelector();
    this.populateIconSizeSelector();
    this.populateIconVariantSelector();
  }

  populateVariantSelector() {
    // Clear existing options except the first empty one
    this.controls.variant.clearOptions();
    this.controls.variant.addOption({ value: '', label: '' });
    
    echoButtonVariantNames.forEach(variant => {
      /*
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = this.capitalizeFirst(variant);
      this.controls.variant.appendChild(option);
      */
      this.controls.variant.addOption({ value: variant, label: this.capitalizeFirst(variant) });
    });
  }

  populateContextSelector() {
    // Clear existing options except the first empty one
    this.controls.context.clearOptions();
    this.controls.context.addOption({ value: '', label: '' });
    
    echoContextNames.forEach(context => {
      this.controls.context.addOption({ value: context, label: this.capitalizeFirst(context) });
    });
  }

  populateSizeSelector() {
    // Clear existing options except the first empty one
    this.controls.size.clearOptions();
    this.controls.size.addOption({ value: '', label: '' });
    
    echoSizeNames.forEach(size => {
      this.controls.size.addOption({ value: size, label: this.getSizeDisplayName(size) });
    });
  }

  populateIconSelector() {
    // Clear existing options except the first empty one
    this.controls.icon.clearOptions();
    this.controls.icon.addOption({ value: '', label: '' });
    
    iconNames.forEach(iconName => {
      this.controls.icon.addOption({ value: iconName, label: this.getIconDisplayName(iconName) });
    });
  }

  populateIconPositionSelector() {
    const positions = ['left', 'right'];
    
    // Clear existing options except the first empty one
    this.controls.iconPosition.clearOptions();
    this.controls.iconPosition.addOption({ value: '', label: '' });
    
    positions.forEach(position => {
      this.controls.iconPosition.addOption({ value: position, label: this.capitalizeFirst(position) });
    });
  }

  populateIconSizeSelector() {
    // Clear existing options except the first empty one
    this.controls.iconSize.clearOptions();
    this.controls.iconSize.addOption({ value: '', label: '' });
    
    echoIconSizeNames.forEach(size => {
      this.controls.iconSize.addOption({ value: size, label: this.capitalizeFirst(size) });
    });
  }

  populateIconVariantSelector() {
    // Clear existing options except the first empty one
    this.controls.iconVariant.clearOptions();
    this.controls.iconVariant.addOption({ value: '', label: '' });
    
    echoIconVariantNames.forEach(variant => {
      this.controls.iconVariant.addOption({ value: variant, label: this.capitalizeFirst(variant) });
    });
  }

  setupEventListeners() {
    this.controls.variant.addEventListener('echo-select-change', () => this.handleVariantChange());
    this.controls.context.addEventListener('echo-select-change', () => this.handleContextChange());
    this.controls.size.addEventListener('echo-select-change', () => this.handleSizeChange());
    this.controls.disabled.addEventListener('change', () => this.handleDisabledChange());
    this.controls.icon.addEventListener('echo-select-change', () => this.handleIconChange());
    this.controls.iconPosition.addEventListener('echo-select-change', () => this.handleIconPositionChange());
    this.controls.iconSize.addEventListener('echo-select-change', () => this.handleIconSizeChange());
    this.controls.iconVariant.addEventListener('echo-select-change', () => this.handleIconVariantChange());
    this.controls.iconStrokeWidth.addEventListener('echo-input-change', () => this.handleIconStrokeWidthChange());
    this.controls.text.addEventListener('echo-input-change', () => this.handleTextChange());
  }

  handleVariantChange() {
    if (this.controls.variant.value === '') {
      this.elements.button.removeAttribute('variant');
    } else {
      this.elements.button.setAttribute('variant', this.controls.variant.value);
    }
    this.updateHtmlCode();
  }

  handleContextChange() {
    if (this.controls.context.value === '') {
      this.elements.button.removeAttribute('context');
    } else {
      this.elements.button.setAttribute('context', this.controls.context.value);
    }
    this.updateHtmlCode();
  }

  handleSizeChange() {
    if (this.controls.size.value === '') {
      this.elements.button.removeAttribute('size');
    } else {
      this.elements.button.setAttribute('size', this.controls.size.value);
    }
    this.updateHtmlCode();
  }

  handleDisabledChange() {
    if (this.controls.disabled.checked) {
      this.elements.button.setAttribute('disabled', '');
    } else {
      this.elements.button.removeAttribute('disabled');
    }
    this.updateHtmlCode();
  }

  handleIconChange() {
    if (this.controls.icon.value === '') {
      this.elements.button.removeAttribute('icon');
    } else {
      this.elements.button.setAttribute('icon', this.controls.icon.value);
    }
    this.updateHtmlCode();
  }

  handleIconPositionChange() {
    if (this.controls.iconPosition.value === '') {
      this.elements.button.removeAttribute('icon-position');
    } else {
      this.elements.button.setAttribute('icon-position', this.controls.iconPosition.value);
    }
    this.updateHtmlCode();
  }

  handleIconSizeChange() {
    if (this.controls.iconSize.value === '') {
      this.elements.button.removeAttribute('icon-size');
    } else {
      this.elements.button.setAttribute('icon-size', this.controls.iconSize.value);
    }
    this.updateHtmlCode();
  }

  handleIconVariantChange() {
    if (this.controls.iconVariant.value === '') {
      this.elements.button.removeAttribute('icon-variant');
    } else {
      this.elements.button.setAttribute('icon-variant', this.controls.iconVariant.value);
    }
    this.updateHtmlCode();
  }

  handleIconStrokeWidthChange() {
    if (this.controls.iconStrokeWidth.value === '') {
      this.elements.button.removeAttribute('icon-stroke-width');
    } else {
      this.elements.button.setAttribute('icon-stroke-width', this.controls.iconStrokeWidth.value);
    }
    this.updateHtmlCode();
  }

  handleTextChange() {
    this.elements.button.innerHTML = this.controls.text.value;
    this.updateHtmlCode();
  }

  updateHtmlCode() {
    const html = this.elements.button.outerHTML;
    const formattedHtml = this.formatHtml(html);
    this.elements.htmlCode.innerHTML = formattedHtml;
  }

  formatHtml(html) {
    // First escape the HTML to prevent rendering
    const escapedHtml = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // Simple HTML formatter with syntax highlighting
    let formatted = '';
    let indentLevel = 0;
    const indentSize = 2;
    
    // Split by tags while preserving them
    const parts = escapedHtml.split(/(&lt;[^&]*&gt;)/);
    
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      
      if (part.startsWith('&lt;')) {
        // This is a tag
        if (part.startsWith('&lt;/')) {
          // Closing tag - decrease indent first
          indentLevel = Math.max(0, indentLevel - 1);
          formatted += ' '.repeat(indentLevel * indentSize) + this.highlightTag(part) + '\n';
        } else if (part.endsWith('/&gt;')) {
          // Self-closing tag
          formatted += ' '.repeat(indentLevel * indentSize) + this.highlightTag(part) + '\n';
        } else {
          // Opening tag - parse attributes and format them
          const formattedTag = this.formatTagWithAttributes(part, indentLevel * indentSize);
          formatted += formattedTag + '\n';
          indentLevel++;
        }
      } else if (part.trim()) {
        // This is content
        formatted += ' '.repeat(indentLevel * indentSize) + this.highlightContent(part) + '\n';
      }
    }
    
    return formatted.trim();
  }

  formatTagWithAttributes(tag, baseIndent) {
    // Extract tag name and attributes
    const tagMatch = tag.match(/&lt;([a-zA-Z][a-zA-Z0-9-]*)(.*?)&gt;/);
    if (!tagMatch) return this.highlightTag(tag);
    
    const tagName = tagMatch[1];
    const attributesStr = tagMatch[2].trim();
    
    if (!attributesStr) {
      // No attributes, just the tag name
      return ' '.repeat(baseIndent) + this.highlightTag(tag);
    }
    
    // Parse attributes
    const attributes = this.parseAttributes(attributesStr);
    
    let result = ' '.repeat(baseIndent) + `<span class="html-tag">&lt;${tagName}</span>\n`;
    
    // Add each attribute on its own line
    attributes.forEach(attr => {
      const indent = ' '.repeat(baseIndent + 2);
      if (attr.value === '') {
        // Boolean attribute
        result += indent + `<span class="html-attribute">${attr.name}</span>=""\n`;
      } else {
        // Attribute with value
        result += indent + `<span class="html-attribute">${attr.name}</span>=<span class="html-value">"${attr.value}"</span>\n`;
      }
    });
    
    // Add closing bracket
    result += ' '.repeat(baseIndent) + '<span class="html-tag">&gt;</span>';
    
    return result;
  }

  parseAttributes(attributesStr) {
    const attributes = [];
    let current = attributesStr.trim();
    
    while (current) {
      // Match attribute=value or attribute=""
      const match = current.match(/^([a-zA-Z][a-zA-Z0-9-]*)(?:=("([^"]*)")|="")?\s*/);
      if (!match) break;
      
      const name = match[1];
      const value = match[3] || ''; // Empty string for boolean attributes
      
      attributes.push({ name, value });
      current = current.substring(match[0].length).trim();
    }
    
    return attributes;
  }

  highlightTag(tag) {
    // Highlight HTML tags with attributes and values
    let highlighted = tag;
    
    // First, handle attributes with values (including hyphens)
    highlighted = highlighted.replace(
      /([a-zA-Z][a-zA-Z0-9-]*)=("([^"]*)")/g,
      '<span class="html-attribute">$1</span>=<span class="html-value">$2</span>'
    );
    
    // Handle boolean attributes (like disabled="")
    highlighted = highlighted.replace(
      /([a-zA-Z][a-zA-Z0-9-]*?)=""/g,
      '<span class="html-attribute">$1</span>=""'
    );
    
    // Handle tag names (including hyphens)
    highlighted = highlighted.replace(
      /&lt;(\/?)([a-zA-Z][a-zA-Z0-9-]*)/g,
      '<span class="html-tag">&lt;$1$2</span>'
    );
    
    // Handle closing brackets
    highlighted = highlighted.replace(
      /&gt;/g,
      '<span class="html-tag">&gt;</span>'
    );
    
    return highlighted;
  }

  highlightContent(content) {
    return `<span class="html-content">${this.escapeHtml(content)}</span>`;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getSizeDisplayName(size) {
    const sizeMap = {
      xs: 'Extra Small',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
    };
    return sizeMap[size];
  }

  getIconDisplayName(iconName) {
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
  document.getElementById('back-to-homepage').addEventListener('click', () => {
      console.log('back to homepage');
      window.location.href = 'index.html';
  });
});
