import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./contexts/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vincent Otieno - Software Developer & Digital Strategist",
  description:
    "Portfolio of Vincent Otieno Odhiambo - Software Developer specializing in React, Next.js, and Digital Marketing. Experienced in full-stack development and SEO optimization.",
  keywords:
    "Vincent Otieno, Software Developer, React Developer, Next.js, Digital Marketing, SEO, Frontend Developer, Kenya",
  authors: [{ name: "Vincent Otieno Odhiambo" }],
  openGraph: {
    title: "Vincent Otieno - Software Developer & Digital Strategist",
    description: "Portfolio showcasing projects and expertise in React, Next.js, and Digital Marketing",
    url: "https://vincentotieno.dev",
    siteName: "Vincent Otieno Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Otieno - Software Developer",
    description: "Software Developer specializing in React and Digital Marketing",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
