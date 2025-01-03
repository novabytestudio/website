export const Header = () => {
	return (
		<>
			<header className="w-full z-20 absolute top-0 left-0">
				<div className="w-fit flex items-center justify-start px-6 py-4 gap-x-2">
					<img
						src="/icon.webp"
						className="w-12 h-12 rounded-full"
						alt="Novabyte"
						aria-label="Novabyte"
						aria-labelledby="Novabyte"
						loading="lazy"
						fetchPriority="high"
					/>
					<span className="text-2xl font-normal drop-shadow-md">Novabyte</span>
				</div>
			</header>
		</>
	);
};
