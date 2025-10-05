# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.8.7] - 2025-01-04

### Enhanced
- **Demo HTML Code Display**: Significantly improved HTML code formatting and syntax highlighting in demo pages
  - **Formatted Output**: HTML code now displays with proper indentation and line breaks instead of single-line format
  - **Syntax Highlighting**: Added color-coded syntax highlighting for HTML tags, attributes, and values
  - **Better Readability**: Enhanced visual presentation with background, borders, and improved typography
  - **Real-time Updates**: Formatted code updates automatically when component properties change

### Technical
- **HTML Formatter**: Added comprehensive HTML formatting function with intelligent indentation
- **Syntax Highlighter**: Implemented color-coded highlighting for different HTML elements:
  - **Tags**: Pink/magenta color (`#e83e8c`) for HTML tag names
  - **Attributes**: Orange color (`#fd7e14`) for attribute names
  - **Values**: Teal color (`#20c997`) for attribute values
  - **Content**: Dark gray (`#495057`) for text content
- **CSS Styling**: Enhanced code display with background, borders, padding, and improved font rendering
- **Test Coverage**: Created comprehensive test page (demos/html-formatting-test.html) to validate formatting

### Examples
```html
<!-- Before: Single line, no highlighting -->
<echo-button variant="outline" context="secondary" size="medium" icon="more-horizontal" disabled="" icon-position="right" icon-size="medium" icon-variant="outline" icon-stroke-width="1.6">Button</echo-button>

<!-- After: Formatted with syntax highlighting -->
<echo-button
  variant="outline"
  context="secondary"
  size="medium"
  icon="more-horizontal"
  disabled=""
  icon-position="right"
  icon-size="medium"
  icon-variant="outline"
  icon-stroke-width="1.6">
  Button
</echo-button>
```

### Visual Improvements
- **Indentation**: Proper 2-space indentation for nested elements
- **Line Breaks**: Each attribute on its own line for better readability
- **Color Coding**: Visual distinction between different HTML elements
- **Background**: Light gray background with subtle border for code blocks
- **Typography**: Monospace font with improved line height and spacing

## [1.8.6] - 2025-01-04

### Fixed
- **EchoButton Attribute Removal Issue**: Fixed critical issue where properties were not reset to default values when attributes were removed using `removeAttribute()`
  - **Root Cause**: Lit components don't automatically reset properties to default values when attributes are removed
  - **Solution**: Added `attributeChangedCallback()` method to handle attribute removal and reset properties to their default values
  - **Impact**: Properties now correctly reset to defaults when attributes are removed (e.g., `obj.removeAttribute("size")` resets `size` to "medium")
  - **Technical**: Implemented proper attribute change detection with null value checking for attribute removal

### Technical
- **Attribute Change Handling**: Added comprehensive `attributeChangedCallback()` method to EchoButton component
- **Default Value Reset**: All properties (variant, size, context, disabled, icon, iconPosition, iconSize, iconVariant, iconStrokeWidth) now reset to defaults when attributes are removed
- **Test Coverage**: Created comprehensive test page (demos/attribute-removal-test.html) to validate attribute removal behavior
- **Documentation**: Updated README.md with attribute removal examples and behavior explanation

### Examples
```javascript
// Before: Property kept previous value after attribute removal
const button = document.querySelector('echo-button');
button.setAttribute('size', 'large');
button.removeAttribute('size');
console.log(button.size); // Still "large" (incorrect)

// After: Property resets to default value
const button = document.querySelector('echo-button');
button.setAttribute('size', 'large');
button.removeAttribute('size');
console.log(button.size); // "medium" (correct default)
```

### Test Page
- **Interactive Testing**: Created `demos/attribute-removal-test.html` with comprehensive test interface
- **Real-time Validation**: Live property display and test result tracking
- **All Properties Covered**: Tests for size, variant, context, disabled, and icon-related properties
- **Visual Feedback**: Success/failure indicators for each test case

## [1.8.5] - 2025-01-04

### Added
- **Type Value Arrays**: Added runtime arrays for all TypeScript union types to enable dynamic value access
  - **EchoButtonVariant**: `echoButtonVariantNames` array with all button variant values
  - **EchoSize**: `echoSizeNames` array with all component size values  
  - **EchoContext**: `echoContextNames` array with all context color values
  - **Integration**: All arrays exported from `src/types/index.ts` and `src/index.ts`
  - **Usage**: Enables JavaScript applications to dynamically populate selectors and forms

### Changed
- **Demo Conversion**: Converted `docs/demo-button.ts` to `docs/demo-button.js` for broader compatibility
  - **TypeScript to JavaScript**: Removed all TypeScript type annotations and interfaces
  - **Dynamic Type Values**: Updated demo to use exported type arrays instead of hardcoded values
  - **Runtime Population**: Selectors now automatically populate from component type definitions
  - **Maintainability**: Demo automatically updates when new variants/sizes/contexts are added

### Technical
- **Type System Enhancement**: Added runtime arrays alongside TypeScript union types
- **Export Structure**: Consolidated type exports in `src/index.ts` to prevent duplication
- **Build Process**: All builds pass without TypeScript errors
- **Demo Architecture**: JavaScript demo uses same dynamic population pattern as TypeScript version
- **Backward Compatibility**: Original TypeScript demo preserved alongside JavaScript version

