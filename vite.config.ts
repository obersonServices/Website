import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: '/', // Updated to absolute root to support BrowserRouter nested path asset resolution

    plugins: [react()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      }
    },

    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false
    },

    server: {
      port: 3000,
      host: '0.0.0.0',
    }
  };
});