'use client';

import BookDemoButton from '@/components/BookDemoButton';

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
                <div>
                  <b>Office Address</b>
                  <span>A‑205, Money Plant High Street, Jagatpur Road, Sarkhej‑Gandhinagar Hwy, nr. BSNL Office, Gota, Ahmedabad, Gujarat 382470</span>
                </div>
              </div>
              <div className="contact-row">
                <div className="ci">📞</div>
                <div>
                  <b>Phone</b>
                  <span>+91 97373 00478</span>
                </div>
              </div>
              <div className="contact-row">
                <div className="ci">✉️</div>
                <div>
                  <b>Email</b>
                  <span style={{ wordBreak: 'break-all' }}>info@trusthisolutions.com</span>
                </div>
              </div>
              <div className="contact-row">
                <div className="ci">🌐</div>
                <div>
                  <b>Website</b>
                  <span style={{ wordBreak: 'break-all' }}>www.trusthisolutions.com</span>
                </div>
              </div>
              
              <div className="contact-whatsapp-box">
                <h3>Prefer WhatsApp?</h3>
                <a 
                  href="https://wa.me/919737300478?text=Hi%20Trushti%20Solutions,%20I%20would%20like%20to%20book%20a%20free%20demo." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-accent full-width-mobile"
                  style={{ textDecoration: 'none', display: 'inline-flex', justifyContent: 'center' }}
                >
                  Book Demo via WhatsApp →
                </a>
              </div>
            </div>
            
            <div className="contact-form-container reveal">
              <h3>Send an Inquiry</h3>
              <p className="contact-form-sub">Fill out the form below and our team will get back to you shortly.</p>
              
              <form 
                className="contact-form"
                onSubmit={async (e) => {
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
                        business: null,
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
                }}
              >
                
                <div className="contact-form-inputs-row">
                  <div className="form-field">
                    <label htmlFor="fname">Full Name *</label>
                    <input type="text" id="fname" required placeholder="Your full name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="fphone">Phone Number *</label>
                    <input type="tel" id="fphone" required placeholder="Your phone number" />
                  </div>
                </div>
                
                <div className="form-field">
                  <label htmlFor="femail">Email Address (optional)</label>
                  <input type="email" id="femail" placeholder="you@example.com" />
                </div>

                <div className="form-field">
                  <label htmlFor="finterest">Interested In *</label>
                  <select id="finterest" required>
                    <option value="pos">Trushti POS</option>
                    <option value="desktime">Trushti Desktime</option>
                    <option value="custom">Custom Software / App Development</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="fmsg">Message</label>
                  <textarea id="fmsg" rows={4} placeholder="How can we help your business?"></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-inquiry-btn">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
