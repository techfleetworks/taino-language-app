module.exports = {
  globDirectory: "dist/", // or "build/" depending on your Expo output directory
  globPatterns: [
    "**/*.{js,css,html,png,jpg,jpeg,gif,svg,ico,json,woff,woff2,eot,ttf,otf}"
  ],
  swDest: "public/sw.js",
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/
  ],
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [{
    urlPattern: /^https:\/\/.*\.(png|jpg|jpeg|gif|svg)$/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'images',
      expiration: {
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      }
    }
  }, {
    urlPattern: /^https:\/\/.*\.(js|css)$/,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'static-resources',
      expiration: {
        maxEntries: 60,
        maxAgeSeconds: 24 * 60 * 60 // 24 hours
      }
    }
  }]
};
