import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";


const inter = Varela_Round({ subsets: ["latin"],weight:["400"] });

export const metadata: Metadata = {
  title: "Himani Singh",
  description: "Portfolio of Himani Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
