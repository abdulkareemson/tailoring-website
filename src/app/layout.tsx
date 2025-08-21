// path: src/app/layout.tsx

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import the Footer component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tailoring Website",
  description: "Bespoke tailoring services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/*
          The children prop now represents the entire page content.
          The `HeroSlider` and other page-specific content will be
          rendered here from the `page.tsx` file.
        */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
