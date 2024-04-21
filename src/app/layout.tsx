"use client";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SessionProvider } from "next-auth/react";
import { Inter, Noto_Serif } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
      <footer className="container py-4 flex justify-between">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Snappy invoice. Simplifying your
          invoicing needs
        </p>
        <Link href={"https://twitter.com/manishbisht9711"}>
          <svg width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        </Link>
      </footer>
    </html>
  );
}
