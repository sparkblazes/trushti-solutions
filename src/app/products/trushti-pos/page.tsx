import Link from 'next/link';
import './product.css';

const modules = [
  {
    id: '01',
    navTitle: 'Advanced POS & Billing',
    title: 'Advanced POS & Billing',
    tagline: 'Speed up your sales. Serve your customers better.',
    desc: 'Make everyday billing faster and more convenient with TRUSHTI POS. The advanced POS workflow supports barcode-based billing, split payments, discounts, hold and resume transactions, and accurate sales records. It is designed to reduce manual work and help staff complete customer transactions efficiently.',
    badge: '⚡ Fast & Accurate Billing',
    items: [
      'Fast billing for day-to-day sales',
      'Barcode scanner support',
      'Split payment handling',
      'Discount management',
      'Hold and resume transactions',
      'Multiple payment options',
      'Accurate sales records',
    ],
    mockupType: 'pos',
  },
  {
    id: '02',
    navTitle: 'Inventory Management',
    title: 'Inventory Management',
    tagline: 'Better stock control. Less risk. More growth.',
    desc: 'Keep better control of your products with centralised inventory management. TRUSHTI POS helps businesses monitor real-time stock, manage batch and expiry information, process stock transfers, record purchase returns, support barcode & label printing, and receive low-stock alerts. This makes it easier to maintain the right stock levels and reduce avoidable inventory issues.',
    badge: '📦 Real-time Inventory',
    items: [
      'Real-time stock visibility',
      'Batch and expiry management',
      'Stock transfer between locations',
      'Purchase return management',
      'Low-stock alerts',
      'Product-wise stock tracking',
      'Store-wise inventory visibility',
      'Barcode & label printing',
    ],
    mockupType: 'inventory',
  },
  {
    id: '03',
    navTitle: 'Multi-Store Management',
    title: 'Multi-Store & Multi-Tenant Management',
    tagline: 'Connected multi-branch management & role permissions.',
    desc: 'Manage multiple branches and users with a connected business management structure. TRUSHTI POS supports branches, user roles, permission controls, and branch-level reporting, making it easier to maintain consistent operations across multiple locations.',
    badge: '🏢 Multi-Branch Management',
    items: [
      'Multiple branch management',
      'User role management',
      'Permission control',
      'Branch-wise reports',
      'Multi-store inventory visibility',
    ],
    mockupType: 'multistore',
  },
  {
    id: '04',
    navTitle: 'Tally Integration',
    title: 'Tally Integration',
    tagline: 'Automated sync of sales, purchases & ledgers with Tally.',
    desc: 'TRUSHTI POS can integrate with Tally to support a smoother flow of sales, purchase, ledger, stock, and related business information. The integration is designed to reduce duplicate data entry and connect POS operations with accounting workflows.',
    badge: '🔄 Automated Tally Sync',
    items: [
      'Sales and sales-return sync',
      'Purchase and purchase-return sync',
      'Ledger sync',
      'Bank statement sync',
      'Stock transfer sync',
      'Stock adjustment sync',
      'Defective stock sync',
    ],
    mockupType: 'tally',
  },
  {
    id: '05',
    navTitle: 'WhatsApp Integration',
    title: 'WhatsApp Integration',
    tagline: 'Connect customer communication directly with business workflow.',
    desc: 'Connect customer communication with your business workflow through WhatsApp integration. TRUSHTI POS supports invoice sharing, promotional campaigns, bulk messaging, and customer notifications to help businesses communicate quickly and conveniently.',
    badge: '💬 Direct WhatsApp Messaging',
    items: [
      'Invoice sharing through WhatsApp',
      'Promotional campaigns',
      'Bulk messaging',
      'Customer notifications',
      'Faster digital communication',
    ],
    mockupType: 'whatsapp',
  },
  {
    id: '06',
    navTitle: 'Purchase & Supplier',
    title: 'Purchase & Supplier Management',
    tagline: 'Simplify purchasing operations. Improve supplier visibility.',
    desc: 'Simplify purchasing operations by managing purchase orders, supplier information, purchase returns, and related inventory updates through one workflow. TRUSHTI POS helps businesses maintain organised purchase records and improve visibility into supplier activity.',
    badge: '🚚 Strong Supplier Network',
    items: [
      'Purchase order management',
      'Supplier management',
      'Purchase return processing',
      'Purchase history',
      'Purchase cost tracking',
      'Inventory updates from purchases',
    ],
    mockupType: 'purchase',
  },
  {
    id: '07',
    navTitle: 'Customer Management',
    title: 'Customer Management',
    tagline: 'Build stronger relationships. Boost loyalty.',
    desc: 'Build a complete customer database and keep customer information organised in one place. TRUSHTI POS supports customer history, loyalty programmes, credit accounts, and follow-up management, helping businesses understand customer activity and provide better service.',
    badge: '👥 Happy Customers, Bigger Business',
    items: [
      'Customer database',
      'Customer purchase history',
      'Loyalty programme support',
      'Credit account management',
      'Customer follow-up management',
      'Customer-wise sales information',
    ],
    mockupType: 'customer',
  },
  {
    id: '08',
    navTitle: 'HR Management',
    title: 'HR Management',
    tagline: 'Centralised employee management & workforce operations.',
    desc: 'Manage employee information and daily workforce activities from a centralised platform. TRUSHTI POS includes attendance, recruitment, leave, and payroll management features to help businesses organise employee-related operations.',
    badge: '👨‍💼 Employee & Payroll Control',
    items: [
      'Attendance management',
      'Recruitment management',
      'Leave management',
      'Payroll management',
      'Centralised employee information',
    ],
    mockupType: 'hr',
  },
  {
    id: '09',
    navTitle: 'Reports & Analytics',
    title: 'Reports & Analytics',
    tagline: 'Turn business data into useful management information.',
    desc: 'Turn business data into useful management information with TRUSHTI POS reports and analytics. Review daily sales, monthly performance, GST-related information, expenses, inventory, purchases, customers, suppliers, income, taxes, and profitability to support informed business decisions.',
    badge: '📊 Real-Time Analytics',
    items: [
      'Daily sales reports',
      'Monthly reports',
      'GST reports',
      'Expense reports',
      'Inventory reports',
      'Purchase and supplier reports',
      'Customer and product reports',
      'Income and tax reports',
      'Profit & loss reports',
      'Annual business reports',
    ],
    mockupType: 'reports',
  },
];

