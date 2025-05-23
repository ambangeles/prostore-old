import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: `%s | ${APP_NAME}`,
		default: APP_NAME,
	},
	description: `${APP_DESCRIPTION}`,
	metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
			<Script
				id="arto-chat-script"
				strategy="afterInteractive"
				type="module"
				crossOrigin="anonymous"
				dangerouslySetInnerHTML={{
					__html: `
					import Arto from "https://ucarecdn.com/a384da02-2386-4ff0-a531-60492ac48258/arto.js";
						Arto.init({
							uuid: "70825f96-21ae-4221-a6d4-4c7754c961a4"
						});
				`,
				}}
			/>
		</html>
	);
}
