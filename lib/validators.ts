import { formatNumberWithDecimal } from "@/lib/utils";
import { z } from "zod";

const currency = z
	.string()
	.refine(
		(value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(+value)),
		"Price must be a valid number with two decimal places"
	);

export const insertProductSchema = z.object({
	name: z.string().min(3, "Name must be at least 3 characters long"),
	slug: z.string().min(3, "Slug must be at least 3 characters long"),
	category: z.string().min(3, "Category must be at least 3 characters long"),
	brand: z.string().min(3, "Brand must be at least 3 characters long"),
	description: z.string().min(3, "Description must be at least 3 characters long"),
	stock: z.coerce.number(),
	images: z.array(z.string()).min(1, "Product must have at least one image"),
	isFeatured: z.boolean(),
	banner: z.string().nullable(),
	price: currency,
});

// Schema for signing in a user
export const signInFormSchema = z.object({
	email: z.string().email("Invalid email address").min(3, "Email must be at least 3 characters"),
	password: z.string().min(3, "Password must be at least 3 characters"),
});
