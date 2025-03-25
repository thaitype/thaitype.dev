import type { Contributor } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

interface ContributorsProps {
  contributors: Contributor[]
}

export function Contributors({ contributors }: ContributorsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Contributors</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Thaitype is made possible by the contributions of these amazing people and many more from around the world.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {contributors.map((contributor) => (
              <a
                key={contributor.id}
                href={contributor.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex flex-col items-center">
                  <Avatar className="h-16 w-16 mb-2 border border-border group-hover:border-primary transition-colors">
                    <AvatarImage src={contributor.avatarUrl} alt={contributor.name} />
                    <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm font-medium">{contributor.name}</div>
                  {contributor.role && <div className="text-xs text-muted-foreground">{contributor.role}</div>}
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              <span>View All Contributors</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

