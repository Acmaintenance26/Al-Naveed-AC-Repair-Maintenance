// Test helper: stands in for the enquiry webhook so the form's real delivery path can be
// exercised without sending anything to a real inbox. Used only by the Playwright suite.
import { createServer } from "node:http";

let last = null;
createServer((req, res) => {
  if (req.method === "POST" && req.url === "/hook") {
    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", () => {
      last = JSON.parse(body);
      res.writeHead(200, { "Content-Type": "application/json" }).end('{"ok":true}');
    });
    return;
  }
  if (req.url === "/last") {
    return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(last));
  }
  res.writeHead(200).end("ok");
}).listen(4011, "127.0.0.1");
