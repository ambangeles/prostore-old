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
							import Arto from "https://ucarecdn.com/99ce0ded-87e3-4540-96c6-62fa6641dedb/arto.js";
							Arto.init({
								uuid: "6f338d3b-28ec-4e51-aae4-3e77727658ed",
								widgetType: "search",
								theme: {
									triggerButtonColor: "#008009",
									modalHeaderColor: "#805e00",
									userMessageColor: "#dfbfbf",
								},
							});
						`,
					}}
				/>
			</body>
		</html>
	);
}
