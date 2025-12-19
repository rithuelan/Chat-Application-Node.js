// workers/cpuWorker.js
import { Worker } from "worker_threads";

export function runWorker(num) {
  return new Promise((resolve) => {
    const worker = new Worker(`
      const { parentPort } = require("worker_threads");
      function fib(n){ return n<=1?n:fib(n-1)+fib(n-2); }
      parentPort.postMessage(fib(${num}));
    `, { eval: true });

    worker.on("message", resolve);
  });
}
