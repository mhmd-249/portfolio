import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mohammed Mohammed | ML Engineer & Researcher",
  description:
    "Machine learning engineer and researcher helping companies build production-grade AI solutions.",
  keywords: "machine learning, AI engineering, agentic AI, ML research",
  authors: [{ name: "Mohammed Mohammed" }],
  openGraph: {
    title: "Mohammed Mohammed | ML Engineer & Researcher",
    description:
      "Machine learning engineer and researcher helping companies build production-grade AI solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Mohammed | ML Engineer & Researcher",
    description:
      "Machine learning engineer and researcher helping companies build production-grade AI solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
