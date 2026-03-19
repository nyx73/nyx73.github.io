import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rhythm Chavda | Computer Engineering Student & Developer",
  description:
    "Personal portfolio of Rhythm Chavda — Computer Engineering student focused on Android development, web development, and AI-based systems. Active in hackathons and competitions.",
  keywords: [
    "Rhythm Chavda",
    "portfolio",
    "computer engineering",
    "android development",
    "web development",
    "hackathon",
    "nyx73",
  ],
  authors: [{ name: "Rhythm Chavda", url: "https://github.com/nyx73" }],
  openGraph: {
    title: "Rhythm Chavda | Developer Portfolio",
    description:
      "Computer Engineering student building practical software — Android, Web, and AI projects.",
    url: "https://nyx73.github.io",
    siteName: "Rhythm Chavda Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhythm Chavda | Developer Portfolio",
    description: "Computer Engineering student building practical software.",
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
