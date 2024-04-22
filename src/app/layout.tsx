"use client";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SessionProvider } from "next-auth/react";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const notoSerif = Noto_Serif({ subsets: ["latin"], variable: "--font-serif" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={cn(inter.className, notoSerif.variable, inter.variable)}
        >
          {children}
        </body>
      </SessionProvider>
      <Toaster />
      <GoogleAnalytics gaId="G-NF2CY20H95" />
    </html>
  );
}
