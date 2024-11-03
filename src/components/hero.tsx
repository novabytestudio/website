import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Code, Cpu, Globe } from "lucide-react";
// Components \\
import { Header } from "@/src/components/header";

export const Hero = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			<Header />
			<section className="w-full py-24 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center px-4">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center space-y-8"
					>
						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							{mounted && (
								<Typewriter
									options={{
										strings: ["Innovación Digital", "Soluciones Tecnológicas", "Desarrollo de Software"],
										autoStart: true,
										loop: true,
									}}
								/>
							)}
						</h1>
						<p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
							Transformamos ideas en realidad digital.
							<br /> Creamos soluciones de software innovadoras y escalables para impulsar tu negocio.
						</p>
						<div className="flex justify-center space-x-4">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-blue-400/60 hover:bg-blue-400/80 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
							>
								Iniciar Proyecto
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-purple-400/60 hover:bg-purple-400/80 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
							>
								Conocer Más
							</motion.button>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
					>
						<div className="space-y-4">
							<Code className="mx-auto h-12 w-12 text-blue-400" />
							<h3 className="text-xl font-semibold">Desarrollo a Medida</h3>
							<p className="text-gray-400">Soluciones personalizadas que se adaptan perfectamente a tus necesidades.</p>
						</div>
						<div className="space-y-4">
							<Cpu className="mx-auto h-12 w-12 text-emerald-400" />
							<h3 className="text-xl font-semibold">Tecnología de Vanguardia</h3>
							<p className="text-gray-400">Utilizamos las últimas tecnologías para crear productos innovadores.</p>
						</div>
						<div className="space-y-4">
							<Globe className="mx-auto h-12 w-12 text-indigo-400" />
							<h3 className="text-xl font-semibold">Alcance Global</h3>
							<p className="text-gray-400">Soluciones escalables diseñadas para un impacto mundial.</p>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
};
