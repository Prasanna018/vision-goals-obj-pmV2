import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 
// https://vite.dev/config/
// SERVER START ON PORT 3000 //
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
