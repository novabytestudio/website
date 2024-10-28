import { useState } from "react";
import MegaScroll from "react-mega-scroll";
import { AnimatePresence, motion } from "framer-motion";
// Components \\
import { Hero } from "@/src/components/hero";
import { ServiceShowcase } from "@/src/components/services";
import { DevelopmentProcess } from "@/src/components/development";
import { ClientTestimonials } from "@/src/components/testimonials";
import { ContactAndCredits } from "@/src/components/contact";

export const App = () => {
	const [active, setActive] = useState(0);

	return (
		<div className="h-screen overflow-y-auto">
			<MegaScroll onChange={setActive} threshold={0.5}>
				{[Hero, ServiceShowcase, DevelopmentProcess, ClientTestimonials, ContactAndCredits].map((Component, index) => (
					<section className="min-h-screen" key={index}>
						<AnimatePresence mode="wait">
							{active === index && (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.5 }}
								>
									<Component />
								</motion.div>
							)}
						</AnimatePresence>
					</section>
				))}
			</MegaScroll>
		</div>
	);
};
