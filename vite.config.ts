import { defineConfig } from "vite";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@wheel": path.resolve(__dirname, "src/wheel"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@game": path.resolve(__dirname, "src/game"),
      "@particles": path.resolve(__dirname, "src/particles"),
      "@audio": path.resolve(__dirname, "src/audio"),
      "@services": path.resolve(__dirname, "src/services"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
