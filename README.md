# Echo Toolkit

A modern web component library built with Lit, TypeScript, and Vite. Provides framework-agnostic, accessible UI components for modern web applications.

## Installation

```bash
npm install echo
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

## Live Demo

You can see the Echo Toolkit components in action on our GitHub Pages demo:

🔗 **[Live Demo](https://tivins.github.io/echo/demo-button.html)**

The demo showcases all available components with interactive controls to test different variants, sizes, contexts, and configurations.

## Components

### EchoCheckbox

A versatile checkbox component supporting checkbox, radio, and toggle variants.

#### Basic Usage

```html
<!-- Checkbox -->
<echo-checkbox 
  type="checkbox" 
  label="Accept terms"
  checked>
</echo-checkbox>

<!-- Radio Button -->
<echo-checkbox 
  type="radio" 
  name="payment"
  label="Credit Card"
  value="credit-card"
  checked>
</echo-checkbox>

<!-- Toggle Switch -->
<echo-checkbox 
  type="toggle" 
  label="Dark Mode"
  description="Switch to dark theme"
  checked>
</echo-checkbox>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | `'checkbox' \| 'radio' \| 'toggle'` | `'checkbox'` | The type of checkbox component |
| `variant` | `'default' \| 'outlined' \| 'filled'` | `'default'` | Visual variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the component |
| `context` | `EchoContext` | `'primary'` | Color context |
| `label` | `string` | `''` | Label text |
| `description` | `string` | `''` | Description text |
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `required` | `boolean` | `false` | Whether the checkbox is required |
| `name` | `string` | `''` | Name attribute for form submission |
| `value` | `string` | `''` | Value attribute for form submission |

#### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `echo-checkbox-change` | `{ checked: boolean, value: string, type: string }` | Fired when checkbox state changes |
| `echo-checkbox-focus` | `{ checked: boolean, originalEvent: Event }` | Fired when checkbox receives focus |
| `echo-checkbox-blur` | `{ checked: boolean, originalEvent: Event }` | Fired when checkbox loses focus |

#### Methods

| Method | Description |
|--------|-------------|
| `focus()` | Focus the checkbox |
| `blur()` | Blur the checkbox |
| `click()` | Programmatically click the checkbox |

### EchoLayout

An abstract layout component for managing flex/grid layouts, alignment, gaps, and direction. Provides a clean, declarative API for common layout patterns.

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `display` | `'flex' \| 'grid' \| 'block' \| 'inline-flex' \| 'inline-grid'` | `'flex'` | Layout display type |
| `direction` | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'` | `'row'` | Flex direction (flex only) |
| `wrap` | `'nowrap' \| 'wrap' \| 'wrap-reverse'` | `'nowrap'` | Flex wrap behavior (flex only) |
| `align` | `'start' \| 'end' \| 'center' \| 'stretch' \| 'baseline'` | `'stretch'` | Cross-axis alignment |
| `justify` | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly'` | `'start'` | Main-axis justification |
| `gap` | `'none' \| 'xs' \| 'small' \| 'medium' \| 'large' \| 'xl'` | `'medium'` | Spacing between items |
| `columns` | `number \| 'auto' \| 'auto-fit' \| 'auto-fill'` | `'auto'` | Grid columns (grid only) |
| `rows` | `number \| 'auto'` | `'auto'` | Grid rows (grid only) |
| `size` | `'xs' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Component padding size |

#### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `setDisplay()` | `display: EchoLayoutDisplay` | Update display type |
| `setDirection()` | `direction: EchoLayoutDirection` | Update flex direction |
| `setAlign()` | `align: EchoLayoutAlign` | Update alignment |
| `setJustify()` | `justify: EchoLayoutJustify` | Update justification |
| `setGap()` | `gap: EchoLayoutGap` | Update gap size |
| `setColumns()` | `columns: EchoLayoutColumns` | Update grid columns |
| `setRows()` | `rows: EchoLayoutRows` | Update grid rows |

#### Examples

```html
<!-- Basic flex layout -->
<echo-layout display="flex" direction="row" gap="medium">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</echo-layout>

<!-- Grid layout with auto-fit columns -->
<echo-layout display="grid" columns="auto-fit" gap="large">
  <div>Grid Item 1</div>
  <div>Grid Item 2</div>
  <div>Grid Item 3</div>
</echo-layout>

