"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface ProjectFiltersProps {
  allTags: string[]
  onFiltersChange: (filters: {
    search: string
    status: string | null
    tags: string[]
  }) => void
}

export function ProjectFilters({ allTags, onFiltersChange }: ProjectFiltersProps) {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState<string | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    onFiltersChange({ search: newSearch, status, tags: selectedTags })
  }

  const handleStatusChange = (newStatus: string) => {
    const statusValue = newStatus === "all" ? null : newStatus
    setStatus(statusValue)
    onFiltersChange({ search, status: statusValue, tags: selectedTags })
  }

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag) ? selectedTags.filter((t) => t !== tag) : [...selectedTags, tag]

    setSelectedTags(newTags)
    onFiltersChange({ search, status, tags: newTags })
  }

  const clearFilters = () => {
    setSearch("")
    setStatus(null)
    setSelectedTags([])
    onFiltersChange({ search: "", status: null, tags: [] })
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="search">Search Projects</Label>
          <Input
            id="search"
            placeholder="Search by name or description..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Project Status</Label>
          <Select value={status || "all"} onValueChange={handleStatusChange}>
            <SelectTrigger id="status">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="stable">Stable</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="experimental">Experimental</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label className="mb-2 block">Filter by Tags</Label>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer capitalize"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {(search || status || selectedTags.length > 0) && (
        <div className="flex justify-end">
          <button
            onClick={clearFilters}
            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3 w-3" />
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}