### Examples
```javascript
// Import type value arrays
import { 
  echoButtonVariantNames, 
  echoSizeNames, 
  echoContextNames 
} from 'design-toolkit';

// Dynamic selector population
echoButtonVariantNames.forEach(variant => {
  const option = document.createElement('option');
  option.value = variant;
  option.textContent = capitalizeFirst(variant);
  variantSelector.appendChild(option);
});
```

## [1.8.4] - 2025-01-04

### Added
- **Code Icon**: Added new "code" icon to the icon library
  - **Design**: Clean angled brackets (`<` and `>`) representing code/HTML tags
  - **Integration**: Fully integrated with EchoIcon component and all size/color variants
  - **Usage**: Available as `code` icon name in all icon contexts
  - **Category**: Added to Technology section alongside wifi, battery, power icons

### Technical
- **Icon Library**: Added code icon to src/icons/icon-library.ts
- **Consistent Styling**: Follows Design Toolkit principles with 2px stroke width and proper viewBox
- **Demo Page**: Created comprehensive test page (demos/code-icon-test.html) showcasing all variants
- **Build Process**: Successfully integrated into build system with no errors

### Examples
```html
<!-- Basic code icon usage -->
<echo-icon name="code" size="medium"></echo-icon>

<!-- Code icon in button -->
<echo-button icon="code" context="primary">View Code</echo-button>

<!-- Code icon with different sizes -->
<echo-icon name="code" size="small"></echo-icon>
<echo-icon name="code" size="large"></echo-icon>

<!-- Code icon with context colors -->
<echo-icon name="code" color="success"></echo-icon>
<echo-icon name="code" color="warning"></echo-icon>
```

## [1.8.3] - 2025-01-04

### Fixed
- **EchoCard Footer Display Issue**: Fixed critical bug where footer content was never displayed
  - **Root Cause**: Footer rendering was conditional based on `_hasFooterContent` state, but the footer slot was never rendered to allow content detection
  - **Solution**: Footer is now always rendered but hidden with CSS when empty, allowing proper slot content detection
  - **Impact**: Footer content now displays correctly in all scenarios (with content, empty, whitespace-only)
  - **Technical**: Used `hidden` attribute with CSS `display: none` for clean empty state handling

## [1.8.2] - 2025-01-04

### Fixed
- **EchoCard Component**: Fixed content visibility issue where empty main content was still being displayed
  - Main content section now only appears when there is actual content in the main slot
  - Added slot content detection mechanism for main content slot to properly handle dynamic content
  - Improved component performance by avoiding unnecessary DOM rendering for empty content sections
  - Both footer and main content sections now follow the same intelligent visibility logic

## [1.8.1] - 2025-01-04

### Fixed
- **EchoCard Component**: Fixed footer visibility issue where empty footer was still being displayed
  - Footer now only appears when there is actual content in the footer slot
  - Added slot content detection mechanism to properly handle dynamic footer content
  - Improved component performance by avoiding unnecessary DOM rendering

## [1.8.0] - 2025-01-04

### Added
- **EchoLayout Component**: New abstract layout component for flex/grid, alignment, gaps, and direction management
  - **Display Types**: Support for `flex`, `grid`, `block`, `inline-flex`, `inline-grid`
  - **Flex Direction**: `row`, `column`, `row-reverse`, `column-reverse` options
  - **Flex Wrap**: `nowrap`, `wrap`, `wrap-reverse` for flexible wrapping
  - **Alignment**: `start`, `end`, `center`, `stretch`, `baseline` for cross-axis alignment
  - **Justification**: `start`, `end`, `center`, `between`, `around`, `evenly` for main-axis distribution
  - **Gap Sizes**: `none`, `xs`, `small`, `medium`, `large`, `xl` for consistent spacing
  - **Grid Columns**: Support for `auto`, `auto-fit`, `auto-fill`, or fixed number of columns
  - **Grid Rows**: Support for `auto` or fixed number of rows
  - **Size Variants**: `xs`, `small`, `medium`, `large` for consistent padding
  - **Dynamic Updates**: Public methods for programmatic property changes
  - **TypeScript Support**: Complete type definitions for all layout properties

### Technical
- **Layout Styles Module**: Created `src/styles/layout-styles.ts` with comprehensive CSS classes
- **CSS Custom Properties**: Implemented CSS variables for dynamic grid column/row configuration
- **Responsive Design**: Built-in responsive behavior with media query support
- **Component Integration**: Seamless integration with existing Design Toolkit components
- **Performance**: Efficient CSS class generation and minimal DOM manipulation
- **Accessibility**: Proper semantic HTML structure and ARIA support

### Documentation
- **Comprehensive Demo**: Created `demos/echo-layout-demo.html` with interactive examples
- **API Documentation**: Complete property, method, and usage documentation
- **Test Coverage**: Full Playwright test suite covering all layout features
- **Real-world Examples**: Card layouts, button groups, form layouts, and complex combinations
- **Interactive Controls**: Live property modification with real-time updates

### Examples
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
```

### JavaScript API
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

### Integration Examples
```html
<!-- Card grid layout -->
<echo-layout display="grid" columns="auto-fit" gap="large">
  <echo-card title="Card 1" size="small">Content 1</echo-card>
  <echo-card title="Card 2" size="small">Content 2</echo-card>
  <echo-card title="Card 3" size="small">Content 3</echo-card>
</echo-layout>

<!-- Button group layout -->
<echo-layout display="flex" gap="small" align="center">
  <echo-button variant="default" context="primary">Primary</echo-button>
  <echo-button variant="outline" context="secondary">Secondary</echo-button>
  <echo-button variant="ghost" context="danger">Danger</echo-button>
