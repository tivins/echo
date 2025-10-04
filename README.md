# Echo Toolkit

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
  <echo-button variant="default" context="primary">Click me!</echo-button>
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
  <echo-button variant="default" context="primary">Click me!</echo-button>
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
  <echo-button variant="default" context="primary">Click me!</echo-button>
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

### EchoIcon

A clean, modern icon component with 60 carefully selected linear SVG icons inspired by Lucide design principles. Features consistent styling, multiple sizes, variants, and custom colors.

```html
<!-- Basic usage -->
<echo-icon name="star"></echo-icon>
<echo-icon name="heart"></echo-icon>
<echo-icon name="search"></echo-icon>

<!-- Sizes -->
<echo-icon name="star" size="small"></echo-icon>
<echo-icon name="star" size="medium"></echo-icon>
<echo-icon name="star" size="large"></echo-icon>

<!-- Variants -->
<echo-icon name="heart" variant="default"></echo-icon>
<echo-icon name="heart" variant="outline"></echo-icon>
<echo-icon name="heart" variant="filled"></echo-icon>

<!-- Custom colors -->
<echo-icon name="sun" color="orange"></echo-icon>
<echo-icon name="heart" color="red"></echo-icon>
<echo-icon name="leaf" color="green"></echo-icon>

<!-- Custom stroke width -->
<echo-icon name="check" stroke-width="1"></echo-icon>
<echo-icon name="check" stroke-width="1.5"></echo-icon>
<echo-icon name="check" stroke-width="2"></echo-icon>
<echo-icon name="check" stroke-width="2.5"></echo-icon>

<!-- Accessibility -->
<echo-icon name="search" aria-label="Search"></echo-icon>

<!-- Interactive -->
<echo-icon name="thumbs-up" aria-label="Like"></echo-icon>
<echo-icon name="bookmark" aria-label="Bookmark"></echo-icon>

<!-- Disabled state -->
<echo-icon name="edit" disabled></echo-icon>
```

#### Available Icons

The icon library includes 121 carefully selected icons inspired by Lucide design principles. All icons feature clean, consistent linear style with 2px stroke width and proper shapes for optimal visual clarity.

**Navigation & Arrows:** arrow-left, arrow-right, arrow-up, arrow-down, chevron-left, chevron-right, chevron-up, chevron-down, menu, x, search, filter, more-horizontal, more-vertical

**Actions:** plus, minus, edit, trash, save, check, refresh, copy, download, upload, share, link, external-link

**Media & Files:** image, file, folder, folder-open, video, music, camera

**Communication:** mail, phone, message-circle, bell, heart, star

**Settings & Tools:** settings, user, users, lock, unlock

**Status & Feedback:** check-circle, x-circle, alert-circle, info

**Technology:** wifi, battery, power, play, pause, stop, volume, volume-off

**Weather & Nature:** sun, moon, cloud, droplet

**Business & Finance:** dollar-sign, credit-card, shopping-cart, home

**Data & Analytics:** bar-chart, pie-chart, calendar, clock

**Additional Navigation & UI:** grid, list, layout, sidebar, panel-left, panel-right, sidebar-open, sidebar-close, maximize, minimize, maximize-2, minimize-2

**Additional Actions:** undo, redo, cut, paste, scissors, move, rotate-cw, rotate-ccw, zoom-in, zoom-out

**Additional Media & Files:** folder-plus, folder-minus, file-plus, file-minus, file-text, file-image, file-video, file-audio, archive, package

**Additional Communication:** mail-open, mail-check, mail-plus, message-square, message-square-plus, send, reply, forward, at-sign, hash

**Additional Settings & Tools:** tool, wrench, hammer, screwdriver, key, shield, shield-check, shield-alert, shield-x

**Gaming & Rewards:** trophy, medal, coin, gold, sword, ingot

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | `IconName` | `'x'` | Name of the icon to display |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Icon size (16px, 24px, 32px) |
| `variant` | `'default' \| 'outline' \| 'filled'` | `'default'` | Icon visual style variant |
| `color` | `string` | `'currentColor'` | Custom color for the icon |
| `stroke-width` | `number` | `1.5` | Stroke width of the icon lines |
| `aria-label` | `string` | `name` | Accessibility label for screen readers |
| `disabled` | `boolean` | `false` | Whether the icon is disabled |

#### TypeScript Types

```typescript
import type { IconName, EchoIconSize, EchoIconVariant } from 'design-toolkit';

// IconName: Union type of all available icon names
// EchoIconSize: 'small' | 'medium' | 'large'
// EchoIconVariant: 'default' | 'outline' | 'filled'
```

#### Events

