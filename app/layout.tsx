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
					import Arto from "https://ucarecdn.com/7a5d7a31-7ba2-4e0f-892a-43829df1ddb7/arto.js";
						Arto.init({
    uuid: "ba04b9b3-0858-4bc1-b7bc-dba041eee498",
    theme: {
      logo: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      triggerButtonIcon: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      submitButtonIcon: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      closeButtonIcon: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      color: "#ff0000",
      userMessageColor: "#29cf26"
    }
  });
				`,
				}}
			/>
		</html>
	);
}
