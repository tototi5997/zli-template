import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    open: true,
  },
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/icons")],
      symbolId: "[name]",
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "components",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ],
  },
})
