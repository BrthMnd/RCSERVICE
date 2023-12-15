import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'rc-vel.onrender.com',
    port: 443,
    https: true,
  },
  plugins: [react()],
})
