import Link from 'next/link';

export default function TermsPage() {
  return (
    <main>
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
        <div className="wrap reveal">
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>Terms of Service</h1>
          <p style={{ color: '#475569', fontSize: '1.1rem' }}>Last updated: August 4, 2026</p>
        </div>
      </section>

      <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
        <div className="wrap reveal" style={{ maxWidth: '800px', margin: '0 auto', color: '#334155', lineHeight: 1.8 }}>
          
          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginTop: '32px', marginBottom: '16px' }}>1. Agreement to Terms</h2>
          <p style={{ marginBottom: '16px' }}>
            By accessing or using the services provided by Trushti Solutions, including Trushti POS and Trushti Desktime, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginTop: '32px', marginBottom: '16px' }}>2. Software License & Usage</h2>
          <p style={{ marginBottom: '16px' }}>
            We grant you a non-exclusive, non-transferable, revocable license to use our software solely for your internal business operations. You agree not to reverse engineer, decompile, or otherwise attempt to extract the source code of the software provided by Trushti Solutions.
          </p>
          <p style={{ marginBottom: '16px' }}>
            Certain software functionality, such as cloud synchronization and WhatsApp integration, requires an active internet connection. Offline functionality is provided "as is" and must be synced periodically to prevent data discrepancies.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginTop: '32px', marginBottom: '16px' }}>3. Subscriptions & Payments</h2>
          <p style={{ marginBottom: '16px' }}>
            Some of our services are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis depending on your subscription plan. Trushti Solutions reserves the right to modify subscription fees with prior notice.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginTop: '32px', marginBottom: '16px' }}>4. Limitation of Liability</h2>
          <p style={{ marginBottom: '16px' }}>
            In no event shall Trushti Solutions, nor its directors, employees, partners, or agents, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginTop: '32px', marginBottom: '16px' }}>5. Contact Information</h2>
          <p style={{ marginBottom: '16px' }}>
            If you have any questions about these Terms, please contact us at: <br />
            <strong>Email:</strong> legal@trushtisolutions.com <br />
            <strong>Address:</strong> Ahmedabad, Gujarat, India
          </p>
          
        </div>
      </section>
    </main>
  );
}
