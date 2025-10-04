/**
 * Icon registry for Design Toolkit
 *
 * This module manages the SVG icon library and provides
 * efficient loading and caching of icon data.
 */

import type { IconName } from '../types/icon-types.js';
import { iconLibrary } from './icon-library.js';

/**
 * Icon registry map storing SVG content for each icon
 */
const iconRegistry = new Map<IconName, string>();

/**
 * Icon loading promises cache to prevent duplicate requests
 */
const loadingPromises = new Map<IconName, Promise<string>>();

/**
 * Base SVG template with consistent styling
 */
const createSVGTemplate = (content: string): string => {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
    ${content}
  </svg>`;
};

/**
 * Generate SVG path for an icon based on its name
 * Uses the comprehensive icon library
 */
const generateIconSVG = (iconName: IconName): string => {
  const exists = Object.prototype.hasOwnProperty.call(iconLibrary, iconName);
  const path = exists ? iconLibrary[iconName] : iconLibrary['x']; // fallback to x icon
  if (!exists) {
    console.warn(
      `[design-toolkit] Icon "${String(iconName)}" is not implemented. Falling back to "x".`
    );
  }
  return createSVGTemplate(path);
};

/**
 * List all icon names that are actually available in the compiled library.
 * This is the single source of truth for UI/demo listings to avoid showing
 * fallback icons when a requested name is not implemented yet.
 */
export const getAvailableIconNames = (): string[] => {
  return Object.keys(iconLibrary);
};

/**
 * Load an icon by name
 * @param iconName The name of the icon to load
 * @returns Promise that resolves to the SVG content
 */
export const loadIcon = async (iconName: IconName): Promise<string> => {
  // Return cached icon if available
  if (iconRegistry.has(iconName)) {
    return iconRegistry.get(iconName)!;
  }

  // Return existing loading promise if available
  if (loadingPromises.has(iconName)) {
    return loadingPromises.get(iconName)!;
  }

  // Create new loading promise
  const loadingPromise = new Promise<string>((resolve) => {
    // Simulate async loading (in real implementation, this would load from files)
    setTimeout(() => {
      const svgContent = generateIconSVG(iconName);
      iconRegistry.set(iconName, svgContent);
      loadingPromises.delete(iconName);
      resolve(svgContent);
    }, 0);
  });

  loadingPromises.set(iconName, loadingPromise);
  return loadingPromise;
};

/**
 * Preload multiple icons
 * @param iconNames Array of icon names to preload
 * @returns Promise that resolves when all icons are loaded
 */
export const preloadIcons = async (iconNames: IconName[]): Promise<void> => {
  await Promise.all(iconNames.map(loadIcon));
};

/**
 * Get all loaded icon names
 * @returns Array of loaded icon names
 */
export const getLoadedIcons = (): IconName[] => {
  return Array.from(iconRegistry.keys());
};

/**
 * Clear the icon registry (useful for testing)
 */
export const clearIconRegistry = (): void => {
  iconRegistry.clear();
  loadingPromises.clear();
};
