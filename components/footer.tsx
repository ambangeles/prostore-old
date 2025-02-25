import { APP_NAME } from "@/lib/constants";
import React from "react";

const Footer = () => {
	const current_year = new Date().getFullYear();
	return (
		<footer className="border-t">
			<div className="p-5 flex-center">
				{current_year} {APP_NAME}. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
