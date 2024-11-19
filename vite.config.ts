import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import imagemin from 'vite-plugin-imagemin';

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
    }),
    imagemin({
      verbose: true,
      filter: /\.(jpe?g|png)$/i,
      mozjpeg: {
        quality: 80,
        progressive: true,
        optimize: true,
        fastCrush: true,
      },
      optipng: {
        optimizationLevel: 7,
        bitDepthReduction: true,
        colorTypeReduction: true,
        paletteReduction: true,
      },

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
