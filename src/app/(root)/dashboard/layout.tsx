import { DashboardNav } from "@/components/layout/dashboard-nav";
import { sidebarConfig } from "@/config/sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="container md:px-0 px-4 grid flex-1 gap-10 md:grid-cols-[230px_1fr] mt-4">
      <aside className="hidden w-[230px] h-[80vh] flex-col md:flex sticky top-0 border-r pr-10">
        <DashboardNav items={sidebarConfig} />
      </aside>
      <main className="flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
    </div>
  );
}
