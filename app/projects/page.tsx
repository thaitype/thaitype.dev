import { FilteredProjects } from "@/components/filtered-projects"
import { ThemeToggle } from "@/components/theme-toggle"
import { getProjects } from "@/lib/data"
import Link from "next/link"
import { ArrowLeft, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header with theme toggle */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center border-b border-border">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-8 w-8 text-primary"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
              </svg>
              <span className="text-xl font-bold">Thaitype</span>
            </div>
          </Link>
        </div>
        <ThemeToggle />
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 group transition-colors"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Thaitype Projects</h1>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            Browse all open source projects from the Thaitype community. Our projects focus on TypeScript tooling,
            libraries, and utilities to help developers build better software.
          </p>

          <FilteredProjects projects={projects} />

          {/* GitHub Organization Link */}
          <div className="mt-20 text-center py-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">Explore More on GitHub</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover all our projects, contribute to the community, and stay updated with the latest developments.
            </p>
            <Button asChild size="lg" className="gap-2">
              <a href="https://github.com/thaitype" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span>Visit Thaitype on GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </main>

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

