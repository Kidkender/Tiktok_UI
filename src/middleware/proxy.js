import createProxyMiddleware from "http-proxy-middleware";

module.exports = (app) => {
  app.use(createProxyMiddleware("/api/users/search"), {
    target: "https://tiktok.fullstack.edu.vn",
    changeOrigin: true,
  });
};
