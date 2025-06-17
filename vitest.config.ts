import { defineConfig } from "vitest/config";
import { fileURLToPath } from "url";

const CI = process.env.CI === "true";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    reporters: CI ? [["default", { summary: false }]] : ["verbose"],
  },
  resolve: {
    alias: {
      "lucide-react/icons": fileURLToPath(
        new URL("./node_modules/lucide-react/dist/esm/icons", import.meta.url)
      ),
    },
  },
});
