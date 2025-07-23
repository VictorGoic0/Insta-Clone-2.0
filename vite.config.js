import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// replace export
export default defineConfig({
	server: {
		port: 3000,
		open: true,
	},
	test: {
		environment: "happy-dom",
	},
	coverage: {
		reporter: ["text", "json", "html"],
	},
	plugins: [TanStackRouterVite(), react()],
});
