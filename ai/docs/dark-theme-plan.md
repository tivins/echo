# Dark Theme Implementation Plan

## Overview

Add dark theme support to the Echo design system with automatic detection and manual override, using semantic color tokens that all components will automatically adapt to.

## Implementation Strategy

### 1. Create Theme System Foundation

**File: `src/styles/theme-tokens.ts`** (new)

- Define semantic color tokens using CSS custom properties
- Tokens include: `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--text-primary`, `--text-secondary`, `--text-tertiary`, `--border-color`, `--shadow-color`
- Light theme values as defaults
- Dark theme values in `@media (prefers-color-scheme: dark)` query
- Support for manual override via `[data-theme="dark"]` and `[data-theme="light"]` attributes on `:root` or `html`

### 2. Create Theme Controller

**File: `src/theme/theme-controller.ts`** (new)

- Export `setTheme(theme: 'light' | 'dark' | 'auto')` function
- Export `getTheme()` function to retrieve current theme
- Export `onThemeChange(callback)` for theme change listeners
- Automatically detect system preference
- Store user preference in localStorage
- Apply `data-theme` attribute to document root

### 3. Update Context Colors for Dark Theme

**File: `src/styles/context-colors.ts`** (modify)

- Keep existing context colors but make them work with semantic tokens
- Add dark theme variants for each context color
- Ensure contrast ratios meet WCAG standards in both themes
- Context colors should reference semantic tokens where appropriate

### 4. Update Component Styles

Modify all component style files to use semantic tokens:

**Files to update:**

- `src/styles/button-link-styles.ts` - Replace hardcoded colors with semantic tokens
- `src/components/echo-card.ts` - Update background, text, border colors
- `src/components/echo-input.ts` - Update input backgrounds and borders
- `src/components/echo-select.ts` - Update dropdown styling
- `src/components/echo-pop.ts` - Update popup backgrounds and shadows
- `src/components/echo-separator.ts` - Update separator colors
- `src/components/echo-checkbox.ts` - Update checkbox colors

Key changes:

- Replace `white` with `var(--bg-primary)`
- Replace hardcoded text colors with `var(--text-primary)` or `var(--text-secondary)`
- Replace hardcoded borders with `var(--border-color)`
- Update shadows to use `var(--shadow-color)`

### 5. Export Theme API

**File: `src/index.ts`** (modify)

- Export theme controller functions
- Export theme-related types

### 6. Create Demo Page

**File: `demos/dark-theme-demo.html`** (new)

- Demonstrate theme switching
- Show all components in both light and dark themes
- Include toggle button to switch themes manually
- Display current theme state

### 7. Update Documentation

- **README.md**: Add dark theme section with usage examples
- **CHANGELOG.md**: Document dark theme feature addition
- **package.json**: Bump version (minor version increase)

## Technical Considerations

### Color Token Architecture

```css
:root {
  /* Light theme (default) */
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --text-primary: #1a1a1a;
  /* ... more tokens */
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* Dark theme */
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --text-primary: #f9fafb;
    /* ... more tokens */
  }
}

:root[data-theme="dark"] {
  /* Manual dark override */
  --bg-primary: #1a1a1a;
  /* ... */
}

:root[data-theme="light"] {
  /* Manual light override */
  --bg-primary: #ffffff;
  /* ... */
}
```

### Theme Controller API

```typescript
// Set theme manually
setTheme('dark');  // Force dark
setTheme('light'); // Force light
setTheme('auto');  // Use system preference

// Get current theme
const currentTheme = getTheme(); // 'light' | 'dark' | 'auto'

// Listen to theme changes
onThemeChange((theme) => {
  console.log('Theme changed to:', theme);
});
```

## Testing Strategy

- Visual regression tests for components in both themes
- Test automatic theme detection
- Test manual theme switching
- Test localStorage persistence
- Verify WCAG contrast ratios in both themes