import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Cirqle Studio",
  description: "Your Vision. Our Strategy. Unstoppable Growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-[#0a0a0a] text-[#ededed]`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
