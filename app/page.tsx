"use client";
import { motion } from "framer-motion";

export default function Home() {
	const year = new Date().getFullYear();

	return (
		<main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-16 bg-background relative overflow-hidden">
			<motion.div
				className="absolute inset-0 opacity-5"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.05 }}
				transition={{ duration: 2 }}
			>
				<div className="absolute top-20 left-10 w-72 h-72 bg-[#A3485A] rounded-full filter blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A3485A] rounded-full filter blur-3xl"></div>
			</motion.div>

			<div className="max-w-4xl w-full mx-auto text-center space-y-8 md:space-y-12 relative z-10">
				<motion.div
					className="flex justify-center"
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 200,
						damping: 20,
						duration: 0.8,
					}}
				>
					<motion.img
						src="/novabytestudio.webp"
						alt="Novabyte Studio Logo"
						className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
						whileHover={{ scale: 1.05 }}
						transition={{ type: "spring", stiffness: 300 }}
					/>
				</motion.div>

				<motion.h1
					className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
				>
					Novabyte Studio
				</motion.h1>

				<motion.p
					className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed opacity-90"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 0.9, y: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
				>
					Building digital experiences with precision and creativity
				</motion.p>

				<motion.div
					className="pt-4"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.6, duration: 0.6 }}
				>
					<motion.button
						className="relative bg-[#A3485A] text-white px-10 py-4 md:px-12 md:py-5 text-lg md:text-xl font-bold transition-all overflow-hidden group shadow-lg"
						whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(163, 72, 90, 0.4)" }}
						whileTap={{ scale: 0.98 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
					>
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
							initial={{ x: "-100%" }}
							animate={{ x: "200%" }}
							transition={{
								repeat: Infinity,
								duration: 2.5,
								ease: "linear",
								repeatDelay: 1,
							}}
						/>

						<motion.div
							className="absolute -inset-1 bg-[#A3485A] blur-lg -z-10"
							animate={{
								opacity: [0.3, 0.6, 0.3],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>

						<span className="relative z-10 flex items-center justify-center gap-1">
							Coming Soon
							<span className="flex gap-1 ml-1">...</span>
						</span>
					</motion.button>
				</motion.div>

				<motion.div
					className="pt-2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.9, duration: 0.8 }}
				>
					<motion.p
						className="text-[#A3485A] font-semibold text-sm md:text-base"
						animate={{ opacity: [0.6, 1, 0.6] }}
						transition={{
							duration: 2.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						Something amazing is on the way
					</motion.p>
				</motion.div>

				<motion.footer
					className="pt-12 md:pt-16 text-sm md:text-base opacity-70"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.7 }}
					transition={{ delay: 1.1, duration: 0.8 }}
				>
					© {year} Novabyte Studio. All rights reserved.
				</motion.footer>
			</div>
		</main>
	);
}
