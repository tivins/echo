import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    host: true
  },
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
  }
})
