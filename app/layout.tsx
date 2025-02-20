import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Navbar,Footer} from "@/components";

export const metadata: Metadata = {
  title: "WipeOut Service",
  description:
    "Sydney’s go-to for fast, reliable cleaning and removal solutions for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        </body>
        <Footer/>
    </html>
  );
}
