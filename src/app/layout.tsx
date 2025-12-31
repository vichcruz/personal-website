import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import "./globals.css";

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fragment-mono",
});

export const metadata: Metadata = {
  title: "Victor Cruz - Personal Website",
  description:
    "Welcome to my personal website where you can learn about my skills, projects, and more about my journey in software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fragmentMono.variable}>{children}</body>
    </html>
  );
}
