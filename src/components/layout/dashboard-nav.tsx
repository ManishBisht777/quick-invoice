"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types/nav";
import { Icons } from "../ui/Icons";
import { Button } from "../ui/button";
import Image from "next/image";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <div className="flex justify-between flex-col h-full">
      <div className="grid items-start gap-2">
        {items.map((item, index) => {
          //@ts-ignore
          const Icon = Icons[item.icon || "arrowRight"];

          return (
            item.href && (
              <Link key={index} href={item.href}>
                <p
                  className={cn(
                    "group flex items-center text-slate-700 rounded-xl px-3 py-3 text-sm hover:bg-accent hover:text-accent-foreground",
                    path === item.href
                      ? "bg-primary text-white hover:bg-primary hover:text-white"
                      : "transparent"
                  )}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span>{item.title}</span>
                </p>
              </Link>
            )
          );
        })}
      </div>
      {/* <div className="bg-[#0a363b] p-5 rounded-md text-white h-40 flex flex-col justify-between">
        <p className="text-xl font-medium">Loving this project?</p>
        <Image
          src="https://avatars.githubusercontent.com/u/89926834?s=96&v=4"
          width={48}
          height={48}
          alt="Github Avatar"
          className="rounded-full"
        />
        <Button className="bg-white text-[#0a363b] w-full py-6">
          Star on Github
        </Button>
      </div> */}
    </div>
  );
}
