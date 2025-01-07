import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BadgeInfoIcon, X } from "lucide-react";

interface Service {
	title: string;
	description: string;
	color: string;
	detailedDescription: string;
	features: string[];
	demoImage: string;
}

const services: Service[] = [
	{
		title: "Sistema de Gestión Empresarial",
		description: "Plataforma integral para optimizar procesos y aumentar la productividad.",
		color: "from-[#2F3645] to-[#1c1c1c]",
		detailedDescription:
			"Nuestro Sistema de Gestión Empresarial es una solución completa que integra todas las áreas de su empresa. Desde finanzas hasta recursos humanos, pasando por inventario y relaciones con clientes, nuestra plataforma ofrece una visión unificada de su negocio.",
		features: [
			"Módulos integrados para finanzas, RRHH, inventario y CRM",
			"Reportes en tiempo real y análisis predictivo",
			"Interfaz intuitiva y personalizable",
			"Acceso seguro desde cualquier dispositivo",
		],
		demoImage: "/placeholder.svg?height=300&width=400&text=Dashboard+de+Gestión+Empresarial",
	},
	{
		title: "App de Comercio Electrónico",
		description: "Solución móvil para impulsar ventas y mejorar la experiencia del cliente.",
		color: "from-[#2F3645] to-[#1c1c1c]",
		detailedDescription:
			"Nuestra aplicación de comercio electrónico está diseñada para ofrecer una experiencia de compra fluida y atractiva. Con funciones avanzadas de personalización y análisis de comportamiento del usuario, ayudamos a aumentar las conversiones y la fidelidad del cliente.",
		features: [
			"Diseño responsive y optimizado para móviles",
			"Integración con múltiples pasarelas de pago",
			"Sistema de recomendaciones basado en IA",
			"Gestión de inventario en tiempo real",
		],
		demoImage: "/placeholder.svg?height=300&width=400&text=App+Móvil+de+E-commerce",
	},
	{
		title: "Plataforma de Análisis de Datos",
		description: "Herramienta avanzada para visualización y análisis de big data.",
		color: "from-[#2F3645] to-[#1c1c1c]",
		detailedDescription:
			"Nuestra plataforma de análisis de datos transforma grandes volúmenes de información en insights accionables. Con capacidades de machine learning y visualizaciones interactivas, permitimos a las empresas tomar decisiones basadas en datos de manera rápida y efectiva.",
		features: [
			"Integración con múltiples fuentes de datos",
			"Visualizaciones interactivas y personalizables",
			"Modelos predictivos y prescriptivos",
			"Alertas y monitoreo en tiempo real",
		],
		demoImage: "/placeholder.svg?height=300&width=400&text=Dashboard+de+Análisis+de+Datos",
	},
	{
		title: "Sistema de Gestión de Recursos Humanos",
		description: "Solución completa para administrar el talento y los procesos de RRHH.",
		color: "from-[#2F3645] to-[#1c1c1c]",
		detailedDescription:
			"Nuestro sistema de RRHH simplifica y automatiza los procesos de gestión de personal, desde la contratación hasta el desarrollo profesional. Con herramientas para evaluación de desempeño, gestión de nómina y planificación de carrera, ayudamos a optimizar el capital humano de su empresa.",
		features: [
			"Gestión de reclutamiento y onboarding",
			"Evaluaciones de desempeño automatizadas",
			"Sistema de gestión de nómina integrado",
			"Portal de autoservicio para empleados",
		],
		demoImage: "/placeholder.svg?height=300&width=400&text=Portal+de+RRHH",
	},
	{
		title: "Plataforma de Aprendizaje en Línea",
		description: "Sistema de e-learning personalizado para empresas e instituciones educativas.",
		color: "from-[#2F3645] to-[#1c1c1c]",
		detailedDescription:
			"Nuestra plataforma de e-learning ofrece una experiencia educativa inmersiva y personalizada. Con herramientas de creación de contenido, seguimiento de progreso y análisis de aprendizaje, facilitamos la formación continua y el desarrollo de habilidades en cualquier organización.",
		features: [
			"Creación y gestión de cursos interactivos",
			"Seguimiento de progreso y analíticas de aprendizaje",
			"Integración con videoconferencias y foros de discusión",
			"Certificaciones y gamificación",
		],
		demoImage: "/placeholder.svg?height=300&width=400&text=Plataforma+de+E-learning",
	},
	{
		title: "Sistema de Gestión de Proyectos",
		description: "Herramienta colaborativa para planificar, ejecutar y monitorear proyectos.",
		color: "from-[#2F3645] to-[#1c1c1c]",
		detailedDescription:
			"Nuestro sistema de gestión de proyectos proporciona una visión clara y control total sobre todos los aspectos de sus proyectos. Con funciones de planificación, asignación de tareas, seguimiento de tiempo y generación de informes, garantizamos que sus proyectos se entreguen a tiempo y dentro del presupuesto.",
		features: [
			"Diagramas de Gantt y planificación de recursos",
			"Colaboración en tiempo real y gestión de documentos",
			"Seguimiento de tiempo y costos",
			"Paneles personalizables y reportes avanzados",
		],
		demoImage: "/placeholder.svg?height=300&width=400&text=Gestión+de+Proyectos",
	},
];

