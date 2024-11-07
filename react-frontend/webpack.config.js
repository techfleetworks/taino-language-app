const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Add the PWA plugin
  config.plugins.push(
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB
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
    })
  );

  return config;
};
