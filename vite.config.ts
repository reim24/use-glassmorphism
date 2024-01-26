import { resolve } from "path";
import { defineConfig } from "vite";
import dts from 'vite-plugin-dts'
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "react-glassmorphism",

      fileName: "react-glassmorphism",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
  plugins: [
    dts({ include: ["lib"], exclude: ["lib/utils"] })
  ]
});