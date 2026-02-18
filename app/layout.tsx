import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ReforLanza | Building & Renovation Experts in Lanzarote",
  description:
    "20+ years delivering quality construction and renovations across Lanzarote. Full renovations, new builds, extensions, bathrooms, kitchens and structural work. Request a quote.",
  keywords: [
    "construction Lanzarote",
    "renovation Lanzarote",
    "building Canary Islands",
    "reformas Lanzarote",
    "ReforLanza",
  ],
  openGraph: {
    title: "ReforLanza | Building & Renovation Experts in Lanzarote",
    description:
      "20+ years delivering quality craftsmanship across the island. Request a quote.",
    locale: "en_GB",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
