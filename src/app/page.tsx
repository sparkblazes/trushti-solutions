import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="top">
  <div className="wrap hero-grid">
    <div>
      <span className="eyebrow">● Trusted by 50+ Businesses</span>
      <h1>Smart POS. <span>Better Business.</span><br />Built by Trushti Solutions.</h1>
      <p className="lead">Trushti POS handles billing, inventory and Tally sync in seconds. Trushti Desktime keeps your team's time and attendance under control. Both built, supported and customised by our in‑house team in Ahmedabad.</p>
      <div className="hero-ctas">
        <button className="btn btn-accent" >Book Your Free Demo →</button>
        <Link href="#products" className="btn btn-ghost" style={{color: "#fff", borderColor: "rgba(255,255,255,0.25)"}}>Explore Products</Link>
      </div>
      <div className="hero-stats">
        <div><b>3 sec</b><span>AVG. CHECKOUT TIME</span></div>
        <div><b>50+</b><span>BUSINESSES TRUST US</span></div>
        <div><b>24×7</b><span>CUSTOMER SUPPORT</span></div>
      </div>
    </div>
    <div className="receipt-stage">
      <div className="receipt-timer">⚡ Billed in 3s</div>
      <div className="receipt">
        <div className="receipt-head">
          <b>TRUSHTI POS</b>
          <span>INVOICE #4821 · GST READY</span>
        </div>
        <div className="receipt-line l1"><span>Basmati Rice 5kg</span><span>₹540</span></div>
        <div className="receipt-line l2"><span>Toor Dal 1kg</span><span>₹165</span></div>
        <div className="receipt-line l3"><span>Sunflower Oil 1L</span><span>₹149</span></div>
        <div className="receipt-line l4"><span>Wheat Atta 5kg</span><span>₹275</span></div>
        <div className="receipt-total"><span>TOTAL</span><span>₹1,129</span></div>
        <div className="receipt-badge">✓ SYNCED TO TALLY · CLOUD BACKED UP</div>
      </div>
    </div>
  </div>