<!-- Complex flex layout -->
<echo-layout display="flex" direction="column" align="center" justify="between" gap="large" size="large">
  <div>Header</div>
  <div>Content</div>
  <div>Footer</div>
</echo-layout>

<!-- Fixed grid with custom rows -->
<echo-layout display="grid" columns="3" rows="2" gap="medium">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</echo-layout>

<!-- Card grid layout -->
<echo-layout display="grid" columns="auto-fit" gap="large">
  <echo-card card-title="Card 1" size="small">Content 1</echo-card>
  <echo-card card-title="Card 2" size="small">Content 2</echo-card>
  <echo-card card-title="Card 3" size="small">Content 3</echo-card>
</echo-layout>

<!-- Button group layout -->
<echo-layout display="flex" gap="small" align="center">
  <echo-button variant="default" context="primary">Primary</echo-button>
  <echo-button variant="outline" context="secondary">Secondary</echo-button>
  <echo-button variant="ghost" context="danger">Danger</echo-button>
</echo-layout>
```

#### JavaScript API

```javascript
// Dynamic property updates
const layout = document.querySelector('echo-layout');
layout.setDisplay('grid');
layout.setDirection('column');
layout.setAlign('center');
layout.setJustify('between');
layout.setGap('large');
layout.setColumns(4);
layout.setRows(3);
```

### EchoInput

A comprehensive input component with label support, icon integration, validation, and multiple visual variants. Perfect for forms and user input scenarios.

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'default' \| 'outlined' \| 'filled' \| 'underlined'` | `'default'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Input size |
| `context` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Context color theme |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search' \| 'date' \| 'time' \| 'datetime-local' \| 'month' \| 'week'` | `'text'` | HTML input type |
| `label` | `string` | `''` | Input label text |
| `placeholder` | `string` | `''` | Placeholder text |
| `value` | `string` | `''` | Input value |
| `description` | `string` | `''` | Help text below input |
| `icon` | `IconName \| null` | `null` | Icon name for input field |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position inside input |
| `iconSize` | `EchoIconSize \| null` | `null` | Icon size override |
| `iconVariant` | `EchoIconVariant \| null` | `null` | Icon variant override |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | `false` | Required field |
| `readonly` | `boolean` | `false` | Read-only state |
| `name` | `string` | `''` | Form field name |
| `id` | `string` | `''` | Input ID |
| `minlength` | `number \| null` | `null` | Minimum length validation |
| `maxlength` | `number \| null` | `null` | Maximum length validation |
| `pattern` | `string \| null` | `null` | Pattern validation |
| `step` | `number \| null` | `null` | Step increment for number inputs |
| `min` | `number \| null` | `null` | Minimum value for number inputs |
| `max` | `number \| null` | `null` | Maximum value for number inputs |

#### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `echo-input-change` | `{ value: string, originalEvent: Event }` | Fired when input value changes |
| `echo-input-focus` | `{ originalEvent: Event }` | Fired when input receives focus |
| `echo-input-blur` | `{ originalEvent: Event }` | Fired when input loses focus |

#### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `focus()` | None | Focus the input field |
| `blur()` | None | Blur the input field |
| `select()` | None | Select all text in the input |
| `checkValidity()` | None | Check if input is valid |
| `reportValidity()` | None | Report validation status to user |

#### Examples

