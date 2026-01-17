const express = require("express");
const app = express();

// 强制指定 3000，不给平台任何误判机会
const PORT = 3000;

// 捕获未处理的异常，防止程序悄无声息地挂掉
process.on('uncaughtException', (err) => {
    console.log(`[FATAL ERROR] ${err.stack || err.message}`);
});

console.log(">>> [INIT] Program starting...");

app.get("/", (req, res) => {
    res.status(200).send("OK-3000-READY");
});

// 核心：监听所有网卡 0.0.0.0
const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`>>> [SUCCESS] Server is now listening on PORT: ${PORT}`);
    console.log(">>> [INFO] Waiting for Galaxy health check...");
});

// 延迟 3 秒打印一次状态，确保日志流能被平台捕获
setTimeout(() => {
    console.log(">>> [ALIVE] If you see this, the process has not crashed.");
}, 3000);
