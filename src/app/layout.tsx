"use client";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Noto_Serif } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const notoSerif = Noto_Serif({ subsets: ["latin"], variable: "--font-serif" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(inter.className, notoSerif.variable, inter.variable)}
        >
          {children}
        </body>
        <Toaster />
        <GoogleAnalytics gaId="G-NF2CY20H95" />
      </html>
    </ClerkProvider>
  );
}
