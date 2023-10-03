import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import path from "path";

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === "development";

  return {
    plugins: [react()],
    css: {
      modules: {
        generateScopedName: isDevelopment ? "[name]__[local]__[hash:base64:5]" : "[hash:base64:5]",
      },
    },
    resolve: {
      alias: {
        "@components": `${path.resolve(__dirname, "./src/components/")}`,
        "@common": `${path.resolve(__dirname, "./src/common/")}`,
        "@layouts": `${path.resolve(__dirname, "./src/layouts/")}`,
        "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
        "@router": `${path.resolve(__dirname, "./src/router/")}`,
      }
    },
  };
});



