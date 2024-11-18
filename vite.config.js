import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

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
  }
  // resolve: {
  //   alias: {
  //     'react/jsx-dev-runtime.js': resolve(__dirname, 'node_modules/react/jsx-dev-runtime.js'),
  //     'react/jsx-runtime.js': resolve(__dirname, 'node_modules/react/jsx-runtime.js')
  //   }
  // }
})
