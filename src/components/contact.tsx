import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, LinkedinIcon, GithubIcon, PhoneIcon, MapPin, InstagramIcon } from "lucide-react";

export const ContactAndCredits = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// # Pending
		setFormData({ name: "", email: "", message: "" });
	};

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
			<section className="w-full flex flex-col z-20 py-5 min-h-screen text-white">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="container z-20 mx-auto px-4"
				>
					<motion.h2
						className="text-3xl md:text-4xl font-bold py-10 text-center"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Contáctanos
					</motion.h2>
					<div className="flex flex-wrap -mx-4">
						<motion.div
							className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
						>
							<form onSubmit={handleSubmit} className="space-y-6 ">
								<div>
									<label htmlFor="name" className="block text-sm font-medium mb-2">
										Nombre
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400/60"
									/>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium mb-2">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400/60"
									/>
								</div>
								<div>
									<label htmlFor="message" className="block text-sm font-medium mb-2">
										Mensaje
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={4}
										className="w-full px-3 py-2 resize-none bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400/60"
									></textarea>
								</div>
								<motion.button
									type="submit"
									className="w-full bg-blue-400/60 hover:bg-blue-400/80 disabled:bg-blue-400/10 disabled:text-white/30 text-white font-bold py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
									// whileHover={{ scale: 1.05 }}
									// whileTap={{ scale: 0.95 }}
								>
									<Send className="mr-2 h-5 w-5" />
									Enviar Mensaje
								</motion.button>
							</form>
						</motion.div>
						<motion.div
							className="w-full lg:w-1/2 px-4"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<div className="bg-gray-700 p-8 rounded-lg">
								<h3 className="text-2xl text-indigo-400 font-semibold mb-4">Información de Contacto</h3>
								<p className="mb-4">
									¿Tienes alguna pregunta o quieres discutir un proyecto? No dudes en contactarnos.
								</p>
								<ul className="flexcol space-y-2">
									<li className="inline-flex items-center">
										<Send className="h-4 w-4 mr-1.5" />
										<span className="italic text-blue-400">novabytestudio.dev@gmail.com</span>
									</li>
									<br />
									<li className="inline-flex items-center">
										<PhoneIcon className="h-4 w-4 mr-1.5" />
										<span className="italic text-blue-400">Próximamente...</span>
									</li>
									<br />
									<li className="inline-flex items-center">
										<MapPin className="h-4 w-4 mr-1.5" />
										<span className="italic text-blue-400">Próximamente...</span>
									</li>
								</ul>
							</div>
						</motion.div>
					</div>
				</motion.div>
				<footer className="border-t z-20 mt-20 py-4 border-gray-700">
					<div className="container mx-auto">
						<div className="flex flex-wrap justify-between items-center">
							<div className="w-full md:w-1/3 mb-6 md:mb-0">
								<p className="text-sm">&copy; 2024 Novabyte Studio. Todos los derechos reservados.</p>
							</div>
							<div className="w-full md:w-1/3 flex justify-end space-x-4">
								<motion.a
									href="https://www.linkedin.com/company/103792680/"
									target="_blank"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<LinkedinIcon className="h-6 w-6 hover:text-indigo-400 transition-colors" />
								</motion.a>
								<motion.a
									href="https://github.com/NovabyteStudio/"
									target="_blank"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<GithubIcon className="h-6 w-6 hover:text-indigo-400 transition-colors" />
								</motion.a>
								<motion.a href="#" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
									<InstagramIcon className="h-6 w-6 hover:text-indigo-400 transition-colors" />
								</motion.a>
							</div>
						</div>
					</div>
				</footer>
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
