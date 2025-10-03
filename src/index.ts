// Import and register components
import './components/echo-button.js';

// Export all components
export { EchoButton } from './components/echo-button.js';

// Export types
export type { EchoButtonVariant, EchoSize, EchoContext, ContextColorName, ComponentSizeName } from './types/index.js';
export { contextColorNames, componentSizeNames } from './types/index.js';

// Export shared styles
export { contextColors, contextColorsCSS } from './styles/context-colors.js';
export { componentSizes, componentSizesCSS } from './styles/component-sizes.js';
