import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { Input } from "@/components/ui/input";

const Header = () => {
	return (
		<header className="w-full border-b">
			<div className="wrapper flex-between">
				<div className="flex-start">
					<Link href="/" className="flex-start">
						<Image
							src={"/images/logo.svg"}
							alt={`${APP_NAME} logo`}
							height={48}
							width={48}
							priority
						/>
						<span className="hidden font-bold text-2xl ml-3 lg:block">{APP_NAME}</span>
					</Link>

					<div className="flex-start ml-6 relative max-w-sm w-full">
						<Input placeholder="Search products..." className="pr-10 w-full" />
						<button
							className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-secondary"
							aria-label="Search"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-search"
							>
								<circle cx="11" cy="11" r="8"></circle>
								<path d="m21 21-4.3-4.3"></path>
							</svg>
						</button>
					</div>

					<a href="javascript:void(0)" id="arto-search-button" className="ml-3"></a>
				</div>
				<Menu />
			</div>
		</header>
	);
};

export default Header;
