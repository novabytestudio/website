import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
			<section className="w-full z-20 py-24 min-h-screen text-white flex items-center justify-center px-4">
				<div className="container z-20 mx-auto">
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
							<Link to="/crear">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="bg-blue-400/60 hover:bg-blue-400/80 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
								>
									Iniciar Proyecto
								</motion.button>
							</Link>
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
