import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dennis Ooki Magolo | Software Development Lead",
  description: "Portfolio of Dennis Ooki Magolo - Software Development Lead at Uniconnect Centre. Full-stack developer specializing in Python, Django, Flutter, and React.",
  keywords: ["Dennis Ooki Magolo", "Software Developer", "Full-stack Developer", "Django", "Flutter", "React", "Python"],
  authors: [{ name: "Dennis Ooki Magolo" }],
  creator: "Dennis Ooki Magolo",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dennis Ooki Magolo | Software Development Lead",
    description: "Portfolio of Dennis Ooki Magolo - Software Development Lead at Uniconnect Centre.",
    siteName: "Dennis Ooki Magolo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennis Ooki Magolo | Software Development Lead",
    description: "Portfolio of Dennis Ooki Magolo - Software Development Lead at Uniconnect Centre.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
