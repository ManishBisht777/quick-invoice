import { SidebarNavItem } from "@/types/nav";

export const sidebarConfig: SidebarNavItem[] = [
  {
    title: "All Invoices",
    href: "/dashboard",
    icon: "invoices",
  },
  {
    title: "Client Details",
    href: "/dashboard/details",
    icon: "clients",
  },
];
