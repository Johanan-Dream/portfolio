import type { Project } from "../portfolio-data";

export function ProjectCard({ project }: { project: Project }) {
  return <article className={`project-card${project.featured ? " featured" : ""}`}>
    <div className="project-index"><span>{project.number}</span><time>{project.period}</time></div>
    <div className="project-main">
      <div className="project-title"><p>{project.role}</p><h3>{project.title}</h3></div>
      <p className="project-summary">{project.summary}</p>
      <dl className="project-meta"><div><dt>담당 영역</dt><dd>{project.scope}</dd></div><div><dt>기술</dt><dd>{project.stack.join(" · ")}</dd></div></dl>
      <details open={project.featured || undefined}><summary>핵심 구현 보기 <span aria-hidden="true">+</span></summary><div className="detail-grid">{project.details.map((detail) => <div key={detail.title}><h4>{detail.title}</h4><p>{detail.description}</p></div>)}</div></details>
    </div>
  </article>;
}
