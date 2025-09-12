import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
	return (
		<header className="w-full border-b sticky top-0 z-50 bg-white">
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
				</div>
				<div className="flex-start ml-6 gap-2">
					<Input placeholder="Search products..." className="flex-1 w-[200px]" />
					<Button type="submit" size="default" aria-label="Search">
						<Search className="h-4 w-4" />
					</Button>
					<a href="javascript:void(0)" id="arto-search-button"></a>
				</div>
				<Menu />
			</div>
		</header>
	);
};

export default Header;
