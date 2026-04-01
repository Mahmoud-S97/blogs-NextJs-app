import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines style classes
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));