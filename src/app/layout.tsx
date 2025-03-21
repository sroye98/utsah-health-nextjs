import { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Utsah Health",
  description: "Your Enthusiasm for a Healthier Life Starts Here",
  robots: "follow, index",
  icons: {
    icon: "/favicon-48x48.ico",
    shortcut: "/favicon-16x16.ico",
    apple: "/favicon-180x180.png",
    other: [
      {
        url: "/favicon-32x32.ico",
        rel: "icon",
        type: "image/x-icon",
        sizes: "32x32",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`} id="mainBody">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
