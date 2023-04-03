import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "finalProjectWDD330/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "finalProjectWDD330/views/index.html")
      },
    },
  }
});