import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { env } from "@/src/lib/env";
import { toast } from "react-toastify";
import {
	LinkedinIcon,
	GithubIcon,
	PhoneIcon,
	MapPin,
	InstagramIcon,
	MailboxIcon,
	SendIcon,
	TwitterIcon,
	GitlabIcon,
} from "lucide-react";

type Inputs = {
	name: string;
	email: string;
	message: string;
};

export const ContactAndCredits = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		emailjs
			.send(
				env.NEXT_PUBLIC_SERVICE_ID,
				env.NEXT_PUBLIC_TEMPLATE_ID,
				{
					from_name: data.name,
					from_email: data.email,
					message: data.message,
				},
				env.NEXT_PUBLIC_PUBLIC_KEY,
			)
			.then(
				() => {
					reset();
					toast.success("¡Gracias por contactarnos, te responderemos a la brevedad!");
				},
				() => {
					toast.error("Algo salió mal...");
				},
			);
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
					{"{"} Contactános {"}"}
				</motion.h2>
				<div className="flex flex-wrap -mx-4 mb-12">
					<motion.div
						className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium mb-2">
									Nombre
								</label>
								<input
									type="text"
									id="name"
									{...register("name", { required: "Este campo es obligatorio." })}
									placeholder="Ingresá tu nombre..."
									className="w-full px-3 py-2 bg-[#d0d0d0] drop-shadow-lg ring-0 rounded-md focus:outline-none"
								/>
								{errors.name?.message && <p className="text-[#2F3645] mt-1 ml-2">{errors.name.message}</p>}
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									{...register("email", {
										required: "Este campo es obligatorio.",
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Ingresá un email válido.",
										},
									})}
									placeholder="Ingresá tu email..."
									className="w-full px-3 py-2 bg-[#d0d0d0] drop-shadow-lg ring-0 rounded-md focus:outline-none"
								/>
								{errors.email?.message && <p className="text-[#2F3645] mt-1 ml-2">{errors.email.message}</p>}
							</div>
							<div>
								<label htmlFor="message" className="block text-sm font-medium mb-2">
									Mensaje
								</label>
								<textarea
									id="message"
									{...register("message", { required: "Este campo es obligatorio." })}
									placeholder="Escribí tu mensaje..."
									className="w-full px-3 py-2 bg-[#d0d0d0] drop-shadow-lg ring-0 rounded-md focus:outline-none resize-none h-32"
								/>
								{errors.message?.message && <p className="text-[#2F3645] mt-1 ml-2">{errors.message.message}</p>}
							</div>
							<motion.button
								type="submit"
								className="w-full gap-x-2 mx-auto bg-[#2F3645] text-[#e8e8e8] hover:bg-[#2F3645]/80 font-bold py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
								transition={{ ease: "easeInOut" }}
								whileHover={{
									scale: 1.02,
									boxShadow: "5px 5px 0 rgba(47,54,69,0.3)",
								}}
								whileTap={{ scale: 0.98, boxShadow: "1px 1px 0 rgba(47,54,69,0.3)" }}
							>
								<SendIcon className="mt-0.5 h-5 w-5 mr-2" />
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
						<div className="bg-[#2F3645] text-[#e8e8e8] p-8 rounded-lg h-fit">
							<h3 className="text-2xl text-[#e8e8e8] font-semibold mb-4">Información de Contacto</h3>
							<p className="mb-4">
								¿Tenés alguna pregunta o querés discutir un proyecto? <br />
								¡No dudes en contactarnos!
							</p>
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

			<footer className="relative bottom-0 left-0 right-0 py-5 bg-[#2F3645] text-[#e8e8e8]">
				<div className="container mx-auto px-4">
					<div className="flex flex-col space-y-5 justify-center items-center">
						<div className="w-full flex justify-center space-x-4">
							<motion.a
								href="https://gitlab.com/groups/novabytestudio"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<GitlabIcon className="h-6 w-6 transition-all ease-in-out" />
							</motion.a>
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
							<motion.a
								href="https://x.com/novabytestudio"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<TwitterIcon className="h-6 w-6 transition-all ease-in-out" />
							</motion.a>
						</div>
						<div className="w-full text-center">
							<p className="text-sm">&copy; 2025 Novabyte Studio. Todos los derechos reservados.</p>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
};
