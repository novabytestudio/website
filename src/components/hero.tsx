import Typewriter from "typewriter-effect";
// Components \\
import { Header } from "@/src/components/header";

export const Hero = () => {
	return (
		<>
			<Header />
			<section className="container flex flex-col min-h-screen items-center justify-center">
				<div className="space-y-2 text-center">
					<h1 className="text-3xl font-bold tracking-wider sm:text-5xl xl:text-6xl">
						<Typewriter
							onInit={(typewriter) => {
								typewriter.typeString("Coming soon...").pauseFor(5000).deleteAll().pauseFor(1000).start();
							}}
							options={{
								autoStart: true,
								loop: true,
							}}
						/>
					</h1>
				</div>
			</section>
		</>
	);
};
