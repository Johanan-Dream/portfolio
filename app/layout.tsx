import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김혜미 | 웹 개발자 포트폴리오",
  description: "웹 개발자 김혜미의 프로젝트와 개발 경험을 담은 포트폴리오",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
