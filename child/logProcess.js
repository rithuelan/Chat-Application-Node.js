// child/logger.js
process.on("message", (msg) => {
  console.log("Child log:", msg);
});
