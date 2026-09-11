import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamicParams = true;

export interface ServiceDetail {
  slug: string;
  title: string;
  overviewTitle: string;
  overviewP1: string;
  overviewP2?: string;
  useCaseEyebrow: string;
  useCaseTitle: string;
  bullets: string[];
  image: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  'mobile-app': {
    slug: 'mobile-app',
    title: 'Mobile App Development',
    overviewTitle: 'What Is Mobile App Development?',
    overviewP1:
      'Mobile application development is the process of making software for smartphones and digital assistants, most commonly for Android and iOS. The software can be preinstalled on the device, downloaded from a mobile app store or , accessed through a mobile web browser',
    overviewP2:
      'Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.',
    useCaseEyebrow: 'USE CASE',
    useCaseTitle: 'Mobile App Development Use cases',
    bullets: [
      'Collaboration and conferencing',
      'Scheduling',
      'Travel planning',
      'Asset Management',
      'Sale Quotes',
      'Catalogue and Pricing',
      'Customer Relationship Management (CRM)',
      'Work Orders and Signature Capture',
    ],
    image: '/services/mobile-app.jpg',
  },
  ai: {
    slug: 'ai',
    title: 'Artificial Intelligence',
    overviewTitle: 'Why Your Business Need Artificial Intelligence?',
    overviewP1:
      'With the ability to completely automate critical tasks and provide efficient business operations, AI has become the most revolutionary and much-needed technology for global industries. Whether we enhance the customer experience or automate tedious and mundane tasks, AI development has transformed the worldwide sector most efficiently.',
    overviewP2:
      "Artificial Intelligence services have made phenomenal changes in the entire global market with prominent tech tools and technologies. Here's how AI benefits businesses",
    useCaseEyebrow: 'USE CASE',
    useCaseTitle:
      'Discover the unique use cases of our AI development services that have helped many companies to bring the best for their business.',
    bullets: [
      'Predictive Sales Analytics',
      'Fraud Detection System',
      'Conversational Chatbots',
      'Recommender Engine',
      'Network Management System',
      'Virtual Learning Platform',
    ],
    image: '/services/ai.jpg',
  },
  'web-cms': {
    slug: 'web-cms',
    title: 'Web And CMS Development',
    overviewTitle: 'What is Web development?',
    overviewP1:
      'The most important skill or knowledge every developer should learn first is these three basic building blocks i.e. HTML, CSS, and JavaScript. You will be using HTML and CSS in frontend for interfaces. ... You will find the structure of your website where a lot of HTML tags are used for different purposes.',
    overviewP2:
      "Web programming, also known as web development, is the creation of dynamic web applications. Examples of web applications are social networking sites like Facebook or e-commerce sites like Amazon. ... No matter whether you're looking for a career or just want to learn coding, learning how to develop for the web is for you.",
    useCaseEyebrow: 'USE CASE',
    useCaseTitle: 'How Trushti Solutions Web Development Gives you an Edge?',
    bullets: [
      'PHP Development',
      'e-Commerce Development',
      'Wordpress Development',
      'Angular Development',
      'CakePHP Development',
      'Laravel Development',
      'Java Development',
      'Dot Net Development',
    ],
    image: '/services/web-cms.jpg',
  },
  blockchain: {
    slug: 'blockchain',
    title: 'Blockchain Development',
    overviewTitle: 'What is blockchain?',
    overviewP1:
      'Blockchain is a uniquely distributed record that saves data and verifies its integrity. Commonly referred to as DLT (Distributed Ledger Technology), blockchain makes the past record of any digital asset transparent and unalterable by availing decentralization and cryptographic hashing. A shared digital history is vital as the digital transactions and assets are easily copied or duplicated.',
    overviewP2:
      'The main idea behind Blockchain technology is to allow people, share valuable information in a secure manner',
    useCaseEyebrow: 'USE CASE',
    useCaseTitle:
      'Blockchain, a game-changer for many business verticals, is an assembling approach that aids in comprehending the world in a better way',
    bullets: [
      'Predictive Sales Analytics',
      'Fraud Detection System',
      'Conversational Chatbots',
      'Recommender Engine',
      'Network Management System',
      'Virtual Learning Platform',
    ],
    image: '/services/blockchain.png',
  },
  salesforce: {
    slug: 'salesforce',
    title: 'SalesForce Development',
    overviewTitle: 'What Is Salesforce Development?',
    overviewP1:
      "Customers are undoubtedly the most significant & most valuable assets of your company. And, to their requirements, establishing an effective CRM system becomes essential now. The tools and services in Salesforce are designed to turn a business into an enterprise where every employee, vendors, and customer are together in a single platform helping an organization to function more efficiently than ever. With the growth of Salesforce's cloud-based CRM and other advanced products, more and more organizations are adopting them to streamline their sales processes.",
    overviewP2: '',
    useCaseEyebrow: 'USE CASE',
    useCaseTitle: 'Essential Benefits of Salesforce Development',
    bullets: [
      'In-depth Account Planning',
      'Effective Time Management',
      'Better Team Collaboration',
      'Improved Accessibility',
      'Access to Related Customer Information',
    ],
    image: '/services/salesforce.jpg',
  },
  ecommerce: {
    slug: 'ecommerce',
    title: 'Ecommerce Development',
    overviewTitle: 'What is Ecommerce Development?',
    overviewP1:
      'Ecommerce development involves creating custom online storefronts, payment gateway integrations, and robust inventory management systems tailored to your business needs. It empowers businesses to sell products globally with seamless user experiences, fast checkout flows, and automated order fulfillment.',
    overviewP2:
      'With modern ecommerce platforms and scalable cloud architecture, businesses can expand their digital footprint, enhance conversion rates, and drive sustainable revenue growth.',
    useCaseEyebrow: 'USE CASE',
    useCaseTitle: 'Key Advantages of Custom Ecommerce Development',
    bullets: [
      'Custom Storefront & Theme Design',
      'Secure Multi-Currency Payment Gateways',
      'Real-time Inventory & Order Syncing',
      'Omnichannel Retail Integration',
      'High-Performance & Fast Checkout',
      'SEO & Conversion Rate Optimization',
    ],
    image: '/services/ecommerce.jpg',
  },
};

