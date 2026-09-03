import Link from 'next/link';
import BookDemoButton from '@/components/BookDemoButton';

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">● Trusted by 100+ Businesses</span>
            <h1>Smart POS. <span>Better Business.</span><br />Built by Trushti.</h1>
            <p className="lead">Trushti POS handles billing, inventory, and Tally sync in seconds. Desktime keeps your team's attendance under control. Built, supported, and customised by our in‑house experts.</p>
            <div className="hero-ctas">
              <BookDemoButton text="Book Your Free Demo →" className="btn btn-accent" />
              <Link href="/products" className="btn btn-ghost-light">Explore Products</Link>
            </div>
            <div className="hero-stats">
              <div><b>3s</b><span>AVG. CHECKOUT</span></div>
              <div><b>100+</b><span>TRUSTED BRANDS</span></div>
              <div><b>24/7</b><span>ACTIVE SUPPORT</span></div>
            </div>
          </div>
          <div className="dashboard-stage">
            <div className="dashboard-glass-container">
              <img src="/dashboard-computer.png" alt="Trushti POS Admin Dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS BENTO ================= */}
      <section id="products-highlight">
        <div className="wrap">
          <div className="section-head center">
            <span className="section-eyebrow">Our Ecosystem</span>
            <h2>Powerful software to run your entire business.</h2>
            <p>Built from the ground up for speed, reliability, and seamless integration.</p>
          </div>

          <div className="bento-grid">
            <div className="bento-card large">
              <div>
                <div className="bento-icon">🛒</div>
                <h3>Trushti POS</h3>
                <p>A complete business management system for retailers. Experience unparalleled speed with our 3-second checkout, robust inventory management, and one-click Tally synchronization.</p>
              </div>
              <Link href="/products" className="bento-link">Discover POS →</Link>
            </div>
            <div className="bento-card">
              <div>
                <div className="bento-icon">⏱️</div>
                <h3>Trushti Desktime</h3>
                <p>Time and attendance simplified. Track clock-ins, manage leaves, and automate payroll with reliable cloud sync.</p>
              </div>
              <Link href="/products" className="bento-link">Explore Desktime →</Link>
            </div>
            <div className="bento-card">
              <div>
                <div className="bento-icon">📱</div>
                <h3>Custom Apps</h3>
                <p>Need something highly specific? We architect and build native iOS and Android applications tailored for you.</p>
              </div>
              <Link href="/services" className="bento-link">View Services →</Link>
            </div>
            <div className="bento-card large">
              <div>
                <div className="bento-icon">🤖</div>
                <h3>AI & Automation</h3>
                <p>Integrate cutting-edge AI into your workflow. From automated customer support bots to predictive inventory algorithms, we future-proof your business operations.</p>
              </div>
              <Link href="/services" className="bento-link">See AI Solutions →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section id="why-us" style={{ background: "rgba(255,255,255,0.5)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="section-head center" style={{ marginBottom: "48px" }}>
            <span className="section-eyebrow">The Trushti Advantage</span>
            <h2>Why growing businesses choose us.</h2>
          </div>
          <div className="highlight-strip">
            <div className="hs-item">
              <b>100%</b>
              <span>In-House Team</span>
            </div>
            <div className="hs-item">
              <b>24/7</b>
              <span>Dedicated Support</span>
            </div>
            <div className="hs-item">
              <b>Cloud</b>
              <span>Secure Backups</span>
            </div>
            <div className="hs-item">
              <b>Fast</b>
              <span>Deployment</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section id="technologies" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="section-head center">
            <span className="section-eyebrow">Modern Stack</span>
            <h2>The technologies behind our success.</h2>
          </div>
          <div className="tech-cols">
            <div className="tech-col">
              <h4>Frontend & Mobile</h4>
              <div className="tech-tags">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Flutter</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="tech-col">
              <h4>Backend & Database</h4>
              <div className="tech-tags">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">MongoDB</span>
              </div>
            </div>
            <div className="tech-col">
              <h4>Cloud & Integrations</h4>
              <div className="tech-tags">
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">Tally ERP</span>
                <span className="tech-tag">WhatsApp API</span>
                <span className="tech-tag">Razorpay</span>
                <span className="tech-tag">Stripe</span>
                <span className="tech-tag">GST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="cta">
        <div className="wrap">
          <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", marginBottom: "24px" }}>Ready to upgrade your business?</h2>
          <p style={{ color: "var(--muted)", fontSize: "18px", maxWidth: "600px", margin: "0 auto 40px" }}>
            Join dozens of other forward-thinking businesses streamlining their operations with Trushti Solutions.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 10 }}>
            <BookDemoButton text="Book a Free Demo" className="btn btn-accent" style={{ padding: "16px 32px", fontSize: "16px" }} />
            <Link href="/contact" className="btn btn-ghost" style={{ padding: "16px 32px", fontSize: "16px" }}>Contact Sales</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
