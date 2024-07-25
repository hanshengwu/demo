module.exports.handler = async (event, context) => {
  const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 创建代理中间件
const apiProxy = createProxyMiddleware('/queryDoc', {
  target: 'https://cfws.samr.gov.cn',
  changeOrigin: true, // 设置为 true，以便正确修改请求头中的 Host
  secure: false, // 忽略证书中的主机名检查（仅用于测试，不建议在生产环境中使用）
});

// 将代理中间件挂载到 Express 应用上
app.use(apiProxy);

const port = 8091;
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});


}


