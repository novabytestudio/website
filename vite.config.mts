import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
		define: {
			"process.env": env,
		},

		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./"),
			},
		},

		css: {
			preprocessorOptions: {
				scss: {
					api: "modern",
				},
			},
		},

		plugins: [react()],
	};
});
