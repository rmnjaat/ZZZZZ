import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This will allow the server to be accessible from other devices on the same network
    port: 5173, // Optional: you can change the port number if needed
  }
})
