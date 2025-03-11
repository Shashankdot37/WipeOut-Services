import type { Metadata } from "next";
import "./globals.css";
import {Toaster} from "sonner";

export const metadata: Metadata = {
  title: "Sydney Move and Clean",
  description: "Cleaning and Removal Service in Sydney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-white" lang="en">
      <body>
        <Toaster richColors position="top-center"/>
        {children}
      </body>
    </html>
  );
}
