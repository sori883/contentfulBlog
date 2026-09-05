import { defineConfig } from "playwright/test";

export default defineConfig({
  testDir: "./tests/write-dev",
  reporter: "list",
  use: { baseURL: "http://127.0.0.1:5175" },
  webServer: {
    command: "pnpm dev --host 127.0.0.1 --port 5175 --strictPort",
    url: "http://127.0.0.1:5175/write",
    reuseExistingServer: false,
  },
});
