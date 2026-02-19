"use client";

import * as React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { TemplateGrid } from "@/components/template-grid";
import { TemplateList } from "@/components/template-list";
import {
  TemplateFilters,
  type SortOption,
} from "@/components/template-filters";
import { useViewMode } from "@/hooks/use-view-mode";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { Template } from "@/components/template-card";

// Mock data for demonstration
const mockTemplates: Template[] = [
  {
    id: "1",
    name: "Scope of Work",
    description:
      "Template Section for defining the overarching contracts.",
    tags: ["General", "Maintenance", "Facilities"],
    icon: "wrench" as const,
    color: "orange" as const,
    owner: { id: "user-1", name: "John Smith" },
    isShared: true,
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
  },
  {
    id: "2",
    name: "Government and Industry Standards and Regulations",
    description:
      "Comprehensive list of standards the work must adhere to.",
    tags: ["IT", "Support", "SLA"],
    icon: "monitor" as const,
    color: "blue" as const,
    owner: { id: "user-1", name: "John Smith" },
    isShared: false,
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
  },
];

export default function BaseTemplatesPage() {
  const { data: session } = useSession();
  const { viewMode, setViewMode } = useViewMode();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sortBy, setSortBy] = React.useState<SortOption>("date");
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const availableTags = React.useMemo(() => {
    const tagSet = new Set<string>();
    mockTemplates.forEach((t) => t.tags?.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, []);

  React.useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort templates
  const filteredTemplates = React.useMemo(() => {
    let result = [...mockTemplates];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(query) ||
          t.description?.toLowerCase().includes(query) ||
          t.owner.name.toLowerCase().includes(query) ||
          t.tags?.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      result = result.filter((t) =>
        selectedTags.some((tag) => t.tags?.includes(tag)),
      );
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "owner":
          return a.owner.name.localeCompare(b.owner.name);
        case "date":
        default:
          return b.updatedAt.getTime() - a.updatedAt.getTime();
      }
    });

    return result;
  }, [searchQuery, sortBy, selectedTags]);

  const ViewComponent = viewMode === "grid" ? TemplateGrid : TemplateList;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Base Templates</h2>
          <p className="text-muted-foreground">
            Pre-approved SOW templates for common service types.
          </p>
        </div>
        <Link href="/edit">
          <Button>
            <Plus className="mr-1 h-4 w-4" />
            New Template
          </Button>
        </Link>
      </div>

      <TemplateFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        availableTags={availableTags}
        selectedTags={selectedTags}
        onTagsChange={setSelectedTags}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <ViewComponent
        templates={filteredTemplates}
        isLoading={isLoading}
        currentUserId={session?.user?.id}
        emptyMessage="No templates found"
        emptyDescription="Try adjusting your search or create a new template."
      />
    </div>
  );
}
