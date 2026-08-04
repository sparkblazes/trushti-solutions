const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'trushti-solutions.html');
const html = fs.readFileSync(srcFile, 'utf8');

// Extract parts
const headPart = html.substring(0, html.indexOf('</head>') + 7);
const headerMatch = html.match(/<header>[\s\S]*?<\/header>/);
const footerMatch = html.match(/<footer>[\s\S]*?<\/footer>/);
const modalPart = html.substring(html.indexOf('<!-- ================= BOOK DEMO MODAL ================= -->'));

const header = headerMatch ? headerMatch[0] : '';
const footer = footerMatch ? footerMatch[0] : '';

// Extract sections
const getSection = (name) => {
  const startStr = `<!-- ================= ${name} ================= -->`;
  const startIdx = html.indexOf(startStr);
  if (startIdx === -1) return null;
  const nextSectionIdx = html.indexOf('<!-- =================', startIdx + 10);
  const footerIdx = html.indexOf('<footer>');
  const endIdx = nextSectionIdx !== -1 ? nextSectionIdx : footerIdx;
  return html.substring(startIdx, endIdx).trim();
};

const sections = {
  products: getSection('PRODUCTS'),
  about: getSection('ABOUT'),
  services: getSection('SERVICES'),
  contact: getSection('CONTACT')
};

const placeholderSection = (title) => `
<section style="min-height: 60vh; display:flex; align-items:center; justify-content:center; text-align:center;">
  <div class="wrap">
    <div class="section-head reveal" style="margin:0 auto;">
      <span class="section-eyebrow">Trushti Solutions</span>
      <h2>${title}</h2>
      <p>This page is currently under construction. Check back soon for updates!</p>
    </div>
  </div>
</section>
`;

const pages = [
  { file: 'products.html', content: sections.products || placeholderSection('Products'), title: 'Products' },
  { file: 'services.html', content: sections.services || placeholderSection('Services'), title: 'Services' },
  { file: 'about.html', content: sections.about || placeholderSection('About Us'), title: 'About' },
  { file: 'contact.html', content: sections.contact || placeholderSection('Contact Us'), title: 'Contact' },
  { file: 'career.html', content: placeholderSection('Careers'), title: 'Careers' },
  { file: 'blog.html', content: placeholderSection('Blog'), title: 'Blog' },
  { file: 'privacy.html', content: placeholderSection('Privacy Policy'), title: 'Privacy Policy' },
  { file: 'terms.html', content: placeholderSection('Terms of Service'), title: 'Terms of Service' },
];

pages.forEach(page => {
  let headWithTitle = headPart.replace(/<title>.*?<\/title>/, `<title>${page.title} — Trushti Solutions</title>`);
  
  const pageHtml = `${headWithTitle}
<body>

${header}

${page.content}

${footer}

${modalPart}
`;

  fs.writeFileSync(path.join(__dirname, page.file), pageHtml, 'utf8');
  console.log(`Generated ${page.file}`);
});
