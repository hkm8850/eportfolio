"use client"

import { useState } from "react"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { CV } from "@/components/sections/cv"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"
import { MatrixRain } from "@/components/matrix-rain"
import { ScrollProgress } from "@/components/scroll-progress"
import { SystemBoot } from "@/components/system-boot"

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false)

  return (
    <>
      <SystemBoot onComplete={() => setBootComplete(true)} />

      {bootComplete && (
        <div className="relative min-h-screen bg-[#0B1220] text-white overflow-x-hidden">
          <MatrixRain />
          <ParticleBackground />
          <ScrollProgress />
          <Navigation />

          <main>
            <Hero />
            <About />
            <Skills />
            <CV />
            <Projects />
            <Contact />
          </main>

          <footer className="relative z-10 border-t border-cyan-500/20 py-8 text-center text-sm text-gray-400">
            <p>© 2025 Data Science Portfolio. Built with Next.js & TailwindCSS</p>
          </footer>
        </div>
      )}
    </>
  )
}
