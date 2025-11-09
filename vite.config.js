import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// 🧩 Needed because __dirname is not defined in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/Components"),
      "@pages": path.resolve(__dirname, "./src/Pages"),
      "@ui": path.resolve(__dirname, "./src/UI"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
