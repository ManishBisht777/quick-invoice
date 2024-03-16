import Modern from "@/components/templates/Modern";
import { lazy } from "react";

export const AllTemplates: Record<string, any> = {
  modern: {
    name: "modern",
    component: lazy(() => import("@/components/templates/Modern")),
    image: "/images/templates/modern.png",
  },
  modern6: {
    name: "modern6",
    component: lazy(() => import("@/components/templates/Modern")),
    image: "/images/templates/modern.png",
  },
  modern2: {
    name: "modern2",
    component: lazy(() => import("@/components/templates/Modern")),
    image: "/images/templates/modern.png",
  },
  modern3: {
    name: "modern3",
    component: lazy(() => import("@/components/templates/Modern")),
    image: "/images/templates/modern.png",
  },
  moder4: {
    name: "modern4",
    component: lazy(() => import("@/components/templates/Modern")),
    image: "/images/templates/modern.png",
  },
  moder5: {
    name: "modern5",
    component: lazy(() => import("@/components/templates/Modern")),
    image: "/images/templates/modern.png",
  },
};

export const AllTemplatesForServer: Record<string, any> = {
  modern: {
    name: "modern",
    component: Modern,
  },
};
