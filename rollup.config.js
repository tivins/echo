import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default defineConfig([
  // ES Module build (external Lit)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/design-toolkit.esm.js',
      format: 'es',
      sourcemap: true,
    },
    external: ['lit'],
    plugins: [
      nodeResolve(),
      typescript({
        declaration: true,
        declarationDir: 'dist/types',
        outDir: 'dist',
        allowImportingTsExtensions: false,
      }),
    ],
  },
  // ES Module build (bundled Lit) - Self-contained!
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/design-toolkit.esm.bundled.js',
      format: 'es',
      sourcemap: true,
    },
    // NO external - means Lit will be bundled inside!
    plugins: [
      nodeResolve(),
      typescript({
        declaration: false,
        allowImportingTsExtensions: false,
      }),
    ],
  },
  // UMD build for browsers
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/design-toolkit.umd.js',
      format: 'umd',
      name: 'DesignToolkit',
      sourcemap: true,
      globals: {
        lit: 'Lit',
      },
    },
    external: ['lit'],
    plugins: [
      nodeResolve(),
      typescript({
        declaration: false,
        allowImportingTsExtensions: false,
      }),
    ],
  },
  // UMD minified build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/design-toolkit.umd.min.js',
      format: 'umd',
      name: 'DesignToolkit',
      sourcemap: true,
      globals: {
        lit: 'Lit',
      },
    },
    external: ['lit'],
    plugins: [
      nodeResolve(),
      typescript({
        declaration: false,
        allowImportingTsExtensions: false,
      }),
      terser(),
    ],
  },
  // UMD bundled build (includes Lit) - Self-contained!
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/design-toolkit.umd.bundled.js',
      format: 'umd',
      name: 'DesignToolkit',
      sourcemap: true,
    },
    // NO external - means Lit will be bundled inside!
    plugins: [
      nodeResolve(),
      typescript({
        declaration: false,
        allowImportingTsExtensions: false,
      }),
    ],
  },
  // UMD bundled + minified build (includes Lit) - Production ready!
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/design-toolkit.umd.bundled.min.js',
      format: 'umd',
      name: 'DesignToolkit',
      sourcemap: true,
    },
    // NO external - means Lit will be bundled inside!
    plugins: [
      nodeResolve(),
      typescript({
        declaration: false,
        allowImportingTsExtensions: false,
      }),
      terser(),
    ],
  },
]);