```html
<!-- Basic input with label -->
<echo-input label="Username" placeholder="Enter your username"></echo-input>

<!-- Input with icon and description -->
<echo-input 
  label="Email" 
  icon="mail" 
  icon-position="left"
  type="email"
  placeholder="Enter your email"
  description="We'll never share your email">
</echo-input>

<!-- Input with right-positioned icon -->
<echo-input 
  label="Search" 
  icon="search" 
  icon-position="right"
  type="search"
  placeholder="Search...">
</echo-input>

<!-- Input with validation -->
<echo-input 
  label="Password" 
  type="password"
  required
  minlength="8"
  placeholder="Create password"
  description="Must be at least 8 characters">
</echo-input>

<!-- Different variants -->
<echo-input variant="outlined" label="Outlined Input"></echo-input>
<echo-input variant="filled" label="Filled Input"></echo-input>
<echo-input variant="underlined" label="Underlined Input"></echo-input>

<!-- Different contexts -->
<echo-input context="success" label="Success Input"></echo-input>
<echo-input context="danger" label="Error Input"></echo-input>
<echo-input context="warning" label="Warning Input"></echo-input>

<!-- Different sizes -->
<echo-input size="small" label="Small Input"></echo-input>
<echo-input size="medium" label="Medium Input"></echo-input>
<echo-input size="large" label="Large Input"></echo-input>

<!-- Input states -->
<echo-input label="Disabled Input" disabled value="Cannot edit"></echo-input>
<echo-input label="Readonly Input" readonly value="Cannot edit"></echo-input>
<echo-input label="Required Input" required placeholder="This field is required"></echo-input>

<!-- Input types -->
<echo-input type="email" label="Email" placeholder="user@example.com"></echo-input>
<echo-input type="password" label="Password" placeholder="Enter password"></echo-input>
<echo-input type="number" label="Age" placeholder="Enter age"></echo-input>
<echo-input type="tel" label="Phone" placeholder="+1 (555) 123-4567"></echo-input>
<echo-input type="url" label="Website" placeholder="https://example.com"></echo-input>
<echo-input type="search" label="Search" placeholder="Search..."></echo-input>
<echo-input type="date" label="Birth Date" placeholder="Select date"></echo-input>
<echo-input type="time" label="Time" placeholder="Select time"></echo-input>

<!-- Number inputs with step attribute -->
<echo-input type="number" label="Quantity" step="1" placeholder="Whole numbers only"></echo-input>
<echo-input type="number" label="Price" step="0.01" placeholder="Decimal prices"></echo-input>
<echo-input type="number" label="Temperature" step="0.1" placeholder="Precise temperature"></echo-input>
<echo-input type="number" label="Multiples of 5" step="5" placeholder="5, 10, 15..."></echo-input>

<!-- Number inputs with min/max constraints -->
<echo-input type="number" label="Age" min="0" max="120" step="1" placeholder="Enter age"></echo-input>
<echo-input type="number" label="Temperature" min="-50" max="50" step="0.1" placeholder="°C"></echo-input>
<echo-input type="number" label="Percentage" min="0" max="100" step="0.01" placeholder="0-100%"></echo-input>
<echo-input type="number" label="Score" min="0" max="10" step="0.5" placeholder="0-10"></echo-input>

<!-- Form integration -->
<form>
  <echo-input 
    label="Full Name" 
    required
    minlength="2"
    maxlength="50"
    name="fullName">
  </echo-input>
  
  <echo-input 
    label="Email" 
    type="email"
    required
    name="email">
  </echo-input>
  
  <echo-input 
    label="Phone" 
    type="tel"
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    name="phone">
  </echo-input>
  
  <echo-button type="submit">Submit</echo-button>
</form>
```

#### JavaScript API

```javascript
// Event handling
const input = document.querySelector('echo-input');
input.addEventListener('echo-input-change', (event) => {
  console.log('Value changed:', event.detail.value);
});

input.addEventListener('echo-input-focus', () => {
  console.log('Input focused');
});

input.addEventListener('echo-input-blur', () => {
  console.log('Input blurred');
});

// Public methods
input.focus();
input.blur();
input.select();
input.checkValidity();
input.reportValidity();

// Property access
console.log(input.value);
console.log(input.validity);

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  const inputs = form.querySelectorAll('echo-input');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      isValid = false;
    }
  });
  
  if (!isValid) {
    event.preventDefault();
  }
});
```

### EchoSelect

A comprehensive select component with label support, icon integration, validation, and multiple visual variants. Perfect for dropdown selections and form scenarios.

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'default' \| 'outlined' \| 'filled' \| 'underlined'` | `'default'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Select size |
| `context` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Context color theme |
| `label` | `string` | `''` | Select label text |
| `placeholder` | `string` | `''` | Placeholder text |
| `value` | `string` | `''` | Selected value |
| `description` | `string` | `''` | Help text below select |
| `icon` | `IconName \| null` | `null` | Icon name for select field |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position inside select |
| `iconSize` | `EchoIconSize \| null` | `null` | Icon size override |
| `iconVariant` | `EchoIconVariant \| null` | `null` | Icon variant override |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | `false` | Required field |
| `name` | `string` | `''` | Form field name |
| `id` | `string` | `''` | Select ID |
| `multiple` | `boolean` | `false` | Multiple selection |
| `options` | `EchoSelectOption[]` | `[]` | Array of select options |

