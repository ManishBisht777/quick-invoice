import Modern from "@/components/templates/Modern";
import Sleek from "@/components/templates/Sleek";
import { codes } from "currency-codes";
import { lazy } from "react";

export const AllTemplates: Record<string, any> = {
  modern: {
    name: "Modern",
    component: lazy(() => import("@/components/templates/Modern")),
    image: "/images/templates/modern.png",
  },
  sleek: {
    name: "sleek",
    component: lazy(() => import("@/components/templates/Sleek")),
    image: "/images/templates/sleek.png",
  },
};

export const AllTemplatesForServer: Record<string, any> = {
  modern: {
    name: "modern",
    component: Modern,
  },
  sleek: {
    name: "sleek",
    component: Sleek,
  },
};

export const getAllCurrencies = () => {
  return codes().map((code) => code);
};
