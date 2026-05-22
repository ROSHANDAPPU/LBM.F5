import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/LBM.F5/", // Updated base path for GitHub Pages
  build: {
    outDir: "dist",
  },
  publicDir: "Public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
