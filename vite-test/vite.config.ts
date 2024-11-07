import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    solidPlugin({
      solid: {
        moduleName: "@cuberqaq/asuka-solid",
        generate: "universal",
      },
    }),
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      
    }
  }
});
