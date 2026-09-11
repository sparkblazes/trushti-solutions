'use client';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main>
      <section id="products" className="products-hero-section">
        <div className="wrap">
          <div className="section-head text-center products-header">
            <span className="product-eyebrow">01 · Our Products</span>
            <h2>Products Built for Growth</h2>
            <p>
              Everything we sell, we also built — so support, updates and customisation all come from the same team you talk to.
            </p>
          </div>

          <div className="products-grid">
            
            {/* Trushti POS Card */}
            <div className="product-card-item reveal">
              <div className="product-card-body">
                <span className="product-category-badge pos-badge">Retail Management</span>
                <h3>Trushti POS</h3>
                <p className="product-card-desc">
                  A complete business management system for retailers. Generate invoices in 3 seconds, manage stock, and sync with Tally automatically.
                </p>
              </div>

              <div className="product-feature-pills">
                <span className="feature-pill">⚡ 3s Checkout</span>
                <span className="feature-pill">📦 Smart Inventory</span>
                <span className="feature-pill">🔄 Tally Sync</span>
              </div>
              
              <div className="product-card-action">
                <Link href="/products/trushti-pos" className="btn-product-details">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Trushti Desktime Card */}
            <div className="product-card-item reveal">
              <div className="product-card-body">
                <span className="product-category-badge desktime-badge">Time & Attendance</span>
                <h3>Trushti Desktime</h3>
                <p className="product-card-desc">
                  Track employee productivity, manage attendance, and automate payroll with our smart desktop and mobile time tracking solution.
                </p>
              </div>

              <div className="product-feature-pills">
                <span className="feature-pill">⏱️ Time Tracking</span>
                <span className="feature-pill">📊 Productivity</span>
                <span className="feature-pill">💰 Payroll</span>
              </div>
              
              <div className="product-card-action">
                <Link href="#" className="btn-product-coming-soon">
                  Coming Soon
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