// Aliases
const slugMap: Record<string, string> = {
  'mobile-app': 'mobile-app',
  mobileapp: 'mobile-app',
  'mobile-app-development': 'mobile-app',
  ai: 'ai',
  'artificial-intelligence': 'ai',
  'web-cms': 'web-cms',
  cms: 'web-cms',
  'web-and-cms-development': 'web-cms',
  'web-development': 'web-cms',
  blockchain: 'blockchain',
  'blockchain-development': 'blockchain',
  salesforce: 'salesforce',
  'salesforce-development': 'salesforce',
  ecommerce: 'ecommerce',
  'ecommerce-development': 'ecommerce',
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const canonicalKey = slugMap[slug] || slug;
  const service = servicesData[canonicalKey];

  if (!service) {
    return {
      title: 'Service Not Found — Trushti Solutions',
    };
  }

  return {
    title: `${service.title} — Trushti Solutions`,
    description: service.overviewP1.slice(0, 160),
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const canonicalKey = slugMap[slug] || slug;
  const service = servicesData[canonicalKey];

  if (!service) {
    notFound();
  }

  return (
    <main className="service-detail-page">
      {/* ================= OVERVIEW SECTION ================= */}
      <section className="service-overview-section">
        <div className="wrap">
          <div style={{ marginBottom: '24px' }}>
            <Link href="/services" className="service-back-link">
              ← Back to Services
            </Link>
          </div>
          <div className="service-overview-container">
            <span className="service-overview-eyebrow">Overview</span>
            <h1 className="service-overview-title">{service.overviewTitle}</h1>
            <div className="service-overview-content">
              <p className="service-overview-text">{service.overviewP1}</p>
              {service.overviewP2 && (
                <p className="service-overview-text">{service.overviewP2}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= USE CASE SECTION ================= */}
      <section className="service-usecase-section">
        <div className="wrap">
          <div className="service-usecase-grid">
            {/* Left: Content & Bullet points */}
            <div className="service-usecase-content">
              <span className="service-usecase-eyebrow">{service.useCaseEyebrow}</span>
              <h2 className="service-usecase-title">{service.useCaseTitle}</h2>
              
              <ul className="service-usecase-list">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="service-usecase-item">
                    <span className="service-usecase-bullet-dot"></span>
                    <span className="service-usecase-bullet-text">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="service-usecase-action" style={{ marginTop: '36px' }}>
                <Link href={`/contact?service=${service.slug}`} className="btn btn-accent" style={{ padding: '12px 28px', fontSize: '15px' }}>
                  Get In Touch For {service.title} →
                </Link>
              </div>
            </div>

            {/* Right: HD Image */}
            <div className="service-usecase-media">
              <div className="service-usecase-img-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-usecase-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA BANNER ================= */}
      <section className="services-cta-section" style={{ marginTop: '50px' }}>
        <div className="wrap">
          <div className="services-cta-box">
            <div className="services-cta-text">
              <h3>Looking to start your {service.title} project?</h3>
              <p>Discuss your technical requirements with our dedicated engineering team in Ahmedabad.</p>
            </div>
            <div className="services-cta-actions">
              <Link href={`/contact?service=${service.slug}`} className="btn btn-accent">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
