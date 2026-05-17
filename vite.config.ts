import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import contentCollections from "@content-collections/vite";

export default defineConfig({
  // Reduce terminal noise
  logLevel: "silent",

  plugins: [
    contentCollections(),
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    netlify(),
    tanstackStart(),
    viteReact(),
  ],

  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore harmless unused-import warnings
        if (warning.message.includes("never used")) return;

        // Ignore common dependency noise (optional cleanup)
        if (
          warning.message.includes("external module") ||
          warning.message.includes("imported from external module")
        ) {
          return;
        }

        warn(warning);
      },
    },
  },
});
