import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// replace export
export default defineConfig({
  test: {
    environment: "happy-dom",
  },
  coverage: {
    reporter: ["text", "json", "html"],
  },
  plugins: [TanStackRouterVite(), react()],
});
