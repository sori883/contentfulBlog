import { defineConfig } from "playwright/test";

export default defineConfig({ testDir: "./tests/write", reporter: "list" });
