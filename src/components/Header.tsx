import Link from 'next/link';
import BookDemoButton from './BookDemoButton';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/" className="logo"><img src="/sidebar-logo.png" alt="Trushti Solutions Logo" style={{ height: "48px", objectFit: "contain" }} /></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/career">Career</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="nav-cta">
          <Link href="/contact" className="btn btn-ghost" style={{ display: "none" }} id="callLink"></Link>
          <BookDemoButton text="Book Free Demo" className="btn btn-accent" />
        </div>
      </nav>
    </header>
  );
}
