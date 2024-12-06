import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ServiceShowcase = () => {
	const [showAllServices, setShowAllServices] = useState(false);

	const services = [
		{
			title: "Sistema de Gestión Empresarial",
			description: "Plataforma integral para optimizar procesos y aumentar la productividad.",
			color: "from-blue-400/60 to-blue-400/80",
		},
		{
			title: "App de Comercio Electrónico",
			description: "Solución móvil para impulsar ventas y mejorar la experiencia del cliente.",
			color: "from-indigo-400/60 to-indigo-400/80",
		},
		{
			title: "Plataforma de Análisis de Datos",
			description: "Herramienta avanzada para visualización y análisis de big data.",
			color: "from-emerald-400/60 to-emerald-400/80",
		},
		{
			title: "Sistema de Gestión de Recursos Humanos",
			description: "Solución completa para administrar el talento y los procesos de RRHH.",
			color: "from-red-400/60 to-red-400/80",
		},
		{
			title: "Plataforma de Aprendizaje en Línea",
			description: "Sistema de e-learning personalizado para empresas y instituciones educativas.",
			color: "from-yellow-400/60 to-yellow-400/80",
		},
		{
			title: "Sistema de Gestión de Proyectos",
			description: "Herramienta colaborativa para planificar, ejecutar y monitorear proyectos.",
			color: "from-purple-400/60 to-purple-400/80",
		},
	];

	return (
		<>
			<section
				id="services"
				className="w-full z-20 py-24 min-h-screen text-white flex items-center justify-center px-4"
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="container z-20 mx-auto px-4"
				>
					<motion.h2
						className="text-3xl md:text-4xl font-bold mb-12 text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Servicios Destacados
					</motion.h2>
					<AnimatePresence>
						<motion.div
							className="grid grid-cols-1 md:grid-cols-3 gap-8"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							{(showAllServices ? services : services.slice(0, 3)).map((service, index) => (
								<motion.div
									key={index}
									className={`rounded-lg p-6 bg-gradient-to-br ${service.color} shadow-lg cursor-pointer`}
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
									whileHover={{
										scale: 1.05,
										boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
									}}
									whileTap={{ scale: 0.95 }}
								>
									<motion.h3 className="text-xl font-semibold mb-3" initial={{ y: 0 }} whileHover={{ y: -5 }}>
										{service.title}
									</motion.h3>
									<p className="text-gray-200 mb-4">{service.description}</p>
									<motion.a
										href="#"
										className="inline-flex items-center text-white hover:underline"
										whileHover={{ x: 5 }}
										transition={{ type: "spring", stiffness: 400, damping: 10 }}
									>
										Saber más <ArrowRight className="ml-2 h-4 w-4" />
									</motion.a>
								</motion.div>
							))}
						</motion.div>
					</AnimatePresence>
					<motion.div
						className="text-center mt-12"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.8 }}
					>
						<motion.button
							className="bg-gradient-to-b from-purple-400/60 to-purple-400/80 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
							whileHover={{
								scale: 1.05,
								boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)",
							}}
							whileTap={{ scale: 0.95 }}
							onClick={() => setShowAllServices(!showAllServices)}
						>
							{showAllServices ? "Ver Menos Servicios" : "Ver Todos los Servicios"}
						</motion.button>
					</motion.div>
				</motion.div>
			</section>
		</>
	);
};
