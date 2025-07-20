import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**'],
    },
    // Add these settings for better stability
    hmr: {
      overlay: false, // Disable error overlay that can cause freezes
    },
    // Increase timeout for external resources
    proxy: {
      '/api': {
        target: 'https://leetcode-api-pied.vercel.app',
        changeOrigin: true,
        timeout: 10000,
      }
    }
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  // Add build optimizations
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
