import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { z } from "zod";
//
import { formSchema } from "@/src/lib/schema";
import type { FormData } from "@/src/lib/schema";

export const NewProyect = () => {
	const [formData, setFormData] = useState<FormData>({
		nombre: "",
		email: "",
		tipoProyecto: "" as FormData["tipoProyecto"],
		detalles: "",
	});
	const [errors, setErrors] = useState<Partial<FormData>>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
		setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			formSchema.parse(formData);
			console.log("Datos del formulario:", formData);
			// # Pending
			setFormData({ nombre: "", email: "", tipoProyecto: "" as FormData["tipoProyecto"], detalles: "" });
		} catch (error) {
			if (error instanceof z.ZodError) {
				setErrors(error.formErrors.fieldErrors);
			}
		}
	};

	return (
		<>
			{/* <svg className="absolute top-0 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<defs>
					<linearGradient id="heroGradient" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor="#111827" />
						<stop offset="100%" stopColor="#1f2937" />
					</linearGradient>
				</defs>
				<path
					fill="url(#heroGradient)"
					fillOpacity="1"
					d="M0,96L0,256L102.9,256L102.9,32L205.7,32L205.7,192L308.6,192L308.6,256L411.4,256L411.4,224L514.3,224L514.3,32L617.1,32L617.1,192L720,192L720,128L822.9,128L822.9,192L925.7,192L925.7,32L1028.6,32L1028.6,128L1131.4,128L1131.4,160L1234.3,160L1234.3,256L1337.1,256L1337.1,160L1440,160L1440,0L1337.1,0L1337.1,0L1234.3,0L1234.3,0L1131.4,0L1131.4,0L1028.6,0L1028.6,0L925.7,0L925.7,0L822.9,0L822.9,0L720,0L720,0L617.1,0L617.1,0L514.3,0L514.3,0L411.4,0L411.4,0L308.6,0L308.6,0L205.7,0L205.7,0L102.9,0L102.9,0L0,0L0,0Z"
				></path>
			</svg> */}
			<section className="w-full z-20 min-h-screen text-white p-6">
				<div className="container mx-auto max-w-xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="bg-gray-800 z-20 p-8 rounded-lg shadow-xl"
					>
						<Link to="/" className="flex items-center text-blue-400 hover:text-blue-300 mb-6 transition duration-300">
							<ArrowLeft className="mr-2" />
							Volver al inicio
						</Link>
						<h2 className="text-3xl font-bold mb-6 text-center">Inicia tu Proyecto</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="nombre" className="block text-sm font-medium mb-2">
									Nombre
								</label>
								<input
									type="text"
									id="nombre"
									name="nombre"
									value={formData.nombre}
									onChange={handleChange}
									placeholder={errors.nombre || "Ingresa tu nombre"}
									className={`w-full px-3 py-2 bg-gray-700 rounded-md text-white ${
										errors.nombre ? "placeholder-red-300" : "placeholder-gray-400"
									}`}
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder={errors.email || "Ingresa tu email"}
									className={`w-full px-3 py-2 bg-gray-700 rounded-md text-white ${
										errors.email ? "placeholder-red-300" : "placeholder-gray-400"
									}`}
								/>
							</div>
							<div>
								<label htmlFor="tipoProyecto" className="block text-sm font-medium mb-2">
									Tipo de Proyecto
								</label>
								<select
									id="tipoProyecto"
									name="tipoProyecto"
									value={formData.tipoProyecto}
									onChange={handleChange}
									className={`w-full px-3 py-2 bg-gray-700 rounded-md text-white ${
										errors.tipoProyecto ? "placeholder-red-300" : "placeholder-gray-400"
									}`}
								>
									<option value="">{errors.tipoProyecto || "Selecciona un tipo"}</option>
									<option value="web">Desarrollo Web</option>
									<option value="movil">Aplicación Móvil</option>
									<option value="desktop">Aplicación de Escritorio</option>
									<option value="otro">Otro</option>
								</select>
							</div>
							<div>
								<label htmlFor="detalles" className="block text-sm font-medium mb-2">
									Detalles del Proyecto
								</label>
								<textarea
									id="detalles"
									name="detalles"
									value={formData.detalles}
									onChange={handleChange}
									placeholder={errors.detalles || "Escribe los detalles del proyecto"}
									rows={4}
									className={`w-full px-3 py-2 bg-gray-700 rounded-md text-white ${
										errors.detalles ? "placeholder-red-300" : "placeholder-gray-400"
									}`}
								></textarea>
							</div>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								type="submit"
								className="w-full bg-blue-400/60 hover:bg-blue-400/80 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
							>
								<Send className="mr-2" />
								Enviar Proyecto
							</motion.button>
						</form>
					</motion.div>
				</div>
			</section>
			{/* <svg className="absolute z-10 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<defs>
					<linearGradient id="heroGradient" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stop-color="#111827" />
						<stop offset="100%" stop-color="#1f2937" />
					</linearGradient>
				</defs>
				<path
					fill="url(#heroGradient)"
					fill-opacity="1"
					d="M0,96L0,256L102.9,256L102.9,32L205.7,32L205.7,192L308.6,192L308.6,256L411.4,256L411.4,224L514.3,224L514.3,32L617.1,32L617.1,192L720,192L720,128L822.9,128L822.9,192L925.7,192L925.7,32L1028.6,32L1028.6,128L1131.4,128L1131.4,160L1234.3,160L1234.3,256L1337.1,256L1337.1,160L1440,160L1440,320L1337.1,320L1337.1,320L1234.3,320L1234.3,320L1131.4,320L1131.4,320L1028.6,320L1028.6,320L925.7,320L925.7,320L822.9,320L822.9,320L720,320L720,320L617.1,320L617.1,320L514.3,320L514.3,320L411.4,320L411.4,320L308.6,320L308.6,320L205.7,320L205.7,320L102.9,320L102.9,320L0,320L0,320Z"
				></path>
			</svg> */}
		</>
	);
};
