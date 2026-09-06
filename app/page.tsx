import { NetworkGraph } from "./components/network-graph";
import { ProjectGallery } from "./components/project-gallery";
import { capabilities, projects } from "./portfolio-data";

export default function Home() {
  return <main id="top">
    <section className="hero" aria-labelledby="hero-title"><NetworkGraph/><div className="hero-kicker"><span>KIM HYEMI · BACKEND DEVELOPER · AI-NATIVE BUILDER</span><span>PORTFOLIO · 2026</span></div><h1 id="hero-title"><span>복잡한 요구를</span><span className="outline">작동하는 서비스로.</span></h1><div className="hero-bottom"><p>Java·Spring 기반 백엔드 실무를 중심으로 서비스 전체를 이해하고 AI를 활용해 구현 범위를 넓혀가는 개발자입니다. 요구사항을 구조화하고 필요한 경우 프론트엔드와 배포까지 직접 구현해 검증 가능한 결과로 연결합니다.</p><div className="hero-links"><a href="#work">프로젝트 보기 <b>↓</b></a><a href="https://github.com/Johanan-Dream" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
    <section className="intro-strip" aria-label="경력 요약"><div><small>ROLE</small><strong>백엔드 중심 풀스택</strong></div><div><small>BUILD</small><strong>0 → 1 서비스 구현</strong></div><div><small>RANGE</small><strong>요구사항부터 배포까지</strong></div><div><small>AI-NATIVE</small><strong>AI로 구현 범위 확장</strong></div></section>
    <section className="work-section" id="work"><div className="section-heading"><span>SELECTED WORK</span><div><h2>주요 프로젝트</h2><p>담당 역할과 기술적 문제 해결을 중심으로 정리했습니다.</p></div></div><ProjectGallery projects={projects}/></section>
    <section className="profile-section" id="profile"><div className="section-heading light"><span>PROFILE</span><div><h2>백엔드에서 시작해<br/>제품 전체를 완성합니다.</h2></div></div><div className="profile-copy"><p className="lead">Java·Spring 백엔드 개발로 실무를 시작해 금융·헬스케어·해외 POS 프로젝트를 경험했습니다. 이후 1인 개발을 통해 기획부터 화면 구현·API·데이터베이스 설계·배포까지 전 과정을 맡았습니다.</p><p>낯선 도메인의 규칙을 빠르게 파악하고 예외 상황을 코드로 구체화하는 데 강점이 있습니다. AI 도구로 요구사항을 정리하고 화면·API 초안을 빠르게 만든 뒤, 생성된 결과는 직접 실행·수정·테스트해 서비스 수준으로 검증합니다.</p></div><div className="capabilities">{capabilities.map(([name,body],index) => <div key={name}><span>{String(index+1).padStart(2,"0")}</span><h3>{name}</h3><p>{body}</p></div>)}</div></section>
    <section className="contact" id="contact"><span>CONTACT</span><p>새로운 환경의 코드를 빠르게 파악하고<br/>필요한 기능을 끝까지 구현합니다.</p><a href="mailto:qnlqlaqkq120@gmail.com">qnlqlaqkq120@gmail.com <b aria-hidden="true">↗</b></a></section>
    <a className="floating-top" href="#top" aria-label="맨 위로 이동">↑ <span>TOP</span></a>
  </main>;
}
