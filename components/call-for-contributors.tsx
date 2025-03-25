import { Button } from "@/components/ui/button"
import { Code, Heart, Users } from "lucide-react"

export function CallForContributors() {
  return (
    <section className="py-16 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 text-muted-foreground">
            We're looking for passionate developers to help us build the future of TypeScript tooling. Whether you're a
            TypeScript expert or just getting started, there's a place for you in our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contribute Code</h3>
              <p className="text-muted-foreground text-center">
                Help us build new features, fix bugs, and improve performance.
              </p>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Community</h3>
              <p className="text-muted-foreground text-center">
                Help with documentation, tutorials, and supporting other developers.
              </p>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Spread the Word</h3>
              <p className="text-muted-foreground text-center">Share our projects, give feedback, and help us grow.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-6 text-lg h-auto">
              <a href="https://github.com/thaitype" target="_blank" rel="noopener noreferrer">
                Get Started on GitHub
              </a>
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg h-auto">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Join Our Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

