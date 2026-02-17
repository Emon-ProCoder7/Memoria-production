import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        portfolio: path.resolve(__dirname, 'memoria/portfolio.html'),
        about: path.resolve(__dirname, 'memoria/about.html'),
        contact: path.resolve(__dirname, 'memoria/contact.html'),
        video: path.resolve(__dirname, 'memoria/video-showcase.html'),
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    allowedHosts: true,
  }
});
