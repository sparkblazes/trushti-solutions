'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <main>
      {/* ================= CONTACT ================= */}
<section id="contact">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="section-eyebrow">05 · Contact Us</span>
      <h2>Let's talk about your business.</h2>
      <p>Book a free demo of Trushti POS or Trushti Desktime, or get in touch about a custom project.</p>
    </div>
    <div className="contact-grid">
      <div className="contact-card reveal">
        <div className="contact-row">
          <div className="ci">📍</div>
          <div><b>Office Address</b><span>A‑205, Money Plant High Street, Jagatpur Road, Sarkhej‑Gandhinagar Hwy, nr. BSNL Office, Gota, Ahmedabad, Gujarat 382470</span></div>
        </div>
        <div className="contact-row">
          <div className="ci">📞</div>
          <div><b>Phone</b><span>+91 97373 00478</span></div>
        </div>
        <div className="contact-row">
          <div className="ci">✉️</div>
          <div><b>Email</b><span>info@trusthisolutions.com</span></div>
        </div>
        <div className="contact-row">
          <div className="ci">🌐</div>
          <div><b>Website</b><span>www.trusthisolutions.com</span></div>
        </div>
        
        <div style={{marginTop: "24px", paddingTop: "24px", borderTop: "1px solid #e2e8f0"}}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Prefer WhatsApp?</h3>
          <button className="btn btn-accent" onClick={() => window.dispatchEvent(new CustomEvent('open-demo', { detail: 'General' }))}>Book Demo via WhatsApp →</button>
        </div>
      </div>
      
      <div className="contact-form-container reveal" style={{ background: '#fff', padding: '40px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Send an Inquiry</h3>
        <p style={{ color: '#64748b', marginBottom: '24px' }}>Fill out the form below and our team will get back to you shortly.</p>
        
        <form onSubmit={async (e) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          const name = (target.elements.namedItem('fname') as HTMLInputElement).value;
          const phone = (target.elements.namedItem('fphone') as HTMLInputElement).value;
          const email = (target.elements.namedItem('femail') as HTMLInputElement).value;
          const interest = (target.elements.namedItem('finterest') as HTMLSelectElement).value;
          const message = (target.elements.namedItem('fmsg') as HTMLTextAreaElement).value;

          try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
            await fetch(`${apiUrl}/inquiries`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                name: name,
                business: null, // General inquiry doesn't strictly have a business field in this layout
                phone: phone,
                email: email,
                interested_in: interest,
                message: message,
              })
            });
            alert('Thank you for your inquiry! Our team will contact you shortly.');
            target.reset();
          } catch (err) {
            console.error('Submission failed', err);
            alert('There was an error submitting your inquiry. Please try again or use WhatsApp.');
          }
        }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="fname" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Full Name *</label>
              <input type="text" id="fname" required style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="fphone" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Phone Number *</label>
              <input type="tel" id="fphone" required style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="femail" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Email Address (optional)</label>
            <input type="email" id="femail" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="finterest" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Interested In *</label>
            <select id="finterest" required style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', backgroundColor: '#fff' }}>
              <option value="pos">Trushti POS</option>
              <option value="desktime">Trushti Desktime</option>
              <option value="custom">Custom Software / App Development</option>
              <option value="other">Other Inquiry</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="fmsg" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Message</label>
            <textarea id="fmsg" rows={4} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', resize: 'vertical' }}></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: '16px', fontSize: '1.1rem', marginTop: '8px', borderRadius: '8px' }}>Submit Inquiry</button>
        </form>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
