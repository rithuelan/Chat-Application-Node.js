// sockets/socket.js
import { Server } from "socket.io";

let io;

export function initSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "*", // For development, restrict in production
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Receive message from client
    socket.on("chat message", (msg) => {
      console.log("Message:", msg);

      // Broadcast to all connected users
      io.emit("chat message", { id: socket.id, text: msg });
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
}

export function getIO() {
  if (!io) throw new Error("Socket.io not initialized!");
  return io;
}
