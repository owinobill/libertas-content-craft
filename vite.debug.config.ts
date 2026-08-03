import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  define: { "process.env.NODE_ENV": '"development"' },
  build: { minify: false },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
