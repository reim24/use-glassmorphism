import { resolve } from "path";
import { defineConfig } from "vite";
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "use-glassmorphism",

      fileName: "use-glassmorphism",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
  plugins: [
    dts({ include: ["lib"], exclude: ["lib/utils"] }),
    react()
  ]
});