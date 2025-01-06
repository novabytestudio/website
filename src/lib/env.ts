import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_SERVICE_ID: z.string().min(1),
		NEXT_PUBLIC_TEMPLATE_ID: z.string().min(1),
		NEXT_PUBLIC_PUBLIC_KEY: z.string().min(1),
	},
	runtimeEnv: {
		NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
		NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
		NEXT_PUBLIC_PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY,
	},
});
