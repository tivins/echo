// Import and register components
import './components/echo-button.js';
import './components/echo-link.js';
import './components/echo-icon.js';
import './components/echo-separator.js';
import './components/echo-card.js';
import './components/echo-layout.js';
import './components/echo-input.js';
import './components/echo-select.js';
import './components/echo-checkbox.js';
import './components/echo-pop.js';

// Export all components
export { EchoButton } from './components/echo-button.js';
export { EchoLink } from './components/echo-link.js';
export { EchoIcon } from './components/echo-icon.js';
export { EchoSeparator } from './components/echo-separator.js';
export { EchoCard } from './components/echo-card.js';
export { EchoLayout } from './components/echo-layout.js';
export { EchoInput } from './components/echo-input.js';
export { EchoSelect } from './components/echo-select.js';
export { EchoCheckbox } from './components/echo-checkbox.js';
export { EchoPop } from './components/echo-pop.js';

// Export types
export type {
  EchoButtonVariant,
  EchoLinkVariant,
  EchoLinkTarget,
  EchoLinkRel,
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
  EchoInputVariant,
  EchoInputSize,
  EchoInputType,
  EchoSelectVariant,
  EchoSelectSize,
  EchoSelectOption,
  EchoCheckboxType,
  EchoCheckboxVariant,
  EchoCheckboxSize,
  EchoPopVariant,
  EchoPopSize,
  EchoPopPlacement,
  EchoPopTrigger,
} from './types/index.js';

// Export type value arrays
export {
  contextColorNames,
  componentSizeNames,
  echoIconSizeNames,
  echoIconVariantNames,
  iconNames,
  echoButtonVariantNames,
  echoLinkVariantNames,
  echoLinkTargetNames,
  echoLinkRelNames,
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
