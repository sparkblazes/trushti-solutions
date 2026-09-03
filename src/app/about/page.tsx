import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      {/* ================= ABOUT ================= */}
<section className="about" id="about">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="section-eyebrow">02 · About Us</span>
      <h2>We build software, then run our own products on it.</h2>
    </div>
    <div className="about-grid">
      <div className="about-copy reveal">
        <p>Trushti Solutions is a software company based in Ahmedabad, Gujarat, building both ready‑to‑use business products and custom software for clients across retail, services and technology.</p>
        <p>Our own products — Trushti POS and Trushti Desktime — are built and supported by the same team that takes on client projects, which is why we design everything to be fast to deploy, easy to train staff on, and simple to keep running day to day.</p>
        <p>Alongside our products, we offer custom software development services: mobile apps, AI‑driven tools, web platforms, Salesforce implementations and ecommerce builds — for businesses that need something built around their own workflow.</p>
        <button className="btn btn-accent" >Talk to Our Team →</button>
      </div>
      <div className="about-stats reveal">
        <div className="astat"><b>100+</b><span>Businesses using Trushti POS</span></div>
        <div className="astat"><b>24×7</b><span>Customer support</span></div>
        <div className="astat"><b>2</b><span>In‑house products</span></div>
        <div className="astat"><b>6+</b><span>IT service lines</span></div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
