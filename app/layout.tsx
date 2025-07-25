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
  title: "Pixelfreight — Under Construction",
  description: "We're building something exciting. Leave your email to stay updated!",
  openGraph: {
    title: "Pixelfreight — Under Construction",
    description: "We’re almost there. Get notified when we launch.",
    url: "https://pixelfreight.com",
    siteName: "Pixelfreight",
    images: [
      {
        url: "underconstruction-img-not-transparent.jpg",
        width: 1200,
        height: 630,
        alt: "Pixelfreight under construction",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelfreight — Under Construction",
    description: "We’re almost there. Get notified when we launch.",
    images: ["underconstruction-img-not-transparent.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
