# Echo Link Display Behavior Fix

## Problem Description

The `echo-link` component had inconsistent display behavior compared to `echo-button` when using `display="block"`. This caused alignment issues in navigation menus and layouts where both components were used together.

### Root Cause

- **`echo-button`**: Applied utility classes (`u-block`, `u-w-100`) directly on the `:host` element
- **`echo-link`**: Applied utility classes on the internal `<a>` or `<span>` element

This difference caused:
- `echo-button` to take full container width
- `echo-link` to remain centered within its container
- Visual inconsistency in navigation menus

## Solution

Modified `echo-link` to match `echo-button`'s behavior by:

1. **Adding lifecycle methods**: `firstUpdated()` and `updated()` to handle utility class application
2. **Creating `_applyUtilityClasses()` method**: Identical to `echo-button`'s implementation
3. **Applying classes on `:host`**: Instead of on internal elements
4. **Removing old logic**: Eliminated the previous class application on internal elements

## Implementation Details

### Before (echo-link.ts)
```typescript
const displayClass = this.display !== 'inline' ? `u-${this.display}` : '';
const classes = [
  'button-link',
  `button-link--${this.variant}`,
  `context--${this.context}`,
  `size--${this.size}`,
  displayClass,  // Applied to internal element
  this.class,
]
```

### After (echo-link.ts)
```typescript
// Utility classes applied on :host element via _applyUtilityClasses()
const classes = [
  'button-link',
  `button-link--${this.variant}`,
  `context--${this.context}`,
  `size--${this.size}`,
  this.class,
]
```

## Benefits

1. **Visual Consistency**: Both components now behave identically with `display="block"`
2. **Predictable Layout**: Full-width behavior is consistent across components
3. **Better UX**: Navigation menus and layouts look more professional
4. **Maintainability**: Both components use the same utility class application logic

## Testing

Added comprehensive tests to verify:
- Consistent `display: block` behavior between components
- Correct utility class application on host elements
- Visual consistency in navigation menus

## Version

This fix is included in version **1.20.0** of the Echo Design System.
