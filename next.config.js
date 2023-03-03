const withPWA = require("next-pwa");
module.exports = withPWA({
  reactStrictMode: true,
  distDir: 'build',
  images: {
    unoptimized: true,
    domains: ["assets.stickpng.com", "i.imgur.com"],
  },
});
