import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Portfolio | Modern & Clean",
  description:
    "A showcase of my work in React, Laravel, Next.js, and Firebase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
