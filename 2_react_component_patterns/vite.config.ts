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
        "@context": `${path.resolve(__dirname, "./src/context/")}`,
        "@layouts": `${path.resolve(__dirname, "./src/layouts/")}`,
        "@modules": `${path.resolve(__dirname, "./src/modules/")}`,
        "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
        "@router": `${path.resolve(__dirname, "./src/router/")}`,
        "@shared": `${path.resolve(__dirname, "./src/shared/")}`,
        "@store": `${path.resolve(__dirname, "./src/store/")}`,
        "@theme": `${path.resolve(__dirname, "./src/theme/")}`,
      }
    },
  };
});



