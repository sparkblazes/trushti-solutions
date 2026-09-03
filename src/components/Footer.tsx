import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
  <div className="footer-top">
    <div className="footer-col">
      <Link href="/" className="logo" style={{marginBottom: "16px"}}><img src="/sidebar-logo.png" alt="Trushti Solutions Logo" style={{height: "48px", objectFit: "contain"}} /></Link>
      <p style={{fontSize:"14.5px", marginBottom:"24px", lineHeight:1.6, maxWidth:"320px"}}>Trushti Solutions builds Trushti POS and Trushti Desktime, plus custom software, mobile app, web, AI and ecommerce development services in Ahmedabad.</p>
      <div className="social-icons">
        <Link href="#" aria-label="Facebook">FB</Link>
        <Link href="#" aria-label="Twitter">TW</Link>
        <Link href="#" aria-label="LinkedIn">IN</Link>
        <Link href="#" aria-label="Instagram">IG</Link>
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
      <p style={{fontSize:"14px", marginBottom:"16px"}}>Subscribe to our newsletter for the latest updates.</p>
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
