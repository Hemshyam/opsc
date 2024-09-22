import type { Metadata } from "next";
import localFont from "next/font/local";
import './globals.css'

export const metadata: Metadata = {
  title: "OPSC",
  description: "Open Source Programming Club Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <span className='grad1'></span>
        <span className='grad2'></span>
        {children}
      </body>
    </html>
  );
}
