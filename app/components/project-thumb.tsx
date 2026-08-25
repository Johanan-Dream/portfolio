import type { Project } from "../portfolio-data";

export function ProjectThumb({ project }: { project: Project }) {
  if (project.image) {
    return <img src={project.image} alt={`${project.title} 화면`}/>;
  }
  if (project.category === "company") {
    return <img src="/confidential-thumb.svg" alt="회사 자산 보호를 위해 비공개 처리된 화면"/>;
  }
  return <div className="project-thumb-placeholder">
    <span>{project.number}</span>
    <small>SCREENSHOT SOON</small>
  </div>;
}
