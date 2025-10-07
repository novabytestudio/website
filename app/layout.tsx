import type React from "react";
import { Suspense } from "react";
import type { Metadata } from "next";
//
import { Ubuntu_Mono } from "next/font/google";
import "@/app/globals.css";

const webFont = Ubuntu_Mono({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-ubuntu-mono",
});

export const metadata: Metadata = {
	title: "Novabyte Studio",
	description: "Building digital experiences with precision and creativity",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`font-mono ${webFont.variable}`}>
				<Suspense fallback={null}>
					<main>{children}</main>
				</Suspense>
			</body>
		</html>
	);
}
