import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '',
  // plugins: [react(), viteTsconfigPaths()],
  plugins: [react({ jsxRuntime: 'classic' })],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000
  },
  resolve: {
    alias: {
      src: '/src'
    }
  }
})
