import { z } from "zod";

export const formSchema = z.object({
	nombre: z.string().min(5, { message: "El nombre debe tener al menos 5 caracteres." }),

	email: z
		.string({ required_error: "El email es obligatorio." })
		.email({ message: "El email ingresado no es válido." }),

	tipoProyecto: z.enum(["web", "movil", "desktop", "otro"], {
		errorMap: () => ({ message: "Por favor selecciona un tipo de proyecto." }),
	}),

	detalles: z.string().min(10, { message: "Por favor proporciona más detalles sobre tu proyecto." }),
});

export type FormData = z.infer<typeof formSchema>;
