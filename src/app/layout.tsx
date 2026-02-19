import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dennis Ooki | Digital Alchemy",
  description: "Software Developer & IT Specialist. Building the digital nervous system of tomorrow.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground",
          inter.variable,
          syne.variable
        )}
      >
        <CustomCursor />
        <Navbar />
        <main className="flex min-h-screen flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
