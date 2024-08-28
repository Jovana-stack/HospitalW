import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 3000, // Adjust the limit to suppress warnings
  },
});