export const ServiceShowcase = () => {
	const [showAllServices, setShowAllServices] = useState(true);
	const [selectedService, setSelectedService] = useState<Service | null>(null);

	const handleServiceClick = (service: Service) => {
		setSelectedService(service);
	};

	const closeDetailView = () => {
		setSelectedService(null);
	};

	return (
		<section className="w-full z-20 py-24 min-h-screen text-[#2F3645] flex items-center justify-center px-4">
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
					{"{"} Servicios Destacados {"}"}
				</motion.h2>
				<motion.p
					className="text-center text-lg mb-12 max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Un desglose detallado de los servicios que podemos ofrecerte, diseñados para cubrir tus necesidades de manera
					personalizadaz. Desde soluciones prácticas hasta estrategias innovadoras.
				</motion.p>
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
								className={`rounded-lg p-6 bg-gradient-to-br ${service.color} shadow-lg cursor-pointer text-[#e8e8e8] transition-all ease-in-out`}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								whileHover={{
									scale: 1.02,
									boxShadow: "10px 10px 0 rgba(47,54,69,0.3)",
								}}
								whileTap={{ scale: 0.98, boxShadow: "1px 1px 0 rgba(47,54,69,0.3)" }}
							>
								<motion.h3 className="text-xl font-semibold mb-3" initial={{ y: 0 }} whileHover={{ y: -5 }}>
									{service.title}
								</motion.h3>
								<p className="mb-4">{service.description}</p>
								<motion.button
									onClick={() => handleServiceClick(service)}
									className="inline-flex items-center text-[#e8e8e8] hover:underline"
									whileHover={{ x: 5 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								>
									Saber más <ArrowRight className="ml-2 h-4 w-4" />
								</motion.button>
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
						className="bg-[#2F3645] text-[#e8e8e8] font-bold py-3 px-8 rounded-lg transition duration-300"
						whileHover={{
							scale: 1.02,
							boxShadow: "5px 5px 0 rgba(47,54,69,0.3)",
						}}
						whileTap={{ scale: 0.98, boxShadow: "1px 1px 0 rgba(47,54,69,0.3)" }}
						onClick={() => setShowAllServices(!showAllServices)}
					>
						{showAllServices ? "Ver Menos Servicios" : "Ver Todos los Servicios"}
					</motion.button>
				</motion.div>
			</motion.div>

			<AnimatePresence>
				{selectedService && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
						onClick={closeDetailView}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="bg-[#e8e8e8] text-[#2F3645] p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex justify-between items-start mb-6">
								<h3 className="text-2xl font-bold"> {selectedService.title}</h3>
								<button onClick={closeDetailView} className="text-[#2F3645] hover:text-[#1c1c1c]">
									<X size={24} />
								</button>
							</div>
							<p className="mb-4">{selectedService.detailedDescription}</p>
							<h4 className="text-xl font-semibold mb-2">Características principales:</h4>
							<ul className="list-disc pl-5 mb-6">
								{selectedService.features.map((feature, index) => (
									<li key={index} className="mb-1">
										{feature}
									</li>
								))}
							</ul>
							<div className="mt-6">
								{/* <h4 className="text-xl font-semibold mb-4">Demostración:</h4>
								<div className="bg-[#2F3645] p-4 rounded-lg shadow-inner">
									<img
										src={selectedService.demoImage}
										alt={`Demo de ${selectedService.title}`}
										width={400}
										height={300}
										className="w-full h-auto rounded-lg shadow-md"
									/>
								</div> */}
								<div className="inline-flex items-center gap-x-1 text-[14px]">
									<BadgeInfoIcon className="size-5" /> Completamente personalizable según las necesidades del cliente.
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};
