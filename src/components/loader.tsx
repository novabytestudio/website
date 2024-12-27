import { motion } from "framer-motion";

interface LoaderProps {
	onAnimationComplete?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onAnimationComplete }) => {
	return (
		<motion.div
			className="flex justify-center items-center h-screen bg-[#e8e8e8] z-40"
			initial={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			onAnimationComplete={onAnimationComplete}
		>
			<motion.div
				className="w-16 h-16 border-4 border-[#2F3645] border-t-[#e8e8e8] rounded-full"
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
			/>
		</motion.div>
	);
};
