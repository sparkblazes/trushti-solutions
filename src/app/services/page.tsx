import Link from 'next/link';
import BookDemoButton from '@/components/BookDemoButton';

export const metadata = {
  title: 'Services — Trushti Solutions',
  description: 'Trushti Solutions builds Trushti POS and Trushti Desktime, plus custom software, mobile app, web, AI and ecommerce development services in Ahmedabad.',
};

export default function ServicesPage() {
  const services = [
    {
      num: '01',
      id: 'mobile-app',
      title: 'Mobile App Development',
      image: '/services/mobile-app.jpg',
      description: 'Native and cross-platform apps for Android and iOS, from concept through launch and support.',
      link: '/services/mobile-app',
      isTwoCol: true,
      colLeft: ['IOS', 'Android', 'ReactNative'],
      colRight: ['Ionic', 'Flutter', 'Xamarin'],
    },
    {
      num: '02',
      id: 'ai',
      title: 'Artificial Intelligence',
      image: '/services/ai.jpg',
      description: 'AI-powered features and tools — from automation to intelligent dashboards — built into your existing systems.',
      link: '/services/ai',
      isTwoCol: true,
      colLeft: ['Object Recognition', 'Text To Speech'],
      colRight: ['Business Intelligence', 'Data Analytics'],
    },
    {
      num: '03',
      id: 'web-cms',
      title: 'Web And CMS Development',
      image: '/services/web-cms.jpg',
      description: 'Marketing sites, web apps and content-managed platforms built for speed and easy day-to-day editing.',
      link: '/services/web-cms',
      isTwoCol: true,
      colLeft: ['Php', 'Wordpress', 'Python'],
      colRight: ['Cakephp', 'joomla', 'Laravel'],
    },
    {
      num: '04',
      id: 'blockchain',
      title: 'Blockchain Development',
      image: '/services/blockchain.png',
      description: 'Decentralized applications, smart contracts, crypto wallets, and secure enterprise blockchain networks.',
      link: '/services/blockchain',
      isTwoCol: true,
      colLeft: ['Wallet', 'Exchange'],
      colRight: ['Ethereum', 'Hyperledger'],
    },
    {
      num: '05',
      id: 'salesforce',
      title: 'SalesForce Development',
      image: '/services/salesforce.jpg',
      description: 'Custom Salesforce configuration, integrations and apps that fit your existing sales and support workflow.',
      link: '/services/salesforce',
      isTwoCol: true,
      colLeft: ['Development', 'Consulting'],
      colRight: ['Implementation', 'Integration'],
    },
    {
      num: '06',
      id: 'ecommerce',
      title: 'Ecommerce Development',
      image: '/services/ecommerce.jpg',
      description: 'Online stores with catalogue, payments and inventory wired together, ready to scale with your business.',
      link: '/services/ecommerce',
      isTwoCol: true,
      colLeft: ['Shopify', 'Magento', 'OpenCart'],
      colRight: ['WooCommerce', 'BigCommerce', 'Custom Store'],
    },
  ];

  return (
    <main className="services-page-wrapper">
      {/* ================= MAIN SERVICES SECTION ================= */}
      <section id="services" className="services-content-section" style={{ paddingTop: '50px', paddingBottom: '90px' }}>
        <div className="wrap">
          {/* Section Head */}
          <div className="section-head reveal" style={{ marginBottom: '50px' }}>
            <span className="section-eyebrow">03 · IT Services</span>
            <h2>Custom software, built around your business.</h2>
            <p>Beyond our own products, we design and build software for clients end to end.</p>
          </div>

          {/* 6 HD Cards Grid */}
          <div className="services-cards-grid">
            {services.map((service) => (
              <div key={service.id} className="service-showcase-card">
                {/* Image & Interactive Hover Container */}
                <div className="service-card-media">
                  <span className="service-num-badge">{service.num}</span>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-image"
                  />
                  {/* Default Floating Title Pill over image */}
                  <div className="service-title-pill">
                    {service.title}
                  </div>

                  {/* Hover Popup Overlay Card matching exact uploaded screenshots */}
                  <div className="service-hover-overlay">
                    <div className="service-hover-card">
                      <h3 className="service-hover-title">{service.title}</h3>
                      <div className="service-hover-divider"></div>

                      <div className="service-hover-cols">
                        <div className="service-hover-col">
                          {service.colLeft?.map((item, idx) => (
                            <span key={idx} className="service-hover-item">{item}</span>
                          ))}
                        </div>
                        <div className="service-hover-col">
                          {service.colRight?.map((item, idx) => (
                            <span key={idx} className="service-hover-item">{item}</span>
                          ))}
                        </div>
                      </div>

                      <div className="service-hover-btn-wrap">
                        <Link href={service.link} className="service-hover-button">
                          Explore More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content description */}
                <p className="service-description">
                  {service.description}
                </p>

                {/* Action Button */}
                <div className="service-btn-container">
                  <Link href={service.link} className="service-explore-button">
                    Explore More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA BANNER ================= */}
      <section className="services-cta-section">
        <div className="wrap">
          <div className="services-cta-box">
            <div className="services-cta-text">
              <h3>Ready to build your next custom software?</h3>
              <p>Book a free demo of Trushti POS / Desktime or discuss your custom software requirements with our engineers.</p>
            </div>
            <div className="services-cta-actions">
              <BookDemoButton text="Book Free Demo" className="btn btn-accent" />
              <Link href="/contact" className="btn btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
