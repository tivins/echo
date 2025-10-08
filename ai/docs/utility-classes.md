# Utility Classes Documentation

Echo Design System provides a comprehensive set of utility classes for common styling needs. These utilities follow a consistent naming convention and use the same spacing scale as the component system.

## Naming Convention

All utility classes use the `u-` prefix to avoid conflicts with component-specific classes:

- Display: `u-block`, `u-flex`, etc.
- Width: `u-w-100`, `u-w-auto`, etc.
- Margins: `u-m-xs`, `u-mt-sm`, etc.
- Padding: `u-p-md`, `u-px-lg`, etc.

## Display Utilities

Control the display property of elements:

```html
<div class="u-block">Block element</div>
<div class="u-inline-block">Inline-block element</div>
<div class="u-inline">Inline element</div>
<div class="u-flex">Flex container</div>
<div class="u-inline-flex">Inline-flex container</div>
<div class="u-grid">Grid container</div>
<div class="u-hidden">Hidden element</div>
```

## Width Utilities

Control the width of elements:

```html
<div class="u-w-100">Full width (100%)</div>
<div class="u-w-auto">Auto width</div>
<div class="u-w-fit">Fit content width</div>
<div class="u-w-max">Max content width</div>
<div class="u-w-min">Min content width</div>
```

## Spacing Utilities

### Margin Utilities

Apply margins using the spacing scale:

```html
<!-- All sides -->
<div class="u-m-none">No margin</div>
<div class="u-m-xs">4px margin</div>
<div class="u-m-sm">8px margin</div>
<div class="u-m-md">16px margin</div>
<div class="u-m-lg">24px margin</div>
<div class="u-m-xl">32px margin</div>

<!-- Directional margins -->
<div class="u-mt-sm">Top margin</div>
<div class="u-mb-md">Bottom margin</div>
<div class="u-ml-lg">Left margin</div>
<div class="u-mr-xl">Right margin</div>

<!-- Horizontal margins -->
<div class="u-mx-sm">Left and right margins</div>

<!-- Vertical margins -->
<div class="u-my-md">Top and bottom margins</div>
```

### Padding Utilities

Apply padding using the same spacing scale:

```html
<!-- All sides -->
<div class="u-p-none">No padding</div>
<div class="u-p-xs">4px padding</div>
<div class="u-p-sm">8px padding</div>
<div class="u-p-md">16px padding</div>
<div class="u-p-lg">24px padding</div>
<div class="u-p-xl">32px padding</div>

<!-- Directional padding -->
<div class="u-pt-sm">Top padding</div>
<div class="u-pb-md">Bottom padding</div>
<div class="u-pl-lg">Left padding</div>
<div class="u-pr-xl">Right padding</div>

<!-- Horizontal padding -->
<div class="u-px-sm">Left and right padding</div>

<!-- Vertical padding -->
<div class="u-py-md">Top and bottom padding</div>
```

## Spacing Scale

The utility system uses a consistent spacing scale:

| Size | Value | Usage |
|------|-------|-------|
| `none` | 0px | Remove spacing |
| `xs` | 4px | Very small spacing |
| `sm` | 8px | Small spacing |
| `md` | 16px | Medium spacing (default) |
| `lg` | 24px | Large spacing |
| `xl` | 32px | Extra large spacing |

## Usage Examples

### Navigation Menu

```html
<nav class="u-flex u-gap-md u-p-lg">
  <echo-link href="/home" class="u-mr-auto">Home</echo-link>
  <echo-link href="/about">About</echo-link>
  <echo-link href="/contact">Contact</echo-link>
</nav>
```

### Card Layout

```html
<div class="u-grid u-gap-lg u-p-md">
  <echo-card class="u-w-100">Card 1</echo-card>
  <echo-card class="u-w-100">Card 2</echo-card>
  <echo-card class="u-w-100">Card 3</echo-card>
</div>
```

### Form Layout

```html
<form class="u-flex u-flex-col u-gap-md u-p-lg">
  <echo-input class="u-w-100 u-mb-sm" placeholder="Name"></echo-input>
  <echo-input class="u-w-100 u-mb-sm" placeholder="Email"></echo-input>
  <div class="u-flex u-gap-sm u-mt-md">
    <echo-button class="u-mr-auto">Cancel</echo-button>
    <echo-button variant="primary">Submit</echo-button>
  </div>
</form>
```

### Block Links

```html
<!-- Full-width block links -->
<echo-link href="#" class="u-block u-w-100 u-p-md u-mb-sm">
  Full-width link
</echo-link>

<!-- Links with custom spacing -->
<echo-link href="#" class="u-block u-px-lg u-py-sm u-mb-md">
  Padded block link
</echo-link>
```

## Integration with Components

Utility classes work seamlessly with Echo components:

```html
<!-- Button with custom margins -->
<echo-button class="u-mr-sm u-mb-md">Button</echo-button>

<!-- Card with custom padding -->
<echo-card class="u-p-lg">
  <div class="u-mb-sm">Card content</div>
</echo-card>

<!-- Link with display control -->
<echo-link href="#" display="block" class="u-w-100 u-p-md">
  Block link
</echo-link>
```

## TypeScript Support

All utility classes have full TypeScript support:

```typescript
import type { 
  UtilityDisplayName, 
  UtilityWidthName, 
  UtilitySpacingName 
} from 'design-toolkit';

// Type-safe utility class names
const displayClass: UtilityDisplayName = 'block';
const widthClass: UtilityWidthName = '100';
const spacingClass: UtilitySpacingName = 'md';
```

## Best Practices

1. **Use semantic HTML first**: Always start with proper HTML structure
2. **Apply utilities sparingly**: Use utilities for layout and spacing, not for complex styling
3. **Combine with component properties**: Use both component properties and utility classes when needed
4. **Maintain consistency**: Use the same spacing scale throughout your application
5. **Consider responsive design**: Utility classes work well with responsive layouts

## Browser Support

Utility classes work in all modern browsers that support CSS Grid and Flexbox:

- Chrome 57+
- Firefox 52+
- Safari 10.1+
- Edge 16+

