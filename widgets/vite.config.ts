import preact from '@preact/preset-vite'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [preact()],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  build: {
    outDir: './public',
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'widget',
      fileName: 'widget',
    },
  },
  server: {
    port: 3082,
    host: true,
  },
})
