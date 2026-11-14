// Test helper: stands in for the enquiry webhook and for Resend's email API so the form's
// real delivery paths can be exercised without sending anything to a real inbox.
// Used only by the Playwright suite.
import { createServer } from "node:http";

let last = null;
let lastEmail = null;

function readBody(req) {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", () => resolve(body));
  });
}

const json = (res, status, value) =>
  res.writeHead(status, { "Content-Type": "application/json" }).end(JSON.stringify(value));

createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/hook") {
    last = JSON.parse(await readBody(req));
    return json(res, 200, { ok: true });
  }

  // Resend's POST /emails. A subject containing "__refuse__" simulates Resend rejecting
  // the message, as it does for a sender domain that has not been verified.
  if (req.method === "POST" && req.url === "/emails") {
    const body = JSON.parse(await readBody(req));
    lastEmail = { authorization: req.headers.authorization ?? null, body };
    if (String(body.subject).includes("__refuse__")) {
      return json(res, 403, { name: "validation_error", message: "The domain is not verified." });
    }
    return json(res, 200, { id: "mock-email-id" });
  }

  if (req.url === "/last") return json(res, 200, last);
  if (req.url === "/last-email") return json(res, 200, lastEmail);
  res.writeHead(200).end("ok");
}).listen(4011, "127.0.0.1");
