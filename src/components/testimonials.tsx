import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
//
import { Testimonials as testimonials } from "@/src/lib/clients";

export const ClientTestimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(1);

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex((prevIndex) => (prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3));
	};

	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex((prevIndex) =>
			prevIndex - 3 < 0 ? testimonials.length - (testimonials.length % 3 || 3) : prevIndex - 3,
		);
	};

	const currentTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

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
			<section className="w-full z-20 py-5 min-h-screen text-white flex items-center justify-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="container z-20 mx-auto px-4 text-center"
				>
					<motion.h2
						className="text-3xl md:text-4xl font-bold mb-12"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Lo que Dicen Nuestros Clientes
					</motion.h2>
					<AnimatePresence mode="wait" custom={direction}>
						<motion.div
							key={currentIndex}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
							initial={{ x: direction * 200, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: direction * -200, opacity: 0 }}
							transition={{ duration: 0.6 }}
						>
							{currentTestimonials.map((testimonial, index) => (
								<motion.div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
									<div className="flexcol items-center mb-4">
										<img
											src="/contents/user.webp"
											className="flex mx-auto mb-4"
											width={70}
											height={70}
											alt="User"
											aria-label="User"
											aria-labelledby="User"
											loading="lazy"
											fetchPriority="high"
										/>
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star key={i} className="inline-flex w-5 h-5 text-yellow-400 fill-current" />
										))}
										<p className="text-gray-300 py-4">"{testimonial.testimonial}"</p>
										<div className="font-semibold">
											{testimonial.name} {"de"} <span className="text-indigo-400">{testimonial.company}</span>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</AnimatePresence>
					<div className="mt-12 flex justify-center items-center space-x-4">
						<motion.button
							onClick={handlePrev}
							className="bg-purple-400/80 p-2 rounded-full"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 200, damping: 20 }}
						>
							<ChevronLeft className="w-6 h-6" />
						</motion.button>
						<motion.button
							onClick={handleNext}
							className="bg-purple-400/80 p-2 rounded-full"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 200, damping: 20 }}
						>
							<ChevronRight className="w-6 h-6" />
						</motion.button>
					</div>
				</motion.div>
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
