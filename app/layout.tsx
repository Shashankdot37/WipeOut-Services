import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WipeOut Services",
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
        {children}
      </body>
    </html>
  );
}
