import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        large: resolve(__dirname, "src/largeDog/index.html"),
        small: resolve(__dirname, "src/smallDog/index.html"),
        adoption: resolve(__dirname, "src/adopt/index.html"),
        success: resolve(__dirname, "src/success/index.html"),
        individual: resolve(__dirname, "src/dog/index.html"),
        records: resolve(__dirname,"src/records/index.html")
      },
    },
  }
});