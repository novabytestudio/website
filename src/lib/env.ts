import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		SERVICE_ID: z.string().min(1),
		TEMPLATE_ID: z.string().min(1),
		PUBLIC_KEY: z.string().min(1),
	},
	runtimeEnv: {
		SERVICE_ID: import.meta.env.SERVICE_ID,
		TEMPLATE_ID: import.meta.env.TEMPLATE_ID,
		PUBLIC_KEY: import.meta.env.PUBLIC_KEY,
	},
});
