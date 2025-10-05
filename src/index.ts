// Import and register components
import './components/echo-button.js';
import './components/echo-icon.js';
import './components/echo-separator.js';
import './components/echo-card.js';
import './components/echo-layout.js';

// Export all components
export { EchoButton } from './components/echo-button.js';
export { EchoIcon } from './components/echo-icon.js';
export { EchoSeparator } from './components/echo-separator.js';
export { EchoCard } from './components/echo-card.js';
export { EchoLayout } from './components/echo-layout.js';

// Export types
export type {
  EchoButtonVariant,
  EchoSize,
  EchoContext,
  ContextColorName,
  ComponentSizeName,
  EchoIconSize,
  EchoIconVariant,
  IconName,
  IconSizeName,
  IconVariantName,
  EchoSeparatorVariant,
  EchoSeparatorMargin,
  EchoSeparatorThickness,
  EchoSeparatorOrientation,
  EchoCardVariant,
  EchoCardSize,
  EchoLayoutDisplay,
  EchoLayoutDirection,
  EchoLayoutWrap,
  EchoLayoutAlign,
  EchoLayoutJustify,
  EchoLayoutGap,
  EchoLayoutColumns,
  EchoLayoutRows,
} from './types/index.js';

// Export type value arrays
export {
  contextColorNames,
  componentSizeNames,
  echoIconSizeNames,
  echoIconVariantNames,
  iconNames,
  echoButtonVariantNames,
  echoSizeNames,
  echoContextNames,
} from './types/index.js';

// Export shared styles
export { contextColors, contextColorsCSS } from './styles/context-colors.js';
export { componentSizes, componentSizesCSS } from './styles/component-sizes.js';
export { layoutStyles, layoutStylesCSS } from './styles/layout-styles.js';

// Export icon utilities
export {
  loadIcon,
  preloadIcons,
  getLoadedIcons,
  clearIconRegistry,
  getAvailableIconNames,
} from './icons/icon-registry.js';
