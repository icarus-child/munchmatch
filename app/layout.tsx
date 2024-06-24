import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import AppHeader from "./components/AppHeader";
import "./globals.css";

const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Munch Match",
  description: "A restaurant selection tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <AppHeader/>
        {children}
      </body>
    </html>
  );
}
