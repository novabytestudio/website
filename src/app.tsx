import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Components
import { Hero } from "@/src/components/hero";
import { ServiceShowcase } from "@/src/components/services";
import { DevelopmentProcess } from "@/src/components/development";
import { ClientTestimonials } from "@/src/components/testimonials";
import { ContactAndCredits } from "@/src/components/contact";
import { NewProyect } from "@/src/components/new-proyect";

const MainPage = () => {
	const [active, setActive] = useState(0);
	const sectionsRef = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		if ("scrollRestoration" in window.history) {
			window.history.scrollRestoration = "manual";
		}

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const windowHeight = window.innerHeight;

			sectionsRef.current.forEach((section, index) => {
				if (section) {
					const sectionTop = section.offsetTop;
					const sectionBottom = sectionTop + section.offsetHeight;

					if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom - windowHeight / 2) {
						setActive(index);
					}
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (index: number) => {
		sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
	};

	const components = [Hero, ServiceShowcase, DevelopmentProcess, ClientTestimonials, ContactAndCredits];

	return (
		<div className="min-h-screen overflow-y-auto">
			{components.map((Component, index) => (
				<section
					ref={(el) => (sectionsRef.current[index] = el as HTMLDivElement)}
					className="min-h-screen flex items-center justify-center"
					key={index}
				>
					<AnimatePresence mode="wait">
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5 }}
						>
							<Component />
						</motion.div>
					</AnimatePresence>
				</section>
			))}
			<nav className="fixed right-4 z-40 top-1/2 transform -translate-y-1/2">
				{components.map((_, index) => (
					<button
						key={index}
						className={`block w-3 h-3 my-2 rounded-full ${active === index ? "bg-blue-500" : "bg-gray-300"}`}
						onClick={() => scrollToSection(index)}
					/>
				))}
			</nav>
		</div>
	);
};

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/crear" element={<NewProyect />} />
			</Routes>
		</Router>
	);
};