| Event | Description |
|-------|-------------|
| `echo-icon-click` | Fired when the icon is clicked (Enter/Space key) |

#### Icon Utilities

```typescript
import { loadIcon, preloadIcons, getLoadedIcons, getAvailableIconNames } from 'design-toolkit';

// Load a single icon
const svgContent = await loadIcon('star');

// Preload multiple icons
await preloadIcons(['star', 'heart', 'search']);

// Get all loaded icon names
const loadedIcons = getLoadedIcons();

// List every icon that is actually available in the bundle
const available = getAvailableIconNames();
```

### EchoSeparator

A versatile and flexible separator component based on the HTML `<hr>` element with extensive customization options.

```html
<!-- Basic usage -->
<echo-separator></echo-separator>

<!-- Variants -->
<echo-separator variant="solid"></echo-separator>
<echo-separator variant="dotted"></echo-separator>
<echo-separator variant="dashed"></echo-separator>
<echo-separator variant="double"></echo-separator>
<echo-separator variant="gradient"></echo-separator>

<!-- Thickness -->
<echo-separator thickness="thin"></echo-separator>
<echo-separator thickness="medium"></echo-separator>
<echo-separator thickness="thick"></echo-separator>

<!-- Margins -->
<echo-separator margin="small"></echo-separator>
<echo-separator margin="medium"></echo-separator>
<echo-separator margin="large"></echo-separator>

<!-- Context Colors -->
<echo-separator context="primary"></echo-separator>
<echo-separator context="success"></echo-separator>
<echo-separator context="danger"></echo-separator>

<!-- Custom Colors -->
<echo-separator color="#ff6b6b"></echo-separator>
<echo-separator color="rgba(255, 107, 107, 0.5)"></echo-separator>

<!-- Orientation -->
<echo-separator orientation="horizontal"></echo-separator>
<echo-separator orientation="vertical"></echo-separator>

<!-- With Content -->
<echo-separator><span>OR</span></echo-separator>
<echo-separator context="primary">
  <echo-icon name="star" size="small"></echo-icon>
</echo-separator>

<!-- Combinations -->
<echo-separator variant="dashed" thickness="thick" context="primary"></echo-separator>
<echo-separator variant="gradient" context="success" margin="large"></echo-separator>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'solid' \| 'dotted' \| 'dashed' \| 'double' \| 'gradient'` | `'solid'` | Separator line style |
| `margin` | `'small' \| 'medium' \| 'large'` | `'medium'` | Spacing around the separator (8px, 16px, 32px) |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction of the separator |
| `thickness` | `'thin' \| 'medium' \| 'thick'` | `'medium'` | Line thickness (1px, 2px, 4px) |
| `context` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'secondary'` | Semantic context color |
| `color` | `string` | `null` | Custom color (overrides context color) |

#### TypeScript Types

```typescript
import type { 
  EchoSeparatorVariant, 
  EchoSeparatorMargin, 
  EchoSeparatorThickness, 
  EchoSeparatorOrientation 
} from 'design-toolkit';

// EchoSeparatorVariant: 'solid' | 'dotted' | 'dashed' | 'double' | 'gradient'
// EchoSeparatorMargin: 'small' | 'medium' | 'large'
// EchoSeparatorThickness: 'thin' | 'medium' | 'thick'
// EchoSeparatorOrientation: 'horizontal' | 'vertical'
```

#### Features

- Five visual variants (solid, dotted, dashed, double, gradient)
- Horizontal and vertical orientations
- Three thickness options
- Three margin sizes
- Full integration with Design Toolkit context colors
- Custom color support
- Content slot for text or icons within the separator
- Fully accessible with proper ARIA attributes
- Built with Lit for performance and reusability

### EchoCard

A flexible card component with header, content, and footer sections. Supports icons, titles, close buttons, and custom actions.

```html
<!-- Basic card -->
<echo-card title="Card Title">
  <p>Card content goes here.</p>
</echo-card>

<!-- Card with icon -->
<echo-card title="Card with Icon" icon="star">
  <p>This card has an icon in the header.</p>
</echo-card>

<!-- Closable card -->
<echo-card title="Closable Card" closable>
  <p>This card can be closed by clicking the X button.</p>
</echo-card>

<!-- Card variants -->
<echo-card variant="default" title="Default Card">Content</echo-card>
<echo-card variant="outlined" title="Outlined Card">Content</echo-card>
<echo-card variant="elevated" title="Elevated Card">Content</echo-card>
<echo-card variant="flat" title="Flat Card">Content</echo-card>

