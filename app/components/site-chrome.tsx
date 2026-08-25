import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header">
    <Link className="wordmark" href="/" aria-label="처음으로">HM._</Link>
    <nav aria-label="페이지 메뉴">
      <Link href="/#work">{"// Work"}</Link>
      <Link href="/#profile">{"// Profile"}</Link>
      <Link href="/#contact">{"// Contact"}</Link>
    </nav>
    <span className="availability"><i aria-hidden="true"/> Seoul, Korea</span>
  </header>;
}

export function SiteFooter() {
  return <footer><span>© 2026 KIM HYEMI</span><a href="#top">BACK TO TOP ↑</a></footer>;
}
