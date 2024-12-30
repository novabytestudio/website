import React, { useState } from "react";
import { motion } from "framer-motion";
import { LinkedinIcon, GithubIcon, PhoneIcon, MapPin, InstagramIcon, MailboxIcon, SendIcon } from "lucide-react";

export const ContactAndCredits = () => {
	const [name, setName] = useState("");

	const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const phoneNumber = "";
		const message = `Hola, mi nombre es ${name}. Me gustaría obtener más información sobre sus servicios.`;
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, "_blank");
	};

	return (
		<section id="contact" className="relative flex flex-col w-screen min-h-screen text-[#2F3645]">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="container z-20 mx-auto px-4 max-md:mb-32 max-sm:mb-36"
			>
				<motion.h2
					className="text-3xl md:text-4xl font-bold py-10 text-center"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Contactános
				</motion.h2>
				<div className="flex flex-wrap -mx-4 mb-12">
					<motion.div
						className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<form onSubmit={handleWhatsAppRedirect} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium mb-2">
									Nombre
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={name}
									min={5}
									max={15}
									minLength={5}
									maxLength={15}
									onChange={(e) => setName(e.target.value)}
									placeholder="Ingresá tu nombre..."
									required
									className="w-full px-3 py-2 bg-[#d0d0d0] drop-shadow-lg ring-1 hover:ring-2 ring-[#2F3645] transition-all ease-in-out rounded-md focus:outline-none"
								/>
							</div>
							<motion.button
								type="submit"
								className="w-[50%] gap-x-2 mx-auto bg-[#2F3645] text-[#e8e8e8] hover:bg-[#2F3645]/80 font-bold py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
								transition={{ ease: "easeInOut" }}
								whileHover={{
									scale: 1.02,
									boxShadow: "5px 5px 0 rgba(47,54,69,0.3)",
								}}
								whileTap={{ scale: 0.98, boxShadow: "1px 1px 0 rgba(47,54,69,0.3)" }}
							>
								<SendIcon className="mt-0.5 h-5 w-5" />
								Enviar
							</motion.button>
						</form>
					</motion.div>
					<motion.div
						className="w-full lg:w-1/2 px-4"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<div className="bg-[#2F3645] text-[#e8e8e8] p-8 rounded-lg">
							<h3 className="text-2xl text-[#e8e8e8] font-semibold mb-4">Información de Contacto</h3>
							<p className="mb-4">¿Tenés alguna pregunta o querés discutir un proyecto? <br/>¡No dudes en contactarnos!</p>
							<ul className="flex flex-col space-y-2">
								<li className="inline-flex items-center">
									<MailboxIcon className="h-4 w-4 mr-1.5" />
									<span className="italic">novabytestudio.dev@gmail.com</span>
								</li>
								<li className="inline-flex items-center">
									<PhoneIcon className="h-4 w-4 mr-1.5" />
									<span className="italic">Próximamente...</span>
								</li>
								<li className="inline-flex items-center">
									<MapPin className="h-4 w-4 mr-1.5" />
									<span className="italic">Buenos Aires, Argentina</span>
								</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</motion.div>

			<footer className="absolute bottom-0 left-0 right-0 py-5 bg-[#2F3645] text-[#e8e8e8]">
				<div className="container mx-auto px-4">
					<div className="flex flex-col space-y-5 justify-center items-center">
						<div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
							<p className="text-sm">&copy; 2024 Novabyte Studio. Todos los derechos reservados.</p>
						</div>
						<div className="w-full md:w-auto flex justify-center md:justify-end space-x-4">
							<motion.a
								href="https://www.linkedin.com/company/103792680/"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<LinkedinIcon className="h-6 w-6 transition-all ease-in-out" />
							</motion.a>
							<motion.a
								href="https://github.com/NovabyteStudio/"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<GithubIcon className="h-6 w-6 transition-all ease-in-out" />
							</motion.a>
							<motion.a
								href="https://www.instagram.com/novabyte.software/"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<InstagramIcon className="h-6 w-6 transition-all ease-in-out" />
							</motion.a>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
};
