"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Zap, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

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
		<section className="w-full z-20 py-24 min-h-screen bg-[#e8e8e8] text-[#2F3645] flex items-center justify-center">
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
								className="w-20 h-20 p-4 bg-[#2F3645] rounded-full flex items-center justify-center mb-4 shadow-lg transition-all ease-in-out"
								whileHover={{
									scale: 1.05,
									boxShadow: "5px 5px 0 rgba(47,54,69,0.3)",
								}}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 260, damping: 20 }}
							>
								{React.createElement(step.icon, { size: 32, className: "text-[#e8e8e8]" })}
							</motion.div>
							<motion.h3 className="text-xl font-semibold mb-2">{step.title}</motion.h3>
							<p className="text-[#2F3645]">{step.description}</p>
						</motion.div>
					))}
				</motion.div>
				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1.2 }}
				>
					<Link to="/crear">
						<motion.a
							className="bg-[#2F3645] text-[#e8e8e8] font-bold py-3 px-8 rounded-lg inline-block transition duration-300"
							whileHover={{
								scale: 1.02,
								boxShadow: "5px 5px 0 rgba(47,54,69,0.3)",
							}}
							transition={{ ease: "easeInOut" }}
							whileTap={{ scale: 0.98, boxShadow: "1px 1px 0 rgba(47,54,69,0.3)" }}
						>
							Inicia tu Proceso
						</motion.a>
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
};
