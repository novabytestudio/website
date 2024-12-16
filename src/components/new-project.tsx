import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Components
import { SVGBackground } from "@/src/components/svg-background";
import { Loader } from "@/src/components/loader";

export const NewProject = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<SVGBackground />
			<div className="w-full min-h-screen z-40 p-4 md:p-8">
				<div className="max-w-4xl mx-auto">
					<div className="bg-transparent rounded-xl overflow-hidden">
						<div className="min-h-screen w-full">
							{isLoading ? (
								<Loader />
							) : (
								<iframe
									src="https://docs.google.com/forms/d/e/1FAIpQLSdYm8l2jmS8EM3iCEA8HmJcqqwdWnX8YCiHXyYZr6eHFF7P8Q/viewform?embedded=true"
									className="w-full min-h-screen border-0"
									title="Iniciá tu proyecto"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									onLoad={() => setIsLoading(false)}
								/>
							)}
						</div>
					</div>
					<div className="w-full flex flex-col mx-auto justify-center">
						<p className="text-center text-sm mt-4">
							Si el formulario no carga correctamente, podés{" "}
							<a
								href="https://forms.gle/NidRoAqgYsiQ3zrx7"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-500 transition-colors"
							>
								abrirlo en una nueva ventana
							</a>
							.
						</p>
						<Link to="/" className="mx-auto mt-8">
							<motion.button
								whileHover={{ scale: 1.02, boxShadow: "5px 5px 0 rgba(28,28,28,0.3)" }}
								transition={{ ease: "easeInOut" }}
								className="bg-[#2F3645] text-[#e8e8e8] font-bold py-3 px-6 rounded-lg drop-shadow-md"
							>
								Volver al Inicio
							</motion.button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