#### EchoSelectOption Type

```typescript
interface EchoSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  selected?: boolean;
}
```

#### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `echo-select-change` | `{ value: string, selectedIndex: number, originalEvent: Event }` | Fired when select value changes |
| `echo-select-focus` | `{ originalEvent: Event }` | Fired when select receives focus |
| `echo-select-blur` | `{ originalEvent: Event }` | Fired when select loses focus |

#### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `focus()` | None | Focus the select field |
| `blur()` | None | Blur the select field |
| `checkValidity()` | None | Check if select is valid |
| `reportValidity()` | None | Report validation status to user |
| `addOption(option: EchoSelectOption)` | `option` | Add a new option to the select |
| `removeOption(value: string)` | `value` | Remove an option by value |
| `clearOptions()` | None | Remove all options |

#### Examples

```html
<!-- Basic select with label -->
<echo-select label="Country" placeholder="Select a country"></echo-select>

<!-- Select with icon and description -->
<echo-select 
  label="Email Provider" 
  icon="mail" 
  icon-position="left"
  placeholder="Choose email provider"
  description="Select your preferred email service">
</echo-select>

<!-- Select with right-positioned icon -->
<echo-select 
  label="Language" 
  icon="globe" 
  icon-position="right"
  placeholder="Select language">
</echo-select>

<!-- Select with validation -->
<echo-select 
  label="Category" 
  required
  placeholder="Choose a category"
  description="This field is required">
</echo-select>

<!-- Multiple selection -->
<echo-select 
  label="Skills" 
  multiple
  placeholder="Select multiple skills"
  description="Choose all that apply">
</echo-select>

<!-- Different variants -->
<echo-select variant="outlined" label="Outlined Select"></echo-select>
<echo-select variant="filled" label="Filled Select"></echo-select>
<echo-select variant="underlined" label="Underlined Select"></echo-select>

<!-- Different contexts -->
<echo-select context="success" label="Success Select"></echo-select>
<echo-select context="danger" label="Danger Select"></echo-select>
<echo-select context="warning" label="Warning Select"></echo-select>
```

#### JavaScript API

```javascript
const select = document.querySelector('echo-select');

// Set options programmatically
select.options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true }
];

// Event handling
select.addEventListener('echo-select-change', (event) => {
  console.log('Value changed:', event.detail.value);
  console.log('Selected index:', event.detail.selectedIndex);
});

// Public methods
select.focus();
select.blur();
select.addOption({ value: 'new', label: 'New Option' });
select.removeOption('old');
select.clearOptions();
```

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

The icon library includes 123 carefully selected icons inspired by Lucide design principles. All icons feature clean, consistent linear style with 2px stroke width and proper shapes for optimal visual clarity.

**Navigation & Arrows:** arrow-left, arrow-right, arrow-up, arrow-down, chevron-left, chevron-right, chevron-up, chevron-down, menu, x, search, filter, more-horizontal, more-vertical

**Actions:** plus, minus, edit, trash, save, check, refresh, copy, download, upload, share, link, external-link

**Media & Files:** image, file, folder, folder-open, video, music, camera

**Communication:** mail, phone, message-circle, bell, heart, star

**Settings & Tools:** settings, user, users, lock, unlock

**Status & Feedback:** check-circle, x-circle, alert-circle, info

**Technology:** wifi, globe, code, battery, power, bolt, play, pause, stop, volume, volume-off

**Weather & Nature:** sun, moon, cloud, droplet

**Business & Finance:** dollar-sign, credit-card, shopping-cart, home

**Data & Analytics:** bar-chart, pie-chart, calendar, clock

**Additional Navigation & UI:** grid, list, layout, sidebar, panel-left, panel-right, sidebar-open, sidebar-close, maximize, minimize, maximize-2, minimize-2

**Additional Actions:** undo, redo, cut, paste, scissors, move, rotate-cw, rotate-ccw, zoom-in, zoom-out

**Additional Media & Files:** folder-plus, folder-minus, file-plus, file-minus, file-text, file-image, file-video, file-audio, archive, package

**Additional Communication:** mail-open, mail-check, mail-plus, message-square, message-square-plus, send, reply, forward, at-sign, hash

**Additional Settings & Tools:** tool, wrench, hammer, screwdriver, key, shield, shield-check, shield-alert, shield-x

