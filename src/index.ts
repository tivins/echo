// Import and register components
import './components/echo-button.js';
import './components/echo-icon.js';
import './components/echo-separator.js';

// Export all components
export { EchoButton } from './components/echo-button.js';
export { EchoIcon } from './components/echo-icon.js';
export { EchoSeparator } from './components/echo-separator.js';

// Export types
export type { EchoButtonVariant, EchoSize, EchoContext, ContextColorName, ComponentSizeName } from './types/index.js';
export type { EchoIconSize, EchoIconVariant, IconName, IconSizeName, IconVariantName } from './types/index.js';
export type { EchoSeparatorVariant, EchoSeparatorMargin, EchoSeparatorThickness, EchoSeparatorOrientation } from './types/index.js';
export { contextColorNames, componentSizeNames } from './types/index.js';
export { echoIconSizeNames, echoIconVariantNames, iconNames } from './types/index.js';

// Export shared styles
export { contextColors, contextColorsCSS } from './styles/context-colors.js';
export { componentSizes, componentSizesCSS } from './styles/component-sizes.js';

// Export icon utilities
export { loadIcon, preloadIcons, getLoadedIcons, clearIconRegistry, getAvailableIconNames } from './icons/icon-registry.js';
