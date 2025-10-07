export type EchoButtonVariant =
  | 'default'
  | 'link'
  | 'outline'
  | 'ghost'
  | 'soft';

export type EchoLinkVariant = EchoButtonVariant;
export type EchoLinkTarget = '_blank' | '_self' | '_parent' | '_top';
export type EchoLinkRel = 'noopener' | 'noreferrer' | 'noopener noreferrer';
export type EchoSize = 'xs' | 'small' | 'medium' | 'large';
export type EchoContext =
  | 'danger'
  | 'success'
  | 'warning'
  | 'info'
  | 'primary'
  | 'secondary';

// Export arrays of values for runtime use
export const echoButtonVariantNames: EchoButtonVariant[] = [
  'default',
  'link',
  'outline',
  'ghost',
  'soft',
];

export const echoLinkVariantNames: EchoLinkVariant[] = echoButtonVariantNames;
export const echoLinkTargetNames: EchoLinkTarget[] = ['_blank', '_self', '_parent', '_top'];
export const echoLinkRelNames: EchoLinkRel[] = ['noopener', 'noreferrer', 'noopener noreferrer'];

export const echoSizeNames: EchoSize[] = ['xs', 'small', 'medium', 'large'];

export const echoContextNames: EchoContext[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
];

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

// Echo Card types
export type EchoCardVariant = 'default' | 'outlined' | 'elevated' | 'flat';
export type EchoCardSize = 'small' | 'medium' | 'large';

// Echo Layout types
export type EchoLayoutDisplay =
  | 'flex'
  | 'grid'
  | 'block'
  | 'inline-flex'
  | 'inline-grid';
export type EchoLayoutDirection =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse';
export type EchoLayoutWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type EchoLayoutAlign =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'baseline';
export type EchoLayoutJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';
export type EchoLayoutGap = 'none' | 'xs' | 'small' | 'medium' | 'large' | 'xl';
export type EchoLayoutColumns = number | 'auto' | 'auto-fit' | 'auto-fill';
export type EchoLayoutRows = number | 'auto';

// Echo Input types
export type EchoInputVariant = 'default' | 'outlined' | 'filled' | 'underlined';
export type EchoInputSize = 'small' | 'medium' | 'large';
export type EchoInputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week';

// Echo Select types
export type EchoSelectVariant =
  | 'default'
  | 'outlined'
  | 'filled'
  | 'underlined';
export type EchoSelectSize = 'small' | 'medium' | 'large';
export type EchoSelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
  selected?: boolean;
};

// Echo Checkbox types
export type EchoCheckboxType = 'checkbox' | 'radio' | 'toggle';
export type EchoCheckboxVariant = 'default' | 'outlined' | 'filled';
export type EchoCheckboxSize = 'small' | 'medium' | 'large';

// Echo Pop types
export type EchoPopVariant =
  | 'default'
  | 'overlay'
  | 'tooltip'
  | 'dropdown'
  | 'modal';
export type EchoPopSize = 'small' | 'medium' | 'large' | 'auto';
export type EchoPopPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | 'auto'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';
export type EchoPopAnimation = 'fade' | 'slide' | 'scale' | 'none';
export type EchoPopTrigger = 'click' | 'hover' | 'focus' | 'manual';

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
