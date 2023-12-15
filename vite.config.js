import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()], base: "/",
  build: {
    rollupOptions: {
      output: {
        // Especifica manualmente cómo dividir los módulos en fragmentos
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Agrupa los módulos de node_modules en un solo fragmento
            return "vendor";
          }
        },
      },
    },
  },
})
