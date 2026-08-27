import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "김혜미 | AX 풀스택 빌더 포트폴리오",
  description: "AI를 활용해 기획부터 배포까지 완성하는 AX 풀스택 빌더 김혜미의 포트폴리오",
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
      <body>
        <SiteHeader/>
        {children}
        <SiteFooter/>
      </body>
    </html>
  );
}
