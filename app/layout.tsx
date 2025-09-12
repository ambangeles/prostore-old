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

				<Script
					id="arto-chat-script"
					strategy="afterInteractive"
					type="module"
					crossOrigin="anonymous"
					dangerouslySetInnerHTML={{
						__html: `
							import Arto from "https://3n7bzx76ox.ucarecd.net/49acf971-8381-47d5-b8a1-f025c960c008/arto.js";
							Arto.init({
								uuid: "6f338d3b-28ec-4e51-aae4-3e77727658ed",
								widgetType: "chat"
							});
						`,
					}}
				/>
			</body>
		</html>
	);
}
