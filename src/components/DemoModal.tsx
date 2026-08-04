'use client';

import { useState, useEffect } from 'react';

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState('General');
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState('');
  
  useEffect(() => {
    const handleOpen = (e: any) => {
      setProduct(e.detail || 'General');
      setIsOpen(true);
      setIsSuccess(false);
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener('open-demo', handleOpen);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDemo();
    };
    document.addEventListener('keydown', handleKeyDown);

    // Global click listener for backwards compatibility with the raw HTML converter
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === 'BUTTON' && target.textContent?.includes('Book')) {
        // Simple heuristic: if button says "Book", open demo
        let prod = 'General';
        if (target.textContent.includes('POS')) prod = 'Trushti POS';
        if (target.textContent.includes('Desktime')) prod = 'Trushti Desktime';
        window.dispatchEvent(new CustomEvent('open-demo', { detail: prod }));
      }
    };
    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('open-demo', handleOpen);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const closeDemo = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const submitDemo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formName = formData.get('name') as string;
    const business = formData.get('business') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const formProduct = formData.get('product') as string;
    const message = formData.get('message') as string;

    setName(formName);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
      // Save to Laravel Database
      await fetch(`${apiUrl}/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formName,
          business: business,
          phone: phone,
          email: email,
          interested_in: formProduct,
          message: message,
        })
      });
    } catch (err) {
      console.error('Failed to save inquiry to database:', err);
      // We continue to WhatsApp even if DB save fails, so we don't lose the lead
    }

    const waText = encodeURIComponent(
      `Hi Trushti Solutions, I'd like to book a free demo.\n\n`+
      `Name: ${formName}\nBusiness: ${business}\nPhone: ${phone}`+
      (email ? `\nEmail: ${email}` : '')+
      `\nInterested in: ${formProduct}`+
      (message ? `\nMessage: ${message}` : '')
    );
    const waLink = `https://wa.me/919737300478?text=${waText}`;

    setIsSuccess(true);
    
    // Auto-open WhatsApp after 1 second or allow manual click
    setTimeout(() => {
      window.open(waLink, '_blank');
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" onClick={(e) => { if(e.target === e.currentTarget) closeDemo(); }}>
      <div className="modal">
        <button className="modal-close" onClick={closeDemo}>✕</button>

        {!isSuccess ? (
          <div id="formView">
            <h3>Book Your Free Demo</h3>
            <p className="sub">Fill in your details and we'll reach out on WhatsApp to schedule your demo.</p>
            <form onSubmit={submitDemo}>
              <div className="field">
                <label htmlFor="d-name">Full Name</label>
                <input id="d-name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="d-business">Business Name</label>
                <input id="d-business" name="business" type="text" required placeholder="Your shop / business name" />
              </div>
              <div className="field">
                <label htmlFor="d-phone">Phone Number</label>
                <input id="d-phone" name="phone" type="tel" required placeholder="10‑digit mobile number" />
              </div>
              <div className="field">
                <label htmlFor="d-email">Email (optional)</label>
                <input id="d-email" name="email" type="email" placeholder="you@business.com" />
              </div>
              <div className="field">
                <label htmlFor="d-product">Interested In</label>
                <select id="d-product" name="product" value={product} onChange={(e) => setProduct(e.target.value)}>
                  <option value="Trushti POS">Trushti POS</option>
                  <option value="Trushti Desktime">Trushti Desktime</option>
                  <option value="Both">Both Products</option>
                  <option value="Custom Software">Custom Software / IT Services</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="d-message">Message (optional)</label>
                <textarea id="d-message" name="message" placeholder="Tell us about your business or requirement"></textarea>
              </div>
              <button type="submit" className="btn btn-accent" style={{width:"100%", justifyContent:"center", padding:"13px"}}>
                Send &amp; Continue on WhatsApp →
              </button>
            </form>
          </div>
        ) : (
          <div className="form-success show">
            <div className="tick">✓</div>
            <h3>Thanks, {name}!</h3>
            <p className="sub">Your details are ready — continue on WhatsApp to confirm your free demo slot with our team.</p>
            <button className="btn btn-accent" style={{width:"100%", justifyContent:"center"}} onClick={closeDemo}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
