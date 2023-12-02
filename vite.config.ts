import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import ViteSvgPlugin from 'vite-plugin-svg';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteSvgPlugin()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
})
