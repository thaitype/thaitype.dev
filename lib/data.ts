import type { Contributor, Partner, Project } from "./types"

export function getProjects(): Project[] {
  // This would typically come from an API or database
  // Using static data for demonstration
  return [
    {
      id: "typechat-ts",
      name: "TypeChat-TS",
      description: "TypeScript implementation of TypeChat",
      longDescription:
        "A TypeScript library that leverages types to help applications communicate with LLMs using natural language.",
      tags: ["typescript", "llm", "ai", "language-model"],
      stars: 342,
      githubUrl: "https://github.com/thaitype/typechat-ts",
      demoUrl: "https://typechat-ts-demo.vercel.app/",
      docsUrl: "https://thaitype.github.io/typechat-ts/",
      status: "active",
      lastUpdated: "2023-12-15",
    },
    {
      id: "ts-schema-validator",
      name: "TS Schema Validator",
      description: "Runtime type validation with TypeScript",
      longDescription:
        "A lightweight, type-safe validation library for TypeScript with zero dependencies and full type inference.",
      tags: ["typescript", "validation", "schema", "type-safety"],
      stars: 187,
      githubUrl: "https://github.com/thaitype/ts-schema-validator",
      docsUrl: "https://thaitype.github.io/ts-schema-validator/",
      status: "stable",
      lastUpdated: "2023-11-20",
    },
    {
      id: "react-hooks-ts",
      name: "React Hooks TS",
      description: "Collection of typed React hooks",
      longDescription:
        "A comprehensive collection of React hooks with full TypeScript support for building type-safe React applications.",
      tags: ["react", "typescript", "hooks", "frontend"],
      stars: 256,
      githubUrl: "https://github.com/thaitype/react-hooks-ts",
      demoUrl: "https://react-hooks-ts.vercel.app/",
      docsUrl: "https://thaitype.github.io/react-hooks-ts/",
      status: "active",
      lastUpdated: "2024-01-05",
    },
    {
      id: "thai-graphql",
      name: "Thai GraphQL",
      description: "GraphQL utilities for TypeScript",
      longDescription:
        "A set of utilities and helpers for building type-safe GraphQL APIs with TypeScript and code generation.",
      tags: ["graphql", "typescript", "api", "codegen"],
      stars: 124,
      githubUrl: "https://github.com/thaitype/thai-graphql",
      status: "maintenance",
      lastUpdated: "2023-09-10",
    },
    {
      id: "ts-pattern",
      name: "TS Pattern",
      description: "Pattern matching for TypeScript",
      longDescription:
        "Exhaustive pattern matching with compile-time checks for TypeScript, inspired by functional programming patterns.",
      tags: ["typescript", "pattern-matching", "functional"],
      stars: 298,
      githubUrl: "https://github.com/thaitype/ts-pattern",
      demoUrl: "https://ts-pattern-playground.vercel.app/",
      docsUrl: "https://thaitype.github.io/ts-pattern/",
      status: "stable",
      lastUpdated: "2023-12-28",
    },
    {
      id: "thai-formatter",
      name: "Thai Formatter",
      description: "Code formatter for TypeScript projects",
      longDescription:
        "An opinionated code formatter for TypeScript projects with configurable rules and IDE integrations.",
      tags: ["typescript", "formatter", "linter", "tooling"],
      stars: 156,
      githubUrl: "https://github.com/thaitype/thai-formatter",
      status: "experimental",
      lastUpdated: "2024-02-01",
    },
  ]
}

export function getPartners(): Partner[] {
  return [
    {
      id: "typescript",
      name: "TypeScript",
      logoUrl: "/placeholder.svg?height=80&width=80",
      websiteUrl: "https://www.typescriptlang.org/",
    },
    {
      id: "microsoft",
      name: "Microsoft",
      logoUrl: "/placeholder.svg?height=80&width=80",
      websiteUrl: "https://www.microsoft.com/",
    },
    {
      id: "vercel",
      name: "Vercel",
      logoUrl: "/placeholder.svg?height=80&width=80",
      websiteUrl: "https://vercel.com/",
    },
    {
      id: "github",
      name: "GitHub",
      logoUrl: "/placeholder.svg?height=80&width=80",
      websiteUrl: "https://github.com/",
    },
    {
      id: "digitalocean",
      name: "DigitalOcean",
      logoUrl: "/placeholder.svg?height=80&width=80",
      websiteUrl: "https://www.digitalocean.com/",
    },
  ]
}

export function getContributors(): Contributor[] {
  return [
    {
      id: "contributor1",
      name: "Jane Smith",
      avatarUrl: "/placeholder.svg?height=100&width=100",
      githubUrl: "https://github.com/janesmith",
      role: "Core Maintainer",
    },
    {
      id: "contributor2",
      name: "John Doe",
      avatarUrl: "/placeholder.svg?height=100&width=100",
      githubUrl: "https://github.com/johndoe",
      role: "Documentation",
    },
    {
      id: "contributor3",
      name: "Alex Johnson",
      avatarUrl: "/placeholder.svg?height=100&width=100",
      githubUrl: "https://github.com/alexjohnson",
      role: "TypeScript Expert",
    },
    {
      id: "contributor4",
      name: "Sarah Lee",
      avatarUrl: "/placeholder.svg?height=100&width=100",
      githubUrl: "https://github.com/sarahlee",
      role: "Community Manager",
    },
    {
      id: "contributor5",
      name: "Michael Brown",
      avatarUrl: "/placeholder.svg?height=100&width=100",
      githubUrl: "https://github.com/michaelbrown",
    },
    {
      id: "contributor6",
      name: "Emily Chen",
      avatarUrl: "/placeholder.svg?height=100&width=100",
      githubUrl: "https://github.com/emilychen",
    },
    {
      id: "contributor7",
      name: "David Kim",
      avatarUrl: "/placeholder.svg?height=100&width=100",
      githubUrl: "https://github.com/davidkim",
    },
    {
      id: "contributor8",
      name: "Lisa Wang",
      avatarUrl: "/placeholder.svg?height=100&width=100",
      githubUrl: "https://github.com/lisawang",
    },
    {
      id: "contributor9",
      name: "Robert Garcia",
      avatarUrl: "/placeholder.svg?height=100&width=100",
      githubUrl: "https://github.com/robertgarcia",
    },
    {
      id: "contributor10",
      name: "Olivia Taylor",
      avatarUrl: "/placeholder.svg?height=100&width=100",
      githubUrl: "https://github.com/oliviataylor",
    },
    {
      id: "contributor11",
      name: "James Wilson",
      avatarUrl: "/placeholder.svg?height=100&width=100",
      githubUrl: "https://github.com/jameswilson",
    },
    {
      id: "contributor12",
      name: "Sophia Martinez",
      avatarUrl: "/placeholder.svg?height=100&width=100",
      githubUrl: "https://github.com/sophiamartinez",
    },
  ]
}

