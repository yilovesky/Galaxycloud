const express = require("express");
const app = express();

// 1. 自动侦测：尝试所有可能的平台端口变量
const PORT = process.env.PORT || process.env.SERVER_PORT || process.env.VCAP_APP_PORT || 3000;

app.get("/", (req, res) => {
    res.send({
        status: "Online",
        detected_port: PORT,
        env_port: process.env.PORT || "Not Set"
    });
});

// 2. 打印所有环境变量（仅用于排查，一旦跑通建议删除）
console.log("--- System Environment Variables ---");
console.log(JSON.stringify(process.env, null, 2));
console.log("------------------------------------");

// 3. 启动监听
const server = app.listen(PORT, "0.0.0.0", () => {
    const actualPort = server.address().port;
    console.log(`\n\n>>> 🚀 SERVER START SUCCESS <<<`);
    console.log(`>>> Targeted Port: ${PORT}`);
    console.log(`>>> Actual Listening Port: ${actualPort}`);
    console.log(`>>> Current Time: ${new Date().toLocaleString()}`);
    console.log(`>>> Waiting for platform health check...\n\n`);
});

// 4. 每 5 秒强制输出一次日志，防止日志缓冲区卡住
setInterval(() => {
    process.stdout.write(`[HEARTBEAT] Server is alive on port ${PORT} - ${new Date().toLocaleTimeString()}\n`);
}, 5000);
