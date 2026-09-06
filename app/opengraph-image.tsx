import { ImageResponse } from "next/og";

export const alt = "김혜미 Backend Developer · AI-Native Builder 포트폴리오";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const lines = [
    ["10%", "18%", "35%", "42%"],
    ["35%", "42%", "58%", "24%"],
    ["58%", "24%", "82%", "38%"],
    ["35%", "42%", "72%", "72%"],
    ["72%", "72%", "92%", "58%"],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ece7e1",
          color: "#1a1818",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "58px 68px",
          fontFamily: "Arial",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 2, color: "#77716d" }}>
          <span>KIM HYEMI · BACKEND DEVELOPER · AI-NATIVE BUILDER</span>
          <span>PORTFOLIO · 2026</span>
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", opacity: 0.28 }}>
          {lines.map(([x1, y1], index) => (
            <div key={index} style={{ position: "absolute", left: x1, top: y1, width: "24%", height: 1, background: "#1a1818", transform: `rotate(${index % 2 ? 22 : -18}deg)`, transformOrigin: "left center" }} />
          ))}
          {[
            ["35%", "42%"], ["58%", "24%"], ["72%", "72%"], ["82%", "38%"], ["92%", "58%"],
          ].map(([left, top], index) => (
            <div key={index} style={{ position: "absolute", left, top, width: 10, height: 10, borderRadius: 10, background: "#1a1818" }} />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 130, fontSize: 78, lineHeight: 1.02, letterSpacing: -3, fontWeight: 700 }}>
          <span>복잡한 요구를</span>
          <span style={{ fontWeight: 400, marginLeft: 120 }}>작동하는 서비스로.</span>
        </div>
        <div style={{ display: "flex", marginTop: "auto", fontSize: 24, color: "#625d59", letterSpacing: 0.5 }}>
          백엔드 실무를 중심으로 AI를 활용해 구현 범위를 넓혀가는 개발자
        </div>
      </div>
    ),
    { ...size },
  );
}
