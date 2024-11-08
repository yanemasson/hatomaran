import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'named',
        prettier: false,
        svgo: true,
      },
      include: '**/*.svg',
    })
  ],
  assetsInclude: ['**/*.md'],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    minify: false,
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  }
})
