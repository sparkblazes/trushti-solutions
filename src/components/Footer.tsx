import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-col">
          <Link href="/" className="logo" style={{ marginBottom: "16px" }}><img src="/sidebar-logo.png" alt="Trushti Solutions Logo" style={{ height: "65px", objectFit: "contain" }} /></Link>
          <p style={{ fontSize: "14.5px", marginBottom: "24px", lineHeight: 1.6, maxWidth: "320px" }}>Trushti Solutions builds Trushti POS and Trushti Desktime, plus custom software, mobile app, web, AI and ecommerce development services in Ahmedabad.</p>
          <div className="social-icons">
            <Link href="https://www.facebook.com/profile.php?id=61593641039245" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </Link>
            <Link href="https://x.com/Trushtisolution" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" /></svg>
            </Link>
            <Link href="https://www.instagram.com/trushtisolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </Link>
          </div>
        </div>
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Products & Services</h5>
          <ul>
            <li><Link href="/products">Trushti POS</Link></li>
            <li><Link href="/products">Trushti Desktime</Link></li>
            <li><Link href="/services">Mobile App Dev</Link></li>
            <li><Link href="/services">Web & CMS</Link></li>
            <li><Link href="/services">AI Solutions</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Newsletter</h5>
          <p style={{ fontSize: "14px", marginBottom: "16px" }}>Subscribe to our newsletter for the latest updates.</p>
          <form className="newsletter-form" >
            <input type="email" placeholder="Email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="fine">© 2026 Trushti Solutions, Ahmedabad. All rights reserved.</span>
        <div className="legal-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
