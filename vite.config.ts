import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueI18n()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "../public",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/modules/app/assets/styles/custom.scss";`,
      },
      less: {
        modifyVars: {
          // "primary-color": "#1DA57A",
        },
        javascriptEnabled: true,
      },
    },
  },
});
