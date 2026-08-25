"use client";

import { useState } from "react";
import Link from "next/link";
import { ProjectThumb } from "./project-thumb";
import { teamLabel, type Project } from "../portfolio-data";

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
  const featured = projects.find((p) => p.featured);

  const counts = Object.fromEntries(
    FILTERS.map((f) => [f.key, projects.filter((p) => matches(p, f.key)).length]),
  ) as Record<FilterKey, number>;

  const visible = projects.filter((p) => matches(p, filter));

  return (
    <>
      {featured && (
        <Link href={`/work/${featured.slug}`} className="featured-project">
          <div className="featured-project-thumb"><ProjectThumb project={featured}/></div>
          <div className="featured-project-info">
            <span>Featured Project</span>
            <h3>{featured.title}</h3>
            <span className="featured-project-cta">프로젝트 보기 ↗</span>
          </div>
        </Link>
      )}
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
              <p>{project.category === "company" ? "Company" : "Personal"}{teamLabel(project.team) && ` · ${teamLabel(project.team)}`}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