</echo-layout>

<!-- Form layout -->
<echo-layout display="flex" direction="column" gap="medium">
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
  <echo-layout display="flex" gap="small" justify="end">
    <echo-button variant="outline">Cancel</echo-button>
    <echo-button variant="default" context="primary">Submit</echo-button>
  </echo-layout>
</echo-layout>
```

## [1.7.4] - 2025-01-04

### Added
- **EchoButton Icon Stroke Width Control**: Added `icon-stroke-width` property to echo-button component
  - **New Property**: `iconStrokeWidth` (HTML: `icon-stroke-width`) allows controlling icon stroke width from the button
  - **Default Value**: Uses 1.5 as default stroke width when not specified
  - **Flexible Control**: Supports any numeric value for fine-tuned icon appearance
  - **Integration**: Seamlessly integrates with existing icon properties (icon-size, icon-variant)
  - **TypeScript Support**: Full type safety with number | null type definition

### Technical
- **Property Addition**: Added `iconStrokeWidth` property to EchoButton component with proper Lit decorator
- **Icon Integration**: Modified icon rendering to pass stroke-width value to echo-icon component
- **Default Handling**: Implemented fallback to 1.5 when iconStrokeWidth is null
- **Documentation**: Updated README.md with comprehensive examples and API documentation
- **Demo Page**: Created extensive test page (demos/button-icon-stroke-width-test.html) showcasing all stroke width variations

### Examples
```html
<!-- Default stroke width (1.5) -->
<echo-button icon="heart" context="primary">Default</echo-button>

<!-- Thin stroke width -->
<echo-button icon="heart" icon-stroke-width="0.5" context="primary">Thin</echo-button>

<!-- Thick stroke width -->
<echo-button icon="heart" icon-stroke-width="3.0" context="primary">Thick</echo-button>

<!-- Very thick stroke width -->
<echo-button icon="heart" icon-stroke-width="5.0" context="primary">Very Thick</echo-button>
```

### Documentation
- **API Documentation**: Added iconStrokeWidth property to properties table
- **Usage Examples**: Comprehensive examples showing different stroke width values
- **Feature Description**: Updated icon features section to include stroke width control
- **TypeScript Types**: Updated type definitions to include new property

## [1.7.3] - 2025-01-04

### Added
- **Ticket Icon**: Added new ticket icon to the icon library
  - **Source**: Based on SVG from SVG Repo (https://www.svgrepo.com/show/473432/ticket.svg)
  - **Design**: Clean ticket design with perforated edges and central content area
  - **Integration**: Fully integrated with EchoIcon component and all size/color variants
  - **Usage**: Available as `ticket` icon name in all icon contexts

### Technical
- **Icon Library**: Added ticket icon to src/icons/icon-library.ts
- **Consistent Styling**: Follows Design Toolkit principles with 2px stroke width and proper viewBox
- **Demo Page**: Created comprehensive test page (demos/ticket-icon-test.html) showcasing all variants
- **Build Process**: Successfully integrated into build system with no errors

### Examples
```html
<!-- Basic ticket icon usage -->
<echo-icon name="ticket" size="medium"></echo-icon>

<!-- Ticket icon in button -->
<echo-button icon="ticket" context="primary">Buy Ticket</echo-button>

<!-- Ticket icon with different sizes -->
<echo-icon name="ticket" size="small"></echo-icon>
<echo-icon name="ticket" size="large"></echo-icon>

<!-- Ticket icon with context colors -->
<echo-icon name="ticket" color="success"></echo-icon>
<echo-icon name="ticket" color="warning"></echo-icon>
```

## [1.7.2] - 2025-01-04

### Fixed
- **EchoButton Icon Spacing Issue**: Resolved critical spacing problem where icons had unwanted margins even when no text was present
  - **Root Cause**: Fixed margin-based spacing system applied margins unconditionally, even for icon-only buttons
  - **Solution**: Replaced margin-based spacing with modern Flexbox `gap` property for intelligent spacing
  - **Impact**: Icon-only buttons now have no extra spacing, while icon+text buttons maintain proper spacing

### Improved
- **EchoButton Spacing System**: Upgraded to modern CSS Flexbox gap approach
  - **Flexbox Gap**: Replaced all `margin-right` and `margin-left` rules with `gap: var(--button-gap)`
  - **CSS Custom Properties**: Implemented size-specific gap variables (xs: 4px, small: 6px, medium: 8px, large: 10px)
  - **Intelligent Spacing**: Gap only applies between elements that are actually present, eliminating unwanted margins
  - **Simplified CSS**: Removed complex margin rules and size-specific overrides
  - **Better Maintainability**: Single gap property instead of multiple margin rules per size

### Technical
- **Modern CSS**: Leveraged CSS Flexbox `gap` property for robust, automatic spacing
- **CSS Variables**: Implemented `--button-gap` custom property system for consistent theming
- **Simplified Architecture**: Reduced CSS complexity by eliminating conditional margin rules
- **Cross-Browser Support**: Flexbox gap is supported in all modern browsers
- **Performance**: More efficient CSS with fewer rules and calculations

### Examples
```html
<!-- Before: Unwanted margin on icon-only buttons -->
<echo-button icon="plus" size="small"></echo-button> <!-- Had 6px margin-right -->

