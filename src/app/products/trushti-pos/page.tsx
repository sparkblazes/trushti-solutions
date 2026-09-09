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
    desc: 'Keep better control of your products with centralised inventory management. TRUSHTI POS helps businesses monitor real-time stock, manage batch and expiry information, process stock transfers, record purchase returns, and receive low-stock alerts. This makes it easier to maintain the right stock levels and reduce avoidable inventory issues.',
    badge: '📦 Real-time Inventory',
    items: [
      'Real-time stock visibility',
      'Batch and expiry management',
      'Stock transfer between locations',
      'Purchase return management',
      'Low-stock alerts',
      'Product-wise stock tracking',
      'Store-wise inventory visibility',
    ],
    mockupType: 'inventory',
  },
  {
    id: '03',
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
    id: '04',
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
    id: '05',
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
    id: '06',
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
    id: '07',
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
    id: '08',
    navTitle: 'Tally Integration',
    title: 'Tally Integration',
    tagline: 'Automated sync of sales, purchases & ledgers with Tally.',
    desc: 'TRUSHTI POS can integrate with Tally to support a smoother flow of sales, purchase, ledger, stock, and related business information. The integration is designed to reduce duplicate data entry and connect POS operations with accounting workflows.',
    badge: '🔄 Automated Tally Sync',
    items: [
      'Sales and sales-return sync',
      'Purchase and purchase-return sync',
      'Ledger sync',
      'Stock transfer sync',
      'Stock adjustment sync',
      'Defective stock sync',
    ],
    mockupType: 'tally',
  },
  {
    id: '09',
    navTitle: 'Barcode & Label Printing',
    title: 'Barcode & Label Printing',
    tagline: 'Create & print product, shelf, batch & QR labels.',
    desc: 'Create and print labels that support faster product identification and billing. TRUSHTI POS provides barcode and QR-code printing capabilities for product, shelf, batch, and other label requirements.',
    badge: '🏷️ Custom Barcode & QR Labels',
    items: [
      'Product labels',
      'Shelf labels',
      'Barcode printing',
      'Batch labels',
      'Print QR codes',
      'Product QR codes',
    ],
    mockupType: 'barcode',
  },
  {
    id: '10',
    navTitle: 'Additional Features',
    title: 'Additional Features',
    tagline: 'Practical tools for security, payments & operations.',
    desc: 'TRUSHTI POS combines practical retail and business tools to make everyday operations more connected and manageable. Additional features support product scanning, payment flexibility, discounts, access control, and data protection.',
    badge: '⚙️ Complete Security & Controls',
    items: [
      'Barcode and QR-code scanning',
      'Multiple payment modes',
      'Tax and discount management',
      'Offer and scheme management',
      'Role-based access control',
      'Data backup and restore',
    ],
    mockupType: 'additional',
  },
  {
    id: '11',
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
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
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
                      <div>
                        <img
                          src="/pos-billing-dashboard.png"
                          alt="Trushti POS Fast Billing Interface"
                          className="tpos-dashboard-img"
                        />
                      </div>
                    )}

                      {/* Inventory Mockup */}
                      {mod.mockupType === 'inventory' && (
                        <div>
                          <img
                            src="/dashboard-preview.png"
                            alt="Trushti POS Real-time Inventory Management Dashboard"
                            className="tpos-dashboard-img"
                          />
                        </div>
                      )}

                      {/* Customer Mockup */}
                      {mod.mockupType === 'customer' && (
                        <div>
                          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '14px', background: '#f8fafc', padding: '12px', borderRadius: '12px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#059669', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem' }}>RS</div>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Rahul Sharma</div>
                              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>+91 98765 43210 · rahul@gmail.com</div>
                            </div>
                            <div style={{ marginLeft: 'auto', background: '#d1fae5', color: '#047857', fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '12px' }}>320 Loyalty Pts</div>
                          </div>
                          <table className="tpos-table">
                            <thead>
                              <tr><th>Date</th><th>Invoice</th><th>Amount</th><th>Status</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>12 Apr 2026</td><td>INV-0482</td><td>₹2,450.00</td><td><span className="tpos-tag green">Paid</span></td></tr>
                              <tr><td>05 Mar 2026</td><td>INV-0310</td><td>₹1,230.00</td><td><span className="tpos-tag green">Paid</span></td></tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Purchase Mockup */}
                      {mod.mockupType === 'purchase' && (
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '10px' }}>Recent Purchase Orders</div>
                          <table className="tpos-table">
                            <thead>
                              <tr><th>PO No</th><th>Supplier</th><th>Date</th><th>Status</th><th>Total</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>PO-0001</td><td>ABC Traders</td><td>12 Apr 2026</td><td><span className="tpos-tag green">Received</span></td><td>₹25,000.00</td></tr>
                              <tr><td>PO-0002</td><td>Global Supplies</td><td>10 Apr 2026</td><td><span className="tpos-tag yellow">Pending</span></td><td>₹18,500.00</td></tr>
                              <tr><td>PO-0003</td><td>Sunrise Traders</td><td>08 Apr 2026</td><td><span className="tpos-tag green">Received</span></td><td>₹32,750.00</td></tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* HR Mockup */}
                      {mod.mockupType === 'hr' && (
                        <div>
                          <div className="tpos-dash-stats">
                            <div className="tpos-stat-card"><label>Total Staff</label><b>18</b></div>
                            <div className="tpos-stat-card"><label>Present Today</label><b style={{ color: '#059669' }}>16</b></div>
                            <div className="tpos-stat-card"><label>On Leave</label><b style={{ color: '#d97706' }}>2</b></div>
                            <div className="tpos-stat-card"><label>Payroll Ready</label><b style={{ color: '#2563eb' }}>100%</b></div>
                          </div>
                          <table className="tpos-table">
                            <thead>
                              <tr><th>Employee</th><th>Role</th><th>Shift</th><th>Attendance</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>Amit Patel</td><td>Cashier</td><td>Morning</td><td><span className="tpos-tag green">Present (09:00 AM)</span></td></tr>
                              <tr><td>Priya Shah</td><td>Store Manager</td><td>General</td><td><span className="tpos-tag green">Present (09:15 AM)</span></td></tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Reports Mockup */}
                      {mod.mockupType === 'reports' && (
                        <div>
                          <img
                            src="/pos-imac-dashboard.png"
                            alt="Trushti POS Comprehensive Reports & Analytics"
                            className="tpos-mockup-img"
                            style={{ marginBottom: '14px', maxHeight: '280px', objectFit: 'contain' }}
                          />
                          <div className="tpos-dash-stats">
                            <div className="tpos-stat-card"><label>Today's Sales</label><b style={{ color: '#059669' }}>₹48,250</b></div>
                            <div className="tpos-stat-card"><label>Monthly Revenue</label><b>₹12.4 Lakh</b></div>
                            <div className="tpos-stat-card"><label>GST Collected</label><b style={{ color: '#2563eb' }}>₹65,400</b></div>
                            <div className="tpos-stat-card"><label>Net Profit</label><b style={{ color: '#059669' }}>24.5%</b></div>
                          </div>
                          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                            <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '8px' }}>Sales Trend & Growth Overview</div>
                            <div style={{ display: 'flex', gap: '8px', height: '60px', alignItems: 'flex-end', justifyContent: 'center' }}>
                              <div style={{ height: '40%', width: '24px', background: '#a7f3d0', borderRadius: '4px' }}></div>
                              <div style={{ height: '60%', width: '24px', background: '#6ee7b7', borderRadius: '4px' }}></div>
                              <div style={{ height: '85%', width: '24px', background: '#34d399', borderRadius: '4px' }}></div>
                              <div style={{ height: '100%', width: '24px', background: '#059669', borderRadius: '4px' }}></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Multi-Store Mockup */}
                      {mod.mockupType === 'multistore' && (
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '10px' }}>Connected Store Locations</div>
                          <table className="tpos-table">
                            <thead>
                              <tr><th>Branch Name</th><th>Location</th><th>Daily Sales</th><th>Stock Level</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>Main Store</td><td>CG Road, Ahmedabad</td><td>₹32,100</td><td><span className="tpos-tag green">Optimal</span></td></tr>
                              <tr><td>Outlet 2</td><td>SG Highway</td><td>₹16,150</td><td><span className="tpos-tag green">Optimal</span></td></tr>
                              <tr><td>Central Warehouse</td><td>Sanand Hub</td><td>—</td><td><span className="tpos-tag blue">8,500 Units</span></td></tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* WhatsApp Mockup */}
                      {mod.mockupType === 'whatsapp' && (
                        <div style={{ background: '#efeae2', borderRadius: '12px', padding: '14px' }}>
                          <div style={{ background: '#059669', color: '#fff', padding: '8px 12px', borderRadius: '8px 8px 0 0', fontWeight: 700, fontSize: '0.8rem' }}>
                            💬 WhatsApp Customer Receipt Notification
                          </div>
                          <div style={{ background: '#ffffff', borderRadius: '8px', padding: '10px', marginTop: '10px', fontSize: '0.8rem', color: '#1f2937', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <p style={{ margin: 0, fontWeight: 600 }}>Hello Rahul Sharma! 👋</p>
                            <p style={{ margin: '4px 0', color: '#4b5563' }}>Thank you for shopping with us! Here is your tax invoice <b>#INV-0482</b> for <b>₹2,450.00</b>.</p>
                            <div style={{ background: '#ecfdf5', color: '#047857', padding: '6px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, marginTop: '6px' }}>
                              📄 Download Invoice PDF (142 KB)
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tally Sync Mockup */}
                      {mod.mockupType === 'tally' && (
                        <div>
                          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px', marginBottom: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                              <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>Tally ERP / Prime Sync Status</span>
                              <span className="tpos-tag green">Connected & Active</span>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Last automatic sync: Today, 11:45 AM</div>
                          </div>
                          <table className="tpos-table">
                            <thead>
                              <tr><th>Data Type</th><th>POS Records</th><th>Tally Sync</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>Sales Vouchers</td><td>142 Invoices</td><td><span className="tpos-tag green">100% Synced</span></td></tr>
                              <tr><td>Purchase Vouchers</td><td>18 Orders</td><td><span className="tpos-tag green">100% Synced</span></td></tr>
                              <tr><td>Ledger Accounts</td><td>58 Customers</td><td><span className="tpos-tag green">100% Synced</span></td></tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Barcode Mockup */}
                      {mod.mockupType === 'barcode' && (
                        <div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <div style={{ border: '1px dashed #059669', background: '#ecfdf5', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                              <div style={{ fontWeight: 700, fontSize: '0.8rem' }}>TRUSHTI STORE</div>
                              <div style={{ fontSize: '0.75rem', color: '#374151' }}>Men's Denim Jeans</div>
                              <div style={{ fontSize: '1.2rem', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '2px', margin: '4px 0' }}>|||||| ||| ||||</div>
                              <div style={{ fontSize: '0.75rem', fontWeight: 800 }}>MRP: ₹1,299.00</div>
                            </div>
                            <div style={{ border: '1px dashed #059669', background: '#ecfdf5', borderRadius: '10px', padding: '12px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                              <div style={{ width: '48px', height: '48px', background: '#111827', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', fontWeight: 800, fontSize: '0.7rem' }}>QR CODE</div>
                              <div>
                                <div style={{ fontWeight: 700, fontSize: '0.8rem' }}>Shelf Tag</div>
                                <div style={{ fontSize: '0.7rem', color: '#4b5563' }}>Batch: B-2026-09</div>
                                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#047857' }}>₹650.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Additional Features Mockup */}
                      {mod.mockupType === 'additional' && (
                        <div>
                          <div className="tpos-dash-stats">
                            <div className="tpos-stat-card"><label>Security</label><b style={{ color: '#059669' }}>RBAC Enabled</b></div>
                            <div className="tpos-stat-card"><label>Backup</label><b style={{ color: '#2563eb' }}>Auto Daily</b></div>
                            <div className="tpos-stat-card"><label>Payments</label><b>Cash / UPI / Card</b></div>
                            <div className="tpos-stat-card"><label>Discounts</label><b>Scheme Rules</b></div>
                          </div>
                          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px' }}>
                            <div style={{ fontWeight: 700, fontSize: '0.8rem', marginBottom: '4px' }}>Data Backup & Cloud Synchronization</div>
                            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Automatic encrypted cloud backups safeguard your business inventory, sales logs, and financial records 24/7.</div>
                          </div>
                        </div>
                      )}
                    </div>
                </div>
              </div>
            </div>
          ))}
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
