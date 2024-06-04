import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import yzy from "../public/yzy.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshit2k",
  description: "PortfolioWebsite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="icon" type="image/svg+xml" href={yzy.src} />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
