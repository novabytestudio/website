import React, { useState } from "react";
import { KeySquare, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
	const [showInput, setShowInput] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (/^\d{1,3}$/.test(value)) {
			setInputValue(value);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Coming soon...
		setShowInput(false);
		setInputValue("");
	};

	return (
		<header className="w-full z-30 absolute top-0 left-0">
			<div className="w-full flex items-center justify-between px-4 sm:px-6 py-4">
				<motion.div
					className="flex items-center gap-x-2"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				>
					<img
						src="/icon.webp"
						className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
						alt="Novabyte"
						aria-label="Novabyte"
						aria-labelledby="Novabyte"
						loading="lazy"
					/>
					<span className="text-xl sm:text-2xl font-normal drop-shadow-md">Novabyte</span>
				</motion.div>

				{/* Mobile */}
				<motion.button
					className="sm:hidden text-[#2F3645] focus:outline-none z-40"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ ease: "easeInOut" }}
				>
					{isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
				</motion.button>

				{/* Desktop */}
				<AnimatePresence mode="wait">
					{!showInput ? (
						<motion.button
							key="access-button"
							onClick={() => setShowInput(true)}
							className="hidden sm:block bg-[#2F3645] text-[#e8e8e8] px-4 py-2 rounded-md drop-shadow-md"
							aria-label="Acceso"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ ease: "easeInOut" }}
						>
							Acceso
						</motion.button>
					) : (
						<motion.form
							key="access-form"
							onSubmit={handleSubmit}
							className="hidden sm:flex items-center"
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 20 }}
							transition={{ ease: "easeInOut" }}
						>
							<motion.input
								type="text"
								value={inputValue}
								onChange={handleInputChange}
								placeholder="Ingrese ID"
								className="rounded-l-md px-3 py-2 focus:outline-none drop-shadow-md"
								aria-label="Ingrese ID de acceso"
								maxLength={3}
								initial={{ width: 0 }}
								animate={{ width: "auto" }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
							/>
							<motion.button
								type="submit"
								className="bg-[#2F3645] text-[#e8e8e8] px-4 py-2 rounded-r-md drop-shadow-md"
								aria-label="Enviar ID"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								transition={{ ease: "easeInOut" }}
							>
								<KeySquare className="w-5" />
							</motion.button>
						</motion.form>
					)}
				</AnimatePresence>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className="sm:hidden bg-[#2F3645] mt-2"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<div className="px-4 py-2">
							{!showInput ? (
								<motion.button
									onClick={() => setShowInput(true)}
									className="flex w-fit mx-auto bg-[#e8e8e8] text-[#2F3645] px-4 py-2 rounded-md drop-shadow-md"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									transition={{ ease: "easeInOut" }}
								>
									Acceso
								</motion.button>
							) : (
								<motion.form
									onSubmit={handleSubmit}
									className="flex justify-center items-center"
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 20 }}
									transition={{ ease: "easeInOut" }}
								>
									<motion.input
										type="text"
										value={inputValue}
										onChange={handleInputChange}
										placeholder="Ingrese ID"
										className="rounded-l-md px-3 py-2 focus:outline-none drop-shadow-md"
										aria-label="Ingrese ID de acceso"
										maxLength={3}
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
									/>
									<motion.button
										type="submit"
										className="bg-[#e8e8e8] text-[#2F3645] px-4 py-2 rounded-r-md drop-shadow-md"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										transition={{ ease: "easeInOut" }}
									>
										<KeySquare className="w-5" />
									</motion.button>
								</motion.form>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};
