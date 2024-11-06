import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ServiceShowcase = () => {
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
	];

	return (
		<>
			<svg className="absolute top-0 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
			</svg>
			<section
				id="services"
				className="w-full z-20 py-5 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center"
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
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{services.map((service, index) => (
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
					</div>
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
						>
							Ver Todos los Servicios
						</motion.button>
					</motion.div>
				</motion.div>
			</section>
			<svg className="absolute z-10 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
			</svg>
		</>
	);
};
