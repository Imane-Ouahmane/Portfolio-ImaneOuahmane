import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-ImaneOuahmane/', // This is your repository name on GitHub
  plugins: [
    React(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/index.css";`,
      },
    },
  },

});
