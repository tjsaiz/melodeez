import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {frontPort} from '../backend/ports.js'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: frontPort,
  }
})
