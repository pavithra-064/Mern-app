const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://url-shortner-mern.herokuapp.com/',
      changeOrigin: true,
    })
  );
};