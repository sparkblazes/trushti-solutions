import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main>
      {/* ================= SERVICES ================= */}
<section id="services">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="section-eyebrow">03 · IT Services</span>
      <h2>Custom software, built around your business.</h2>
      <p>Beyond our own products, we design and build software for clients end to end.</p>
    </div>
    <div className="services-grid">
      <div className="service-card reveal">
        <div className="service-num">01</div>
        <h3>Mobile App Development</h3>
        <p>Native and cross‑platform apps for Android and iOS, from concept through launch and support.</p>
      </div>
      <div className="service-card reveal">
        <div className="service-num">02</div>
        <h3>Artificial Intelligence</h3>
        <p>AI‑powered features and tools — from automation to intelligent dashboards — built into your existing systems.</p>
      </div>
      <div className="service-card reveal">
        <div className="service-num">03</div>
        <h3>Web &amp; CMS Development</h3>
        <p>Marketing sites, web apps and content‑managed platforms built for speed and easy day‑to‑day editing.</p>
      </div>
      <div className="service-card reveal">
        <div className="service-num">04</div>
        <h3>Salesforce Development</h3>
        <p>Custom Salesforce configuration, integrations and apps that fit your existing sales and support workflow.</p>
      </div>
      <div className="service-card reveal">
        <div className="service-num">05</div>
        <h3>Ecommerce Development</h3>
        <p>Online stores with catalogue, payments and inventory wired together, ready to scale with your business.</p>
      </div>
      <div className="service-card reveal">
        <div className="service-num">06</div>
        <h3>Custom Software Development</h3>
        <p>Purpose‑built software for workflows that off‑the‑shelf tools don't cover — including Trushti POS &amp; Desktime.</p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
