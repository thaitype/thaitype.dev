"use client"

import { useState, useMemo } from "react"
import { ProjectShowcase } from "@/components/project-showcase"
import { ProjectFilters } from "@/components/project-filters"
import type { Project } from "@/lib/types"

interface FilteredProjectsProps {
  projects: Project[]
}

export function FilteredProjects({ projects }: FilteredProjectsProps) {
  const [filters, setFilters] = useState({
    search: "",
    status: null as string | null,
    tags: [] as string[],
  })

  // Extract all unique tags from projects
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [projects])

  // Filter projects based on current filters
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by search term
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesSearch =
          project.name.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.longDescription.toLowerCase().includes(searchLower)

        if (!matchesSearch) return false
      }

      // Filter by status
      if (filters.status && project.status !== filters.status) {
        return false
      }

      // Filter by tags
      if (filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some((tag) => project.tags.includes(tag))
        if (!hasMatchingTag) return false
      }

      return true
    })
  }, [projects, filters])

  return (
    <div className="space-y-10">
      <ProjectFilters allTags={allTags} onFiltersChange={setFilters} />

      {filteredProjects.length > 0 ? (
        <ProjectShowcase projects={filteredProjects} />
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No projects found</h3>
          <p className="text-muted-foreground">Try adjusting your filters or search term</p>
        </div>
      )}
    </div>
  )
}

