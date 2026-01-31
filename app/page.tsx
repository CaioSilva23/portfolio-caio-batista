import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        {/* <Projects /> */}

        {/* Education Section */}
        <Education />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  )
}

