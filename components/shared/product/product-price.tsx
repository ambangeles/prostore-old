import { cn } from "@/lib/utils";
import React from "react";

const ProductPrice = ({ value, className }: { value: number; className?: string }) => {
	const string_value = value.toFixed(2);
	const [int, float] = string_value.split(".");
	return (
		<p className={cn("text-2xl", className)}>
			<span className="text-xs align-super">$</span>
			{int}
			<span className="text-xs align-super">.{float}</span>
		</p>
	);
};

export default ProductPrice;