<!-- After: Clean icon-only buttons with no extra spacing -->
<echo-button icon="plus" size="small"></echo-button> <!-- No unwanted spacing -->

<!-- Icon + text buttons maintain proper spacing -->
<echo-button icon="plus" size="small">Add</echo-button> <!-- Proper 6px gap -->
```

## [1.7.1] - 2025-01-04

### Fixed
- **EchoCard Footer Display Issue**: Fixed critical bug where footer content was never displayed
  - **Root Cause**: Footer rendering was conditional based on `_hasFooterContent()` method that couldn't properly detect slot content
  - **Solution**: Simplified footer rendering to always show footer slot, allowing CSS to handle empty state styling
  - **Impact**: Footer content now displays correctly in all scenarios

### Improved
- **EchoCard Visual Design**: Enhanced card styling for more refined, delicate appearance
  - **Border Radius**: Increased from 8px to 12px (medium) for softer, more modern look
  - **Padding**: Increased from 16px to 20px (medium) for better breathing room
  - **Shadows**: Refined shadow system with layered shadows for depth and elegance
    - Default: `0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)`
    - Hover: `0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)`
  - **Elevated Variant**: Enhanced with deeper shadows `0 8px 25px rgba(0, 0, 0, 0.12), 0 3px 10px rgba(0, 0, 0, 0.08)`
  - **Outlined Variant**: Refined border styling and subtle background tint
  - **Hover Effects**: Added subtle lift animation with `translateY(-1px)` and enhanced shadows

### Enhanced
- **Typography**: Improved text styling for better readability and hierarchy
  - **Title**: Reduced font-weight from 600 to 500, improved letter-spacing (-0.01em)
  - **Content**: Refined color (#4a4a4a) and line-height (1.6) for better readability
  - **Font Sizes**: Adjusted for better visual balance across sizes
- **Header Design**: Enhanced header section with subtle border separator
  - **Border**: Added `1px solid rgba(0, 0, 0, 0.05)` separator between header and content
  - **Spacing**: Improved padding and gap adjustments
- **Footer Design**: Enhanced footer section with visual separation
  - **Border**: Added `1px solid rgba(0, 0, 0, 0.05)` separator between content and footer
  - **Background**: Subtle background tint `rgba(0, 0, 0, 0.01)` for visual distinction
  - **Spacing**: Improved padding and gap adjustments
- **Close Button**: Refined close button styling for better UX
  - **Color**: Changed from context color to neutral gray (#666)
  - **Hover**: Subtle background with opacity transition
  - **Padding**: Increased for better touch target

### Technical
- **Animation**: Upgraded to `cubic-bezier(0.4, 0, 0.2, 1)` for smoother, more natural transitions
- **CSS Variables**: Enhanced custom property system for consistent theming
- **Responsive Design**: Improved spacing and sizing across different screen sizes

## [1.7.0] - 2025-01-04

### Added
- **EchoCard Component**: New flexible card component with comprehensive features
  - **Header Section**: Supports title, icon, and close button
  - **Content Section**: Main content area with proper padding and spacing
  - **Footer Section**: Optional footer for action buttons
  - **Header Actions Slot**: Additional buttons in header area alongside close button
  - **Multiple Variants**: `default`, `outlined`, `elevated`, `flat` visual styles
  - **Size Options**: `small`, `medium`, `large` sizing variants
  - **Context Colors**: Full support for all context colors (primary, secondary, success, warning, danger, info)
  - **Icon Integration**: Built-in support for icons with size and variant options
  - **Closable Feature**: Optional close button with event handling
  - **Disabled State**: Proper disabled styling and interaction prevention
  - **Event System**: `echo-card-close` event when card is closed
  - **Public Methods**: `show()` and `hide()` methods for programmatic control
  - **Accessibility**: Proper ARIA labels and keyboard navigation support

### Technical
- **TypeScript Types**: Added `EchoCardVariant` and `EchoCardSize` types
- **Component Integration**: EchoCard uses EchoButton and EchoIcon components internally
- **Slot System**: Named slots for `header-actions` and `footer` content
- **CSS Custom Properties**: Consistent theming with context colors and component sizes
- **Responsive Design**: Flexible layout that adapts to content and screen size
- **Event Handling**: Proper event bubbling and composition for close functionality

### Documentation
- **Comprehensive Examples**: Added detailed usage examples in README.md
- **API Documentation**: Complete property, slot, event, and method documentation
- **Demo Page**: Created `echo-card-demo.html` with extensive examples
- **Test Coverage**: Full Playwright test suite for all card features

### Examples
- **Basic Cards**: Simple cards with titles and content
- **Icon Integration**: Cards with various icons and icon variants
- **Closable Cards**: Cards with close functionality and event handling
- **Header Actions**: Cards with additional action buttons in header
- **Footer Actions**: Cards with footer buttons and actions
- **Complex Layouts**: Dashboard-style cards with multiple sections
- **Disabled States**: Proper disabled card styling and behavior
- **Event Handling**: JavaScript examples for card close events

## [1.6.5] - 2025-01-04

### Fixed
- **EchoButton Icon Hover Color Issue (Final Fix)**: Resolved persistent issue where icons remained invisible on hover
  - **Root Cause**: Icon component was using `var(--context-color)` which overrode `currentColor`
  - **Solution**: Set `--icon-color: currentColor` directly via inline style to ensure proper color inheritance
  - **Impact**: Icons now properly follow button text color in all hover states across all variants

### Changed
- **EchoButton Icon API Hybrid Approach**: Implemented best-of-both-worlds API design
  - **Main Property**: Renamed `icon-name` to `icon` for cleaner, more intuitive usage
  - **Hybrid Naming**: Properties use camelCase in JavaScript but kebab-case in HTML attributes
    - JavaScript: `iconPosition`, `iconSize`, `iconVariant`
    - HTML: `icon-position`, `icon-size`, `icon-variant`
  - **Lit Integration**: Uses `attribute` parameter in `@property` decorator for proper HTML attribute mapping
  - **Developer Experience**: Clean JavaScript API with readable HTML attributes

### Technical
- **Improved Color Inheritance**: Icons now use `--icon-color: currentColor` via inline styles for reliable color inheritance
- **Consistent API**: All properties now follow camelCase convention consistent with Lit framework
- **Simplified Usage**: Main icon property simplified from `icon-name` to `icon` for better developer experience
- **Enhanced Documentation**: Updated README.md and examples to reflect new API

### Examples
```html
<!-- New hybrid API -->
<echo-button icon="plus" context="primary">Add Item</echo-button>
<echo-button icon="trash" context="danger">Delete</echo-button>