</section>
{/* ================= PRODUCTS HIGHLIGHT ================= */}
<section id="products-highlight">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="section-eyebrow">Our Flagship Products</span>
      <h2>Powerful software to run your business.</h2>
      <p>Built from the ground up for speed, reliability, and seamless integration.</p>
    </div>
    <div className="feature-grid reveal">
      <div className="fcard">
        <div style={{fontSize: "2.5rem", marginBottom: "1rem"}}>🛒</div>
        <h4>Trushti POS</h4>
        <p style={{fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem"}}>A complete business management system for retailers with 3-second checkout and Tally sync.</p>
        <Link href="/products" className="btn btn-ghost" style={{width: "100%", padding: "0.5rem"}}>Learn More</Link>
      </div>
      <div className="fcard">
        <div style={{fontSize: "2.5rem", marginBottom: "1rem"}}>⏱️</div>
        <h4>Trushti Desktime</h4>
        <p style={{fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem"}}>Time and attendance simplified. Track clock-ins, leave, and payroll with cloud sync.</p>
        <Link href="/products" className="btn btn-ghost" style={{width: "100%", padding: "0.5rem"}}>Learn More</Link>
      </div>
      <div className="fcard">
        <div style={{fontSize: "2.5rem", marginBottom: "1rem"}}>📱</div>
        <h4>Custom Apps</h4>
        <p style={{fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem"}}>Need something specific? We build custom native iOS and Android applications.</p>
        <Link href="/services" className="btn btn-ghost" style={{width: "100%", padding: "0.5rem"}}>View Services</Link>
      </div>
      <div className="fcard">
        <div style={{fontSize: "2.5rem", marginBottom: "1rem"}}>🤖</div>
        <h4>AI Solutions</h4>
        <p style={{fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem"}}>Integrate cutting-edge AI into your workflow to automate repetitive tasks.</p>
        <Link href="/services" className="btn btn-ghost" style={{width: "100%", padding: "0.5rem"}}>View Services</Link>
      </div>
    </div>
  </div>
</section>

{/* ================= WHY CHOOSE US ================= */}
<section id="why-us" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid var(--border-glass)", borderBottom: "1px solid var(--border-glass)" }}>
  <div className="wrap">
    <div className="section-head reveal">
      <span className="section-eyebrow">The Trushti Advantage</span>
      <h2>Why 50+ businesses trust us.</h2>
    </div>
    <div className="highlight-strip reveal">
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
<section id="technologies" style={{background:"#fff", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
  <div className="wrap">
    <div className="section-head reveal">
      <span className="section-eyebrow">04 · Technologies We Use</span>
      <h2>The stack behind our products &amp; projects.</h2>
    </div>
    <div className="tech-cols">
      <div className="tech-col reveal">
        <h4>Frontend</h4>
        <div className="tech-tags">
          <span className="tech-tag">React.js</span>
          <span className="tech-tag">Next.js</span>
          <span className="tech-tag">Vue.js</span>
          <span className="tech-tag">Angular</span>
          <span className="tech-tag">TypeScript</span>
          <span className="tech-tag">JavaScript (ES6+)</span>
          <span className="tech-tag">Tailwind CSS</span>
          <span className="tech-tag">HTML5 / CSS3</span>
          <span className="tech-tag">Redux</span>
        </div>
      </div>
      <div className="tech-col reveal">
        <h4>Backend</h4>
        <div className="tech-tags">
          <span className="tech-tag">Node.js</span>
          <span className="tech-tag">Express.js</span>
          <span className="tech-tag">PHP</span>
          <span className="tech-tag">Laravel</span>
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Django</span>
          <span className="tech-tag">.NET Core</span>
          <span className="tech-tag">Java (Spring Boot)</span>
          <span className="tech-tag">REST &amp; GraphQL APIs</span>
        </div>
      </div>
      <div className="tech-col reveal">
        <h4>Frameworks &amp; Platforms</h4>
        <div className="tech-tags">
          <span className="tech-tag">React Native</span>
          <span className="tech-tag">Flutter</span>
          <span className="tech-tag">Next.js</span>
          <span className="tech-tag">Laravel</span>
          <span className="tech-tag">Django</span>
          <span className="tech-tag">Spring Boot</span>
          <span className="tech-tag">Salesforce (Apex / LWC)</span>
          <span className="tech-tag">Shopify / WooCommerce</span>
        </div>
      </div>
    </div>
    <div className="tech-cols" style={{marginTop:"24px"}}>
      <div className="tech-col reveal">
        <h4>Database</h4>
        <div className="tech-tags">
          <span className="tech-tag">MySQL</span>
          <span className="tech-tag">PostgreSQL</span>
          <span className="tech-tag">MongoDB</span>
          <span className="tech-tag">Firebase</span>
        </div>
      </div>
      <div className="tech-col reveal">
        <h4>Cloud &amp; DevOps</h4>
        <div className="tech-tags">
          <span className="tech-tag">AWS</span>
          <span className="tech-tag">Google Cloud</span>
          <span className="tech-tag">Docker</span>
          <span className="tech-tag">CI/CD</span>
        </div>
      </div>
      <div className="tech-col reveal">
        <h4>Integrations</h4>
        <div className="tech-tags">
          <span className="tech-tag">Tally</span>
          <span className="tech-tag">WhatsApp Business API</span>
          <span className="tech-tag">Payment Gateways</span>
          <span className="tech-tag">GST / e‑Invoicing</span>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ================= CTA ================= */}
<section id="cta" className="reveal" style={{ textAlign: "center", padding: "8rem 0" }}>
  <div className="wrap">
    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", marginBottom: "1.5rem" }}>Ready to upgrade your business?</h2>
    <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
      Join dozens of other businesses streamlining their operations with Trushti Solutions.
    </p>
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
      <button className="btn btn-accent" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>Book a Free Demo</button>
      <Link href="/contact" className="btn btn-ghost" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>Contact Sales</Link>
    </div>
  </div>
</section>
    </main>
  );
}
