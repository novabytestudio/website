import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface Plan {
	name: string;
	price: string;
	features: string[];
	notIncluded: string[];
}

const plans: Plan[] = [
	{
		name: "Plan Emprendedor",
		price: "$249/mes",
		features: [
			"Sistema de Gestión Empresarial (módulo básico)",
			"App de Comercio Electrónico (hasta 1.500 productos)",
			"Dashboard básico para análisis de ventas",
			"Soporte por correo electrónico",
			"1 usuario administrador",
			"Actualizaciones de seguridad mensuales",
		],
		notIncluded: [
			"Módulos avanzados de gestión empresarial",
			"Sistema de Gestión de Recursos Humanos",
			"Plataforma de Aprendizaje en Línea",
			"Sistema de Gestión de Proyectos",
		],
	},
	{
		name: "Plan Profesional",
		price: "$499/mes",
		features: [
			"Todo lo incluido en el Plan Emprendedor",
			"Sistema de Gestión Empresarial (módulos avanzados)",
			"App de Comercio Electrónico (hasta 5.000 productos)",
			"Plataforma de Análisis de Datos con reportes personalizados",
			"Sistema básico de Gestión de Recursos Humanos",
			"Soporte prioritario por teléfono y correo",
			"Hasta 5 usuarios administradores",
			"Actualizaciones de seguridad semanales",
		],
		notIncluded: [
			"Plataforma de Aprendizaje en Línea avanzada",
			"Sistema de Gestión de Proyectos avanzado",
			"Integraciones personalizadas",
		],
	},
	{
		name: "Plan Empresarial",
		price: "Personalizado",
		features: [
			"Todo lo incluido en el Plan Profesional",
			"Sistema de Gestión Empresarial totalmente personalizado",
			"App de Comercio Electrónico (productos ilimitados)",
			"Plataforma de Análisis de Datos avanzada con IA predictiva",
			"Sistema de Gestión de Recursos Humanos completo",
			"Plataforma de Aprendizaje en Línea personalizada",
			"Sistema de Gestión de Proyectos avanzado",
			"Soporte 24/7 con gerente de cuenta dedicado",
			"Usuarios ilimitados",
			"Actualizaciones de seguridad diarias",
			"Integraciones personalizadas con sistemas existentes",
			"Implementación y capacitación in situ",
		],
		notIncluded: [],
	},
];

export const SubscriptionPlans = () => {
	const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

	const scrollToContact = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="subscription-plans" className="w-full py-24 bg-[#e8e8e8] text-[#2F3645]">
			<div className="container mx-auto px-4">
				<motion.h2
					className="text-3xl md:text-4xl font-bold mb-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Planes de Suscripción
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{plans.map((plan, index) => (
						<motion.div
							key={plan.name}
							className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 flex flex-col min-h-[600px] ${
								hoveredPlan === plan.name ? "scale-105" : ""
							}`}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							onHoverStart={() => setHoveredPlan(plan.name)}
							onHoverEnd={() => setHoveredPlan(null)}
						>
							<div className="p-6 flex-grow">
								<h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
								<p className="text-3xl font-bold mb-6">{plan.price}</p>
								<ul className="mb-6 h-80 overflow-y-auto">
									{plan.features.map((feature, i) => (
										<li key={i} className="flex items-center mb-2">
											<Check className="text-green-500 mr-2" />
											<span>{feature}</span>
										</li>
									))}
									{plan.notIncluded.map((feature, i) => (
										<li key={i} className="flex items-center mb-2 text-gray-500">
											<X className="text-red-500 mr-2" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
							<div className="p-6 bg-[#2F3645] mt-auto">
								<motion.button
									className="w-full bg-[#e8e8e8] text-[#2F3645] font-bold py-3 px-4 rounded-lg transition duration-300"
									whileHover={{
										scale: 1.05,
										boxShadow: "0px 0px 8px rgba(232,232,232,0.4)",
									}}
									whileTap={{ scale: 0.95 }}
									onClick={scrollToContact}
								>
									Consultar
								</motion.button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
