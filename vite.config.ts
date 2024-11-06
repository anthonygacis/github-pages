import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode == "development") {
    return {
      plugins: [vue()],
    };
  } else {
    return {
      base: "/github-pages/",
      plugins: [vue()],
    };
  }
});
