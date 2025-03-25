import { ProjectShowcase } from "@/components/project-showcase"
import { ThemeToggle } from "@/components/theme-toggle"
import { About } from "@/components/about"
import { Partners } from "@/components/partners"
import { Founder } from "@/components/founder"
import { Contributors } from "@/components/contributors"
import { CallForContributors } from "@/components/call-for-contributors"
import { getProjects, getPartners, getContributors } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const projects = getProjects()
  const partners = getPartners()
  const contributors = getContributors()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with theme toggle */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-primary" stroke="currentColor" strokeWidth="2">
            <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
          </svg>
          <span className="text-xl font-bold">Thaitype</span>
        </div>
        <ThemeToggle />
      </header>

      {/* Hero section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-primary">Thai</span>type
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-muted-foreground">
          Open source community especially focused on TypeScript
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/thaitype"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-md font-medium transition-colors"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About section */}
      <About />

      {/* Projects showcase */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Projects</h2>
        <ProjectShowcase projects={projects} />

        {/* Show More Projects Link */}
        <div className="mt-12 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-lg font-medium group transition-colors"
          >
            <span className="border-b-2 border-primary/30 group-hover:border-primary transition-colors">
              View All Projects
            </span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Founder section */}
      <Founder />

      {/* Contributors section */}
      <Contributors contributors={contributors} />

      {/* Partners section */}
      <section className="container mx-auto px-4 py-16 border-t border-border">
        <Partners partners={partners} />
      </section>

      {/* Call for Contributors */}
      <CallForContributors />

      {/* Footer */}
      <footer className="container mx-auto py-8 px-4 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Thaitype. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/thaitype"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contributors
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

