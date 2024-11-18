module.exports = {
  expo: {
    name: "client",
    slug: "client",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#355725"
    },
    scheme: "learntaino",
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#355725"
      }
    },
    web: {
      favicon: "./assets/favicon.png",
      bundler: "metro",
      output: "static",
      pwa: {
        serviceWorkerPath: "dist/sw.js",
        manifest: "public/manifest.json"
      }
    },
    extra: {
      backendUrl: "http://localhost:8000"
    },
    plugins: ["expo-router", "expo-font"]
  }
}
