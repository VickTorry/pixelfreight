// app/privacy-policy/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Pixelfreight",
  description:
    "How Pixelfreight collects, uses, and protects your information, including cookies, analytics, retention, and your rights.",
};

// This layout just renders the page; it's server by default (no "use client")
export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
