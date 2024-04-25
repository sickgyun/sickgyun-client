import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['/sb-preview/runtime.js'],
  define: {
    'process.env': {},
  },
});
