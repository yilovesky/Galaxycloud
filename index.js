const express = require("express");
const app = express();

// 强制监听 8080，很多云平台默认找 8080
const PORT = process.env.PORT || 8080;

console.log("LOG_START: Initializing...");

app.get("/", (req, res) => {
  res.send("HEALTH_CHECK_OK");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("LOG_SUCCESS: Server is up on port " + PORT);
});

// 如果 5 秒后还没报错，说明进程稳住了
setTimeout(() => {
  console.log("LOG_STILL_ALIVE: No crash after 5 seconds");
}, 5000);
