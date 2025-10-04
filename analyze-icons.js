#!/usr/bin/env node

/**
 * Icon Analysis Script
 * Analyzes SVG paths to identify potentially problematic icons
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the icon library file
const iconLibraryPath = path.join(__dirname, 'src', 'icons', 'icon-library.ts');
const iconLibraryContent = fs.readFileSync(iconLibraryPath, 'utf8');

// Extract icon definitions
const iconMatches = iconLibraryContent.match(/'([^']+)':\s*'([^']+)'/g);
const icons = {};

iconMatches.forEach(match => {
  const [, name, svgPath] = match.match(/'([^']+)':\s*'([^']+)'/);
  icons[name] = svgPath;
});

console.log(`Found ${Object.keys(icons).length} icons to analyze\n`);

// Analysis functions
function analyzeIcon(name, svgPath) {
  const issues = [];
  
  // Check for complex curves (C, S, Q, T commands)
  const curveCommands = svgPath.match(/[CSTQ]/g);
  if (curveCommands && curveCommands.length > 2) {
    issues.push(`Complex curves detected (${curveCommands.length} curve commands)`);
  }
  
  // Check for triangles (look for triangular patterns)
  if (name.includes('triangle') || name.includes('diamond')) {
    if (!svgPath.includes('L') || svgPath.split('L').length < 3) {
      issues.push('Triangle/diamond may not have proper triangular shape');
    }
  }
  
  // Check for circles (look for circular patterns)
  if (name.includes('circle') || name.includes('dot')) {
    if (!svgPath.includes('C') && !svgPath.includes('A')) {
      issues.push('Circle/dot may not have proper circular shape');
    }
  }
  
  // Check for arrows (should have directional elements)
  if (name.includes('arrow') || name.includes('chevron')) {
    if (!svgPath.includes('L') || svgPath.split('L').length < 2) {
      issues.push('Arrow/chevron may not have proper directional shape');
    }
  }
  
  // Check for hearts (should have curved elements)
  if (name.includes('heart')) {
    if (!svgPath.includes('C') && !svgPath.includes('Q')) {
      issues.push('Heart may not have proper curved shape');
    }
  }
  
  // Check for stars (should have multiple points)
  if (name.includes('star')) {
    const lineCount = (svgPath.match(/L/g) || []).length;
    if (lineCount < 5) {
      issues.push('Star may not have enough points');
    }
  }
  
  // Check for very simple icons that might be too basic
  const pathLength = svgPath.length;
  if (pathLength < 50) {
    issues.push('Very simple path - may need more detail');
  }
  
  // Check for overly complex icons
  if (pathLength > 500) {
    issues.push('Very complex path - may need simplification');
  }
  
  // Check for missing stroke attributes
  if (!svgPath.includes('stroke=')) {
    issues.push('Missing stroke attribute');
  }
  
  // Check for inconsistent stroke-width
  const strokeWidthMatches = svgPath.match(/stroke-width="([^"]+)"/g);
  if (strokeWidthMatches) {
    const widths = strokeWidthMatches.map(match => match.match(/stroke-width="([^"]+)"/)[1]);
    const uniqueWidths = [...new Set(widths)];
    if (uniqueWidths.length > 1) {
      issues.push(`Inconsistent stroke-width: ${uniqueWidths.join(', ')}`);
    }
  }
  
  return issues;
}

// Analyze all icons
const problematicIcons = [];
const perfectIcons = [];

Object.entries(icons).forEach(([name, svgPath]) => {
  const issues = analyzeIcon(name, svgPath);
  
  if (issues.length === 0) {
    perfectIcons.push(name);
  } else {
    problematicIcons.push({ name, issues, svgPath });
  }
});

// Generate report
console.log('='.repeat(80));
console.log('ICON ANALYSIS REPORT');
console.log('='.repeat(80));
console.log(`Total Icons: ${Object.keys(icons).length}`);
console.log(`Perfect Icons: ${perfectIcons.length}`);
console.log(`Problematic Icons: ${problematicIcons.length}`);
console.log('');

if (problematicIcons.length > 0) {
  console.log('PROBLEMATIC ICONS:');
  console.log('-'.repeat(40));
  
  problematicIcons.forEach(({ name, issues }) => {
    console.log(`\n${name}:`);
    issues.forEach(issue => {
      console.log(`  - ${issue}`);
    });
  });
}

console.log('\n' + '='.repeat(80));
console.log('RECOMMENDATIONS:');
console.log('='.repeat(80));

if (problematicIcons.length > 0) {
  console.log('1. Review the problematic icons listed above');
  console.log('2. Focus on icons with complex curves or triangular shapes');
  console.log('3. Ensure consistent stroke-width across all icons');
  console.log('4. Verify that geometric shapes (triangles, circles) have proper forms');
} else {
  console.log('All icons appear to be well-formed!');
}

// Save detailed report
const report = {
  timestamp: new Date().toISOString(),
  totalIcons: Object.keys(icons).length,
  perfectIcons: perfectIcons.length,
  problematicIcons: problematicIcons.length,
  problematicIconsDetails: problematicIcons,
  perfectIconsList: perfectIcons
};

fs.writeFileSync('icon-analysis-report.json', JSON.stringify(report, null, 2));
console.log('\nDetailed report saved to: icon-analysis-report.json');
