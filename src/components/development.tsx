import React from "react";
import { motion } from "framer-motion";
import { Code, Zap, Users, Rocket } from "lucide-react";

export const DevelopmentProcess = () => {
	const steps = [
		{ icon: Users, title: "Consulta", description: "Entendemos tus necesidades y objetivos de negocio." },
		{ icon: Code, title: "Desarrollo", description: "Creamos soluciones personalizadas con las últimas tecnologías." },
		{ icon: Zap, title: "Pruebas", description: "Aseguramos la calidad y el rendimiento de cada producto." },
		{ icon: Rocket, title: "Lanzamiento", description: "Implementamos y damos soporte continuo a tu solución." },
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
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
		<>
			<section className="w-full z-20 py-24 min-h-screen text-white flex items-center justify-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="container z-20 mx-auto px-4"
				>
					<motion.h2
						className="text-3xl md:text-4xl font-bold mb-12 text-center"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Nuestro Proceso de Desarrollo
					</motion.h2>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{steps.map((step, index) => (
							<motion.div key={index} className="flex flex-col items-center text-center" variants={itemVariants}>
								<motion.div
									className="w-30 h-30 p-2 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mb-4 shadow-lg"
									whileHover={{
										scale: 1.1,
										boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
									}}
									transition={{ type: "spring", stiffness: 260, damping: 20 }}
								>
									{React.createElement(step.icon, { size: 32, className: "text-white" })}
								</motion.div>
								<motion.h3 className="text-xl font-semibold mb-2" whileHover={{ scale: 1.05, color: "#60A5FA" }}>
									{step.title}
								</motion.h3>
								<p className="text-gray-300">{step.description}</p>
							</motion.div>
						))}
					</motion.div>
					<motion.div
						className="mt-16 text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.2 }}
					>
						<motion.a
							href="/crear"
							className="bg-gradient-to-r from-purple-400/60 to-purple-400/80 text-white font-bold py-3 px-8 rounded-lg inline-block transition duration-300"
							whileHover={{
								scale: 1.05,
								boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
							}}
							whileTap={{ scale: 0.95 }}
						>
							Inicia tu Proceso
						</motion.a>
					</motion.div>
				</motion.div>
			</section>
		</>
	);
};
