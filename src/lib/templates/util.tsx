import Modern from "@/components/templates/Modern";
import Sleek from "@/components/templates/Sleek";
import { lazy } from "react";

export const AllTemplates: Record<string, any> = {
  modern: {
    name: "modern",
    component: lazy(() => import("@/components/templates/Modern")),
    image: "/images/templates/modern.png",
  },
  sleek: {
    name: "sleek",
    component: lazy(() => import("@/components/templates/Sleek")),
    image: "/images/templates/modern.png",
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
