export type EchoButtonVariant =
  | 'default'
  | 'link'
  | 'outline'
  | 'ghost'
  | 'soft';
export type EchoSize = 'xs' | 'small' | 'medium' | 'large';
export type EchoContext =
  | 'danger'
  | 'success'
  | 'warning'
  | 'info'
  | 'primary'
  | 'secondary';

// Echo Separator types
export type EchoSeparatorVariant =
  | 'solid'
  | 'dotted'
  | 'dashed'
  | 'double'
  | 'gradient';
export type EchoSeparatorMargin = 'small' | 'medium' | 'large';
export type EchoSeparatorThickness = 'thin' | 'medium' | 'thick';
export type EchoSeparatorOrientation = 'horizontal' | 'vertical';

// Re-export context color types from shared styles
export type { ContextColorName } from '../styles/context-colors.js';
export { contextColorNames } from '../styles/context-colors.js';

// Re-export component size types from shared styles
export type { ComponentSizeName } from '../styles/component-sizes.js';
export { componentSizeNames } from '../styles/component-sizes.js';

// Re-export icon types
export type {
  EchoIconSize,
  EchoIconVariant,
  IconName,
  IconSizeName,
  IconVariantName,
} from './icon-types.js';
export {
  echoIconSizeNames,
  echoIconVariantNames,
  iconNames,
} from './icon-types.js';
