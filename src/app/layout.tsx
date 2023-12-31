import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelly Drill Water Company",
  description: "This is Kelly Drill Water Company Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white font-medium ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
