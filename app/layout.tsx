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
							import Arto from "https://media-staging.arto.chat/arto.js";
							Arto.init({
								uuid: "ba04b9b3-0858-4bc1-b7bc-dba041eee498",
								widgetType: "search",
								theme: {
								fonts: {
									fontRegular: "https://media.arto.chat/fonts/a6f04a1d-74a1-4c81-a584-b85491352fd3/asst_pKp3LPZdsnvR9x8u8UtllYw0/ba04b9b3-0858-4bc1-b7bc-dba041eee498/search/Roboto_Condensed-Regular.ttf",
									fontMedium: "https://media.arto.chat/fonts/a6f04a1d-74a1-4c81-a584-b85491352fd3/asst_pKp3LPZdsnvR9x8u8UtllYw0/ba04b9b3-0858-4bc1-b7bc-dba041eee498/search/Roboto_Condensed-Medium.ttf",
									fontBold: "https://media.arto.chat/fonts/a6f04a1d-74a1-4c81-a584-b85491352fd3/asst_pKp3LPZdsnvR9x8u8UtllYw0/ba04b9b3-0858-4bc1-b7bc-dba041eee498/search/Roboto Condensed Bold.ttf"
								}
								}
							});
						`,
					}}
				/>
			</body>
		</html>
	);
}
