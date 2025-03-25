export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  tags: string[]
  stars: number
  githubUrl: string
  demoUrl?: string
  docsUrl?: string
  status: "active" | "stable" | "maintenance" | "experimental"
  lastUpdated: string // ISO date string
}

export interface Partner {
  id: string
  name: string
  logoUrl: string
  websiteUrl: string
}

export interface Contributor {
  id: string
  name: string
  avatarUrl: string
  githubUrl: string
  role?: string
}

