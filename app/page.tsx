import { NetworkGraph } from "./components/network-graph";
import { ProjectGallery } from "./components/project-gallery";
import { capabilities, projects } from "./portfolio-data";

export default function Home() {
  return <main id="top">
    <section className="hero" aria-labelledby="hero-title"><NetworkGraph/><div className="hero-kicker"><span>KIM HYEMI · BACKEND DEVELOPER</span><span>PORTFOLIO · 2026</span></div><h1 id="hero-title"><span>복잡한 요구를</span><span className="outline">작동하는 서비스로.</span></h1><div className="hero-bottom"><p>Java·Spring 기반 백엔드 개발자 김혜미입니다. 금융·헬스케어·POS 도메인의 실무 경험과 1인 풀스택 개발 경험을 바탕으로, 요구사항을 구조화하고 배포 가능한 결과까지 완성합니다.</p><div className="hero-links"><a href="#work">프로젝트 보기 <b>↓</b></a><a href="https://github.com/Johanan-Dream" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
    <section className="intro-strip" aria-label="경력 요약"><div><small>EXPERIENCE</small><strong>3년 차</strong></div><div><small>PROJECTS</small><strong>5건 완료</strong></div><div><small>DOMAIN</small><strong>금융 · 헬스케어 · POS</strong></div><div><small>STACK</small><strong>Java · Spring</strong></div></section>
    <section className="work-section" id="work"><div className="section-heading"><span>SELECTED WORK</span><div><h2>주요 프로젝트</h2><p>담당 역할과 기술적 문제 해결을 중심으로 정리했습니다.</p></div></div><ProjectGallery projects={projects}/></section>
    <section className="profile-section" id="profile"><div className="section-heading light"><span>PROFILE</span><div><h2>백엔드를 중심으로<br/>서비스 전체를 봅니다.</h2></div></div><div className="profile-copy"><p className="lead">Java·Spring 백엔드 개발로 실무를 시작해 금융·헬스케어·해외 POS 프로젝트를 경험했습니다. 이후 1인 개발을 통해 기획부터 화면 구현·API·데이터베이스 설계·배포까지 전 과정을 맡았습니다.</p><p>낯선 도메인의 규칙을 빠르게 파악하고 예외 상황을 코드로 구체화하는 데 강점이 있습니다. AI 도구도 분석과 구현 속도를 높이는 수단으로 활용하며, 결과는 직접 실행하고 테스트해 검증합니다.</p></div><div className="capabilities">{capabilities.map(([name,body],index) => <div key={name}><span>{String(index+1).padStart(2,"0")}</span><h3>{name}</h3><p>{body}</p></div>)}</div></section>
    <section className="contact" id="contact"><span>CONTACT</span><p>새로운 환경의 코드를 빠르게 파악하고<br/>필요한 기능을 끝까지 구현합니다.</p><a href="mailto:qnlqlaqkq120@gmail.com">qnlqlaqkq120@gmail.com <b aria-hidden="true">↗</b></a></section>
  </main>;
}
