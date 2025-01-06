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
		<section className="w-full z-20 py-5 min-h-screen text-[#2F3645] flex items-center justify-center">
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
					{"{"} Lo que Dicen Nuestros Clientes {"}"}
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
							<motion.div key={index} className="bg-[#2F3645] rounded-lg p-6 shadow-lg text-[#e8e8e8]">
								<div className="flex flex-col items-center mb-4">
									<img
										src="/contents/user.webp"
										className="flex mx-auto mb-4"
										width={70}
										height={70}
										alt="User"
										aria-label="User"
										aria-labelledby="User"
										loading="lazy"
									/>
									<div className="flex mb-2">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
										))}
									</div>
									<p className="text-[#e8e8e8] py-4">"{testimonial.testimonial}"</p>
									<div className="font-semibold">
										{testimonial.name} {/*} {"de"} */} <span className="text-[#e8e8e8]">{testimonial.company}</span>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>
				<div className="mt-12 flex justify-center items-center space-x-4">
					<motion.button
						onClick={handlePrev}
						className="bg-[#2F3645] text-[#e8e8e8] p-2 rounded-full"
						whileHover={{ scale: 1.05, boxShadow: "3px 3px 0 rgba(47,54,69,0.3)" }}
						whileTap={{ scale: 0.95, boxShadow: "1px 1px 0 rgba(47,54,69,0.3)" }}
						transition={{ type: "spring", stiffness: 200, damping: 20 }}
					>
						<ChevronLeft className="w-6 h-6" />
					</motion.button>
					<motion.button
						onClick={handleNext}
						className="bg-[#2F3645] text-[#e8e8e8] p-2 rounded-full"
						whileHover={{ scale: 1.05, boxShadow: "3px 3px 0 rgba(47,54,69,0.3)" }}
						whileTap={{ scale: 0.95, boxShadow: "1px 1px 0 rgba(47,54,69,0.3)" }}
						transition={{ type: "spring", stiffness: 200, damping: 20 }}
					>
						<ChevronRight className="w-6 h-6" />
					</motion.button>
				</div>
			</motion.div>
		</section>
	);
};
