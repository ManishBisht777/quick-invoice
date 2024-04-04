"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types/nav";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <div className="grid items-start gap-2">
      {items.map((item, index) => {
        return (
          item.href && (
            <Link key={index} href={item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent"
                )}
              >
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </div>
  );
}
