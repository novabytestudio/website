import { useState } from "react";
import MegaScroll from "react-mega-scroll";
// Components \\
import { Hero } from "@/src/components/hero";

export const App = () => {
	const [, setActive] = useState(0);

	return (
		<>
			<MegaScroll onChange={setActive}>
				<section className="flex flex-col justify-center items-center text-center">
					<Hero />
				</section>
			</MegaScroll>
		</>
	);
};
