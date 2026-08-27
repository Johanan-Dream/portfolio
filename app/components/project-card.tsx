import Link from "next/link";
import { ProjectThumb } from "./project-thumb";
import { ProjectSlideshow } from "./project-slideshow";
import { projects, type Project } from "../portfolio-data";

export function ProjectDetail({ project }: { project: Project }) {
  const index = projects.findIndex((p) => p.number === project.number);
  const next = projects[(index + 1) % projects.length];
  const composition = project.category === "company" ? "Company" : "Personal";

  return <article className="project-detail">
    <div className="project-detail-header">
      <span className="project-num">{project.number}</span>
      <span className="project-heading"><p>{project.role}</p><h3>{project.title}</h3></span>
      <time>{project.period}</time>
    </div>

    <ProjectSlideshow project={project}/>

    <p className="project-summary">{project.summary}</p>

    <div className="project-meta-cards">
      <div><dt>담당 영역</dt><dd>{project.scope}</dd></div>
      <div><dt>기술</dt><dd>{project.stack.join(" · ")}</dd></div>
      <div><dt>구성</dt><dd>{composition}</dd></div>
    </div>

    {project.about && <div className="project-about"><span>About</span><p>{project.about}</p></div>}

    <div className="project-sections">
      {project.details.map((detail, i) => (
        <section key={detail.title} className={`project-section${i % 2 ? " alt" : ""}`}>
          <div className={`project-section-inner${detail.image ? " has-image" : ""}`}>
            <div className="project-section-text">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h4>{detail.title}</h4>
              <p>{detail.description}</p>
            </div>
            {detail.image && <div className="project-section-image"><img src={detail.image} alt={detail.title}/></div>}
          </div>
        </section>
      ))}
    </div>

    <div className="project-next-wrap">
      <Link href={`/work/${next.slug}`} className="project-next">
        <span>Next Project <b aria-hidden="true">↗</b></span>
        <h4>{next.title}</h4>
      </Link>
    </div>
  </article>;
}