<!-- Icon positioning (HTML attributes) -->
<echo-button icon="arrow-left" icon-position="left" context="primary">Back</echo-button>
<echo-button icon="arrow-right" icon-position="right" context="primary">Next</echo-button>

<!-- Custom properties (HTML attributes) -->
<echo-button icon="settings" icon-size="small" context="primary">Small Icon</echo-button>
<echo-button icon="settings" icon-variant="filled" context="primary">Filled Icon</echo-button>

<!-- Icon-only buttons -->
<echo-button icon="plus" context="primary"></echo-button>
<echo-button icon="edit" context="secondary"></echo-button>
```

### JavaScript API
```javascript
// JavaScript properties use camelCase
const button = document.querySelector('echo-button');
button.icon = 'plus';
button.iconPosition = 'right';
button.iconSize = 'large';
button.iconVariant = 'filled';
```

### Migration Guide
```html
<!-- Old API (no longer supported) -->
<echo-button icon-name="plus" icon-position="left" icon-size="small">Add</echo-button>

<!-- New API (HTML attributes) -->
<echo-button icon="plus" icon-position="left" icon-size="small">Add</echo-button>
```

## [1.6.4] - 2025-01-04

### Fixed
- **EchoButton Icon Hover Color Issue**: Fixed critical issue where icons would become invisible on hover due to color inheritance
  - **Root Cause**: Icons were using `context` property instead of `color="currentColor"`
  - **Solution**: Changed icon color inheritance to use `currentColor` so icons follow button text color on hover
  - **Impact**: Icons now remain visible and properly contrasted in all hover states across all button variants

- **EchoButton Vertical Alignment Issue**: Fixed vertical alignment problem when icons are positioned on the right side
  - **Root Cause**: Missing vertical alignment properties on button and icon containers
  - **Solution**: Added `vertical-align: middle` and `line-height: 1` to both button and icon elements
  - **Impact**: Buttons with right-positioned icons now maintain proper vertical alignment with other elements

### Technical
- **Enhanced Icon Color Inheritance**: Icons now properly inherit button text color instead of using fixed context color
- **Improved Vertical Alignment**: Added comprehensive alignment properties to prevent button "dropping" when icons are right-positioned
- **Cross-Variant Compatibility**: Fixes apply to all button variants (default, outline, ghost, soft, link) and all contexts
- **Test Coverage**: Created comprehensive test file (demos/button-icon-fixes-test.html) to validate both fixes

### Examples
```html
<!-- Before: Icon invisible on hover -->
<echo-button icon-name="heart" variant="outline" context="success">Heart</echo-button>

<!-- After: Icon follows text color on hover -->
<echo-button icon-name="heart" variant="outline" context="success">Heart</echo-button>

<!-- Before: Button drops when icon is right-positioned -->
<echo-button icon-name="arrow-right" icon-position="right">Next</echo-button>

<!-- After: Button maintains proper alignment -->
<echo-button icon-name="arrow-right" icon-position="right">Next</echo-button>
```

## [1.6.3] - 2025-01-04

### Added
- **EchoButton Icon Support**: Comprehensive icon integration for echo-button component
  - **Icon Properties**: Added `icon-name`, `icon-position`, `icon-size`, and `icon-variant` properties
  - **Automatic Context Inheritance**: Icons automatically inherit the button's context color for consistent theming
  - **Smart Size Mapping**: Icon size automatically maps to button size (xs→small, small→small, medium→medium, large→large)
  - **Flexible Positioning**: Icons can be positioned on the left (default) or right side of the text
  - **Custom Overrides**: Icon size and variant can be overridden independently from button properties
  - **Icon-Only Buttons**: Support for buttons containing only icons without text
  - **All Variants Supported**: Icons work seamlessly with all button variants (default, outline, ghost, soft, link)
  - **Disabled State**: Icons properly respect the button's disabled state
  - **Accessibility**: Icons inherit proper accessibility attributes from the button

### Technical
- **Enhanced Button Component**: Extended echo-button.ts with icon rendering logic and styling
- **Responsive Spacing**: Icon spacing automatically adjusts based on button size (4px for xs, 6px for small, 8px for medium, 10px for large)
- **TypeScript Integration**: Full TypeScript support with proper type definitions for all icon properties
- **Demo Documentation**: Created comprehensive demo file (demos/button-icon-demo.html) showcasing all icon features
- **Updated Documentation**: Enhanced README.md with detailed icon usage examples and API documentation

### Examples
```html
<!-- Basic icon buttons -->
<echo-button icon-name="plus" context="primary">Add Item</echo-button>
<echo-button icon-name="trash" context="danger">Delete</echo-button>

