import { ShieldCheck, Users, Sparkles } from "lucide-react"

export function About() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Thaitype</h2>

          <div className="prose prose-lg dark:prose-invert mx-auto mb-16">
            <p className="text-center">
              Thaitype is an open-source community dedicated to advancing TypeScript development and best practices.
              Founded by a group of passionate developers, our mission is to create high-quality TypeScript libraries,
              tools, and resources that help developers build better software.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-12 text-center">Our Values</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-primary">Type Safety</h4>
              <p className="text-muted-foreground">
                We believe in the power of strong typing to create more reliable, maintainable, and self-documenting
                code.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-primary">Open Collaboration</h4>
              <p className="text-muted-foreground">
                We foster an inclusive environment where developers of all skill levels can contribute, learn, and grow
                together.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-primary">Developer Experience</h4>
              <p className="text-muted-foreground">
                We prioritize creating tools and libraries that are intuitive, well-documented, and a joy to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

