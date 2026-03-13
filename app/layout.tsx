import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import { defaultMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-headline-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${inter.variable} font-body antialiased`}
        style={
          {
            "--font-headline": "var(--font-headline-display), Georgia, serif",
            "--font-body": "var(--font-inter), system-ui, sans-serif",
          } as React.CSSProperties
        }
      >
        <JsonLd type="organization" />
        <JsonLd type="service" />
        <JsonLd type="localBusiness" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
