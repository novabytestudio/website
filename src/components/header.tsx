export const Header = () => {
	return (
		<>
			<header className="w-full absolute top-0 left-0">
				<a
					href="https://www.linkedin.com/company/103792680/"
					target="_blank"
					className="flex items-center justify-start px-6 py-4 gap-x-4"
					rel="noreferrer"
				>
					<img
						src="/src/assets/icon.webp"
						className="w-12 h-12"
						alt="Novabyte Logo"
						aria-label="Novabyte Logo"
						aria-labelledby="Novabyte Logo"
					/>
					<span className="text-2xl tracking-wide font-medium">Novabyte</span>
				</a>
			</header>
		</>
	);
};
