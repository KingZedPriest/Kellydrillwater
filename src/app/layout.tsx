import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kelly Drill Water Company',
  description: 'This is Kelly Drill Water Company Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header/>
      <body className={`bg-white text-black ${inter.className}`}>{children}</body>
      <Footer />
    </html>
  )
}
