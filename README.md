# Design Toolkit

A modern web component library built with Lit, TypeScript, and Vite. Provides framework-agnostic, accessible UI components for modern web applications.

## Installation

```bash
npm install design-toolkit
```

## Quick Start

### Self-Contained Bundled Version (Recommended)

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="https://unpkg.com/design-toolkit@latest/dist/design-toolkit.esm.bundled.js"></script>
</head>
<body>
  <echo-button variant="primary">Click me!</echo-button>
</body>
</html>
```

### External Dependencies Version (requires import map)

```html
<!DOCTYPE html>
<html>
<head>
  <script type="importmap">
  {
    "imports": {
      "lit": "https://cdn.skypack.dev/lit@^3.3.1"
    }
  }
  </script>
  <script type="module" src="https://unpkg.com/design-toolkit@latest/dist/design-toolkit.esm.js"></script>
</head>
<body>
  <echo-button variant="primary">Click me!</echo-button>
</body>
</html>
```

### UMD Bundle (for older browsers)

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/lit@latest/index.js"></script>
  <script src="https://unpkg.com/design-toolkit@latest/dist/design-toolkit.umd.min.js"></script>
</head>
<body>
  <echo-button variant="primary">Click me!</echo-button>
</body>
</html>
```

### NPM Installation

```bash
npm install design-toolkit
```

```html
<script type="module">
  import 'design-toolkit';
</script>
<echo-button variant="primary">Click me!</echo-button>
```

## Components

### EchoButton

A customizable button component with multiple variants and sizes.

```html
<!-- Variants -->
<echo-button variant="primary">Primary</echo-button>
<echo-button variant="secondary">Secondary</echo-button>
<echo-button variant="outline">Outline</echo-button>
<echo-button variant="ghost">Ghost</echo-button>

<!-- Sizes -->
<echo-button size="small">Small</echo-button>
<echo-button size="medium">Medium</echo-button>
<echo-button size="large">Large</echo-button>

<!-- Disabled state -->
<echo-button disabled>Disabled</echo-button>
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
| `echo-button-click` | Fired when the button is clicked |

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
git clone https://github.com/tivins/design4.git
cd design4
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build library with Rollup (creates multiple formats)
- `npm run build:vite` - Build with Vite
- `npm run build:all` - Build both Rollup and Vite versions
- `npm run preview` - Preview the built library
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run test` - Run Playwright tests
- `npm run test:ui` - Run Playwright tests with UI

### Build Output

The build process creates multiple formats:

#### Self-Contained Bundles (Recommended - includes Lit)
- `dist/design-toolkit.esm.bundled.js` - Complete ES Module with Lit bundled
- `dist/design-toolkit.umd.bundled.js` - Complete UMD with Lit bundled
- `dist/design-toolkit.umd.bundled.min.js` - Complete minified UMD with Lit bundled

#### External Dependencies Builds (require import maps or globals)
- `dist/design-toolkit.esm.js` - ES Module format (needs Lit externally)
- `dist/design-toolkit.umd.js` - UMD format (needs Lit globally)
- `dist/design-toolkit.umd.min.js` - Minified UMD version (needs Lit globally)

#### Additional Files
- `dist/types/` - TypeScript declaration files
- Source maps for debugging

### Project Structure

```
src/
├── components/          # Web components
│   └── echo-button.ts
├── types/              # TypeScript type definitions
│   └── index.ts
└── index.ts            # Main entry point
```

## Theming

Components use CSS custom properties for theming:

```css
echo-button {
  --button-primary-bg: #your-color;
  --button-primary-hover: #your-hover-color;
  --button-border-radius: 8px;
}
```

## Testing

```bash
npm run test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.

## Author

**Tivins**

Built with Lit, TypeScript, and Vite.