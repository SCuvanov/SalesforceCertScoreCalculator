import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const appSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-app",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://scuvanov.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Salesforce Certification Calculator",
  description:
    "Estimate your Salesforce certification score from section percentages using official-style topic weights. Not affiliated with Salesforce.",
  openGraph: {
    title: "Salesforce Certification Calculator",
    description:
      "Estimate your Salesforce certification score from section percentages.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Certification Calculator",
    description:
      "Estimate your Salesforce certification score from section percentages.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${appSans.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
