import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 3000,
    host: 'localhost', // Ensure it's running on localhost correctly
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src', // Optional aliasing
    },
  },
});
