import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "ZcaleUp ERP",
  legalName: "ScaleUp Technologies Private Limited",
  tagline: "Scale Smart. Scale Fast.",
  url: "https://www.zcaleup.com",
  email: "contact@zcaleup.com",
  location: "India",
};
