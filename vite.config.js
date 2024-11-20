import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '',
  plugins: [react({ jsxRuntime: 'classic' })],
  server: {
    open: true,
    port: 3000
  },
  resolve: {
    alias: {
      src: '/src'
    }
  }
})