<!-- Card sizes -->
<echo-card size="small" title="Small Card">Content</echo-card>
<echo-card size="medium" title="Medium Card">Content</echo-card>
<echo-card size="large" title="Large Card">Content</echo-card>

<!-- Card with context colors -->
<echo-card context="primary" title="Primary Card">Content</echo-card>
<echo-card context="success" title="Success Card">Content</echo-card>
<echo-card context="warning" title="Warning Card">Content</echo-card>
<echo-card context="danger" title="Danger Card">Content</echo-card>

<!-- Card with header actions -->
<echo-card title="Card with Actions" closable>
  <div slot="header-actions">
    <echo-button variant="ghost" size="small" icon="edit">Edit</echo-button>
    <echo-button variant="ghost" size="small" icon="more-horizontal"></echo-button>
  </div>
  <p>This card has additional action buttons in the header.</p>
</echo-card>

<!-- Card with footer -->
<echo-card title="Card with Footer">
  <p>This card has a footer with buttons.</p>
  <div slot="footer">
    <echo-button variant="outline" size="small">Cancel</echo-button>
    <echo-button variant="default" size="small">Save</echo-button>
  </div>
</echo-card>

<!-- Complex card example -->
<echo-card variant="elevated" context="primary" title="Dashboard" icon="bar-chart" size="large" closable>
  <div slot="header-actions">
    <echo-button variant="ghost" size="small" icon="refresh">Refresh</echo-button>
    <echo-button variant="ghost" size="small" icon="settings">Settings</echo-button>
  </div>
  
  <p>Welcome to your dashboard.</p>
  <echo-separator margin="medium"></echo-separator>
  <h4>Recent Activity</h4>
  <ul>
    <li>Project Alpha - Updated 2 hours ago</li>
    <li>Project Beta - Completed yesterday</li>
  </ul>
  
  <div slot="footer">
    <echo-button variant="outline" size="small">View All</echo-button>
    <echo-button variant="default" size="small" icon="arrow-right">Get Started</echo-button>
  </div>
</echo-card>

<!-- Disabled card -->
<echo-card title="Disabled Card" disabled>
  <p>This card is disabled.</p>
</echo-card>
```

#### Properties

- `variant`: Card visual style (`default`, `outlined`, `elevated`, `flat`)
- `size`: Card size (`small`, `medium`, `large`)
- `context`: Color context (`primary`, `secondary`, `success`, `warning`, `danger`, `info`)
- `title`: Card title text
- `icon`: Icon name to display in header
- `icon-size`: Icon size (`small`, `medium`, `large`)
- `icon-variant`: Icon variant (`default`, `outline`, `filled`)
- `closable`: Whether to show close button
- `disabled`: Whether the card is disabled

#### Slots

- Default slot: Main card content
- `header-actions`: Additional buttons in the header
- `footer`: Footer content (typically buttons)

#### Events

- `echo-card-close`: Fired when the close button is clicked

#### Methods

- `show()`: Show the card (if it was hidden)
- `hide()`: Hide the card

### EchoButton

A customizable button component with multiple variants, sizes, and built-in icon support.

```html
<!-- Variants -->
<echo-button variant="default">Default</echo-button>
<echo-button variant="soft">Soft</echo-button>
<echo-button variant="link">Link</echo-button>
<echo-button variant="outline">Outline</echo-button>
<echo-button variant="ghost">Ghost</echo-button>

<!-- Context Colors -->
<echo-button context="primary">Primary</echo-button>
<echo-button context="secondary">Secondary</echo-button>
<echo-button context="success">Success</echo-button>
<echo-button context="danger">Danger</echo-button>
<echo-button context="warning">Warning</echo-button>
<echo-button context="info">Info</echo-button>

<!-- Combinations -->
<echo-button variant="default" context="success">Success Default</echo-button>
<echo-button variant="outline" context="danger">Danger Outline</echo-button>
<echo-button variant="ghost" context="warning">Warning Ghost</echo-button>

<!-- Sizes -->
<echo-button size="xs">Extra Small</echo-button>
<echo-button size="small">Small</echo-button>
<echo-button size="medium">Medium</echo-button>
<echo-button size="large">Large</echo-button>

<!-- Icon Support -->
<echo-button icon="plus" context="primary">Add Item</echo-button>
<echo-button icon="trash" context="danger">Delete</echo-button>
<echo-button icon="edit" context="secondary">Edit</echo-button>
<echo-button icon="save" context="success">Save</echo-button>

<!-- Icon Position -->
<echo-button icon="arrow-left" icon-position="left" context="primary">Back</echo-button>
<echo-button icon="arrow-right" icon-position="right" context="primary">Next</echo-button>

