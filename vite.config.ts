import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    host: '127.0.0.1',
    open: false,
    strictPort: true,
    cors: true
  },
  logLevel: 'info',
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'DesignToolkit',
      fileName: 'design-toolkit'
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'Lit'
        }
      }
    }
  },
  optimizeDeps: {
    include: ['lit']
  },
  root: '.',
  publicDir: 'public'
})
