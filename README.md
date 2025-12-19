# 🚀 Advanced Node.js Real-Time Chat Application

This project is a **complete end-to-end Advanced Node.js practice project** designed for:

* **Performance & scalability learning**
* **Real-time system design**
* **Caching & optimization concepts**
* **Academic / NPTEL / interview preparation**

The application demonstrates how a **production-grade Node.js backend** is built using clustering, caching, real-time APIs, and GraphQL.

---

## 📌 Key Features

* Horizontally scalable Node.js server
* Real-time chat using WebSockets
* Server-Sent Events (SSE) for live updates
* GraphQL API with subscriptions
* Redis-based caching & session storage
* In-memory caching with LRU + TTL
* CPU-intensive task handling using worker threads
* Background tasks using child processes
* Production-ready process management using PM2
* Performance profiling & memory monitoring

---

## 🧠 Topics Covered (Mapped to Code)

### 🔹 Performance & Scaling

* **Clustering & Load Balancing** → `cluster.js`
* **Child Processes** → `child/logProcess.js`
* **Worker Threads** → `workers/cpuWorker.js`
* **PM2 Process Manager** → `pm2.config.js`
* **Performance Profiling** → `node --prof`
* **Memory Leak Detection** → `process.memoryUsage()`
* **Event Loop Optimization** → async APIs, worker threads

### 🔹 Caching

* **In-Memory Cache** → `cache/memoryCache.js`
* **Redis Basics** → `cache/redis.js`
* **Cache Strategies** → LRU + TTL
* **Session Storage in Redis** → Redis key-value usage
* **Caching Patterns** → Cache-aside pattern

### 🔹 Real-Time & Advanced APIs

* **WebSockets (Socket.IO)** → `sockets/socket.js`
* **Server-Sent Events (SSE)** → `sse/sse.js`
* **GraphQL (Apollo Server)** → `graphql/schema.js`
* **Resolvers** → `graphql/resolvers.js`
* **DataLoader** → `graphql/dataloader.js`
* **Subscriptions** → GraphQL real-time updates

---

## 📁 Project Structure

```
advanced-node-chat/
│
├── cluster.js              # Node.js clustering
├── server.js               # Main application entry
├── pm2.config.js           # PM2 production config
│
├── cache/
│   ├── memoryCache.js      # In-memory LRU cache
│   └── redis.js            # Redis connection
│
├── workers/
│   └── cpuWorker.js        # Worker threads (CPU tasks)
│
├── child/
│   ├── logProcess.js       # Child process starter
│   └── logger.js           # Background logger
│
├── sockets/
│   └── socket.js           # Socket.IO real-time chat
│
├── sse/
│   └── sse.js              # Server-Sent Events
│
├── graphql/
│   ├── schema.js           # GraphQL schema & server
│   ├── resolvers.js        # GraphQL resolvers
│   └── dataloader.js       # DataLoader batching
│
└── package.json
```

---

## ⚙️ Prerequisites

* **Node.js** (LTS version)
* **npm**
* **Redis** (local or Docker)
* **PM2** (global install)

---

## 🛠️ Setup Instructions

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Start Redis

Using Docker:

```bash
docker run -d -p 6379:6379 redis
```

Or manually:

```bash
redis-server
```

Verify:

```bash
redis-cli ping
```

---

## ▶️ Running the Project

### 🔹 Normal Mode

```bash
node cluster.js
```

### 🔹 Development Mode

```bash
npx nodemon cluster.js
```

### 🔹 Production Mode (PM2)

```bash
pm2 start pm2.config.js
pm2 status
```

---

## 🌐 API & Feature Usage

### 🔌 Health Check

```
GET http://localhost:3000/health
```

---

### 💬 WebSocket Chat

* Uses **Socket.IO**
* Broadcasts messages to all connected clients

---

### 📡 Server-Sent Events (SSE)

```
GET http://localhost:3000/events
```

Provides continuous server updates.

---

### ⚙️ Worker Thread (CPU Task)

```
GET http://localhost:3000/heavy
```

Executes CPU-intensive Fibonacci calculation **without blocking the event loop**.

---

### 📊 GraphQL Playground

```
http://localhost:3000/graphql
```

Example Query:

```graphql
query {
  messages {
    id
    text
  }
}
```

---

## 📈 Performance & Monitoring

### 🔍 Performance Profiling

```bash
node --prof server.js
node --prof-process isolate*.log > output.txt
```

### 🧠 Memory Monitoring

Memory usage is logged periodically using:

```js
process.memoryUsage()
```

Helps detect memory leaks.

---

## 🧪 Caching Strategy Explained

### Cache-Aside Pattern

1. Check cache (Redis / memory)
2. If found → return data
3. If not found → fetch data
4. Store in cache with TTL

This ensures:

* Fast response
* Reduced DB load
* Controlled memory usage

---

## 🏭 PM2 Production Features

* Automatic restarts
* Multi-core clustering
* Log management
* CPU & memory monitoring
---

## ✅ Learning Outcomes

* Understand Node.js event loop & performance
* Build real-time systems
* Apply caching strategies correctly
* Use Redis effectively
* Design scalable backend architecture

---

## 📌 Future Improvements

* Authentication & authorization
* Persistent database integration
* Horizontal scaling with multiple servers
* Monitoring using Prometheus & Grafana


