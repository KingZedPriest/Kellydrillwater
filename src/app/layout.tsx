import type { Metadata } from "next";
import { Toaster } from "sonner";

//Styles
import "./globals.css";

//Font
import { Inter } from "next/font/google";

//Component
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
    <html lang="en" className="scroll-smooth">
      <body className={`bg-white font-medium ${inter.className} text-xs md:text-sm xl:text-base`}>
        <Header />
        {children}
        <Footer />
        <Toaster richColors position="top-center" closeButton />
      </body>
    </html>
  );
}