export default function TrushtiPosPage() {
  return (
    <main className="tpos-product-details-page">
      {/* Hero Section */}
      <section className="tpos-hero-section">
        <div className="wrap">
          <div className="tpos-hero-grid">
            <div className="tpos-hero-left">
              <Link href="/products" className="tpos-back-link">
                ← Back to Products
              </Link>
              <div>
                <span className="tpos-product-eyebrow">TRUSHTI POS 1.0.5</span>
              </div>
              <h1 className="tpos-hero-title">The Complete Point of Sale Solution</h1>
              <p className="tpos-hero-subtitle">
                Fast billing, smart inventory, automated Tally integration, WhatsApp communication, and comprehensive reports—everything your business needs to grow.
              </p>
            </div>

            <div className="tpos-hero-right">
              <img
                src="/dashboard-pos-setup.png"
                alt="Trushti POS Checkout Setup"
                className="tpos-hero-computer-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Showcase */}
      <section className="tpos-modules-container">
        <div className="wrap">
          <div className="tpos-unified-card">
            {modules.map((mod, idx) => (
              <div
                key={mod.id}
                id={`module-${mod.id}`}
                className="tpos-module-block"
              >
                <div className={`tpos-module-grid ${idx % 2 !== 0 ? 'reverse' : ''}`}>
                  <div className="tpos-module-info">
                    <div className="tpos-module-header">
                      <div className="tpos-circle-num">{mod.id}</div>
                      <h2 className="tpos-module-title">{mod.title}</h2>
                    </div>
                    <div className="tpos-module-tagline">{mod.tagline}</div>
                    <p className="tpos-module-desc">{mod.desc}</p>
                    <ul className="tpos-checklist">
                      {mod.items.map((item, i) => (
                        <li key={i}>
                          <span className="tpos-check-icon">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tpos-module-preview-wrap">
                    <div className="tpos-badge-float-top">{mod.badge}</div>
                    <div className="tpos-dashboard-card">
                      {/* POS Mockup */}
                      {mod.mockupType === 'pos' && (
                        <div className="tpos-mockup-scroll-wrapper">
                          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)', background: '#ffffff', padding: '3px' }}>
                            <img
                              src="/pos-billing-01.png"
                              alt="Trushti POS Advanced POS & Billing Interface"
                              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px', objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Inventory Mockup */}
                      {mod.mockupType === 'inventory' && (
                        <div className="tpos-mockup-scroll-wrapper">
                          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)', background: '#ffffff', padding: '3px' }}>
                            <img
                              src="/inventory-management-02.png"
                              alt="Trushti POS Inventory Management Interface"
                              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px', objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Customer Mockup */}
                      {mod.mockupType === 'customer' && (
                        <div className="tpos-mockup-scroll-wrapper">
                          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)', background: '#ffffff', padding: '3px' }}>
                            <img
                              src="/customer-dashboard.png"
                              alt="Trushti POS Customer Management Interface"
                              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px', objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Purchase & Supplier Mockup */}
                      {mod.mockupType === 'purchase' && (
                        <div className="tpos-mockup-scroll-wrapper">
                          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)', background: '#ffffff', padding: '3px' }}>
                            <img
                              src="/purchase-supplier-06.png"
                              alt="Trushti POS Purchase & Supplier Management Interface"
                              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px', objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                      )}

                      {/* HR Mockup */}
                      {mod.mockupType === 'hr' && (
                        <div className="tpos-mockup-scroll-wrapper">
                          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)', background: '#ffffff', padding: '3px' }}>
                            <img
                              src="/hr-dashboard.png"
                              alt="Trushti POS HR Management Interface"
                              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px', objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Reports Mockup */}
                      {mod.mockupType === 'reports' && (
                        <div className="tpos-reports-mockup-card">
                          <img
                            src="/comprehensive-excel-report.png"
                            alt="Comprehensive Excel Report - Trushti POS Reports & Analytics"
                            className="tpos-reports-mockup-img"
                          />
                        </div>
                      )}

                      {/* Multi-Store Mockup */}
                      {mod.mockupType === 'multistore' && (
                        <div className="tpos-mockup-scroll-wrapper">
                          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)', background: '#ffffff', padding: '3px' }}>
                            <img
                              src="/multistore-management-03.png"
                              alt="Trushti POS Multi-Store & Multi-Tenant Management Interface"
                              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px', objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                      )}

                      {/* WhatsApp Mockup */}
                      {mod.mockupType === 'whatsapp' && (
                        <div style={{ background: '#f4f6f8', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '14px', position: 'relative', fontFamily: 'system-ui, sans-serif' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 130px', gap: '14px', alignItems: 'center' }}>

                            {/* Left Section: Header + 2 Message Bubbles */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                              {/* Green Header Pill */}
                              <div style={{ background: '#059669', color: '#ffffff', padding: '7px 12px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 2px 6px rgba(5,150,105,0.18)' }}>
                                <div style={{ width: '22px', height: '22px', background: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>
                                  💬
                                </div>
                                <span style={{ fontWeight: 700, fontSize: '0.74rem' }}>WhatsApp Customer Receipt Notification</span>
                              </div>

                              {/* Message 1: Invoice Receipt */}
                              <div style={{ background: '#ffffff', borderRadius: '10px', padding: '8px 10px', boxShadow: '0 2px 6px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9', position: 'relative' }}>
                                <div style={{ fontWeight: 800, fontSize: '0.72rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  <span>Hello Rahul Sharma!</span> 👋
                                </div>
                                <div style={{ fontSize: '0.65rem', color: '#475569', marginTop: '3px', lineHeight: 1.3 }}>
                                  Thank you for shopping with us! Here is your tax invoice <b style={{ color: '#0f172a' }}>#INV-0482</b> for <b style={{ color: '#0f172a' }}>₹2,450.00</b>.
                                </div>
                                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', padding: '5px 8px', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '5px', color: '#047857', fontWeight: 700, fontSize: '0.62rem' }}>
                                  <span style={{ fontSize: '0.78rem' }}>📄</span>
                                  <span>Download Invoice PDF (142 KB)</span>
                                </div>
                                <div style={{ textAlign: 'right', fontSize: '0.52rem', color: '#94a3b8', marginTop: '3px', fontWeight: 500 }}>
                                  10:24 AM
                                </div>
                              </div>

                              {/* Message 2: Special Offer Coupon */}
                              <div style={{ background: '#ffffff', borderRadius: '10px', padding: '8px 10px', boxShadow: '0 2px 6px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9', position: 'relative' }}>
                                <div style={{ fontWeight: 800, fontSize: '0.72rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  <span>🎁</span> Special Offer for You! <span>🎉</span>
                                </div>
                                <div style={{ fontSize: '0.65rem', color: '#475569', marginTop: '3px', lineHeight: 1.3 }}>
                                  Get 10% OFF on your next purchase.<br />
                                  Use code: <b style={{ color: '#0f172a', fontSize: '0.68rem' }}>TRUSHTI10</b>
                                </div>
                                <div style={{ textAlign: 'right', fontSize: '0.52rem', color: '#94a3b8', marginTop: '3px', fontWeight: 500 }}>
                                  10:24 AM
                                </div>
                              </div>

                            </div>

                            {/* Right Section: Large WhatsApp Badge & Boost Sales Callout */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>

                              {/* Large WhatsApp Circle Badge */}
                              <div style={{ position: 'relative', marginBottom: '6px' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #25d366 0%, #059669 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#ffffff', boxShadow: '0 6px 14px rgba(37,211,102,0.35)', border: '3px solid #ffffff' }}>
                                  💬
                                </div>
                              </div>

                              {/* Curved arrow & rotated callout text */}
                              <div style={{ fontSize: '0.9rem', color: '#059669', transform: 'rotate(-25deg)', marginBottom: '1px' }}>
                                ⤴
                              </div>
                              <div style={{ fontSize: '0.68rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.25, transform: 'rotate(-5deg)', fontFamily: 'system-ui, sans-serif' }}>
                                Boost<br />Sales with<br />WhatsApp!
                              </div>

                            </div>

                          </div>
                        </div>
                      )}

                      {/* Tally Sync Mockup */}
                      {mod.mockupType === 'tally' && (
                        <div className="tpos-mockup-scroll-wrapper">
                          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)', background: '#ffffff', padding: '3px' }}>
                            <img
                              src="/tally-integration-04.png"
                              alt="Trushti POS TallyPrime Integration Interface"
                              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px', objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                      )}


                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="tpos-download-section">
        <div className="wrap text-center">
          <h2 className="tpos-section-title">Download Trushti POS</h2>
          <p className="tpos-download-subtitle">Available for Windows, Linux, and macOS. Start managing your business better today.</p>

          <div className="tpos-download-grid">
            {/* Windows */}
            <div className="tpos-download-card">
              <div className="tpos-os-icon">🪟</div>
              <h3>Windows</h3>
              <p>Windows 10, 11 (64-bit)</p>
              <a href="/downloads/trushti-pos-setup-win.exe" download className="tpos-download-btn">
                Download .exe
              </a>
            </div>

            {/* Linux */}
            <div className="tpos-download-card">
              <div className="tpos-os-icon">🐧</div>
              <h3>Linux</h3>
              <p>Ubuntu, Debian, Mint & more</p>
              <div className="tpos-btn-group">
                <a href="/downloads/trushti-pos-linux.AppImage" download className="tpos-download-btn">
                  .AppImage
                </a>
                <a href="/downloads/trushti-pos-linux.deb" download className="tpos-download-btn">
                  .deb
                </a>
              </div>
            </div>

            {/* macOS */}
            <div className="tpos-download-card">
              <div className="tpos-os-icon">🍎</div>
              <h3>macOS</h3>
              <p>macOS 10.15+ (Intel & Apple Silicon)</p>
              <a href="/downloads/trushti-pos-mac.zip" download className="tpos-download-btn">
                Download .zip
              </a>
            </div>

            {/* Android */}
            <div className="tpos-download-card">
              <div className="tpos-os-icon">🤖</div>
              <h3>Android</h3>
              <p>Android 9.0+ (Mobile & Tablet)</p>
              <button className="btn tpos-btn-disabled" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
