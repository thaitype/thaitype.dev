import type { Partner } from "@/lib/types"
import Image from "next/image"

interface PartnersProps {
  partners: Partner[]
}

export function Partners({ partners }: PartnersProps) {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform hover:scale-105"
            aria-label={`Visit ${partner.name} website`}
          >
            <div className="w-24 h-24 relative flex items-center justify-center bg-background rounded-lg p-4 border border-border">
              <Image
                src={partner.logoUrl || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={80}
                height={80}
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
            <p className="mt-2 text-center text-sm text-muted-foreground">{partner.name}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

