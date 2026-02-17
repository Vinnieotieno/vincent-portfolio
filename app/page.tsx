// app/page.tsx
import type { Metadata } from "next"
import HeroClient from "./components/HeroClient"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import LoadingScreen from "./components/LoadingScreen"
import ProgressIndicator from "./components/ProgressIndicator"

const siteUrl = "https://vincentotieno.dev"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Vincent Otieno's portfolio projects in enterprise CRM, real-time shipment tracking, eCommerce platforms, and full-stack web engineering.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vincent Otieno Portfolio",
    description:
      "Enterprise CRM, tracking, and eCommerce projects built with React.js, Vue.js, GraphQL, and modern full-stack technologies.",
    url: siteUrl,
    images: [
      {
        url: "/enterprise-crm.png",
        width: 1024,
        height: 576,
        alt: "Vincent Otieno portfolio preview",
      },
    ],
  },
}

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vincent Otieno Odhiambo",
    jobTitle: "Frontend Developer, Software Engineer, Fullstack Developer",
    url: siteUrl,
    sameAs: [
      "https://github.com/Vinnieotieno",
      "https://medium.com/@vincentotienoakuku",
    ],
    knowsAbout: [
      "React.js",
      "Vue.js",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "Django",
      "Spring Boot",
      "PostgreSQL",
      "MongoDB",
      "WebSocket",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vincent Otieno Portfolio",
    url: siteUrl,
    description:
      "Portfolio of Vincent Otieno showcasing software engineering and full-stack projects.",
    inLanguage: "en",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <LoadingScreen />
      <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        <ProgressIndicator />
        <Navigation />
        <HeroClient />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </>
  )
}
