import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sanjiv Beri — Longevity Performance Strategist",
  description:
    "Sanjiv Beri helps leaders live longer, think sharper and lead with heart. Longevity Performance Strategist, ICF PCC coach and leadership mentor based in Utrecht.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
