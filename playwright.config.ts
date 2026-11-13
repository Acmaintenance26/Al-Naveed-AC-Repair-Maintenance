import { defineConfig } from "@playwright/test";

const PORT = 3100;

export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  workers: 3,
  retries: 0,
  reporter: [["list"]],
  timeout: 45_000,
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "off",
    screenshot: "only-on-failure",
  },
  webServer: [
    {
      command: "node scripts/mock-webhook.mjs",
      url: "http://127.0.0.1:4011/",
      reuseExistingServer: true,
    },
    {
      // Tests run against the production build, with draft articles visible and form
      // submissions sent to the local mock webhook.
      command: `npm run build && npm run start -- -p ${PORT}`,
      url: `http://localhost:${PORT}`,
      reuseExistingServer: true,
      timeout: 240_000,
      env: {
        SHOW_DRAFT_POSTS: "true",
        ENQUIRY_WEBHOOK_URL: "http://127.0.0.1:4011/hook",
        ANTHROPIC_API_KEY: "",
      },
    },
  ],
});
