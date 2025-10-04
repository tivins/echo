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
export const echoIconSizeNames = [
  'small',
  'medium', 
  'large'
] as const;

/**
 * Available icon variant names
 */
export const echoIconVariantNames = [
  'default',
  'outline',
  'filled'
] as const;

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
  'clock'
] as const;

/**
 * Type for icon names
 */
export type IconName = typeof iconNames[number];

/**
 * Type for icon size names
 */
export type IconSizeName = typeof echoIconSizeNames[number];

/**
 * Type for icon variant names
 */
export type IconVariantName = typeof echoIconVariantNames[number];
