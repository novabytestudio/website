import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, LinkedinIcon, GithubIcon, PhoneIcon, MapPin } from "lucide-react";

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
			<section className="w-full max-md:py-28 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="container mx-auto px-4"
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
							<form onSubmit={handleSubmit} className="space-y-6">
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
										disabled={true}
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
										disabled={true}
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
										disabled={true}
										className="w-full px-3 py-2 resize-none bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400/60"
									></textarea>
								</div>
								<motion.button
									type="submit"
									className="w-full bg-blue-400/60 hover:bg-blue-400/80 disabled:bg-blue-400/10 disabled:text-white/30 text-white font-bold py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
									// whileHover={{ scale: 1.05 }}
									// whileTap={{ scale: 0.95 }}
									disabled={true}
								>
									Enviar Mensaje
									<Send className="ml-2 h-5 w-5" />
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
				<footer className="mt-24 border-t border-gray-700 py-5">
					<div className="container mx-auto">
						<div className="flex flex-wrap justify-between items-center">
							<div className="w-full md:w-1/3 mb-6 md:mb-0">
								<p className="text-sm">&copy; 2024 Novabyte Studio. Todos los derechos reservados.</p>
							</div>
							<div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
								<p className="text-sm">
									Desarrolado con ❤️ por{" "}
									<a
										href="https://www.linkedin.com/in/fedetomassini/"
										className="text-indigo-400/60 hover:text-indigo-400/100 transition-colors"
										target="_blank"
									>
										@fedetomassini
									</a>
								</p>
							</div>
							<div className="w-full md:w-1/3 flex justify-end space-x-4">
								<motion.a
									href="https://www.linkedin.com/company/103792680/"
									target="_blank"
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
								>
									<LinkedinIcon className="h-6 w-6 hover:text-indigo-400 transition-colors" />
								</motion.a>
								<motion.a
									href="https://github.com/NovabyteStudio/"
									target="_blank"
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
								>
									<GithubIcon className="h-6 w-6 hover:text-indigo-400 transition-colors" />
								</motion.a>
							</div>
						</div>
					</div>
				</footer>
			</section>
		</>
	);
};
