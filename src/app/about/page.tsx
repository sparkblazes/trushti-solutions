import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      {/* ================= HERO (Original simple header) ================= */}
      <section style={{ padding: '80px 0 20px', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <div className="wrap reveal">
          <span className="section-eyebrow" style={{ color: 'var(--teal)', marginBottom: '12px', display: 'inline-block' }}>02 · About Us</span>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: 'var(--ink)', marginBottom: '0', lineHeight: 1.2 }}>
            We build software, then run our own products on it.
          </h1>
        </div>
      </section>

      {/* ================= ABOUT COMPANY ================= */}
      <section className="about-company-section" id="about">
        <div className="wrap">
          <div className="about-company-header reveal">
            <span className="about-company-eyebrow">ABOUT THE COMPANY</span>
          </div>
          
          <div className="about-company-grid">
            <div className="about-company-image-col reveal">
              <div className="about-arch-img-wrap">
                <img src="/services/mobile-app.jpg" alt="About Trushti Solutions" />
              </div>
            </div>
            
            <div className="about-company-text-col reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 className="about-company-title">Welcome To Trushti Solutions</h2>
              
              <div className="about-company-block">
                <h3 className="about-company-subtitle">Company overview</h3>
                <p>Trushti Solutions is a software company based in Ahmedabad, Gujarat, building both ready-to-use business products and custom software for clients across retail, services and technology.</p>
              </div>
              
              <div className="about-company-block">
                <h3 className="about-company-subtitle">Our Story</h3>
                <p>Our own products — Trushti POS and Trushti Desktime — are built and supported by the same team that takes on client projects, which is why we design everything to be fast to deploy, easy to train staff on, and simple to keep running day to day.</p>
              </div>
              
              <div className="about-company-block">
                <h3 className="about-company-subtitle">Our Goal</h3>
                <p>Alongside our products, we offer custom software development services: mobile apps, AI-driven tools, web platforms, Salesforce implementations and ecommerce builds — for businesses that need something built around their own workflow.</p>
              </div>

              <div className="about-company-stats">
                 <div className="about-astat"><b>100+</b><span>Businesses</span></div>
                 <div className="about-astat"><b>24×7</b><span>Support</span></div>
                 <div className="about-astat"><b>2</b><span>Products</span></div>
                 <div className="about-astat"><b>28+</b><span>Services</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
