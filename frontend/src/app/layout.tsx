import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

export const metadata: Metadata = {
  title: "iPhone4Cast AI",
  description: "Predict future iPhone prices with the power of Machine Learning!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
