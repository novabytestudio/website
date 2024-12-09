import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Components
import { Hero } from "@/src/components/hero";
import { ServiceShowcase } from "@/src/components/services";
import { DevelopmentProcess } from "@/src/components/development";
import { ClientTestimonials } from "@/src/components/testimonials";
import { ContactAndCredits } from "@/src/components/contact";
import { NewProyect } from "@/src/components/new-proyect";
import { SVGBackground } from "@/src/components/svg-background";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			transition={{ duration: 0.5, delay: 0.2 }}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
		>
			{children}
		</motion.div>
	);
};

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
		<>
			<SVGBackground />
			<div className="min-h-screen overflow-y-auto">
				{components.map((Component, index) => (
					<section
						ref={(el) => (sectionsRef.current[index] = el as HTMLDivElement)}
						className="min-h-screen flex items-center justify-center"
						key={index}
					>
						<AnimatedSection>
							<Component />
						</AnimatedSection>
					</section>
				))}
				<nav className="fixed right-4 z-40 top-1/2 transform -translate-y-1/2">
					{components.map((_, index) => (
						<button
							key={index}
							className={`block w-3 h-3 my-2 rounded-full ${active === index ? "bg-[#2F3645]" : "bg-gray-300"}`}
							onClick={() => scrollToSection(index)}
						/>
					))}
				</nav>
			</div>
		</>
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
