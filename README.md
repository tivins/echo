# Echo Design System

A modern web component library built with Lit, providing a comprehensive set of reusable UI components for web applications.

**Demo**: https://tivins.github.io/echo/

## Features

- **Web Components**: Built with Lit for maximum compatibility and performance
- **TypeScript**: Full TypeScript support with comprehensive type definitions
- **Modern Build**: Vite + Rollup for optimal bundle sizes
- **Quality Tools**: ESLint + Prettier for code quality
- **Testing**: Playwright + Vitest for comprehensive testing
- **Accessibility**: Full ARIA support and keyboard navigation

## Components

### Core Components

- **echo-button**: Versatile button component with multiple variants and sizes
- **echo-link**: Link component with button-like styling and href support
- **echo-input**: Form input component with validation states
- **echo-checkbox**: Checkbox component with custom styling
- **echo-select**: Dropdown select component
- **echo-card**: Card component for content organization
- **echo-layout**: Layout component for responsive design
- **echo-separator**: Visual separator component
- **echo-icon**: Icon component with built-in icon library

### Overlay Components

- **echo-pop**: Versatile pop-in/modal component
  - Multiple variants: default, overlay, tooltip, dropdown, modal
  - Smart positioning with collision detection and proper viewport boundaries
  - Animation system with smooth entrance/exit effects (fade, slide-top, slide-bottom, scale)
  - Context colors with visual styling (border accents, colored titles, background tints)
  - Trigger options: click, hover, manual
  - Icon alignment with titles
  - Full accessibility support

## Installation

```bash
npm install design-toolkit
```

## Usage

### ES Modules

```javascript
import 'design-toolkit/dist/design-toolkit.esm.js';

// Use components
const button = document.createElement('echo-button');
button.textContent = 'Click me';
document.body.appendChild(button);
```

### UMD

```html
<script src="https://unpkg.com/design-toolkit/dist/design-toolkit.umd.min.js"></script>
<script>
  const button = document.createElement('echo-button');
  button.textContent = 'Click me';
  document.body.appendChild(button);
</script>
```

## Examples

### Basic Button

```html
<echo-button variant="primary" size="medium">
  Click me
</echo-button>
```

### Link Component

```html
<echo-link href="https://example.com" variant="default" context="primary">
  Visit Example
</echo-link>

<!-- External link with security attributes -->
<echo-link href="https://github.com" target="_blank" rel="noopener noreferrer">
  GitHub
</echo-link>

<!-- Link with icon -->
<echo-link href="/download" icon="download" icon-position="left">
  Download PDF
</echo-link>
```

### Card Component

```html
<!-- Basic card with context styling -->
<echo-card context="primary" card-title="Primary Card">
  <p>This card has a blue left border and colored title.</p>
</echo-card>

<!-- Success context card -->
<echo-card context="success" card-title="Success Card">
  <p>This card has a green left border and colored title.</p>
</echo-card>

<!-- Card with icon and context -->
<echo-card context="warning" card-title="Warning Card" icon="alert-triangle">
  <p>This card has a warning icon and orange styling.</p>
</echo-card>

<!-- Flat variant with context background -->
<echo-card context="info" variant="flat" card-title="Info Card">
  <p>This card has a background tint and colored accents.</p>
</echo-card>

<!-- Card with footer actions -->
<echo-card context="danger" card-title="Danger Card">
  <p>This card has danger styling and footer actions.</p>
  <div slot="footer">
    <echo-button variant="ghost" size="small">Cancel</echo-button>
    <echo-button variant="default" size="small" context="danger">Delete</echo-button>
  </div>
</echo-card>
```

### Pop Component

```html
<echo-pop variant="modal" title="Confirmation" content="Are you sure?">
  <button slot="trigger">Open Modal</button>
  <div slot="footer">
    <echo-button variant="secondary">Cancel</echo-button>
    <echo-button variant="primary">Confirm</echo-button>
  </div>
</echo-pop>
```

### Form with Validation

```html
<echo-input 
  type="email" 
  placeholder="Enter your email"
  required
  invalid="Please enter a valid email"
>
</echo-input>
```

## Development

### Setup

```bash
git clone https://github.com/tivins/echo.git
cd echo
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
npm run lint:fix
```

## Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details.



