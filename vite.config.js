import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        large: resolve(__dirname, "src/large-dog.html"),
        small: resolve(__dirname, "src/small-dog.html"),
        adoption: resolve(__dirname, "src/adopt/index.html"),
        success: resolve(__dirname, "src/success.html"),
        individual: resolve(__dirname, "src/dog/index.html")
      },
    },
  }
});