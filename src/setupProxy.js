const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://crud-url-shortner.herokuapp.com/',
      changeOrigin: true,
    })
  );
};