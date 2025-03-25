import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { QuoteIcon } from "lucide-react"

export function Founder() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
              <AvatarImage src="/placeholder.svg?height=200&width=200" alt="Thada Wangthammang" />
              <AvatarFallback>TW</AvatarFallback>
            </Avatar>

            <h3 className="text-2xl font-bold mb-1">Thada Wangthammang</h3>
            <p className="text-muted-foreground mb-6">Founder, Thaitype</p>

            <div className="relative">
              <QuoteIcon className="h-8 w-8 text-primary/20 absolute -top-4 -left-4" />
              <blockquote className="text-xl italic mb-6 px-8">
                "I have received so much from the community—now it's my turn to give back. I want to share what I know
                and help grow a thriving community, especially here in Thailand."
              </blockquote>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/mildronize"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/mildronize"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/thada-wangthammang/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

