import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from 'path';

// vite-plugin-pwa config ->
import { VitePWA } from "vite-plugin-pwa";
import manifest from "./manifest.json";

// vite-tsconfig-paths ->
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      manifest,
      includeAssets: [
        "/images/logo_svg.svg",
        "/images/logo_ico.ico",
        "robots.txt",
        "/images/apple-touch-icon.png",
      ],
      // Switch to "true" to enable sw on development ->
      devOptions: {
        enabled: false,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html}", "**/*.{svg,png,jpg,gif}"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