**Gaming & Rewards:** trophy, medal, coin, gold, sword, ingot, ticket

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
<echo-card card-title="Card Title">
  <p>Card content goes here.</p>
</echo-card>

<!-- Card with icon -->
<echo-card card-title="Card with Icon" icon="star">
  <p>This card has an icon in the header.</p>
</echo-card>

<!-- Closable card -->
<echo-card card-title="Closable Card" closable>
  <p>This card can be closed by clicking the X button.</p>
</echo-card>

<!-- Card variants -->
<echo-card variant="default" card-title="Default Card">Content</echo-card>
<echo-card variant="outlined" card-title="Outlined Card">Content</echo-card>
<echo-card variant="elevated" card-title="Elevated Card">Content</echo-card>
<echo-card variant="flat" card-title="Flat Card">Content</echo-card>

<!-- Card sizes -->
<echo-card size="small" card-title="Small Card">Content</echo-card>
<echo-card size="medium" card-title="Medium Card">Content</echo-card>
<echo-card size="large" card-title="Large Card">Content</echo-card>

<!-- Card with context colors -->
<echo-card context="primary" card-title="Primary Card">Content</echo-card>
<echo-card context="success" card-title="Success Card">Content</echo-card>
<echo-card context="warning" card-title="Warning Card">Content</echo-card>
<echo-card context="danger" card-title="Danger Card">Content</echo-card>

<!-- Card with header actions -->
<echo-card card-title="Card with Actions" closable>
  <div slot="header-actions">
    <echo-button variant="ghost" size="small" icon="edit">Edit</echo-button>
    <echo-button variant="ghost" size="small" icon="more-horizontal"></echo-button>
  </div>
  <p>This card has additional action buttons in the header.</p>
</echo-card>

<!-- Card with footer -->
<echo-card card-title="Card with Footer">
  <p>This card has a footer with buttons.</p>
  <div slot="footer">
    <echo-button variant="outline" size="small">Cancel</echo-button>
    <echo-button variant="default" size="small">Save</echo-button>
  </div>
</echo-card>

<!-- Complex card example -->
<echo-card variant="elevated" context="primary" card-title="Dashboard" icon="bar-chart" size="large" closable>
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
<echo-card card-title="Disabled Card" disabled>
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

- Default slot: Main card content - **Note**: Content section only appears when there is actual content in this slot
- `header-actions`: Additional buttons in the header
- `footer`: Footer content (typically buttons) - **Note**: Footer only appears when there is actual content in this slot

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
<echo-button icon="settings" icon-stroke-width="0.5" context="primary">Thin Icon</echo-button>
<echo-button icon="settings" icon-stroke-width="3.0" context="primary">Thick Icon</echo-button>

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
| `iconStrokeWidth` | `number \| null` | `null` | Override icon stroke width (HTML: `icon-stroke-width`) |

#### Attribute Behavior

EchoButton components properly handle attribute removal and reset properties to their default values:

```javascript
const button = document.querySelector('echo-button');

// Set attribute
button.setAttribute('size', 'large');
console.log(button.size); // "large"

// Remove attribute - property resets to default
button.removeAttribute('size');
console.log(button.size); // "medium" (default)

// Same behavior for all properties
button.setAttribute('variant', 'outline');
button.removeAttribute('variant');
console.log(button.variant); // "default" (default)

button.setAttribute('context', 'danger');
button.removeAttribute('context');
console.log(button.context); // "primary" (default)
```

**Default Values:**
- `variant`: `"default"`
- `size`: `"medium"`
- `context`: `"primary"`
- `disabled`: `false`
- `icon`: `null`
- `iconPosition`: `"left"`
- `iconSize`: `null`
- `iconVariant`: `null`
- `iconStrokeWidth`: `null`

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
- **Custom Overrides**: Icon size, variant, and stroke width can be overridden independently
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

### Interactive Demos

The `docs/` directory contains interactive demos:

- **Button Demo** (`docs/demo-button.html`): Interactive demo showcasing all EchoButton properties with JavaScript implementation that automatically populates selectors from component types using exported type arrays.

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
├── docs/                # Documentation and interactive demos
│   ├── demo-button.html # Interactive JavaScript button demo
│   ├── demo-button.js   # JavaScript demo implementation
│   ├── demo-button.ts   # Original TypeScript demo (converted to JS)
│   ├── index.html       # Main documentation page
│   └── webserver.js     # Development server
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
