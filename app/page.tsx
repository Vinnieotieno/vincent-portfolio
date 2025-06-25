// app/page.tsx
import HeroClient from "./components/HeroClient"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import LoadingScreen from "./components/LoadingScreen"
import ProgressIndicator from "./components/ProgressIndicator"


export default function Home() {
  return (
    <>
     
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
