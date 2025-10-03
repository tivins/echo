export type EchoButtonVariant = 'default' | 'link' | 'outline' | 'ghost';
export type EchoSize = 'small' | 'medium' | 'large';
export type EchoContext = 'danger' | 'success' | 'warning' | 'info' | 'primary' | 'secondary';

// Re-export context color types from shared styles
export type { ContextColorName } from '../styles/context-colors.js';
export { contextColorNames } from '../styles/context-colors.js';
