// sse/sse.js
export function initSSE(app) {
  app.get("/events", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");

    setInterval(() => {
      res.write(`data: ${Date.now()}\n\n`);
    }, 3000);
  });
}
