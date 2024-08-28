import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 3000, // Adjust the limit to suppress warnings
    rollupOptions: {
        external: ['react', 'react-dom'], // Add other external dependencies if needed
      },  
},
});
