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
      'Bank statement sync',
      'Stock transfer sync',
      'Stock adjustment sync',
      'Defective stock sync',
    ],
    mockupType: 'tally',
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
                          <div className="tpos-mockup-inner-minwidth" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '8px', fontSize: '0.65rem', color: '#1e293b', fontFamily: 'system-ui, sans-serif' }}>
                            {/* 1. Header Bar */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '4px 8px', marginBottom: '6px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 800, fontSize: '0.75rem', color: '#0f172a' }}>
                                  <span style={{ width: '18px', height: '18px', background: '#10b981', color: '#fff', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 'bold' }}>✓</span>
                                  <span>Trushti POS</span>
                                </div>
                                <span style={{ fontSize: '0.52rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.3px' }}>ALL IN ONE BUSINESS SOFTWARE</span>
                              </div>

                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <button style={{ background: '#1e293b', color: '#fff', border: 'none', borderRadius: '5px', padding: '3px 8px', fontSize: '0.58rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px', cursor: 'pointer' }}>
                                  <span>▶</span> Scan Sale
                                </button>
                                <button style={{ background: '#7c3aed', color: '#fff', border: 'none', borderRadius: '5px', padding: '3px 8px', fontSize: '0.58rem', fontWeight: 600, cursor: 'pointer' }}>
                                  📊 Dashboard
                                </button>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#e2e8f0', color: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.58rem' }}>
                                  A
                                </div>
                              </div>
                            </div>

                            {/* 2. Main Work Area (Left Sidebar + Center Catalog + Right Order List) */}
                            <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr 215px', gap: '6px', marginBottom: '6px' }}>

                              {/* Category Sidebar */}
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                {[
                                  { label: 'All', icon: '🎛️', active: true },
                                  { label: 'ECE', icon: '💻', active: false },
                                  { label: 'SOCKS', icon: '🏷️', active: false },
                                  { label: 'Fashion', icon: '👕', active: false },
                                  { label: 'Footw...', icon: '👟', active: false },
                                  { label: 'Home...', icon: '🏠', active: false },
                                ].map((cat, idx) => (
                                  <div key={idx} style={{
                                    background: cat.active ? '#ecfdf5' : '#ffffff',
                                    border: cat.active ? '1.5px solid #10b981' : '1px solid #e2e8f0',
                                    borderRadius: '6px',
                                    padding: '3px 1px',
                                    textAlign: 'center',
                                    cursor: 'pointer'
                                  }}>
                                    <div style={{ fontSize: '0.7rem' }}>{cat.icon}</div>
                                    <div style={{ fontSize: '0.48rem', fontWeight: cat.active ? 700 : 500, color: cat.active ? '#047857' : '#64748b', marginTop: '1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cat.label}</div>
                                  </div>
                                ))}
                              </div>

                              {/* Center Section: Search & Product Cards Grid */}
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>

                                {/* Welcome & Search Bar */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '4px 8px' }}>
                                  <div>
                                    <div style={{ fontWeight: 700, fontSize: '0.62rem', color: '#0f172a' }}>
                                      Welcome, <span style={{ color: '#10b981' }}>Admin</span> <span style={{ color: '#94a3b8', fontWeight: 400 }}>(Super Store)</span>
                                    </div>
                                    <div style={{ fontSize: '0.5rem', color: '#94a3b8' }}>2025-09-09 12:21 PM</div>
                                  </div>

                                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <div style={{ position: 'relative' }}>
                                      <input
                                        type="text"
                                        readOnly
                                        placeholder="Search or Scan Barcode..."
                                        style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '2px 6px 2px 18px', fontSize: '0.52rem', width: '110px' }}
                                      />
                                      <span style={{ position: 'absolute', left: '4px', top: '2px', fontSize: '0.52rem', color: '#94a3b8' }}>🔍</span>
                                    </div>
                                    <button style={{ background: '#0f172a', color: '#fff', border: 'none', borderRadius: '4px', padding: '2px 6px', fontSize: '0.52rem', fontWeight: 600 }}>👁 View All Brands</button>
                                    <button style={{ background: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem' }}>⁝⁝</button>
                                  </div>
                                </div>

                                {/* Product Cards Grid (4 columns x 2 rows) */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px' }}>
                                  {[
                                    {
                                      cat: 'Electronics | ECE',
                                      name: 'Charging',
                                      badge: 'Small',
                                      price: '₹2,650.00',
                                      stock: 'Stock: 18 Pcs',
                                      stockBg: '#d1fae5',
                                      stockColor: '#047857',
                                      img: '🔌'
                                    },
                                    {
                                      cat: 'Electronics | Apple',
                                      name: 'TV',
                                      badge: null,
                                      price: '₹29,500.00',
                                      stock: 'Stock: 15 Pcs',
                                      stockBg: '#d1fae5',
                                      stockColor: '#047857',
                                      img: '📺'
                                    },
                                    {
                                      cat: 'Electronics > Smartphones',
                                      name: 'iPhone 15 Pro',
                                      badge: '128 GB / Black',
                                      price: '₹1,09,999.00',
                                      stock: 'Out of Stock',
                                      stockBg: '#fee2e2',
                                      stockColor: '#dc2626',
                                      img: '📱'
                                    },
                                    {
                                      cat: 'Electronics > Smartphones',
                                      name: 'iPhone 15 Pro',
                                      badge: '16 GB / Black',
                                      price: '₹1,099.00',
                                      stock: 'Stock: 8 Pcs',
                                      stockBg: '#fee2e2',
                                      stockColor: '#dc2626',
                                      img: '📱'
                                    },
                                    {
                                      cat: 'Electronics > Smartphones',
                                      name: 'Mobile',
                                      badge: null,
                                      price: '₹23,200.00',
                                      stock: 'Stock: 3 Pcs',
                                      stockBg: '#fee2e2',
                                      stockColor: '#dc2626',
                                      img: '📲'
                                    },
                                    {
                                      cat: 'Electronics | ECE',
                                      name: 'Headphones',
                                      badge: null,
                                      price: '₹1,299.00',
                                      stock: 'Stock: 25 Pcs',
                                      stockBg: '#d1fae5',
                                      stockColor: '#047857',
                                      img: '🎧'
                                    },
                                    {
                                      cat: 'Electronics | ECE',
                                      name: 'Earbuds',
                                      badge: null,
                                      price: '₹899.00',
                                      stock: 'Stock: 50 Pcs',
                                      stockBg: '#d1fae5',
                                      stockColor: '#047857',
                                      img: '🎧'
                                    },
                                    {
                                      cat: 'Electronics | ECE',
                                      name: 'Smart Watch',
                                      badge: null,
                                      price: '₹4,999.00',
                                      stock: 'Stock: 12 Pcs',
                                      stockBg: '#d1fae5',
                                      stockColor: '#047857',
                                      img: '⌚'
                                    },
                                  ].map((item, i) => (
                                    <div key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                      <div>
                                        <div style={{ background: '#f8fafc', height: '28px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem', marginBottom: '2px' }}>
                                          {item.img}
                                        </div>
                                        <div style={{ fontSize: '0.45rem', color: '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.cat}</div>
                                        <div style={{ fontSize: '0.55rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.1 }}>{item.name}</div>
                                        {item.badge && (
                                          <span style={{ display: 'inline-block', background: '#0f172a', color: '#fff', fontSize: '0.42rem', padding: '0px 3px', borderRadius: '2px', marginTop: '1px', fontWeight: 600 }}>
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>

                                      <div style={{ marginTop: '2px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2px', marginBottom: '2px', flexWrap: 'wrap' }}>
                                          <span style={{ fontSize: '0.52rem', fontWeight: 800, color: '#0f172a', whiteSpace: 'nowrap' }}>{item.price}</span>
                                          <span style={{ background: item.stockBg, color: item.stockColor, fontSize: '0.42rem', padding: '0px 3px', borderRadius: '2px', fontWeight: 700, whiteSpace: 'nowrap' }}>
                                            {item.stock}
                                          </span>
                                        </div>
                                        <button style={{ width: '100%', background: '#10b981', color: '#fff', border: 'none', borderRadius: '3px', padding: '2px 0', fontSize: '0.48rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                                          🛒 Add to Order
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Right Order List Cart Section */}
                              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                  {/* Order List Title & Actions */}
                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                    <span style={{ fontWeight: 800, fontSize: '0.65rem', color: '#0f172a' }}>Order List</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                                      <span style={{ background: '#0f172a', color: '#fff', fontSize: '0.45rem', padding: '1px 4px', borderRadius: '3px', fontWeight: 700 }}>NEW SALE</span>
                                      <span style={{ background: '#fee2e2', color: '#dc2626', width: '15px', height: '15px', borderRadius: '3px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', cursor: 'pointer' }}>🗑</span>
                                    </div>
                                  </div>

                                  {/* Customer Selection */}
                                  <div style={{ marginBottom: '4px' }}>
                                    <div style={{ fontSize: '0.48rem', fontWeight: 600, color: '#64748b', marginBottom: '1px' }}>Customer Information</div>
                                    <div style={{ display: 'flex', gap: '3px' }}>
                                      <div style={{ flex: 1, background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '2px 4px', fontSize: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#334155' }}>
                                        <span>Walk in Customer</span>
                                        <span style={{ color: '#94a3b8', fontSize: '0.45rem' }}>✕ ▾</span>
                                      </div>
                                      <button style={{ background: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', width: '18px', height: '18px', fontSize: '0.55rem' }}>🔍</button>
                                    </div>
                                  </div>

                                  {/* Order Details header */}
                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', borderRadius: '4px', padding: '2px 4px', marginBottom: '4px', fontSize: '0.48rem' }}>
                                    <div>
                                      <span style={{ fontWeight: 700 }}>Order Details</span> <span style={{ color: '#64748b' }}>Rows : 2</span>
                                      <div style={{ color: '#94a3b8', fontSize: '0.42rem' }}>Order Date 2025-09-09</div>
                                    </div>
                                    <span style={{ background: '#ef4444', color: '#fff', fontSize: '0.42rem', padding: '1px 4px', borderRadius: '2px', fontWeight: 700, cursor: 'pointer' }}>Clear All</span>
                                  </div>

                                  {/* Items Header */}
                                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 38px 45px 12px', gap: '2px', fontSize: '0.46rem', fontWeight: 700, color: '#64748b', borderBottom: '1px solid #f1f5f9', paddingBottom: '2px', marginBottom: '3px' }}>
                                    <span>Items</span>
                                    <span style={{ textAlign: 'center' }}>QTY</span>
                                    <span style={{ textAlign: 'right' }}>Cost</span>
                                    <span></span>
                                  </div>

                                  {/* Items List */}
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '4px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 38px 45px 12px', gap: '2px', alignItems: 'center', fontSize: '0.48rem' }}>
                                      <div>
                                        <div style={{ fontWeight: 700, color: '#0f172a' }}>TV</div>
                                        <div style={{ fontSize: '0.42rem', color: '#94a3b8' }}>Samsung 39in</div>
                                      </div>
                                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', borderRadius: '2px', padding: '0px 1px' }}>
                                        <span style={{ color: '#64748b', cursor: 'pointer' }}>-</span>
                                        <span style={{ margin: '0 2px', fontWeight: 700 }}>1</span>
                                        <span style={{ color: '#64748b', cursor: 'pointer' }}>+</span>
                                      </div>
                                      <div style={{ textAlign: 'right', fontWeight: 700 }}>₹29,500</div>
                                      <span style={{ color: '#ef4444', fontSize: '0.5rem', textAlign: 'center', cursor: 'pointer' }}>🗑</span>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 38px 45px 12px', gap: '2px', alignItems: 'center', fontSize: '0.48rem' }}>
                                      <div>
                                        <div style={{ fontWeight: 700, color: '#0f172a' }}>Charging - Small</div>
                                        <div style={{ fontSize: '0.42rem', color: '#94a3b8' }}>Portronics</div>
                                      </div>
                                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', borderRadius: '2px', padding: '0px 1px' }}>
                                        <span style={{ color: '#64748b', cursor: 'pointer' }}>-</span>
                                        <span style={{ margin: '0 2px', fontWeight: 700 }}>1</span>
                                        <span style={{ color: '#64748b', cursor: 'pointer' }}>+</span>
                                      </div>
                                      <div style={{ textAlign: 'right', fontWeight: 700 }}>₹2,050</div>
                                      <span style={{ color: '#ef4444', fontSize: '0.5rem', textAlign: 'center', cursor: 'pointer' }}>🗑</span>
                                    </div>
                                  </div>

                                  {/* Payment Summary */}
                                  <div style={{ borderTop: '1px dashed #cbd5e1', paddingTop: '3px', display: 'flex', flexDirection: 'column', gap: '1.5px', fontSize: '0.48rem' }}>
                                    <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '1px' }}>Payment Summary</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                      <span style={{ color: '#64748b' }}>Sub Total</span>
                                      <span style={{ fontWeight: 700 }}>₹31,550.00</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                      <span style={{ color: '#64748b' }}>Tax Exempt (18%)</span>
                                      <span style={{ color: '#059669', fontWeight: 700 }}>+₹5,572.80</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                      <span style={{ color: '#64748b' }}>Product Discount</span>
                                      <span style={{ color: '#10b981', fontWeight: 700 }}>-₹350.00</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                      <span style={{ color: '#64748b' }}>Coupon</span>
                                      <span style={{ color: '#ef4444', fontWeight: 700 }}>-₹0.00</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                      <span style={{ color: '#ef4444' }}>Extra Discount ✏️</span>
                                      <span style={{ color: '#ef4444', fontWeight: 700 }}>-₹0.00</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                      <span style={{ color: '#64748b' }}>Shipping ✏️</span>
                                      <span style={{ fontWeight: 700 }}>₹0.00</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                                        <div style={{ width: '16px', height: '8px', background: '#0f172a', borderRadius: '8px', position: 'relative' }}>
                                          <div style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', position: 'absolute', right: '1px', top: '1px' }}></div>
                                        </div>
                                        <span style={{ color: '#64748b' }}>Roundoff</span>
                                      </div>
                                      <span style={{ color: '#059669', fontWeight: 700 }}>+₹0.20</span>
                                    </div>
                                  </div>

                                  {/* Total Payable Box */}
                                  <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '3px', marginTop: '3px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 800, fontSize: '0.58rem', color: '#0f172a' }}>Total Payable</span>
                                    <span style={{ fontWeight: 900, fontSize: '0.72rem', color: '#0f172a' }}>₹36,633.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* 3. Bottom Action Bar (8 Colorful Buttons) */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '4px' }}>
                              <button style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '3px 1px', fontSize: '0.46rem', fontWeight: 700, color: '#334155', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1px', whiteSpace: 'nowrap' }}>
                                📊 Sales Dash
                              </button>
                              <button style={{ background: '#ffffff', border: '1.5px solid #10b981', borderRadius: '4px', padding: '3px 1px', fontSize: '0.46rem', fontWeight: 700, color: '#059669', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1px', whiteSpace: 'nowrap' }}>
                                🛒 Purchase List
                              </button>
                              <button style={{ background: '#ffffff', border: '1.5px solid #ef4444', borderRadius: '4px', padding: '3px 1px', fontSize: '0.46rem', fontWeight: 700, color: '#dc2626', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1px', whiteSpace: 'nowrap' }}>
                                📄 Expense List
                              </button>
                              <button style={{ background: '#0f172a', color: '#fff', border: 'none', borderRadius: '4px', padding: '3px 1px', fontSize: '0.46rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1px', whiteSpace: 'nowrap' }}>
                                ⏱ Today's Sale
                              </button>
                              <button style={{ background: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', padding: '3px 1px', fontSize: '0.46rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1px', whiteSpace: 'nowrap' }}>
                                📊 Today Profit
                              </button>
                              <button style={{ background: '#fbbf24', color: '#78350f', border: 'none', borderRadius: '4px', padding: '3px 1px', fontSize: '0.46rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1px', whiteSpace: 'nowrap' }}>
                                💵 Cash Pay
                              </button>
                              <button style={{ background: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', padding: '3px 1px', fontSize: '0.46rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1px', whiteSpace: 'nowrap' }}>
                                ↩ Pur. Return
                              </button>
                              <button style={{ background: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', padding: '3px 1px', fontSize: '0.46rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1px', whiteSpace: 'nowrap' }}>
                                ↩ Sale Return
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Inventory Mockup */}
                      {mod.mockupType === 'inventory' && (
                        <div className="tpos-mockup-scroll-wrapper">
                          <div className="tpos-mockup-inner-minwidth" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '12px', fontSize: '0.78rem' }}>
                            {/* Top Header Bar */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '6px 12px', marginBottom: '10px' }}>
                              <div style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#64748b', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '6px', minWidth: '150px' }}>
                                🔍 Search modules...
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem' }}>
                                <span style={{ background: '#0f172a', color: '#ffffff', padding: '3px 8px', borderRadius: '5px', fontWeight: 600 }}>‹ Update</span>
                                <span style={{ background: '#f1f5f9', padding: '3px 8px', borderRadius: '5px', color: '#334155' }}>Zoho Store ▾</span>
                                <span style={{ background: '#059669', color: '#ffffff', padding: '3px 8px', borderRadius: '5px', fontWeight: 700 }}>POS</span>
                                <span style={{ background: '#f1f5f9', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem' }}>🔔</span>
                                <span style={{ background: '#f1f5f9', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem' }}>⚙️</span>
                                <span style={{ background: '#e2e8f0', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#1e293b', fontSize: '0.65rem' }}>A</span>
                              </div>
                            </div>

                            {/* Welcome Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                              <div>
                                <h3 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Welcome, Admin</h3>
                                <span style={{ fontSize: '0.68rem', color: '#64748b' }}>You have 32 Orders so far - here's how the store is tracking today</span>
                              </div>
                              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '2px 6px', fontSize: '0.65rem', color: '#64748b', display: 'flex', gap: '4px' }}>
                                <span>1D</span><span>1W</span><span>1M</span><span>3M</span><span>6M</span><span style={{ background: '#0f172a', color: '#fff', borderRadius: '4px', padding: '0 4px', fontWeight: 700 }}>1Y</span><span>ALL</span>
                              </div>
                            </div>

                            {/* 4 Primary Metric Cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '8px' }}>
                              {/* Card 1: Total Sales */}
                              <div style={{ background: '#0f172a', color: '#ffffff', borderRadius: '8px', padding: '8px', position: 'relative' }}>
                                <div style={{ fontSize: '0.65rem', opacity: 0.8 }}>Total Sales</div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 800, marginTop: '2px' }}>₹1,468,261.00</div>
                                <span style={{ position: 'absolute', top: '6px', right: '6px', background: 'rgba(255,255,255,0.15)', fontSize: '0.6rem', padding: '1px 4px', borderRadius: '4px' }}>▲ 100%</span>
                              </div>

                              {/* Card 2: Total Sales Return */}
                              <div style={{ background: '#059669', color: '#ffffff', borderRadius: '8px', padding: '8px', position: 'relative' }}>
                                <div style={{ fontSize: '0.65rem', opacity: 0.8 }}>Total Sales Return</div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 800, marginTop: '2px' }}>₹59,600.00</div>
                                <span style={{ position: 'absolute', top: '6px', right: '6px', background: 'rgba(255,255,255,0.15)', fontSize: '0.6rem', padding: '1px 4px', borderRadius: '4px' }}>▲ 100%</span>
                              </div>

                              {/* Card 3: Total Purchase */}
                              <div style={{ background: '#d97706', color: '#ffffff', borderRadius: '8px', padding: '8px', position: 'relative' }}>
                                <div style={{ fontSize: '0.65rem', opacity: 0.8 }}>Total Purchase</div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 800, marginTop: '2px' }}>₹1,759,967.48</div>
                                <span style={{ position: 'absolute', top: '6px', right: '6px', background: 'rgba(255,255,255,0.15)', fontSize: '0.6rem', padding: '1px 4px', borderRadius: '4px' }}>▲ 100%</span>
                              </div>

                              {/* Card 4: Total Purchase Return */}
                              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px', position: 'relative' }}>
                                <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Total Purchase Return</div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>₹508,000.00</div>
                                <span style={{ position: 'absolute', top: '6px', right: '6px', background: '#d1fae5', color: '#047857', fontSize: '0.6rem', padding: '1px 4px', borderRadius: '4px', fontWeight: 700 }}>▲ 100%</span>
                              </div>
                            </div>

                            {/* 4 Secondary Metric Cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '10px' }}>
                              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '6px 8px' }}>
                                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Profit</div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>₹674,605.72</div>
                              </div>
                              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '6px 8px' }}>
                                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Invoice Due</div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>₹0.00</div>
                              </div>
                              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '6px 8px' }}>
                                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Total Expenses</div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>₹3,500.00</div>
                              </div>
                              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '6px 8px' }}>
                                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Payment Returns</div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>₹169,816.86</div>
                              </div>
                            </div>

                            {/* Chart & Overview Section */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '10px' }}>
                              {/* Left: Chart mockup */}
                              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '8px 10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                  <span style={{ fontWeight: 700, fontSize: '0.78rem', color: '#0f172a' }}>📊 Sales & Purchase Overview</span>
                                  <div style={{ display: 'flex', gap: '8px', fontSize: '0.65rem', color: '#64748b' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '8px', height: '8px', background: '#059669', borderRadius: '2px' }}></span> Purchase</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '8px', height: '8px', background: '#d97706', borderRadius: '2px' }}></span> Sales</span>
                                  </div>
                                </div>
                                <div style={{ display: 'flex', gap: '6px', height: '65px', alignItems: 'flex-end', justifyContent: 'space-around', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}>
                                  <div style={{ height: '30%', width: '12px', background: '#059669', borderRadius: '2px' }}></div>
                                  <div style={{ height: '45%', width: '12px', background: '#059669', borderRadius: '2px' }}></div>
                                  <div style={{ height: '60%', width: '12px', background: '#059669', borderRadius: '2px' }}></div>
                                  <div style={{ height: '40%', width: '12px', background: '#059669', borderRadius: '2px' }}></div>
                                  <div style={{ height: '55%', width: '12px', background: '#059669', borderRadius: '2px' }}></div>
                                  <div style={{ height: '70%', width: '12px', background: '#059669', borderRadius: '2px' }}></div>
                                  <div style={{ height: '100%', width: '14px', background: '#059669', borderRadius: '2px' }}></div>
                                  <div style={{ height: '80%', width: '14px', background: '#d97706', borderRadius: '2px' }}></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', color: '#94a3b8', marginTop: '4px' }}>
                                  <span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Sep</span>
                                </div>
                              </div>

                              {/* Right: Overall Information */}
                              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '8px 10px' }}>
                                <div style={{ fontWeight: 700, fontSize: '0.78rem', color: '#0f172a', marginBottom: '6px' }}>Overall Information</div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginBottom: '8px', textAlign: 'center' }}>
                                  <div style={{ background: '#f8fafc', padding: '4px', borderRadius: '6px' }}><div style={{ fontSize: '0.8rem', fontWeight: 800 }}>3</div><div style={{ fontSize: '0.58rem', color: '#64748b' }}>Suppliers</div></div>
                                  <div style={{ background: '#f8fafc', padding: '4px', borderRadius: '6px' }}><div style={{ fontSize: '0.8rem', fontWeight: 800 }}>4</div><div style={{ fontSize: '0.58rem', color: '#64748b' }}>Customers</div></div>
                                  <div style={{ background: '#f8fafc', padding: '4px', borderRadius: '6px' }}><div style={{ fontSize: '0.8rem', fontWeight: 800 }}>32</div><div style={{ fontSize: '0.58rem', color: '#64748b' }}>Orders</div></div>
                                </div>
                                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>Customers Overview</div>
                                <div style={{ fontSize: '0.65rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '3px', marginBottom: '3px' }}>
                                  <span>manish</span><span style={{ fontWeight: 700 }}>₹0.00</span>
                                </div>
                                <div style={{ fontSize: '0.65rem', display: 'flex', justifyContent: 'space-between' }}>
                                  <span>Amit</span><span style={{ fontWeight: 700 }}>₹0.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Customer Mockup */}
                      {mod.mockupType === 'customer' && (
                        <div className="tpos-mockup-scroll-wrapper">
                          <div className="tpos-mockup-inner-minwidth" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '12px', fontSize: '0.78rem' }}>
                            {/* Top Header Bar */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '6px 12px', marginBottom: '10px' }}>
                              <div style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#64748b', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '6px', minWidth: '150px' }}>
                                🔍 Search modules...
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem' }}>
                                <span style={{ background: '#0f172a', color: '#ffffff', padding: '3px 8px', borderRadius: '5px', fontWeight: 600 }}>‹ Update</span>
                                <span style={{ background: '#f1f5f9', padding: '3px 8px', borderRadius: '5px', color: '#334155' }}>Zoho Store ▾</span>
                                <span style={{ background: '#059669', color: '#ffffff', padding: '3px 8px', borderRadius: '5px', fontWeight: 700 }}>POS</span>
                                <span style={{ background: '#f1f5f9', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem' }}>🔔</span>
                                <span style={{ background: '#f1f5f9', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem' }}>⚙️</span>
                                <span style={{ background: '#e2e8f0', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#1e293b', fontSize: '0.65rem' }}>A</span>
                              </div>
                            </div>

                            {/* Section Title Bar */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                              <div>
                                <h3 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Customer Report</h3>
                                <span style={{ fontSize: '0.68rem', color: '#64748b' }}>View Reports of Customer</span>
                              </div>
                              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '3px 6px', borderRadius: '5px', cursor: 'pointer', fontSize: '0.7rem' }}>📊</span>
                                <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '3px 6px', borderRadius: '5px', cursor: 'pointer', fontSize: '0.7rem' }}>↺</span>
                              </div>
                            </div>

                            {/* Filter Inputs Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '10px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '8px 10px' }}>
                              <div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569', marginBottom: '3px' }}>Choose Date</div>
                                <div style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '3px 6px', fontSize: '0.65rem', color: '#94a3b8', background: '#ffffff' }}>📅 dd/mm/yyyy - dd/mm/yyyy</div>
                              </div>
                              <div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569', marginBottom: '3px' }}>Customer</div>
                                <div style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '3px 6px', fontSize: '0.65rem', color: '#94a3b8', background: '#ffffff', display: 'flex', justifyContent: 'space-between' }}>Select <span>▾</span></div>
                              </div>
                              <div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569', marginBottom: '3px' }}>Payment Method</div>
                                <div style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '3px 6px', fontSize: '0.65rem', color: '#94a3b8', background: '#ffffff', display: 'flex', justifyContent: 'space-between' }}>Select <span>▾</span></div>
                              </div>
                              <div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569', marginBottom: '3px' }}>Payment Status</div>
                                <div style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '3px 6px', fontSize: '0.65rem', color: '#94a3b8', background: '#ffffff', display: 'flex', justifyContent: 'space-between' }}>Select <span>▾</span></div>
                              </div>
                            </div>

                            {/* Customer Orders & Invoices List */}
                            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '8px 10px' }}>
                              {/* Customer 1: Manish */}
                              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 10px', marginBottom: '8px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, fontSize: '0.75rem', color: '#0f172a', marginBottom: '6px' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '0.7rem', color: '#64748b' }}>▾</span>
                                    <span style={{ background: '#059669', color: '#ffffff', width: '20px', height: '20px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem' }}>M</span>
                                    <span>Manish</span>
                                    <span style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 500 }}>(2 Orders)</span>
                                  </div>
                                  <div style={{ color: '#059669', fontWeight: 800 }}>₹128,685.00</div>
                                </div>
                                <table className="tpos-table" style={{ fontSize: '0.68rem', background: '#ffffff', borderRadius: '6px' }}>
                                  <thead>
                                    <tr>
                                      <th>Ref No</th>
                                      <th>Items</th>
                                      <th>Method</th>
                                      <th>Status</th>
                                      <th>Amount</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><b>ZHO-0006</b></td>
                                      <td>T-shirts (x3), iPhone 15 Pro (x1)</td>
                                      <td>Cash, UPI</td>
                                      <td><span className="tpos-tag green">Paid</span></td>
                                      <td><b>₹128,526.00</b></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              {/* Customer 2: Amit */}
                              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, fontSize: '0.75rem', color: '#0f172a', marginBottom: '6px' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '0.7rem', color: '#64748b' }}>▾</span>
                                    <span style={{ background: '#2563eb', color: '#ffffff', width: '20px', height: '20px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem' }}>A</span>
                                    <span>Amit</span>
                                    <span style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 500 }}>(1 Order)</span>
                                  </div>
                                  <div style={{ color: '#059669', fontWeight: 800 }}>₹34,660.00</div>
                                </div>
                                <table className="tpos-table" style={{ fontSize: '0.68rem', background: '#ffffff', borderRadius: '6px' }}>
                                  <thead>
                                    <tr>
                                      <th>Ref No</th>
                                      <th>Items</th>
                                      <th>Method</th>
                                      <th>Status</th>
                                      <th>Amount</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><b>ZHO-0005</b></td>
                                      <td>Mobile Phone (x1)</td>
                                      <td>UPI</td>
                                      <td><span className="tpos-tag green">Paid</span></td>
                                      <td><b>₹34,660.00</b></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Purchase & Supplier Mockup */}
                      {mod.mockupType === 'purchase' && (
                        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '12px', fontSize: '0.78rem' }}>
                          {/* Top Header Bar */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '6px 12px', marginBottom: '10px' }}>
                            <div style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#64748b', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '6px', minWidth: '150px' }}>
                              🔍 Search modules...
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem' }}>
                              <span style={{ background: '#0f172a', color: '#ffffff', padding: '3px 8px', borderRadius: '5px', fontWeight: 600 }}>‹ Update</span>
                              <span style={{ background: '#f1f5f9', padding: '3px 8px', borderRadius: '5px', color: '#334155' }}>Zoho Store ▾</span>
                              <span style={{ background: '#059669', color: '#ffffff', padding: '3px 8px', borderRadius: '5px', fontWeight: 700 }}>POS</span>
                              <span style={{ background: '#f1f5f9', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem' }}>🔔</span>
                              <span style={{ background: '#f1f5f9', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem' }}>⚙️</span>
                              <span style={{ background: '#e2e8f0', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#1e293b', fontSize: '0.65rem' }}>A</span>
                            </div>
                          </div>

                          {/* Section Title Bar */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <div>
                              <h3 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Supplier Report</h3>
                              <span style={{ fontSize: '0.68rem', color: '#64748b' }}>View Reports of Supplier</span>
                            </div>
                            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                              <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '3px 6px', borderRadius: '5px', cursor: 'pointer', fontSize: '0.7rem' }}>📊</span>
                              <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '3px 6px', borderRadius: '5px', cursor: 'pointer', fontSize: '0.7rem' }}>🔍</span>
                            </div>
                          </div>

                          {/* Filter Inputs Grid */}
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '10px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '8px 10px' }}>
                            <div>
                              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569', marginBottom: '3px' }}>Choose Date</div>
                              <div style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '3px 6px', fontSize: '0.65rem', color: '#94a3b8', background: '#ffffff' }}>📅 dd/mm/yyyy - dd/mm/yyyy</div>
                            </div>
                            <div>
                              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569', marginBottom: '3px' }}>Supplier</div>
                              <div style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '3px 6px', fontSize: '0.65rem', color: '#94a3b8', background: '#ffffff', display: 'flex', justifyContent: 'space-between' }}>Select Supplier <span>▾</span></div>
                            </div>
                            <div>
                              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569', marginBottom: '3px' }}>Status</div>
                              <div style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '3px 6px', fontSize: '0.65rem', color: '#94a3b8', background: '#ffffff', display: 'flex', justifyContent: 'space-between' }}>Select Status <span>▾</span></div>
                            </div>
                            <div>
                              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569', marginBottom: '3px' }}>Payment Status</div>
                              <div style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '3px 6px', fontSize: '0.65rem', color: '#94a3b8', background: '#ffffff', display: 'flex', justifyContent: 'space-between' }}>Select Payment Status <span>▾</span></div>
                            </div>
                          </div>

                          {/* Data Table */}
                          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '8px 10px' }}>
                            <table className="tpos-table" style={{ fontSize: '0.7rem' }}>
                              <thead>
                                <tr>
                                  <th>Reference</th>
                                  <th>Supplier ID</th>
                                  <th>Supplier</th>
                                  <th>Total Items</th>
                                  <th>Amount</th>
                                  <th>Payment Status</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><b>PU-0042</b></td>
                                  <td>SUP-0002</td>
                                  <td>Ankit Prajapati</td>
                                  <td>65</td>
                                  <td><b>₹141,010.00</b></td>
                                  <td><span className="tpos-tag green">Paid</span></td>
                                  <td><span className="tpos-tag green">Received</span></td>
                                </tr>
                                <tr>
                                  <td><b>PU-0041</b></td>
                                  <td>SUP-0002</td>
                                  <td>Ankit Prajapati</td>
                                  <td>36</td>
                                  <td><b>₹81,302.00</b></td>
                                  <td><span className="tpos-tag green">Paid</span></td>
                                  <td><span className="tpos-tag green">Received</span></td>
                                </tr>
                              </tbody>
                            </table>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#0f172a', borderTop: '1px solid #f1f5f9', paddingTop: '6px' }}>
                              <span>Total</span>
                              <span style={{ color: '#059669', fontSize: '0.85rem' }}>₹559,108.12</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* HR Mockup */}
                      {mod.mockupType === 'hr' && (
                        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '12px', fontSize: '0.78rem' }}>
                          {/* Dashboard Top Header Bar */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '6px 12px', marginBottom: '10px' }}>
                            <div style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#64748b', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '6px', minWidth: '150px' }}>
                              🔍 Search modules...
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem' }}>
                              <span style={{ background: '#0f172a', color: '#ffffff', padding: '3px 8px', borderRadius: '5px', fontWeight: 600 }}>‹ Update</span>
                              <span style={{ background: '#f1f5f9', padding: '3px 8px', borderRadius: '5px', color: '#334155' }}>Zoho Store ▾</span>
                              <span style={{ background: '#059669', color: '#ffffff', padding: '3px 8px', borderRadius: '5px', fontWeight: 700 }}>POS</span>
                              <span style={{ background: '#f1f5f9', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem' }}>🔔</span>
                              <span style={{ background: '#f1f5f9', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem' }}>⚙️</span>
                              <span style={{ background: '#e2e8f0', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#1e293b', fontSize: '0.65rem' }}>A</span>
                            </div>
                          </div>

                          {/* HR Title & Action Bar */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <div>
                              <h3 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>HR Dashboard</h3>
                              <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Manage your HR Dashboard</span>
                            </div>
                            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                              <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '3px 6px', borderRadius: '5px', cursor: 'pointer', fontSize: '0.7rem' }}>↺</span>
                              <button style={{ background: '#0f172a', color: '#ffffff', border: 'none', padding: '4px 10px', borderRadius: '6px', fontWeight: 600, fontSize: '0.7rem', cursor: 'pointer' }}>
                                👥 All Employees
                              </button>
                            </div>
                          </div>

                          {/* 4 Stat Cards Grid */}
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '10px' }}>
                            {/* Card 1: Total Staff */}
                            <div style={{ background: '#ffffff', border: '1px solid #10b981', borderRadius: '8px', padding: '6px 8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem' }}>👥</div>
                              <div>
                                <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>Total Staff</div>
                                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>12</div>
                              </div>
                            </div>

                            {/* Card 2: Active */}
                            <div style={{ background: '#ffffff', border: '1px solid #1e293b', borderRadius: '8px', padding: '6px 8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: '#0f172a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem' }}>👤</div>
                              <div>
                                <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>Active</div>
                                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>10</div>
                              </div>
                            </div>

                            {/* Card 3: Inactive */}
                            <div style={{ background: '#ffffff', border: '1px solid #f59e0b', borderRadius: '8px', padding: '6px 8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem' }}>👤</div>
                              <div>
                                <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>Inactive</div>
                                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>2</div>
                              </div>
                            </div>

                            {/* Card 4: New Joiners */}
                            <div style={{ background: '#ffffff', border: '1px solid #ef4444', borderRadius: '8px', padding: '6px 8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem' }}>👤+</div>
                              <div>
                                <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>New Joiners</div>
                                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>3</div>
                              </div>
                            </div>
                          </div>

                          {/* 2 Tables Grid */}
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            {/* Left Table: Job Postings */}
                            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '8px 10px' }}>
                              <div style={{ fontWeight: 700, fontSize: '0.78rem', color: '#0f172a', marginBottom: '6px' }}>Recent Job Postings</div>
                              <table className="tpos-table" style={{ fontSize: '0.7rem' }}>
                                <thead>
                                  <tr><th>Job Title</th><th>Type</th><th>Vacancies</th><th>Status</th></tr>
                                </thead>
                                <tbody>
                                  <tr><td>Billing Executive</td><td>Full Time</td><td>2</td><td><span className="tpos-tag green">Active</span></td></tr>
                                  <tr><td>Inventory Manager</td><td>Full Time</td><td>1</td><td><span className="tpos-tag green">Active</span></td></tr>
                                </tbody>
                              </table>
                            </div>

                            {/* Right Table: Candidates */}
                            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '8px 10px' }}>
                              <div style={{ fontWeight: 700, fontSize: '0.78rem', color: '#0f172a', marginBottom: '6px' }}>Recent Candidates</div>
                              <table className="tpos-table" style={{ fontSize: '0.7rem' }}>
                                <thead>
                                  <tr><th>Candidate</th><th>Applied For</th><th>Stage</th></tr>
                                </thead>
                                <tbody>
                                  <tr><td>Rahul Verma</td><td>Billing Exec</td><td><span className="tpos-tag blue">Interview</span></td></tr>
                                  <tr><td>Neha Sharma</td><td>Inventory Mgr</td><td><span className="tpos-tag green">Shortlisted</span></td></tr>
                                </tbody>
                              </table>
                            </div>
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
                        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '10px', fontSize: '0.72rem', color: '#1e293b', fontFamily: 'system-ui, sans-serif' }}>
                          {/* Top Navigation Bar */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '5px 10px', marginBottom: '8px' }}>
                            <div style={{ background: '#f1f5f9', padding: '3px 8px', borderRadius: '5px', color: '#64748b', fontSize: '0.65rem', display: 'flex', alignItems: 'center', gap: '5px', width: '140px' }}>
                              🔍 Search modules...
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.65rem' }}>
                              <span style={{ background: '#0f172a', color: '#ffffff', padding: '3px 8px', borderRadius: '5px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span>▲</span> New Update Available
                              </span>
                              <span style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', padding: '3px 8px', borderRadius: '5px', color: '#334155', fontWeight: 600 }}>
                                🏢 Zoho Store ▾
                              </span>
                              <span style={{ background: '#059669', color: '#ffffff', padding: '3px 8px', borderRadius: '5px', fontWeight: 700 }}>
                                POS
                              </span>
                              <span style={{ background: '#f1f5f9', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem' }}>🔔</span>
                              <span style={{ background: '#f1f5f9', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem' }}>⚙️</span>
                              <span style={{ background: '#e2e8f0', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#1e293b', fontSize: '0.6rem' }}>A</span>
                            </div>
                          </div>

                          {/* Stores Section Header */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                            <div>
                              <h3 style={{ margin: 0, fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>Stores</h3>
                              <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Manage your Store</div>
                              <div style={{ fontSize: '0.62rem', color: '#dc2626', fontWeight: 700, marginTop: '2px' }}>
                                Available store slots: <span style={{ color: '#ef4444' }}>2 / 2</span>
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                              <button style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '4px 8px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.7rem', color: '#334155' }}>
                                ⚙️
                              </button>
                              <button style={{ background: '#475569', color: '#ffffff', border: 'none', padding: '5px 10px', borderRadius: '6px', fontWeight: 600, fontSize: '0.65rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                ➕ Add Store
                              </button>
                            </div>
                          </div>

                          {/* Main White Box Container */}
                          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px' }}>
                            {/* Search Field */}
                            <div style={{ marginBottom: '8px' }}>
                              <div style={{ position: 'relative', width: '150px' }}>
                                <input
                                  type="text"
                                  readOnly
                                  placeholder="Search"
                                  style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '5px', padding: '3px 8px 3px 22px', fontSize: '0.6rem', width: '100%' }}
                                />
                                <span style={{ position: 'absolute', left: '6px', top: '3px', fontSize: '0.58rem', color: '#94a3b8' }}>🔍</span>
                              </div>
                            </div>

                            {/* Stores Table */}
                            <table className="tpos-table" style={{ fontSize: '0.65rem', marginBottom: '8px' }}>
                              <thead>
                                <tr style={{ background: '#f1f5f9', color: '#334155' }}>
                                  <th style={{ padding: '4px 6px' }}>Store Name</th>
                                  <th style={{ padding: '4px 6px' }}>Address</th>
                                  <th style={{ padding: '4px 6px' }}>Email</th>
                                  <th style={{ padding: '4px 6px' }}>Phone</th>
                                  <th style={{ padding: '4px 6px' }}>Status</th>
                                  <th style={{ padding: '4px 6px', textAlign: 'center' }}>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={{ fontWeight: 700, padding: '5px 6px', color: '#0f172a' }}>Super Store</td>
                                  <td style={{ padding: '5px 6px', color: '#475569', fontSize: '0.6rem' }}>234, Main Road, Satellite, Ahmedabad, Gujarat - 380015</td>
                                  <td style={{ padding: '5px 6px', color: '#475569', fontSize: '0.6rem' }}>super@trushtipos.com</td>
                                  <td style={{ padding: '5px 6px', color: '#475569', fontSize: '0.6rem' }}>+91 9876543212</td>
                                  <td style={{ padding: '5px 6px' }}>
                                    <span style={{ background: '#10b981', color: '#ffffff', padding: '1px 6px', borderRadius: '4px', fontSize: '0.55rem', fontWeight: 700 }}>+ Active</span>
                                  </td>
                                  <td style={{ padding: '5px 6px', textAlign: 'center' }}>
                                    <div style={{ display: 'flex', gap: '3px', justifyContent: 'center' }}>
                                      <button style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '1px 5px', fontSize: '0.58rem', cursor: 'pointer' }}>📝</button>
                                      <button style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '1px 5px', fontSize: '0.58rem', color: '#2563eb', cursor: 'pointer' }}>👥</button>
                                      <button style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '1px 5px', fontSize: '0.58rem', color: '#ef4444', cursor: 'pointer' }}>🗑</button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ fontWeight: 700, padding: '5px 6px', color: '#0f172a' }}>Zoho Store</td>
                                  <td style={{ padding: '5px 6px', color: '#475569', fontSize: '0.6rem' }}>Dharamsi IT Park, GST Road, Vellanchery</td>
                                  <td style={{ padding: '5px 6px', color: '#475569', fontSize: '0.6rem' }}>store@zoho.com</td>
                                  <td style={{ padding: '5px 6px', color: '#475569', fontSize: '0.6rem' }}>+91 8765432100</td>
                                  <td style={{ padding: '5px 6px' }}>
                                    <span style={{ background: '#10b981', color: '#ffffff', padding: '1px 6px', borderRadius: '4px', fontSize: '0.55rem', fontWeight: 700 }}>+ Active</span>
                                  </td>
                                  <td style={{ padding: '5px 6px', textAlign: 'center' }}>
                                    <div style={{ display: 'flex', gap: '3px', justifyContent: 'center' }}>
                                      <button style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '1px 5px', fontSize: '0.58rem', cursor: 'pointer' }}>📝</button>
                                      <button style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '1px 5px', fontSize: '0.58rem', color: '#2563eb', cursor: 'pointer' }}>👥</button>
                                      <button style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '1px 5px', fontSize: '0.58rem', color: '#ef4444', cursor: 'pointer' }}>🗑</button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            {/* Pagination Row */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.6rem', color: '#64748b' }}>
                              <div>
                                Show <span style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '1px 4px', borderRadius: '3px', color: '#334155' }}>10 ▾</span> entries
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                                <span style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', color: '#94a3b8' }}>Previous</span>
                                <span style={{ background: '#0f172a', color: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>1</span>
                                <span style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', color: '#94a3b8' }}>Next</span>
                              </div>
                            </div>
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
                        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '8px', fontSize: '0.62rem', color: '#1e293b', fontFamily: 'system-ui, sans-serif' }}>

                          {/* 1. Header Bar */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                            <div>
                              <h3 style={{ margin: 0, fontSize: '0.78rem', fontWeight: 800, color: '#0f172a' }}>TallyPrime Integration</h3>
                              <div style={{ fontSize: '0.54rem', color: '#64748b' }}>Connect to your Tally server and manage data synchronization</div>
                            </div>
                            <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#047857', padding: '2px 8px', borderRadius: '16px', fontWeight: 700, fontSize: '0.54rem', display: 'flex', alignItems: 'center', gap: '3px' }}>
                              <span>🔄</span> Accurate Data, Always in Sync
                            </div>
                          </div>

                          {/* 2. Tabs & Connection Badge */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                            <div style={{ display: 'flex', gap: '4px' }}>
                              <button style={{ background: '#0f172a', color: '#ffffff', border: 'none', borderRadius: '5px', padding: '3px 8px', fontSize: '0.58rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}>
                                🔄 Synchronization
                              </button>
                              <button style={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#334155', borderRadius: '5px', padding: '3px 8px', fontSize: '0.58rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}>
                                ⚙️ Tally Settings
                              </button>
                            </div>
                            <span style={{ background: '#d1fae5', color: '#059669', padding: '2px 8px', borderRadius: '10px', fontWeight: 700, fontSize: '0.55rem', display: 'flex', alignItems: 'center', gap: '3px' }}>
                              <span style={{ width: '5px', height: '5px', background: '#059669', borderRadius: '50%', display: 'inline-block' }}></span> Connected
                            </span>
                          </div>

                          {/* 3. Connection Setup Card */}
                          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '6px 8px', marginBottom: '6px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                              <span style={{ fontWeight: 800, fontSize: '0.65rem', color: '#0f172a' }}>Connection Setup</span>
                              <button style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '3px', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', cursor: 'pointer' }}>🔄</button>
                            </div>

                            {/* Inputs & Buttons Row */}
                            <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginBottom: '5px' }}>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '0.48rem', fontWeight: 600, color: '#64748b', marginBottom: '1px' }}>Tally Server URL</div>
                                <input
                                  type="text"
                                  readOnly
                                  value="http://127.0.0.1:9000"
                                  style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '2px 6px', fontSize: '0.52rem', width: '100%', color: '#0f172a' }}
                                />
                              </div>
                              <button style={{ background: '#ffffff', border: '1px solid #3b82f6', color: '#2563eb', padding: '3px 6px', borderRadius: '4px', fontSize: '0.52rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px', marginTop: '10px' }}>
                                🔍 Auto Detect
                              </button>
                              <button style={{ background: '#0f172a', color: '#ffffff', border: 'none', padding: '3px 6px', borderRadius: '4px', fontSize: '0.52rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px', marginTop: '10px' }}>
                                📡 Test Connection
                              </button>
                              <button style={{ background: '#10b981', color: '#ffffff', border: 'none', padding: '3px 8px', borderRadius: '4px', fontSize: '0.52rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px', marginTop: '10px' }}>
                                ✓ Success
                              </button>
                            </div>

                            {/* Status Banner */}
                            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '5px', padding: '4px 8px', display: 'grid', gridTemplateColumns: '1.2fr 1fr 1.2fr 1.2fr', gap: '4px', alignItems: 'center', fontSize: '0.5rem' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ width: '13px', height: '13px', background: '#10b981', color: '#fff', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.45rem', fontWeight: 800 }}>✓</span>
                                <div>
                                  <div style={{ fontWeight: 700, color: '#047857' }}>Connected Successfully!</div>
                                  <div style={{ fontSize: '0.44rem', color: '#64748b' }}>TallyPrime server is reachable and ready to sync data.</div>
                                </div>
                              </div>
                              <div>
                                <div style={{ fontSize: '0.45rem', color: '#64748b' }}>Tally Version</div>
                                <div style={{ fontWeight: 700, color: '#0f172a' }}>TallyPrime 4.0</div>
                              </div>
                              <div>
                                <div style={{ fontSize: '0.45rem', color: '#64748b' }}>Company</div>
                                <div style={{ fontWeight: 700, color: '#0f172a' }}>TRUSHTI ELECTRONICS</div>
                              </div>
                              <div>
                                <div style={{ fontSize: '0.45rem', color: '#64748b' }}>Last Checked</div>
                                <div style={{ fontWeight: 700, color: '#0f172a' }}>09 Sep 2025, 12:21 PM</div>
                              </div>
                            </div>
                          </div>

                          {/* 4. Manual Synchronization Card */}
                          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '6px 8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                              <span style={{ fontWeight: 800, fontSize: '0.65rem', color: '#0f172a' }}>Manual Synchronization</span>
                              <div style={{ fontSize: '0.5rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                <span>Sync Data For:</span>
                                <span style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '1px 5px', borderRadius: '3px', color: '#334155', fontWeight: 600 }}>All Stores ▾</span>
                              </div>
                            </div>

                            {/* Action Buttons Row */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                              <div style={{ display: 'flex', gap: '4px' }}>
                                <button style={{ background: '#0f172a', color: '#ffffff', border: 'none', padding: '2px 6px', borderRadius: '4px', fontSize: '0.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
                                  🏬 Verify Company
                                </button>
                                <button style={{ background: '#ffffff', border: '1px solid #cbd5e1', color: '#334155', padding: '2px 6px', borderRadius: '4px', fontSize: '0.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
                                  📋 Fetch Active Companies
                                </button>
                              </div>
                              <button style={{ background: '#ffffff', border: '1px solid #fca5a5', color: '#ef4444', padding: '2px 6px', borderRadius: '4px', fontSize: '0.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px' }}>
                                🔄 Force Sync All Data (New Setup)
                              </button>
                            </div>

                            {/* Strategy Row */}
                            <div style={{ marginBottom: '4px', fontSize: '0.48rem' }}>
                              <div style={{ color: '#64748b', fontWeight: 600, marginBottom: '1px' }}>Sync Strategy</div>
                              <span style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '1px 5px', borderRadius: '3px', color: '#334155' }}>
                                Batch of 5 (Quick Sync) ▾
                              </span>
                            </div>

                            {/* 10 Sync Cards Grid (4 columns) */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px' }}>
                              {[
                                { title: 'Sync Sales', icon: '🛒', bg: '#eff6ff', border: '#bfdbfe', color: '#2563eb', count: '35 entries · 2 mins ago' },
                                { title: 'Sync Purchases', icon: '📦', bg: '#fffbeb', border: '#fde68a', color: '#d97706', count: '28 entries · 5 mins ago' },
                                { title: 'Sync Expenses', icon: '📄', bg: '#fef2f2', border: '#fecaca', color: '#dc2626', count: '12 entries · 10 mins ago' },
                                { title: 'Sync Sale Returns', icon: '↩', bg: '#eff6ff', border: '#bfdbfe', color: '#2563eb', count: '6 entries · 15 mins ago' },
                                { title: 'Sync Pur. Returns', icon: '↩', bg: '#fffbeb', border: '#fde68a', color: '#d97706', count: '4 entries · 15 mins ago' },
                                { title: 'Sync Stock Transfers', icon: '🚚', bg: '#f1f5f9', border: '#cbd5e1', color: '#475569', count: '3 entries · 20 mins ago' },
                                { title: 'Sync Stock Adjusts', icon: '📦', bg: '#f1f5f9', border: '#cbd5e1', color: '#475569', count: '2 entries · 25 mins ago' },
                                { title: 'Sync Defective Stock', icon: '⚠️', bg: '#475569', border: '#334155', color: '#ffffff', count: '1 entry · 30 mins ago' },
                                { title: 'Sync Bank Statements', icon: '🏦', bg: '#1e293b', border: '#0f172a', color: '#ffffff', count: '8 entries · 35 mins ago' },
                                { title: 'Sync Ledgers', icon: '📑', bg: '#ecfdf5', border: '#a7f3d0', color: '#047857', count: '48 entries · 40 mins ago' },
                              ].map((card, i) => (
                                <div key={i} style={{ background: card.bg, border: `1px solid ${card.border}`, borderRadius: '4px', padding: '3px 4px' }}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1px' }}>
                                    <span style={{ fontWeight: 700, fontSize: '0.48rem', color: card.color, display: 'flex', alignItems: 'center', gap: '2px', whiteSpace: 'nowrap' }}>
                                      <span>{card.icon}</span> {card.title}
                                    </span>
                                    <span style={{ background: '#10b981', color: '#ffffff', fontSize: '0.4rem', padding: '0px 2px', borderRadius: '2px', fontWeight: 700 }}>
                                      Synced
                                    </span>
                                  </div>
                                  <div style={{ fontSize: '0.42rem', color: card.color === '#ffffff' ? 'rgba(255,255,255,0.8)' : '#64748b', whiteSpace: 'nowrap' }}>
                                    {card.count}
                                  </div>
                                </div>
                              ))}
                            </div>

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
