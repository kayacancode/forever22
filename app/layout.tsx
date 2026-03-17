import type { Metadata } from "next";
import { Anton, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Forever 22 - AI is a forever thing.",
  description: "We build institutional intelligence systems — AI that turns your team's knowledge into systems that remember, learn, and scale with you.",
  icons: {
    icon: "/logo-stamp.png",
  },
  openGraph: {
    title: "Forever 22 - AI is a forever thing.",
    description: "We build institutional intelligence systems — AI that turns your team's knowledge into systems that remember, learn, and scale with you.",
    images: [
      {
        url: "/forever22artlogo.png",
        width: 1024,
        height: 1024,
        alt: "Forever 22 - Created with Institutional Intelligence",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forever 22 - AI is a forever thing.",
    description: "We build institutional intelligence systems — AI that turns your team's knowledge into systems that remember, learn, and scale with you.",
    images: ["/forever22artlogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
