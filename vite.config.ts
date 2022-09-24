import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  build: {
    minify: false,

    lib: {
      entry: new URL('src/index.ts', import.meta.url).pathname,
      name: 'uzeLazyRef',
      fileName: 'use-lazy-ref',
    },

    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
