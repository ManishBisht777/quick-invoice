"use client";

import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
      <Toaster />
      <GoogleAnalytics gaId="G-NF2CY20H95" />
    </html>
  );
}
