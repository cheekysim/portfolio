import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3005,
    strictPort: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
});
