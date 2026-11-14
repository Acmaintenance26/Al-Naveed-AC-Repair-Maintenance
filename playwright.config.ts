import { defineConfig } from "@playwright/test";

const PORT = 3100;
const EMAIL_PORT = 3101;

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
    {
      // A second server of the same build with the email path enabled instead of the
      // webhook, pointed at the mock Resend endpoint. Starts after the build above.
      command: `npm run start -- -p ${EMAIL_PORT}`,
      url: `http://localhost:${EMAIL_PORT}`,
      reuseExistingServer: true,
      timeout: 60_000,
      env: {
        ENQUIRY_WEBHOOK_URL: "",
        RESEND_API_KEY: "re_test_key_not_real",
        RESEND_API_URL: "http://127.0.0.1:4011/emails",
        ANTHROPIC_API_KEY: "",
      },
    },
  ],
});
