import express from "express";
import http from "http";
import path from "path";
import { initSocket } from "./sockets/socket.js";

const app = express();
const server = http.createServer(app);

// Initialize Socket.io
initSocket(server);

// Serve static frontend
app.use(express.static(path.join(process.cwd(), "public")));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
