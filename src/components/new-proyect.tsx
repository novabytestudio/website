// Components \\
import { SVGBackground } from "@/src/components/svg-background";

export const NewProyect = () => {
	return (
		<>
			<SVGBackground/>
			<div className="w-full min-h-screen z-40 text-white p-4 md:p-8">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-xl shadow-lg overflow-hidden">
						<div className="p-4 bg-blue-400">
							<h1 className="text-white text-xl md:text-2xl font-medium text-center">¡Iniciá tu Proyecto!</h1>
						</div>
						<div className="aspect-[4/5] w-full">
							<iframe
								src="https://forms.gle/NidRoAqgYsiQ3zrx7"
								className="w-full h-full border-0"
								title="Google Form"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>
					<p className="text-center text-sm text-gray-600 mt-4">
						Si el formulario no carga correctamente, puedes{" "}
						<a
							href="https://forms.gle/NidRoAqgYsiQ3zrx7"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-400 hover:text-blue-500 transition-colors"
						>
							abrirlo en una nueva ventana
						</a>
					</p>
				</div>
			</div>
		</>
	);
};
