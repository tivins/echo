# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
