import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelly Drill Water Company",
  description: "Expert water well drilling services for residential, agricultural, and commercial needs. With state-of-the-art equipment and decades of experience, we provide reliable, efficient, and environmentally responsible water solutions. From site assessment to well maintenance, trust Kelly Drill Water for all your groundwater needs.",
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
