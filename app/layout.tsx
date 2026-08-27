import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ivory-eta-29.vercel.app"),
  title: "김혜미 | AX 풀스택 빌더 포트폴리오",
  description: "AI를 활용해 기획부터 배포까지 완성하는 AX 풀스택 빌더 김혜미의 포트폴리오",
  openGraph: {
    title: "김혜미 | AX 풀스택 빌더 포트폴리오",
    description: "AI를 활용해 기획부터 배포까지 완성하는 AX 풀스택 빌더 김혜미의 포트폴리오",
    type: "website",
    locale: "ko_KR",
    url: "https://portfolio-ivory-eta-29.vercel.app",
    siteName: "김혜미 포트폴리오",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "김혜미 AX 풀스택 빌더 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김혜미 | AX 풀스택 빌더 포트폴리오",
    description: "AI를 활용해 기획부터 배포까지 완성하는 AX 풀스택 빌더 김혜미의 포트폴리오",
    images: ["/opengraph-image"],
  },
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
