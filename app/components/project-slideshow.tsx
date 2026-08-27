"use client";

import { useState } from "react";
import type { Project } from "../portfolio-data";
import { ProjectThumb } from "./project-thumb";

export function ProjectSlideshow({ project }: { project: Project }) {
  const images = project.images?.length ? project.images : project.image ? [project.image] : [];
  const [active, setActive] = useState(0);

  return <div className="project-thumb project-slideshow">
    {images.length ? <img src={images[active]} alt={`${project.title} 화면 ${active + 1}`}/> : <ProjectThumb project={project}/>} 
    {images.length > 1 && <>
      <button type="button" className="slide-button slide-prev" onClick={() => setActive((current) => (current - 1 + images.length) % images.length)} aria-label="이전 이미지">←</button>
      <button type="button" className="slide-button slide-next" onClick={() => setActive((current) => (current + 1) % images.length)} aria-label="다음 이미지">→</button>
      <div className="slide-dots" aria-label="이미지 선택">
        {images.map((image, index) => <button key={image} type="button" className={index === active ? "active" : undefined} onClick={() => setActive(index)} aria-label={`${index + 1}번 이미지`} aria-current={index === active ? "true" : undefined}/>) }
      </div>
    </>}
    {project.link && <a className="project-thumb-link" href={project.link} target="_blank" rel="noreferrer">프로젝트 보기 ↗</a>}
  </div>;
}
