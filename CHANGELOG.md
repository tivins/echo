# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
