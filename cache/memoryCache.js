// cache/memoryCache.js
import LRU from "lru-cache";

export const memoryCache = new LRU({
  max: 100,
  ttl: 1000 * 60
});
