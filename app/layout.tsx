import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ahmed Adel | Creative Pioneer & Web Developer",
    template: "%s | Ahmed Adel",
  },
  description: "Portfolio of Ahmed Adel, a Creative Pioneer and Web Developer specializing in high-performance web solutions, React, and Next.js architectures.",
  keywords: [
    "Ahmed Adel", 
    "Software Engineer", 
    "Frontend Developer", 
    "Creative Pioneer", 
    "React Developer", 
    "Next.js Expert", 
    "Web Architecture",
    "Web Developer",
    "UI/UX Design"
  ],
  authors: [{ name: "Ahmed Adel", url: "https://github.com/AhmedAdel700" }],
  creator: "Ahmed Adel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmed-adel-dev.vercel.app",
    title: "Ahmed Adel | Creative Pioneer",
    description: "High-performance web solutions where technical precision meets modern aesthetics. Exploring the synergy of React and Next.js.",
    siteName: "Ahmed Adel Portfolio",
    images: [
      {
        url: "/assets/mainWebsiteImage.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Adel - Creative Pioneer & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Adel | Creative Pioneer",
    description: "High-performance web solutions where technical precision meets modern aesthetics.",
    images: ["/assets/mainWebsiteImage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030014]">
        <Header />
        {children}
      </body>
    </html>
  );
}
