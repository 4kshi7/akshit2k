import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import yzy from "../public/yzy.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshit Gaur",
  description:
    "A 21 year old CS student, who's also a self taught Full Stack Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href={yzy.src} />
        <meta
          name="description"
          content="A 21 year old CS student, who's also a self taught Full Stack Web Developer."
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="canonical" href="https://www.akshitgaur.in" />
        <meta
          name="keywords"
          content="Akshit Gaur, Entrepreneur, Developer, Full Stack"
        />
        <meta name="author" content="Akshit Gaur" />

        <meta name="twitter:site" content="https://www.akshitgaur.in" />
        <meta name="twitter:title" content="Akshit Gaur" />
        <meta
          name="twitter:description"
          content="A 21 year old CS student, who's also a self taught Full Stack Web Developer."
        />

        <meta name="twitter:image:alt" content="Akshit Gaur" />

        <meta property="og:url" content="https://www.akshitgaur.in" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Akshit Gaur" />

        <meta
          property="og:description"
          content="A 21 year old CS student, who's also a self taught Full Stack Web Developer."
        />
        <meta property="og:site_name" content="Akshit Gaur" />

        <meta itemProp="name" content="Akshit Gaur" />
        <meta
          itemProp="description"
          content="A 21 year old CS student, who's also a self taught Full Stack Web Developer."
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
