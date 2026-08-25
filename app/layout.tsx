import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_KR } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import "./globals.css";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

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
    <html lang="ko" className={`${notoSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <SiteHeader/>
        {children}
        <SiteFooter/>
      </body>
    </html>
  );
}
