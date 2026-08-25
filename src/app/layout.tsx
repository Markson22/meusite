import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { profile } from "@/data/profile";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const siteUrl = profile.website;
const description =
  "AI Engineer especializado em soluções de Inteligência Artificial, Python, APIs, dados, SQL, BigQuery e GCP.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Markson César | AI Engineer",
    template: "%s | Markson César"
  },
  description,
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "Markson César | AI Engineer",
    description,
    url: siteUrl,
    siteName: "Markson César",
    images: [
      {
        url: "/images/markson.jpeg",
        width: 709,
        height: 945,
        alt: "Markson César"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Markson César | AI Engineer",
    description,
    images: ["/images/markson.jpeg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
