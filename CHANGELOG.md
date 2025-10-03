# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
