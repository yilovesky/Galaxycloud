const express = require("express");
const app = express();
const os = require('os');

// 获取环境变量端口，Galaxy 平台必须监听这个端口
const PORT = process.env.PORT || 3000;

// 根路由：返回简单的系统信息，证明程序跑通了
app.get("/", (req, res) => {
  res.send({
    status: "Running",
    message: "Congratulations! Node.js is working on this platform.",
    timestamp: new Date().toISOString(),
    arch: os.arch(),
    platform: os.platform(),
    tmp_writable: require('fs').existsSync('/tmp') ? "Yes" : "No"
  });
});

// 监听端口
app.listen(PORT, () => {
  console.log(`Test server is successfully running on port: ${PORT}`);
});
