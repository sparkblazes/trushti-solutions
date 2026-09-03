import Link from 'next/link';
import BookDemoButton from '@/components/BookDemoButton';
import './product.css'; // specific css file for this product page

export default function TrushtiPosPage() {
  return (
    <main className="tpos-product-details-page">
      {/* Hero Section */}
      <section className="tpos-hero-section">
        <div className="wrap">
          <div className="tpos-hero-grid">
            <div className="tpos-hero-left">
              <Link href="/products" className="tpos-back-link">← Back to Products</Link>
              <span className="tpos-product-eyebrow">TRUSHTI POS 1.0.5</span>
              <h1 className="tpos-hero-title">The Complete Point of Sale Solution</h1>
              <p className="tpos-hero-subtitle">
                Fast billing, smart inventory, automated Tally integration, and comprehensive reports—everything your business needs to grow.
              </p>
              

            </div>

            <div className="tpos-hero-right">
              <img 
                src="/dashboard-pos-setup.png" 
                alt="Trushti POS Checkout Setup on Computer with Thermal Receipt Printer" 
                className="tpos-hero-computer-img"
              />
            </div>
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
              <h3>Advanced POS</h3>
              <p>Experience fast billing with barcode scanner support, split payments, discount management, and hold & resume functionality. TRUSTHI POS makes checkout faster, smoother, and easier for your retail business.</p>
            </div>

            {/* Feature 2 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">📦</div>
              <h3>Inventory Management</h3>
              <p>Manage real-time stock with batch and expiry tracking, stock transfers, purchase returns, and low-stock alerts. Keep complete visibility and control over your inventory at every store.</p>
            </div>

            {/* Feature 3 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">👥</div>
              <h3>CRM & Customer Management</h3>
              <p>Maintain a complete customer database with loyalty programs, credit accounts, customer purchase history, and follow-up management. Build stronger relationships and increase repeat purchases.</p>
            </div>

            {/* Feature 4 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">🛒</div>
              <h3>Purchase Management</h3>
              <p>Manage purchase orders, suppliers, and purchase returns from one place. Simplify your complete purchasing process and maintain better control over supplier transactions.</p>
            </div>

            {/* Feature 5 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">₹</div>
              <h3>Financial Management</h3>
              <p>Track business expenses, cash registers, shift management, profit and loss, and financial reports. Get a clear view of your business finances and improve financial control.</p>
            </div>

            {/* Feature 6 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">👤</div>
              <h3>HR Management</h3>
              <p>Manage employee attendance, recruitment, leaves, and payroll efficiently. Keep your workforce information organized and simplify day-to-day employee management.</p>
            </div>

            {/* Feature 7 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">📊</div>
              <h3>Reports & Analytics</h3>
              <p>Access daily sales, monthly reports, GST reports, expense reports, and inventory reports. Turn your business data into useful insights for smarter and faster decision-making.</p>
            </div>

            {/* Feature 8 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">🏢</div>
              <h3>Multi-Store & Multi-Tenant</h3>
              <p>Manage multiple branches from one centralized system with branch management, user roles, permission control, and branch-wise reports. Ideal for growing businesses with multiple stores.</p>
            </div>

            {/* Feature 9 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">💬</div>
              <h3>WhatsApp Integration</h3>
              <p>Share invoices directly with customers and manage promotional campaigns, bulk messaging, and customer notifications through WhatsApp. Keep your customers connected with your business.</p>
            </div>

            {/* Feature 10 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">🔄</div>
              <h3>Tally Integration</h3>
              <p>Sync sales and sales returns, purchases and purchase returns, ledgers, stock transfers, stock adjustments, and defective stock with Tally. Reduce manual accounting work and keep your records synchronized.</p>
            </div>

            {/* Feature 11 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">🏷️</div>
              <h3>Barcode & Label Printing</h3>
              <p>Create product labels, shelf labels, barcode prints, batch labels, printed QR codes, and product QR codes. Make product identification, pricing, and checkout faster and more organized.</p>
            </div>

            {/* Feature 12 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">↕️</div>
              <h3>Import & Export</h3>
              <p>Import business data through Excel and CSV files, export reports, and upload products in bulk. Save time while managing large amounts of product and business data.</p>
            </div>

            {/* Feature 13 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">⚙️</div>
              <h3>Global Settings</h3>
              <p>Configure GST, multi-currency options, invoice templates, and tax settings according to your business requirements. Customize your POS environment for your specific operations.</p>
            </div>

            {/* Feature 14 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">⭐</div>
              <h3>Additional Features</h3>
              <p>Get barcode and QR code scanning, multiple payment modes, tax and discount management, offer and scheme management, role-based access control, and data backup and restore for complete business management.</p>
            </div>

            {/* Feature 15 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">☁️</div>
              <h3>Cloud Sync & Backup</h3>
              <p>Keep your business data securely backed up and synchronized across your system. Access updated information while protecting important sales, inventory, customer, and business records.</p>
            </div>

            {/* Feature 16 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">🔌</div>
              <h3>Offline Billing</h3>
              <p>Continue billing and selling even when an internet connection is unavailable. Once the connection is restored, your data can synchronize back to the cloud so your business keeps moving.</p>
            </div>

            {/* Feature 17 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">💳</div>
              <h3>Multiple Payment Modes</h3>
              <p>Accept and manage different payment methods during billing, including cash and digital payment options. Make checkout convenient for customers and easier for staff.</p>
            </div>

            {/* Feature 18 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">🏷️</div>
              <h3>Tax & Discount Management</h3>
              <p>Manage taxes, discounts, offers, and schemes according to your business requirements. Apply pricing rules accurately during billing and maintain better control over promotions.</p>
            </div>

            {/* Feature 19 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">🔐</div>
              <h3>Role-Based Access Control</h3>
              <p>Control what each employee or user can access using roles and permissions. Protect sensitive business information while giving staff access to the functions they need.</p>
            </div>

            {/* Feature 20 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">💾</div>
              <h3>Data Backup & Restore</h3>
              <p>Protect important business information with data backup and restore functionality. Maintain business continuity and reduce the risk of losing critical POS data.</p>
            </div>

            {/* Feature 21 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">🔔</div>
              <h3>Customer Notifications</h3>
              <p>Keep customers informed through invoice sharing, promotional communication, payment reminders, and important notifications. Improve customer engagement after every transaction.</p>
            </div>

            {/* Feature 22 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">📈</div>
              <h3>Live Dashboard</h3>
              <p>Monitor your business performance with a centralized dashboard. Get a quick view of sales, inventory, reports, branches, and important business information from one place.</p>
            </div>

            {/* Feature 23 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">✓</div>
              <h3>GST Ready & Compliant</h3>
              <p>Manage GST configuration, tax settings, and GST reports efficiently. Keep your billing and reporting process organized according to your business tax requirements.</p>
            </div>

            {/* Feature 24 */}
            <div className="tpos-feature-box">
              <div className="tpos-feature-icon">👨‍👩‍👧‍👦</div>
              <h3>Multi-User Access</h3>
              <p>Allow multiple users and employees to work within the POS system with controlled roles and permissions. Manage staff access securely across your business operations.</p>
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
