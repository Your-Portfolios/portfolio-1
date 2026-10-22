import { defineConfig } from "@playwright/test";
import config from "./playwright.config";

export default defineConfig({
  ...config,
  use: { ...config.use, baseURL: "http://127.0.0.1:3201" },
  webServer: {
    command: "node node_modules/next/dist/bin/next dev --hostname 127.0.0.1 --port 3201",
    url: "http://127.0.0.1:3201",
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