<!-- Icon positioning -->
<echo-button icon-name="arrow-left" icon-position="left" context="primary">Back</echo-button>
<echo-button icon-name="arrow-right" icon-position="right" context="primary">Next</echo-button>

<!-- Icon-only buttons -->
<echo-button icon-name="plus" context="primary"></echo-button>
<echo-button icon-name="edit" context="secondary"></echo-button>

<!-- Custom icon properties -->
<echo-button icon-name="settings" icon-size="small" context="primary">Small Icon</echo-button>
<echo-button icon-name="settings" icon-variant="filled" context="primary">Filled Icon</echo-button>
```

## [1.6.2] - 2025-01-04

### Changed
- **Project Structure Reorganization**: Cleaned up and organized project files for better maintainability
  - **Removed unused files**: Deleted pnpm-lock.yaml (project uses npm), temporary development scripts, and duplicate icon processing files
  - **Organized demos**: Moved all HTML demo files to `demos/` directory for better organization
  - **Documentation structure**: Moved technical documentation and reports to `docs/` directory
  - **Test organization**: Confirmed proper test file organization in `tests/` directory
  - **Updated documentation**: Updated README.md with new project structure and organization

### Technical
- **File cleanup**: Removed 12+ temporary and development files that were cluttering the root directory
- **Better organization**: Created logical folder structure with `demos/` and `docs/` directories
- **Maintained functionality**: All existing functionality preserved, only file organization improved
- **Updated documentation**: README.md now reflects the clean, organized project structure

## [1.6.1]

### Added
- **Gaming & Rewards Icons**: Added 6 new icons for gaming, achievements, and rewards systems
  - **trophy**: Classic achievement trophy with handles and base
  - **medal**: Victory medal with ribbon design
  - **coin**: Currency coin with detailed engraving pattern
  - **gold**: Precious gold bar/ingot with geometric facets
  - **sword**: Classic sword with blade, guard, and handle
  - **ingot**: Traditional gold bar with trapezoidal shape and horizontal detail lines
  - All icons follow the same Design Toolkit principles: 24x24 viewBox, 2px stroke width, and consistent styling

### Changed
- **Mail Icons Redesign**: Completely redesigned `mail-open`, `mail-check`, and `mail-plus` icons
  - **Consistent envelope proportions**: All three icons now use a harmonious 18x14 envelope base with consistent 2px rounded corners
  - **Improved mail-open**: Redesigned with clear open flap at the top showing the envelope opening upward, replacing the previous inconsistent shape
  - **Larger check mark**: The check mark in `mail-check` is now prominently positioned in the top-right corner (5x5 visible area) instead of overlapping the envelope
  - **Larger plus sign**: The plus symbol in `mail-plus` now spans 6px vertically and horizontally, making it easily recognizable at all sizes
  - **Better positioning**: Additive elements (check and plus) are positioned in the upper-right corner where they don't overlap the main envelope shape
  - **Unified design language**: All three icons share the same stroke width (2px) and line cap/join styles for visual consistency

## [1.6.0]

### Added
- **EchoButton Soft Variant**: Added new "soft" variant to echo-button component
  - Default state displays with context color alpha background and colored text (like ghost:hover)
  - Hover state displays with solid context color background and white text (like default)
  - Provides a middle ground between ghost and default variants for subtle visual hierarchy
  - Fully compatible with all context colors and sizes
  - Updated TypeScript types to include 'soft' variant
- **EchoIcon Stroke Width Property**: Added configurable `stroke-width` property to echo-icon component
  - Default stroke-width set to 1.5 for optimal visual appearance
  - Allows customization of icon line thickness via `stroke-width` attribute
  - Dynamic updates when stroke-width property changes
  - Works seamlessly with all icon variants and sizes
- **Extra Small (XS) Component Size**: Added "xs" size option to all components
  - XS size: 24px height, 12px font-size, 4px/8px padding
  - Perfect for compact UIs, inline actions, dense tables, and toolbar buttons
  - Available across all components that use the EchoSize type
  - Updated TypeScript types and component-sizes module
- **EchoIcon Context Property**: Added support for context colors (primary, secondary, success, danger, warning, info) in echo-icon component
  - Context colors integrate with the shared Design Toolkit color system
  - Context property works alongside existing color property (color takes precedence)
  - Full compatibility with all icon variants (default, outline, filled)

### Changed
- **EchoIcon imports**: Standardized type imports to use centralized `types/index.js` file, matching the pattern used in EchoSeparator
- **EchoIcon color handling**: Updated color application to use CSS variables for better context color integration

### Fixed
- **EchoIcon Filled Variant**: Implemented the filled variant functionality that was previously non-functional
  - Added SVG transformation logic to convert stroke-based icons to fill-based for filled variant
  - Icon now properly reloads when variant property changes
  - Filled variant now correctly renders with fill instead of stroke

### Added
- **EchoSeparator Component**: Versatile separator component based on HTML `<hr>` element
- **Separator Variants**: Five visual styles (solid, dotted, dashed, double, gradient)
- **Separator Orientations**: Both horizontal and vertical support
- **Separator Thickness**: Three thickness options (thin, medium, thick)
- **Separator Margins**: Three margin sizes (small, medium, large)
- **Separator Content Slot**: Support for text or icon content within separator
- **Separator Context Colors**: Full integration with Design Toolkit context colors
- **Separator Custom Colors**: Support for custom color values
- **Separator Accessibility**: Proper ARIA attributes and semantic HTML
- **Separator TypeScript Types**: Complete type definitions for all separator properties
- **Separator Tests**: Comprehensive Playwright test suite
- **Separator Demo Page**: Full-featured demo page showing all variants and combinations

### Changed
- Redesigned 'settings' icon with cleaner gear design inspired by Lucide Icons for better visual consistency
- Redesigned 'key' icon with Font Awesome-inspired vertical design (round handle at top, vertical shaft, and side teeth)

### Fixed
- Fixed webserver.js netstat dependency error by implementing native Windows port checking
- Updated webserver to use port 3000 as per project requirements
- Replaced external netstat package with native Windows netstat command execution
- Improved port conflict resolution with automatic process termination
- **Complete Icon Library Overhaul**: Rebuilt entire icon library inspired by Lucide icons
  - **Removed Duplicates**: Eliminated duplicate icons (arrow-left/chevron-left, menu/hamburger, etc.)
  - **Clean SVG Paths**: Replaced complex, malformed paths with clean, well-formed Lucide-inspired designs
  - **Consistent Styling**: Standardized stroke-width to 2px and proper stroke-linecap/stroke-linejoin
  - **Simplified Library**: Reduced from 200+ icons to 60 essential, high-quality icons
  - **Better Organization**: Organized icons into logical categories with clear naming conventions
  - **Icon Renaming**: Updated icon names for clarity (close → x, delete → trash, etc.)

### Added
- **Expanded Icon Library**: Added 50 new icons for a total of 120 carefully selected icons inspired by Lucide design principles
- **New Icon Categories**: Additional Navigation & UI, Additional Actions, Additional Media & Files, Additional Communication, Additional Settings & Tools
- **Enhanced Icon Variants**: Added variants for existing icons (folder-plus, folder-minus, file-plus, file-minus, etc.)
- **UI Layout Icons**: Added comprehensive set of layout and interface icons (grid, list, layout, sidebar, panels, maximize/minimize)
- **Communication Extensions**: Added advanced communication icons (mail-open, mail-check, send, reply, forward, at-sign, hash)
- **Tool & Security Icons**: Added professional tool icons (tool, wrench, hammer, screwdriver, key, shield variants)
- **Action Extensions**: Added advanced action icons (undo, redo, cut, paste, scissors, move, rotate, zoom)
- **File Management**: Added comprehensive file type icons (file-text, file-image, file-video, file-audio, archive, package)
- **Clean Icon Library**: 60 carefully selected icons inspired by Lucide design principles
- **New Icon Categories**: Navigation, Actions, Media & Files, Communication, Settings & Tools, Status & Feedback, Technology, Weather & Nature, Business & Finance, Data & Analytics
- **Improved Icon Registry**: Better error handling with 'x' as fallback icon
- **Enhanced Type Safety**: Updated TypeScript definitions to match new icon names

### Changed
- **Icon Design Philosophy**: Adopted Lucide-inspired clean, minimal design approach
- **Stroke Consistency**: All icons now use 2px stroke-width for better visual consistency
- **Path Optimization**: Simplified SVG paths for better performance and maintainability
- **Fallback System**: Updated fallback from 'close' to 'x' icon for better semantics
- **Component Defaults**: Updated EchoIcon component default icon to 'x'

### Technical
- **Build Process**: All builds now pass without TypeScript errors
- **Test Suite**: All 63 tests passing with new icon library
- **Performance**: Reduced bundle size with cleaner, more efficient SVG paths
- **Maintainability**: Easier to maintain with consistent design patterns

## [1.5.0] - 2025-01-03

### Added
- **EchoIcon Component**: Comprehensive icon system with 200+ linear SVG icons
- **Icon Library**: Extensive collection of icons across multiple categories:
  - Navigation & UI (20 icons): arrows, chevrons, menu, close, search, filter, etc.
  - Actions (25 icons): plus, minus, edit, delete, save, copy, paste, etc.
  - Media & Files (10 icons): image, file, folder, document, video, etc.
  - Communication (12 icons): mail, phone, message, chat, notification, etc.
  - Settings & Tools (10 icons): settings, gear, user, lock, shield, etc.
  - Data & Analytics (12 icons): chart, graph, table, calendar, clock, etc.
  - Status & Feedback (12 icons): success, error, warning, info, alert, etc.
  - Technology (20 icons): wifi, bluetooth, battery, play, pause, volume, etc.
  - Weather & Nature (12 icons): sun, moon, cloud, rain, snow, wind, etc.
  - Business & Finance (16 icons): dollar, euro, credit-card, wallet, store, etc.
- **Icon Registry System**: Efficient loading and caching of SVG icons
- **TypeScript Definitions**: Complete type safety for all icon names and properties
- **Accessibility Features**: ARIA labels, keyboard navigation, screen reader support
- **Interactive Support**: Click events, disabled states, focus management
- **Custom Styling**: Color customization, size variants, visual style variants

### Features
- **Three Sizes**: small (16px), medium (24px), large (32px)
- **Three Variants**: default, outline, filled
- **Custom Colors**: Support for any CSS color value
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Efficient icon loading with caching system
- **TypeScript**: Full type safety with IconName union types
- **Events**: echo-icon-click event for interactive icons
- **Utilities**: loadIcon, preloadIcons, getLoadedIcons functions

### Technical
- Icon registry with Map-based caching system
- SVG template system with consistent 24x24 viewBox
- Linear design with 1.5px stroke width
- Lit directive integration with unsafeHTML
- Comprehensive test suite with Playwright
- TypeScript definitions for all icon names
- Efficient async loading with Promise caching
- Fallback system for invalid icon names

### Documentation
- Complete README section for EchoIcon component
- Comprehensive icon list with categories
- Usage examples for all features
- TypeScript integration examples
- Icon utility function documentation
- Updated project structure documentation

## [1.4.1] - 2025-01-03

### Changed
- Renamed `EchoButtonSize` type to `EchoSize` for broader reuse across components
- Renamed `EchoButtonContext` type to `EchoContext` for broader reuse across components

### Technical
- Updated type definitions in src/types/index.ts
- Updated all imports and exports in src/index.ts
- Updated component implementation in src/components/echo-button.ts
- All tests passing after type rename
- Build process successful with new type names

## [1.4.0] - 2025-01-03

### Added
- Context property for theme colors (danger, success, warning, info, primary, secondary)
- CSS custom properties system for dynamic theming
- Support for variant + context combinations
- Comprehensive color palette with hover states
- Alpha transparency support for ghost variants

### Changed
- Restructured button variants: default, link, outline, ghost
- Separated visual variants from semantic contexts
- Updated CSS architecture to use CSS custom properties
- Enhanced focus-visible styling with currentColor

### Enhanced
- Better separation of concerns between variants and contexts
- More flexible theming system
- Improved accessibility with semantic color meanings

## [1.3.0] - 2025-01-03

### Added
- Rollup build configuration with multiple output formats
- ES Module (ESM) build for modern browsers
- UMD build for universal compatibility
- Minified UMD build for production use
- TypeScript declaration files generation
- Source maps for debugging
- CDN-ready bundles via unpkg/jsDelivr
- Comprehensive example.html demonstrating all usage patterns

### Enhanced
- package.json with proper entry points for all formats
- Build scripts: `build`, `build:vite`, `build:all`
- Documentation with CDN usage examples
- UMD compatibility for older browsers
- Module type configuration in package.json

### Technical
- Rollup configuration with TypeScript plugin
- Terser minification for production builds
- Node resolution for dependency bundling
- Multiple bundle formats from single configuration
- TypeScript declarations in separate directory
- Source maps for development debugging
- Clean build output without warnings
- tslib dependency for TypeScript plugin

## [1.2.0] - 2025-01-02

### Changed
- Renamed component from `design-button` to `echo-button` following new naming convention
- Updated class name from `DesignButton` to `EchoButton`
- Changed custom event from `design-button-click` to `echo-button-click`
- Updated type definitions from `DesignButtonVariant/Size` to `EchoButtonVariant/Size`
- Renamed component file from `design-button.ts` to `echo-button.ts`
- Renamed test file from `design-button.spec.ts` to `echo-button.spec.ts`
- Updated all HTML examples and documentation to use new component name
- Updated README.md with new component naming throughout

### Technical
- All imports and exports updated to reflect new naming convention
- Global HTMLElementTagNameMap declaration updated
- Test suite fully migrated to new component name
- Development server and demo pages updated
- All tests passing with new naming convention

## [1.1.0] - 2025-01-02

### Added
- Ghost variant for DesignButton component
- Updated demo page with ghost button example
- Enhanced test coverage for ghost variant

### Features
- DesignButton component with:
  - Four variants: primary, secondary, outline, ghost
  - Three sizes: small, medium, large
  - Disabled state support
  - Custom click event emission
  - Accessible design with focus management
  - CSS custom properties for theming

## [1.0.0] - 2025-01-02

### Added
- Initial project setup with Node.js, Lit, Vite, and TypeScript
- ESLint and Prettier configuration for code quality
- Playwright testing setup with multi-browser support
- Basic DesignButton component with multiple variants and sizes
- Comprehensive README documentation
- Development server configuration on port 3000
- TypeScript type definitions
- Build configuration for library distribution
- Debug methodology documentation for Lit components
- Git ignore configuration for Node.js projects

### Features
- DesignButton component with:
  - Three variants: primary, secondary, outline
  - Three sizes: small, medium, large
  - Disabled state support
  - Custom click event emission
  - Accessible design with focus management
  - CSS custom properties for theming

### Technical
- Modern web components using Lit
- TypeScript support with strict configuration
- ES modules for tree-shaking
- CSS-in-JS with Lit's static styles
- Event-driven architecture
- Cross-browser testing with Playwright (Chromium, Firefox, WebKit)
- Debug testing utilities and templates
- Component property reactivity with proper decorator usage

### Fixed
- TypeScript configuration compatibility with Lit decorators
- Component rendering issues with `useDefineForClassFields` setting
- Playwright test targeting for shadow DOM elements
- Custom event handling in test environment
- Import path resolution for TypeScript modules

### Testing
- Comprehensive test suite with 27 passing tests
- Debug test templates for component troubleshooting
- Multi-browser test execution
- Shadow DOM element testing methodology
- Custom event testing patterns
- Component property and state validation
