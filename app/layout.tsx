import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./contexts/ThemeContext"

const inter = Inter({ subsets: ["latin"] })
const siteUrl = "https://vincentotieno.dev"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vincent Otieno - Frontend Developer, Software Engineer & Fullstack Developer",
    template: "%s | Vincent Otieno",
  },
  description:
    "Portfolio of Vincent Otieno Odhiambo - Frontend Developer, Software Engineer, and Fullstack Developer building responsive, high-performance web applications with React.js, Vue.js, MERN stack, GraphQL, and real-time WebSocket features.",
  keywords:
    [
      "Vincent Otieno",
      "Frontend Developer",
      "Software Engineer",
      "Fullstack Developer",
      "React.js",
      "Vue.js",
      "MERN stack",
      "GraphQL",
      "Apollo Client",
      "WebSocket",
      "Material-UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Kenya",
    ],
  authors: [{ name: "Vincent Otieno Odhiambo" }],
  alternates: {
    canonical: "/",
  },
  category: "technology",
  creator: "Vincent Otieno Odhiambo",
  publisher: "Vincent Otieno Odhiambo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Vincent Otieno - Frontend Developer, Software Engineer & Fullstack Developer",
    description: "Portfolio showcasing enterprise CRM, real-time tracking, and eCommerce projects built with React.js, Vue.js, MERN stack, GraphQL, and WebSocket technologies.",
    url: siteUrl,
    siteName: "Vincent Otieno Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/enterprise-crm.png",
        width: 1024,
        height: 576,
        alt: "Vincent Otieno Portfolio Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Otieno - Frontend Developer & Fullstack Software Engineer",
    description: "Frontend and fullstack portfolio featuring React.js, Vue.js, MERN stack, GraphQL, and real-time application development.",
    images: ["/enterprise-crm.png"],
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
