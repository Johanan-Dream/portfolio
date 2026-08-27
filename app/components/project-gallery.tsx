"use client";

import { useState } from "react";
import Link from "next/link";
import { ProjectThumb } from "./project-thumb";
import type { Project } from "../portfolio-data";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "personal", label: "Personal" },
  { key: "company", label: "Company" },
  { key: "team", label: "Team" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

function matches(project: Project, key: FilterKey) {
  if (key === "all") return true;
  if (key === "personal") return project.category === "personal";
  if (key === "team") return project.category === "company" && (project.team ?? 1) > 1;
  return project.category === "company" && (project.team ?? 1) <= 1;
}

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const counts = Object.fromEntries(
    FILTERS.map((f) => [f.key, projects.filter((p) => matches(p, f.key)).length]),
  ) as Record<FilterKey, number>;

  const visible = projects.filter((p) => matches(p, filter));

  return (
    <>
      <div className="filter-tabs" role="tablist" aria-label="프로젝트 필터">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            role="tab"
            aria-selected={filter === f.key}
            className={filter === f.key ? "active" : undefined}
            onClick={() => setFilter(f.key)}
          >
            {f.label} <span>{String(counts[f.key]).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <Link key={project.number} href={`/work/${project.slug}`} className={`project-tile${project.featured ? " tile-wide" : ""}`}>
            <div className="project-tile-thumb"><ProjectThumb project={project}/></div>
            <div className="project-tile-meta">
              <h3>{project.title}</h3>
              <p>{project.category === "company" ? "Company" : "Personal"}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
