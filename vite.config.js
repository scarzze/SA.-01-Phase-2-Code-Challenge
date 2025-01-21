import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@styles': '/src/styles',
    },
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx files
  },
  server: {
    port: 5173, // Optional: Customize your dev server port
  },
});
