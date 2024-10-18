/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  assetsInclude: ["/sb-preview/runtime.js"],
  build: {
    outDir: "build", // Change the output directory from 'dist' to 'build'
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
