/**
 * Icon system types for Design Toolkit
 *
 * This module defines the types and constants for the icon system,
 * including icon names, sizes, and variants.
 */

export type EchoIconSize = 'small' | 'medium' | 'large';

export type EchoIconVariant = 'default' | 'outline' | 'filled';

/**
 * Available icon size names
 */
export const echoIconSizeNames = ['small', 'medium', 'large'] as const;

/**
 * Available icon variant names
 */
export const echoIconVariantNames = ['default', 'outline', 'filled'] as const;

/**
 * Icon names for the icon library
 * These represent the available icons in the system
 */
export const iconNames = [
  // Navigation & Arrows
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'arrow-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevron-down',
  'menu',
  'x',
  'search',
  'filter',
  'more-horizontal',
  'more-vertical',

  // Actions
  'plus',
  'minus',
  'edit',
  'trash',
  'save',
  'check',
  'refresh',
  'copy',
  'download',
  'upload',
  'share',
  'link',
  'external-link',

  // Media & Files
  'image',
  'file',
  'folder',
  'folder-open',
  'video',
  'music',
  'camera',

  // Communication
  'mail',
  'phone',
  'message-circle',
  'bell',
  'heart',
  'star',

  // Settings & Tools
  'settings',
  'user',
  'users',
  'lock',
  'unlock',

  // Status & Feedback
  'check-circle',
  'x-circle',
  'alert-circle',
  'info',

  // Technology
  'wifi',
  'battery',
  'power',
  'play',
  'pause',
  'stop',
  'volume',
  'volume-off',

  // Weather & Nature
  'sun',
  'moon',
  'cloud',
  'droplet',

  // Business & Finance
  'dollar-sign',
  'credit-card',
  'shopping-cart',
  'home',

  // Data & Analytics
  'bar-chart',
  'pie-chart',
  'calendar',
  'clock',

  // Additional Navigation & UI
  'grid',
  'list',
  'layout',
  'sidebar',
  'panel-left',
  'panel-right',
  'sidebar-open',
  'sidebar-close',
  'maximize',
  'minimize',
  'maximize-2',
  'minimize-2',

  // Additional Actions
  'undo',
  'redo',
  'cut',
  'paste',
  'scissors',
  'move',
  'rotate-cw',
  'rotate-ccw',
  'zoom-in',
  'zoom-out',

  // Additional Media & Files
  'folder-plus',
  'folder-minus',
  'file-plus',
  'file-minus',
  'file-text',
  'file-image',
  'file-video',
  'file-audio',
  'archive',
  'package',

  // Additional Communication
  'mail-open',
  'mail-check',
  'mail-plus',
  'message-square',
  'message-square-plus',
  'send',
  'reply',
  'forward',
  'at-sign',
  'hash',

  // Additional Settings & Tools
  'tool',
  'wrench',
  'hammer',
  'screwdriver',
  'key',
  'shield',
  'shield-check',
  'shield-alert',
  'shield-x',
] as const;

/**
 * Type for icon names
 */
export type IconName = (typeof iconNames)[number];

/**
 * Type for icon size names
 */
export type IconSizeName = (typeof echoIconSizeNames)[number];

/**
 * Type for icon variant names
 */
export type IconVariantName = (typeof echoIconVariantNames)[number];
