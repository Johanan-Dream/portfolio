export type Project = {
  number: string; slug: string; period: string; title: string; role: string; summary: string;
  scope: string; stack: string[];
  details: { title: string; description: string; image?: string }[];
  featured?: boolean;
  category: "personal" | "company";
  team?: number;
  image?: string;
  images?: string[];
  link?: string;
  about?: string;
};

export function teamLabel(team?: number) {
  if (!team) return null;
  return team === 1 ? "SOLO" : `TEAM · ${team}인`;
}

export const projects: Project[] = [
  { number:"01", slug:"festival-platform", period:"2025.09 — 2025.11", title:"축제 방문객·운영자 통합 웹 플랫폼", role:"1인 풀스택 개발", summary:"QR로 접속한 방문객이 지도에서 매장·이벤트·쿠폰 정보를 확인하고 운영자가 축제별 콘텐츠를 관리할 수 있는 웹 플랫폼을 개발했습니다.", scope:"기획 · 화면 설계 · 프론트엔드 · 백엔드 · 배포", stack:["React","TypeScript","Express","MySQL","Railway"], featured:true, category:"company", team:1, image:"/projects/festival-platform-cover.png", details:[{title:"지도 기반 현장 안내",description:"Google·Naver 지도에 매장과 콘텐츠를 표시하고 운영자가 위치·노출 여부·색상·크기 등을 직접 관리할 수 있도록 구성했습니다."},{title:"QR 접속 흐름",description:"QR별 접근 기간과 상태를 확인하고 접속 기록을 남겼습니다. 지도 상태를 유지한 채 매장 상세를 열 수 있도록 화면 이동 구조를 설계했습니다."},{title:"쿠폰 발급과 사용",description:"쿠폰이 동시에 중복 사용되지 않도록 MySQL 트랜잭션과 조건부 업데이트를 적용했습니다."},{title:"운영자 관리 기능",description:"축제·매장·지도·이벤트·쿠폰·QR을 관리하는 관리자 화면과 엑셀 기반 대량 등록 기능을 구현했습니다."}]},
  { number:"02", slug:"overseas-pos", period:"2026.04 — 현재", title:"해외 POS 시스템 개발·고도화", role:"백엔드 중심 개발", summary:"Windows 기반 POS의 결제·세금 계산과 로컬 데이터를 원격 서버로 전송하는 기능을 개발하고 있습니다.", scope:"데이터 동기화 · 결제 계산 · 세금·할인 · 단말 인증", stack:["Java","Spring Boot","React","TypeScript","MariaDB"], category:"company", details:[{title:"거래 데이터 동기화",description:"연결이 불안정한 환경에서도 로컬 거래 데이터를 원격 서버로 전송하고 중복 처리와 재시도 상황을 관리하는 구조를 개발했습니다."},{title:"분할결제 계산",description:"결제 수단을 나누어 결제할 때 발생하는 반올림 차이를 줄이기 위해 프론트엔드와 백엔드의 계산 기준을 맞췄습니다."},{title:"세금과 할인",description:"VAT 면제·Zero-Rated·법정 할인 정책에 따라 계산 흐름을 분리하고 영수증 표기 항목을 점검했습니다."},{title:"BIR 규정 요구사항 구조화",description:"여러 영문 세무 규정에 흩어진 기준을 AI로 정리해 시스템 조건으로 구조화하고, 세율·계산 방식·예외조건은 원문과 대조한 뒤 데이터 모델과 검증 로직에 반영했습니다."},{title:"POS 단말 인증",description:"단말별 키 발급·서버 검증·Windows 로컬 키 보호 방식을 적용한 인증 구조를 구현하고 테스트했습니다."}]},
  { number:"03", slug:"healthcare-mobile", period:"2026.01 — 2026.03", title:"헬스케어·이커머스 연계 모바일 서비스", role:"백엔드 개발", summary:"건강 루틴·복약 기록·주간 리포트를 상품 주문 정보와 연결하는 모바일 서비스의 백엔드를 개발했습니다.", scope:"주간 리포트 · 주문 연동 · 복약·영양제 루틴 · 알림", stack:["Java","Spring Boot","PostgreSQL","Redis","FCM"], category:"company", details:[{title:"주간 리포트 배치",description:"프로그램 시작일을 기준으로 리포트 기간을 계산하고 중복 생성을 막았습니다. 여러 서버에서 동시에 실행되는 상황은 Redis 분산락으로 제어했습니다."},{title:"주문 상태 연동",description:"외부 쇼핑몰의 취소·환불 웹훅을 내부 주문과 연결해 상태 변경에 따라 건강 루틴이 종료되도록 구현했습니다."},{title:"데이터 누락 보완",description:"복약 등록 시 영양제 루틴이 함께 생성되도록 연결하고 기존 누락 데이터를 찾아 복구하는 로직을 추가했습니다."}]},
  { number:"04", slug:"finance-healthcare", period:"2024.08 — 2025.01", title:"금융회사 헬스케어 서비스", role:"백엔드 개발", summary:"체중·혈압·혈당 데이터를 관리하고 사용자별 목표와 건강 루틴을 제공하는 서비스 개발에 참여했습니다.", scope:"건강 데이터 · 목표·루틴 · 배치 처리 · 이벤트", stack:["Java","Spring","Oracle","JavaScript"], category:"company", team:8, link:"https://play.google.com/store/apps/details?id=com.mMiraeAssetLife", image:"/projects/finance-healthcare-cover.png", about:"금융에 건강을 더해 새로워진 M-LIFE. 알고리즘으로 분석된 AI 건강 솔루션과 나만의 건강 루틴 생성으로 활동 리포트를 제공하고, 365일 건강 체크를 돕는 건강 캘린더를 갖췄습니다. (출처: Google Play 앱 소개) 공개된 서비스 화면을 바탕으로 재구성한 포트폴리오 이미지입니다.", details:[{title:"건강 데이터 기능",description:"체중·혈압·혈당 등록과 조회·수치 구간별 안내·건강정보 기반 목표와 루틴 추천 기능을 구현했습니다."},{title:"추천 결과 일관성 및 저장 성능 개선",description:"건강목표·루틴 추천 결과가 재조회 시 달라지는 문제를 해결하기 위해 추천 결과를 저장하도록 구조를 변경했습니다. 여러 루틴을 건별 Insert로 저장하면서 처리시간이 길어지는 문제는 Bulk Insert 방식으로 개선했습니다."},{title:"배치 예외 처리",description:"일부 사용자의 잘못된 데이터 때문에 전체 작업이 중단되지 않도록 사용자 단위로 예외를 분리했습니다."},{title:"환경별 SQL 대응",description:"개발 환경과 내부망의 SQL 실행 결과 차이를 확인하고 날짜 조건을 조정해 동일한 결과가 나오도록 수정했습니다."}]},
  { number:"05", slug:"airport-fx-board", period:"2023.12 — 2024.01", title:"공항 환율전광판 구축", role:"백엔드 개발", summary:"은행에서 받은 환율 데이터를 공항 전광판 규칙에 맞게 변환하고 본사 시연부터 현장 설치까지 참여했습니다.", scope:"환율 데이터 변환 · 주기적 갱신 · 현장 설치", stack:["Java","JavaScript","jQuery","MCI"], category:"company", team:2, details:[{title:"환율 데이터 변환",description:"은행과 고객 관점의 환율 방향과 입국장·출국장별 적용 기준을 확인해 국가별 표시 데이터로 변환했습니다."},{title:"주기적 데이터 갱신",description:"선택한 서버에서 환율 정보를 일정 주기로 조회하고 서버가 바뀌면 갱신 작업도 다시 설정되도록 구현했습니다."},{title:"현장 적용",description:"본사 시연에서 받은 피드백을 반영하고 공항 전광판에 직접 설치해 실제 데이터 출력을 확인했습니다."}]},
  { number:"06", slug:"seoul-real-book-fair", period:"2026.06", title:"서울제대로도서전 모바일 부스맵", role:"기획 · 디자인 · 개발", summary:"도서전 방문객이 부스 위치와 참가사 정보를 빠르게 찾고, 방문할 부스를 동선으로 정리할 수 있는 모바일 웹앱을 만들었습니다.", scope:"부스맵 · 검색 · 상세 정보 · 방문 동선", stack:["HTML","CSS","JavaScript","SVG","Vercel"], category:"personal", team:1, image:"/projects/seoul-real-book-fair-cover.png", link:"https://seoul-real-book-fair.vercel.app/", details:[{title:"직접 설계한 SVG 부스맵",description:"도서전 공간과 51개 부스를 SVG로 구성하고, 부스 선택·현재 위치 강조·확대·축소가 가능한 인터랙티브 맵을 구현했습니다."},{title:"검색과 상세 정보",description:"부스 번호·참가사명·키워드로 검색할 수 있도록 만들고, 선택한 부스의 소개 내용과 원문 출처를 상세 패널에서 확인하도록 구성했습니다."},{title:"나만의 방문 동선",description:"방문할 부스를 추가·삭제하고 드래그로 순서를 바꿀 수 있도록 구현했습니다. 선택 상태와 현재 화면은 localStorage에 저장해 다시 방문해도 유지됩니다."}]},
  { number:"07", slug:"seoul-international-book-fair", period:"2026.06", title:"서울국제도서전 도서전 산책", role:"기획 · 디자인 · 개발", summary:"서울국제도서전에서 관심 있는 부스를 저장하고, 방문 코스를 구성하며, 방문 완료까지 관리할 수 있는 모바일 PWA를 만들었습니다.", scope:"부스 탐색 · 관심 저장 · 방문 코스 · 완료 관리", stack:["Next.js","React","TypeScript","Tailwind CSS","Vercel"], category:"personal", team:1, image:"/projects/seoul-international-book-fair-cover.png", images:["/projects/seoul-international-book-fair-cover.png","/projects/seoul-international-book-fair-guide.png"], link:"https://seoul-international-book-fair-yxru.vercel.app/", details:[{title:"도서전 방문 흐름에 맞춘 홈",description:"관심 부스·방문 코스·완료 부스 상태를 한눈에 보여주고, 아직 코스가 비어 있을 때 다음 행동을 안내하도록 구성했습니다."},{title:"지도와 코스 관리",description:"하단 내비게이션을 통해 홈·지도·코스 화면을 빠르게 오갈 수 있도록 하고, 부스를 관심 목록과 방문 코스로 관리하는 흐름을 설계했습니다."},{title:"모바일 앱 경험",description:"모바일 화면을 기준으로 카드형 정보 구조와 고정 하단 내비게이션을 구현하고, manifest와 서비스 워커를 등록해 앱처럼 사용할 수 있도록 구성했습니다."}]},
];

export const capabilities = [
  ["Backend","Java · Python · Spring Boot · JPA/Hibernate · MyBatis"],
  ["Frontend","JavaScript · TypeScript · React · HTML/CSS"],
  ["Database","MySQL · MariaDB · PostgreSQL · Oracle · Redis"],
  ["Build & Deploy","Gradle · Docker · Jenkins · AWS · Railway"],
  ["Development Tools","Git · Claude · Codex · Gemini"],
] as const;
