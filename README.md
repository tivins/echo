# Design Toolkit

A modern web component library built with Lit, TypeScript, and Vite.

## Features

- **Modern Web Components**: Built with Lit for optimal performance and developer experience
- **TypeScript**: Full TypeScript support with type definitions
- **Tree-shakable**: ES modules for optimal bundle sizes
- **Accessible**: Built with accessibility in mind
- **Customizable**: CSS custom properties for easy theming
- **Framework Agnostic**: Works with any framework or vanilla JavaScript

## Installation

```bash
npm install design-toolkit
```

## Quick Start

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="https://unpkg.com/design-toolkit/dist/design-toolkit.js"></script>
</head>
<body>
  <design-button variant="primary">Click me!</design-button>
</body>
</html>
```

## Components

### DesignButton

A customizable button component with multiple variants and sizes.

```html
<!-- Basic usage -->
<design-button>Default Button</design-button>

<!-- Variants -->
<design-button variant="primary">Primary</design-button>
<design-button variant="secondary">Secondary</design-button>
<design-button variant="outline">Outline</design-button>
<design-button variant="ghost">Ghost</design-button>

<!-- Sizes -->
<design-button size="small">Small</design-button>
<design-button size="medium">Medium</design-button>
<design-button size="large">Large</design-button>

<!-- Disabled state -->
<design-button disabled>Disabled</design-button>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |

#### Events

| Event | Description |
|-------|-------------|
| `design-button-click` | Fired when the button is clicked |

## Development

### Prerequisites

- Node.js 18+ 
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/tivins/design4.git
cd design4

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the library
- `npm run preview` - Preview the built library
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run test` - Run Playwright tests
- `npm run test:ui` - Run Playwright tests with UI

### Project Structure

```
src/
├── components/          # Web components
│   └── design-button.ts
├── types/              # TypeScript type definitions
│   └── index.ts
└── index.ts            # Main entry point
```

## Theming

Components use CSS custom properties for theming. You can override these in your application:

```css
design-button {
  --button-primary-bg: #your-color;
  --button-primary-hover: #your-hover-color;
  --button-border-radius: 8px;
}
```

## Testing

This project uses Playwright for end-to-end testing:

```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- [Repository](https://github.com/tivins/design4)
- [Documentation](https://github.com/tivins/design4#readme)
- [Issues](https://github.com/tivins/design4/issues)

## Author

**Tivins**

---

Built with Lit, TypeScript, and Vite.
