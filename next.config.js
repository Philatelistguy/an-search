const withPWA = require("next-pwa");
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["assets.stickpng.com", "i.imgur.com"],
  },
});
