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

	const smoothScroll = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			const offsetTop = section.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: offsetTop - 20,
				behavior: "smooth",
			});
		}
	};

	return (
		<>
			<Header />
			<section className="w-full z-20 py-24 min-h-screen flex items-center justify-center">
				<div className="container z-20 mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center space-y-8"
					>
						<h1 className="text-4xl md:text-6xl font-bold tracking-tight py-4">
							{mounted && (
								<Typewriter
									options={{
										strings: [
											"{ Innovación Digital }",
											"< Soluciones Tecnológicas />",
											"( Desarrollo de Software )",
											"[ Diseño + Funcionalidad ]",
											"~ Transformando Ideas en Realidad ~",
										],
										autoStart: true,
										loop: true,
									}}
								/>
							)}
						</h1>
						<p className="text-xl max-md:px-4 md:text-2xl max-w-3xl mx-auto">
							Transformamos ideas en realidad digital.
							<br /> Creamos soluciones de software innovadoras y escalables para impulsar tu negocio.
						</p>
						<div className="flex mx-auto items-center justify-center space-x-4 max-[400px]:flex-col max-[400px]:gap-y-4">
							<motion.button
								onClick={() => smoothScroll("contact")}
								whileHover={{ scale: 1.02, boxShadow: "5px 5px 0 rgba(28,28,28,0.3)" }}
								transition={{ ease: "easeInOut" }}
								className="bg-[#2F3645] text-[#e8e8e8] font-bold py-3 px-6 rounded-lg drop-shadow-md"
							>
								Iniciar Proyecto
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.02, boxShadow: "5px 5px 0 rgba(28,28,28,0.3)" }}
								transition={{ ease: "easeInOut" }}
								className="bg-[#d0d0d0] text-[#2F3645] font-bold py-3 px-6 rounded-lg drop-shadow-md"
								onClick={() => smoothScroll("subscription-plans")}
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
							<Code className="mx-auto h-12 w-12 drop-shadow-md" />
							<h3 className="text-xl font-semibold">Desarrollo a Medida</h3>
							<p className="max-md:px-4">Soluciones personalizadas que se adaptan perfectamente a tus necesidades.</p>
						</div>
						<div className="space-y-4">
							<Cpu className="mx-auto h-12 w-12 drop-shadow-md" />
							<h3 className="text-xl font-semibold">Tecnología de Vanguardia</h3>
							<p className="max-md:px-4">Utilizamos las últimas tecnologías para crear productos innovadores.</p>
						</div>
						<div className="space-y-4">
							<Globe className="mx-auto h-12 w-12 drop-shadow-md" />
							<h3 className="text-xl font-semibold">Alcance Global</h3>
							<p className="max-md:px-4">Soluciones escalables diseñadas para un impacto mundial.</p>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
};
