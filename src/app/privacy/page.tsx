import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main>
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
        <div className="wrap reveal">
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>Privacy Policy</h1>
          <p style={{ color: '#475569', fontSize: '1.1rem' }}>Last updated: August 4, 2026</p>
        </div>
      </section>

      <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
        <div className="wrap reveal" style={{ maxWidth: '800px', margin: '0 auto', color: '#334155', lineHeight: 1.8 }}>
          
          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginTop: '32px', marginBottom: '16px' }}>1. Introduction</h2>
          <p style={{ marginBottom: '16px' }}>
            Trushti Solutions ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Trushti Solutions when you use our website, Trushti POS, Trushti Desktime, and other services.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginTop: '32px', marginBottom: '16px' }}>2. Information We Collect</h2>
          <p style={{ marginBottom: '16px' }}>
            We collect information that you provide directly to us, such as when you create an account, request a demo, fill out a form, or contact customer support. The types of personal information we may collect include your name, email address, phone number, business name, and any other information you choose to provide.
          </p>
          <p style={{ marginBottom: '16px' }}>
            When you use our software products (like Trushti POS and Desktime), we also collect usage data and telemetry to improve our services and provide reliable cloud synchronization.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginTop: '32px', marginBottom: '16px' }}>3. How We Use Your Information</h2>
          <p style={{ marginBottom: '16px' }}>We use the information we collect to:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px', listStyleType: 'disc' }}>
            <li>Provide, maintain, and improve our services.</li>
            <li>Process transactions and send related information, including invoices and confirmations.</li>
            <li>Send you technical notices, updates, security alerts, and support messages.</li>
            <li>Respond to your comments, questions, and requests for a demo.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginTop: '32px', marginBottom: '16px' }}>4. Data Security & Cloud Backups</h2>
          <p style={{ marginBottom: '16px' }}>
            We implement appropriate technical and organizational security measures to protect your personal information and business data. Our software utilizing cloud-sync securely transmits and stores your data on encrypted servers to prevent data loss.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginTop: '32px', marginBottom: '16px' }}>5. Contact Us</h2>
          <p style={{ marginBottom: '16px' }}>
            If you have any questions about this Privacy Policy, please contact us at: <br />
            <strong>Email:</strong> privacy@trushtisolutions.com <br />
            <strong>Address:</strong> Ahmedabad, Gujarat, India
          </p>
          
        </div>
      </section>
    </main>
  );
}
