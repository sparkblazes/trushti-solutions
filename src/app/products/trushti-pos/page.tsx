import Link from 'next/link';
import './product.css'; // specific css file for this product page

export default function TrushtiPosPage() {
  return (
    <main className="tpos-product-details-page">
      {/* Hero Section */}
      <section className="tpos-hero-section text-center">
        <div className="wrap">
          <Link href="/products" className="tpos-back-link">← Back to Products</Link>
          <span className="tpos-product-eyebrow">Trushti POS 1.0.5</span>
          <h1 className="tpos-hero-title">The Complete Point of Sale Solution</h1>
          <p className="tpos-hero-subtitle">
            Fast billing, smart inventory, automated Tally integration, and comprehensive reports—everything your business needs to grow.
          </p>
          
          <div className="tpos-download-cta-group">
            <a href="#download" className="btn btn-primary tpos-btn-lg">Download Trushti POS</a>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="tpos-features-deep-dive reveal">
        <div className="wrap">
          <h2 className="tpos-section-title text-center">Everything you need to manage your retail business</h2>
          
          <div className="tpos-feature-grid">
            {/* Feature 1 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">⚡</div>
              <h3>Lightning Fast Billing</h3>
              <p>Generate invoices in under 3 seconds. Support for barcode scanning, split payments, and hold & resume functionality keeps your checkout line moving quickly.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">📦</div>
              <h3>Smart Inventory Management</h3>
              <p>Real-time stock tracking with batch and expiry management. Automatically receive low stock alerts and print barcode labels directly from the system.</p>
            </div>

            {/* Feature 3 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">🔄</div>
              <h3>Tally Integration</h3>
              <p>Eliminate manual data entry. Automatically sync sales, purchases, returns, ledgers, stock transfers, and adjustments directly to Tally Prime.</p>
            </div>

            {/* Feature 4 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">💬</div>
              <h3>WhatsApp Integration</h3>
              <p>Send invoices, promotional offers, and payment reminders directly to your customers' WhatsApp automatically after checkout.</p>
            </div>

            {/* Feature 5 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">👥</div>
              <h3>HR & Customer Loyalty</h3>
              <p>Manage employee attendance, payroll, leaves, and recruitment. Build customer loyalty with points, credit accounts, and detailed purchase histories.</p>
            </div>

            {/* Feature 6 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">☁️</div>
              <h3>Cloud Sync & Offline Mode</h3>
              <p>Never stop selling. Trushti POS works completely offline and automatically syncs all your data to the cloud the moment you regain connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="tpos-download-section reveal">
        <div className="wrap text-center">
          <h2 className="tpos-section-title">Download Trushti POS</h2>
          <p className="tpos-download-subtitle">Available for Windows, Linux, and macOS. Start managing your business better today.</p>
          
          <div className="tpos-download-grid">
            {/* Windows */}
            <div className="tpos-download-card">
              <div className="tpos-os-icon">🪟</div>
              <h3>Windows</h3>
              <p>Windows 10, 11 (64-bit)</p>
              <a href="/downloads/trushti-pos-setup-win.exe" download className="btn btn-primary tpos-download-btn">
                Download .exe
              </a>
            </div>

            {/* Linux */}
            <div className="tpos-download-card">
              <div className="tpos-os-icon">🐧</div>
              <h3>Linux</h3>
              <p>Ubuntu, Debian, Mint & more</p>
              <div className="tpos-btn-group">
                <a href="/downloads/trushti-pos-linux.AppImage" download className="btn btn-primary tpos-download-btn">
                  .AppImage
                </a>
                <a href="/downloads/trushti-pos-linux.deb" download className="btn btn-primary tpos-download-btn">
                  .deb
                </a>
              </div>
            </div>

            {/* macOS */}
            <div className="tpos-download-card">
              <div className="tpos-os-icon">🍎</div>
              <h3>macOS</h3>
              <p>macOS 10.15+ (Intel & Apple Silicon)</p>
              <a href="/downloads/trushti-pos-mac.zip" download className="btn btn-primary tpos-download-btn">
                Download .zip
              </a>
            </div>
            
            {/* Android (Placeholder) */}
            <div className="tpos-download-card">
              <div className="tpos-os-icon">🤖</div>
              <h3>Android</h3>
              <p>Android 9.0+ (Mobile & Tablet)</p>
              <button className="btn tpos-btn-secondary tpos-download-btn" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
