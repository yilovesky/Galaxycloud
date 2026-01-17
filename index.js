const express = require("express");
const app = express();

// 这里的顺序很重要，优先读取平台可能分配的任何端口变量
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

app.get("/", (req, res) => res.send("Alive"));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`STDOUT: SERVER_START_SUCCESS_ON_PORT_${PORT}`);
});

// 每10秒打印一次，确保能在 Runtime Logs 看到它在运行
setInterval(() => {
  console.log(`STDOUT: Heartbeat - Server is still running at ${new Date().toISOString()}`);
}, 10000);
