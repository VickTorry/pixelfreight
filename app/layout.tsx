// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Pixelfreight — Websites that deliver",
  description: "We're building websites that deliver.",
  icons: {
    icon: [
      { url: "/favicon-light.ico", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.ico", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: {
    title: "Pixelfreight — Websites that deliver",
    description: "We’re building websites that deliver.",
    url: "https://pixelfreight.com",
    siteName: "Pixelfreight",
    images: [
      {
        url: "logo-header.png",
        width: 1200,
        height: 630,
        alt: "Pixelfreight websites that deliver",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelfreight — Websites that deliver",
    description: "We’re building websites that deliver.",
    images: ["logo-header.png"],
  },
  // ✅ Adds static meta tag so Ahrefs can verify the site
  verification: {
    other: {
      "ahrefs-site-verification":
        "031b21edcf90fff6e81a828d8eb4ae2c4e9ba45a4199049268167d8e5c21394",
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VGSZL7BMLN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VGSZL7BMLN');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "szcfx00kwr");
          `}
        </Script>
        {/* Ahrefs Web Analytics */}
        <Script id="ahrefs-analytics" strategy="afterInteractive">
        {`
          (function(){
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://analytics.ahrefs.com/analytics.js';
                s.setAttribute('data-key', 'a6eFHO8dCMvcz2Sr2lB/Pw');
                document.head.appendChild(s);
          })();
        `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