<!-- Icon Only Buttons -->
<echo-button icon="plus" context="primary"></echo-button>
<echo-button icon="edit" context="secondary"></echo-button>
<echo-button icon="trash" context="danger"></echo-button>

<!-- Custom Icon Properties -->
<echo-button icon="settings" icon-size="small" context="primary">Small Icon</echo-button>
<echo-button icon="settings" icon-variant="filled" context="primary">Filled Icon</echo-button>

<!-- Disabled state -->
<echo-button disabled>Disabled</echo-button>
<echo-button icon="check" context="success" disabled>Disabled with Icon</echo-button>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'default' \| 'soft' \| 'link' \| 'outline' \| 'ghost'` | `'default'` | Button visual style variant |
| `context` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Button semantic context/color |
| `size` | `'xs' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Button size (24px, 32px, 40px, 48px) |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `icon` | `IconName \| null` | `null` | Name of the icon to display in the button |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of the icon relative to the text (HTML: `icon-position`) |
| `iconSize` | `EchoIconSize \| null` | `null` | Override icon size (HTML: `icon-size`) |
| `iconVariant` | `EchoIconVariant \| null` | `null` | Override icon variant (HTML: `icon-variant`) |

#### TypeScript Types

The library exports reusable TypeScript types for extending components:

```typescript
import type { 
  EchoButtonVariant, 
  EchoSize, 
  EchoContext, 
  IconName, 
  EchoIconSize, 
  EchoIconVariant 
} from 'design-toolkit';

// EchoSize: 'xs' | 'small' | 'medium' | 'large'
// EchoContext: 'danger' | 'success' | 'warning' | 'info' | 'primary' | 'secondary'
// EchoButtonVariant: 'default' | 'soft' | 'link' | 'outline' | 'ghost'
// IconName: Union type of all available icon names
// EchoIconSize: 'small' | 'medium' | 'large'
// EchoIconVariant: 'default' | 'outline' | 'filled'
```

#### Events

| Event | Description |
|-------|-------------|
| `echo-button-click` | Fired when the button is clicked |

#### Icon Features

The EchoButton component includes comprehensive icon support:

- **Automatic Context Inheritance**: Icons automatically inherit the button's context color
- **Smart Size Mapping**: Icon size automatically maps to button size (xs→small, small→small, medium→medium, large→large)
- **Flexible Positioning**: Icons can be positioned on the left (default) or right side of the text
- **Custom Overrides**: Icon size and variant can be overridden independently
- **Icon-Only Buttons**: Buttons can contain only icons without text
- **Intelligent Spacing**: Modern Flexbox gap system ensures proper spacing only when needed
- **Disabled State**: Icons respect the button's disabled state
- **All Variants Supported**: Icons work with all button variants (default, outline, ghost, soft, link)
- **Accessibility**: Icons inherit proper accessibility attributes from the button

#### Spacing System

The EchoButton uses a modern Flexbox gap approach for intelligent spacing:

- **Flexbox Gap**: Uses `gap: var(--button-gap)` for automatic spacing between elements
- **Size-Specific Gaps**: Different gap sizes per button size (xs: 4px, small: 6px, medium: 8px, large: 10px)
- **Smart Spacing**: Gap only applies between elements that are actually present
- **Icon-Only Optimization**: Buttons with only icons have no unwanted spacing
- **Icon+Text Spacing**: Proper spacing maintained between icons and text

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

The development server runs at `http://localhost:3000` and automatically handles port conflicts by terminating any existing processes using the port.

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
design-toolkit/
├── src/                 # Source code
│   ├── components/      # Web components
│   │   ├── echo-button.ts
│   │   ├── echo-icon.ts
│   │   └── echo-separator.ts
│   ├── icons/           # Icon system
│   │   ├── icon-library.ts
│   │   └── icon-registry.ts
│   ├── styles/          # Shared styles
│   │   ├── component-sizes.ts
│   │   └── context-colors.ts
│   ├── types/           # TypeScript type definitions
│   │   ├── icon-types.ts
│   │   └── index.ts
│   └── index.ts         # Main entry point
├── tests/               # Test files
│   ├── echo-button.spec.ts
│   ├── echo-icon.spec.ts
│   └── echo-separator.spec.ts
├── demos/               # Demo and example files
│   ├── example.html
│   ├── icon-demo.html
│   ├── separator-demo.html
│   └── ... (other demo files)
├── docs/                # Documentation and reports
│   ├── ICON_IMPROVEMENTS.md
│   ├── ICON_VALIDATION_REPORT.md
│   └── icon-analysis-report.json
├── dist/                # Built library files
├── out-of-the-box/      # Self-contained demo
└── test-results/        # Test execution results
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
