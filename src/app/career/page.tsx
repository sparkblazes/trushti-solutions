'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CareerPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const applyForJob = (role: string) => {
    setSelectedRole(role);
    setIsSuccess(false);
    document.body.style.overflow = 'hidden';
  };

  const closeApply = () => {
    setSelectedRole(null);
    document.body.style.overflow = '';
  };

  const submitApplication = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      role: selectedRole,
      cover_letter: formData.get('cover_letter') as string,
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
      await fetch(`${apiUrl}/career/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setIsSuccess(true);
    } catch (err) {
      console.error('Failed to submit application', err);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '100px 0', backgroundColor: '#0f172a', color: '#fff', textAlign: 'center' }}>
        <div className="wrap reveal">
          <span className="eyebrow" style={{ color: '#3b82f6', marginBottom: '16px', display: 'inline-block' }}>Join Our Team</span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px' }}>Build the future of retail & tech.</h1>
          <p className="lead" style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem' }}>
            At Trushti Solutions, we're on a mission to empower businesses with smart, fast, and reliable software. Join us in Ahmedabad to build products that matter.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
        <div className="wrap">
          <div className="section-head text-center reveal">
            <h2>Why Trushti Solutions?</h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '16px auto' }}>We believe in fostering a culture of innovation, continuous learning, and work-life balance.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '48px' }}>
            <div className="reveal" style={{ background: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🚀</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Fast-Paced Growth</h3>
              <p style={{ color: '#475569', lineHeight: 1.6 }}>Work on cutting-edge technologies (Next.js, React Native, AI) and accelerate your career trajectory.</p>
            </div>
            <div className="reveal" style={{ background: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🤝</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Collaborative Team</h3>
              <p style={{ color: '#475569', lineHeight: 1.6 }}>Join a close-knit, in-house team in Ahmedabad where your ideas are heard and implemented.</p>
            </div>
            <div className="reveal" style={{ background: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>⚖️</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Work-Life Balance</h3>
              <p style={{ color: '#475569', lineHeight: 1.6 }}>We use our own Trushti Desktime software to ensure fair hours, flexible timings, and respect for personal time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="section-eyebrow">Open Roles</span>
            <h2>Come work with us.</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
            
            {/* Job 1 */}
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Frontend Developer (React / Next.js)</h3>
                <div style={{ display: 'flex', gap: '16px', color: '#64748b', fontSize: '0.9rem' }}>
                  <span>📍 Ahmedabad (On-site)</span>
                  <span>💼 Full-time</span>
                  <span>⏱️ 2+ Years Exp</span>
                </div>
              </div>
              <button className="btn btn-primary" style={{ marginTop: '16px' }} onClick={() => applyForJob('Frontend Developer')}>Apply Now</button>
            </div>

            {/* Job 2 */}
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Laravel Backend Engineer</h3>
                <div style={{ display: 'flex', gap: '16px', color: '#64748b', fontSize: '0.9rem' }}>
                  <span>📍 Ahmedabad (On-site)</span>
                  <span>💼 Full-time</span>
                  <span>⏱️ 3+ Years Exp</span>
                </div>
              </div>
              <button className="btn btn-primary" style={{ marginTop: '16px' }} onClick={() => applyForJob('Laravel Backend Engineer')}>Apply Now</button>
            </div>

            {/* Job 3 */}
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Sales & Business Development Executive</h3>
                <div style={{ display: 'flex', gap: '16px', color: '#64748b', fontSize: '0.9rem' }}>
                  <span>📍 Ahmedabad (Hybrid)</span>
                  <span>💼 Full-time</span>
                  <span>⏱️ 1-3 Years Exp</span>
                </div>
              </div>
              <button className="btn btn-primary" style={{ marginTop: '16px' }} onClick={() => applyForJob('Sales & BD Executive')}>Apply Now</button>
            </div>

          </div>

          <div className="reveal" style={{ marginTop: '48px', padding: '40px', backgroundColor: '#eff6ff', borderRadius: '16px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Don't see a perfect fit?</h3>
            <p style={{ color: '#475569', marginBottom: '24px' }}>We are always looking for talented individuals. Send your resume to careers@trushtisolutions.com and we'll keep you in mind for future roles.</p>
            <a href="mailto:careers@trushtisolutions.com" className="btn btn-primary">Email Your Resume</a>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedRole && (
        <div className="modal-overlay open" onClick={(e) => { if(e.target === e.currentTarget) closeApply(); }}>
          <div className="modal">
            <button className="modal-close" onClick={closeApply}>✕</button>

            {!isSuccess ? (
              <div id="formView">
                <h3>Apply for {selectedRole}</h3>
                <p className="sub">Fill out the form below and we'll get back to you soon.</p>
                <form onSubmit={submitApplication}>
                  <div className="field">
                    <label htmlFor="a-name">Full Name *</label>
                    <input id="a-name" name="name" type="text" required placeholder="John Doe" />
                  </div>
                  <div className="field">
                    <label htmlFor="a-email">Email Address *</label>
                    <input id="a-email" name="email" type="email" required placeholder="john@example.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="a-phone">Phone Number *</label>
                    <input id="a-phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
                  </div>
                  <div className="field">
                    <label htmlFor="a-cover">Cover Letter / LinkedIn / Portfolio Link</label>
                    <textarea id="a-cover" name="cover_letter" placeholder="Tell us why you are a great fit, or paste your LinkedIn/Portfolio URL here"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{width:"100%", justifyContent:"center", padding:"13px"}}>
                    Submit Application
                  </button>
                </form>
              </div>
            ) : (
              <div className="form-success show">
                <div className="tick">✓</div>
                <h3>Application Submitted!</h3>
                <p className="sub">Thank you for applying to Trushti Solutions. Our team will review your profile and reach out if you're a good match.</p>
                <button className="btn btn-primary" style={{width:"100%", justifyContent:"center"}} onClick={closeApply}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
