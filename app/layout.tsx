import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";

export const metadata: Metadata = {
  title: "Dennis Ooki Magolo — Software Developer & Digital Craftsman",
  description:
    "Portfolio of Dennis Ooki Magolo — a Software Developer and IT Specialist crafting full-stack, mobile, and web solutions with precision and care.",
  keywords: [
    "Dennis Ooki",
    "Software Developer",
    "Full Stack Developer",
    "Flutter",
    "React",
    "Django",
    "Portfolio",
  ],
  openGraph: {
    title: "Dennis Ooki Magolo — Software Developer & Digital Craftsman",
    description:
      "Portfolio of Dennis Ooki Magolo — crafting digital solutions with the precision of an artisan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ScrollProgress />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
