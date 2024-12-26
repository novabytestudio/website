import React from "react";
import { motion } from "framer-motion";
import { Users, FileSearch, Code, TestTube, Rocket, Headphones, RefreshCw, Zap, Send } from 'lucide-react';

interface Step {
	icon: React.ElementType;
	title: string;
	description: string;
	details: string[];
}

export const DevelopmentProcess = () => {
	const steps: Step[] = [
		{
			icon: Users,
			title: "Consulta Inicial",
			description: "Entendemos tus necesidades y objetivos de negocio.",
			details: [
				"Reunión de descubrimiento con stakeholders clave",
				"Análisis de requisitos y expectativas",
				"Definición de objetivos y KPIs del proyecto",
				"Evaluación de la infraestructura tecnológica existente",
			],
		},
		{
			icon: FileSearch,
			title: "Planificación y Diseño",
			description: "Creamos un plan detallado y diseñamos la solución.",
			details: [
				"Desarrollo de la arquitectura de la solución",
				"Creación de wireframes y prototipos interactivos",
				"Definición de la pila tecnológica",
				"Estimación de tiempos y recursos necesarios",
			],
		},
		{
			icon: Code,
			title: "Desarrollo",
			description: "Implementamos soluciones personalizadas con las últimas tecnologías.",
			details: [
				"Desarrollo iterativo con sprints de 2 semanas",
				"Implementación de funcionalidades core",
				"Integración continua y despliegue continuo (CI/CD)",
				"Revisiones de código regulares para asegurar la calidad",
			],
		},
		{
			icon: TestTube,
			title: "Pruebas y QA",
			description: "Aseguramos la calidad y el rendimiento de cada producto.",
			details: [
				"Pruebas unitarias y de integración automatizadas",
				"Pruebas de usabilidad y experiencia de usuario",
				"Pruebas de carga y rendimiento",
				"Identificación y corrección de bugs",
			],
		},
		{
			icon: Rocket,
			title: "Lanzamiento",
			description: "Implementamos tu solución en un entorno de producción.",
			details: [
				"Migración de datos (si es necesario)",
				"Configuración del entorno de producción",
				"Despliegue gradual para minimizar riesgos",
				"Monitoreo intensivo post-lanzamiento",
			],
		},
		{
			icon: Headphones,
			title: "Soporte Continuo",
			description: "Proporcionamos soporte técnico y mantenimiento.",
			details: [
				"Soporte técnico 24/7",
				"Resolución rápida de incidencias",
				"Actualizaciones de seguridad regulares",
				"Optimización continua del rendimiento",
			],
		},
		{
			icon: RefreshCw,
			title: "Iteración y Mejora",
			description: "Continuamos mejorando y expandiendo tu solución.",
			details: [
				"Análisis regular de métricas y feedback de usuarios",
				"Identificación de oportunidades de mejora",
				"Desarrollo de nuevas funcionalidades",
				"Optimización continua de procesos",
			],
		},
		{
			icon: Zap,
			title: "Escalabilidad",
			description: "Aseguramos que tu solución crezca con tu negocio.",
			details: [
				"Planificación de la escalabilidad a largo plazo",
				"Optimización de la arquitectura para alto rendimiento",
				"Implementación de soluciones de balanceo de carga",
				"Estrategias de caché y optimización de bases de datos",
			],
		},
		{
			icon: Send,
			title: "Lanzamiento Final",
			description: "Llevamos tu solución al mercado y aseguramos su éxito.",
			details: [
				"Preparación de materiales de marketing y comunicación",
				"Coordinación con equipos de ventas y atención al cliente",
				"Lanzamiento oficial y campaña de promoción",
				"Monitoreo de métricas de adopción y satisfacción del usuario",
			],
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
			},
		},
	};

	return (
		<section className="w-full z-20 py-24 bg-[#e8e8e8] text-[#2F3645]">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="container mx-auto px-4"
			>
				<motion.h2
					className="text-3xl md:text-4xl font-bold mb-12 text-center"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Nuestro Proceso de Desarrollo
				</motion.h2>
				<motion.div className="relative" variants={containerVariants} initial="hidden" animate="visible">
					{steps.map((step, index) => (
						<motion.div
							key={index}
							className={`flex items-start mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
							variants={itemVariants}
						>
							<div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
								<motion.div
									className="w-16 h-16 p-3 bg-[#2F3645] rounded-full flex items-center justify-center mb-4 shadow-lg transition-all ease-in-out"
									whileHover={{
										scale: 1.05,
										boxShadow: "5px 5px 0 rgba(47,54,69,0.3)",
									}}
									whileTap={{ scale: 0.95 }}
									transition={{ type: "spring", stiffness: 260, damping: 20 }}
								>
									{React.createElement(step.icon, { size: 24, className: "text-[#e8e8e8]" })}
								</motion.div>
								<h3 className="text-xl font-semibold mb-2">{step.title}</h3>
								<p className="text-[#2F3645] mb-4">{step.description}</p>
								<ul className="list-disc pl-5">
									{step.details.map((detail, detailIndex) => (
										<li key={detailIndex} className="mb-1">
											{detail}
										</li>
									))}
								</ul>
							</div>
							{index < steps.length - 1 && (
								<div className="hidden md:block w-px bg-[#2F3645] absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2" />
							)}
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
};

