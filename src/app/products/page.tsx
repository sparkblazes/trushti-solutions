'use client';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main>
      <section id="products" style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
        <div className="wrap">
          <div className="section-head text-center" style={{ marginBottom: '60px' }}>
            <span className="product-eyebrow" style={{ display: 'block', color: '#3b82f6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>01 · Our Products</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px' }}>Products Built for Growth</h2>
            <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              Everything we sell, we also built — so support, updates and customisation all come from the same team you talk to.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            
            {/* Trushti POS Card */}
            <div className="reveal" style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '40px', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
                 onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.1)'; }}
                 onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              
              <div style={{ marginBottom: '24px' }}>
                <span style={{ display: 'inline-block', padding: '6px 12px', background: '#eff6ff', color: '#2563eb', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>Retail Management</span>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Trushti POS</h3>
                <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '1.1rem', flexGrow: 1 }}>
                  A complete business management system for retailers. Generate invoices in 3 seconds, manage stock, and sync with Tally automatically.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                <span style={{ fontSize: '0.9rem', color: '#64748b', background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px' }}>⚡ 3s Checkout</span>
                <span style={{ fontSize: '0.9rem', color: '#64748b', background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px' }}>📦 Smart Inventory</span>
                <span style={{ fontSize: '0.9rem', color: '#64748b', background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px' }}>🔄 Tally Sync</span>
              </div>
              
              <div style={{ marginTop: 'auto' }}>
                <Link href="/products/trushti-pos" style={{ display: 'block', textAlign: 'center', background: '#0f172a', color: '#ffffff', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, transition: 'background 0.2s' }}>
                  View Details & Download
                </Link>
              </div>
            </div>

            {/* Trushti Desktime Card */}
            <div className="reveal" style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '40px', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
                 onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.1)'; }}
                 onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              
              <div style={{ marginBottom: '24px' }}>
                <span style={{ display: 'inline-block', padding: '6px 12px', background: '#f0fdf4', color: '#16a34a', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>Time & Attendance</span>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Trushti Desktime</h3>
                <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '1.1rem', flexGrow: 1 }}>
                  Track employee productivity, manage attendance, and automate payroll with our smart desktop and mobile time tracking solution.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                <span style={{ fontSize: '0.9rem', color: '#64748b', background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px' }}>⏱️ Time Tracking</span>
                <span style={{ fontSize: '0.9rem', color: '#64748b', background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px' }}>📊 Productivity</span>
                <span style={{ fontSize: '0.9rem', color: '#64748b', background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px' }}>💰 Payroll</span>
              </div>
              
              <div style={{ marginTop: 'auto' }}>
                <Link href="#" style={{ display: 'block', textAlign: 'center', background: '#f8fafc', color: '#64748b', border: '1px solid #e2e8f0', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
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
