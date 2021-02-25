/* eslint-disable no-undef */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

// eslint-disable-next-line no-undef
module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});
  