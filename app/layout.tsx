import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSI Break Enforcer — Prevent RSI with Smart Coding Break Reminders",
  description: "Monitor keyboard and mouse activity to detect RSI risk factors and enforce smart break reminders. Built for developers who code for hours."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9a13639b-36cd-4c77-9649-29626e4f4b08"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
