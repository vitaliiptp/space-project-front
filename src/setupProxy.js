const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(createProxyMiddleware("/api/*", { target: "https://space-project-back.herokuapp.com/" }));
};