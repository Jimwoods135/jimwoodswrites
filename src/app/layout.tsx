import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://jimwoodswrites.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jim Woods | Book Publishing Consultant | Cuyahoga Falls, OH",
    template: "%s | Jim Woods",
  },
  description:
    "Jim Woods is a published author and book publishing consultant based in Cuyahoga Falls, Ohio. Book coaching, developmental editing, formatting, and self-publishing services.",
  keywords: [
    "book publishing consultant",
    "book coach",
    "book coaching",
    "developmental editing",
    "self-publishing",
    "book formatting",
    "Cuyahoga Falls",
    "Ohio",
    "author",
    "non-fiction book help",
    "how to write a book",
    "memoir writing coach",
    "business book author",
  ],
  authors: [{ name: "Jim Woods", url: siteUrl }],
  creator: "Jim Woods",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Jim Woods — Author & Book Publishing Consultant",
    title: "Jim Woods | Book Publishing Consultant | Cuyahoga Falls, OH",
    description:
      "Published author and book publishing consultant helping non-fiction writers bring their book into the world. Based in Cuyahoga Falls, Ohio.",
    images: [
      {
        url: "/headshot.jpg",
        width: 800,
        height: 1000,
        alt: "Jim Woods — Author & Book Publishing Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jim Woods | Book Publishing Consultant | Cuyahoga Falls, OH",
    description:
      "Published author and book publishing consultant helping non-fiction writers bring their book into the world. Based in Cuyahoga Falls, Ohio.",
    images: ["/headshot.jpg"],
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
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="bg-navy-950 text-slate-100 antialiased">
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
