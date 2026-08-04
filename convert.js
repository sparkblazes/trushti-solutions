const fs = require('fs');
const path = require('path');

const htmlDir = path.join(__dirname, 'html');
const appDir = path.join(__dirname, 'src', 'app');

const files = ['about', 'blog', 'career', 'contact', 'privacy', 'products', 'services', 'terms'];

function styleToObj(styleStr) {
  if (!styleStr) return "{}";
  const styles = styleStr.split(';').filter(s => s.trim());
  let objStr = "{";
  styles.forEach(s => {
    let [key, val] = s.split(':');
    if (!key || !val) return;
    key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
    objStr += `${key}: "${val.trim().replace(/"/g, "'")}", `;
  });
  objStr += "}";
  return objStr;
}

files.forEach(file => {
  const htmlPath = path.join(htmlDir, `${file}.html`);
  const tsxPath = path.join(appDir, file === 'page' ? 'page.tsx' : `${file}/page.tsx`);
  
  if (!fs.existsSync(htmlPath)) return;
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Extract content between </header> and <footer>
  let match = html.match(/<\/header>([\s\S]*?)<footer>/);
  if (!match) return;
  
  let content = match[1];
  
  // Basic HTML to JSX conversions
  content = content.replace(/class=/g, 'className=');
  content = content.replace(/for=/g, 'htmlFor=');
  content = content.replace(/<img([^>]*[^/])>/g, '<img$1 />');
  content = content.replace(/<input([^>]*[^/])>/g, '<input$1 />');
  content = content.replace(/<br>/g, '<br />');
  content = content.replace(/<hr>/g, '<hr />');
  
  // Convert style="..." to style={{...}}
  content = content.replace(/style="([^"]*)"/g, (match, p1) => {
    return `style={${styleToObj(p1)}}`;
  });
  
  // Convert standard anchor tags to Next.js Link (simple heuristic for internal links)
  content = content.replace(/<a href="([^"]+)\.html"([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, p2, p3) => {
    let href = p1 === 'trushti-solutions' ? '/' : `/${p1}`;
    return `<Link href="${href}"${p2}>${p3}</Link>`;
  });
  content = content.replace(/<a href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, p2, p3) => {
    // If it's just a # anchor or external link, we can still use Link but let's keep it simple
    if (p1.startsWith('#')) return `<Link href="${p1}"${p2}>${p3}</Link>`;
    if (p1.startsWith('http')) return `<a href="${p1}"${p2}>${p3}</a>`; // keep a for external
    return `<Link href="${p1}"${p2}>${p3}</Link>`;
  });

  // Remove onclick attributes as they will break Server Components
  content = content.replace(/onclick="[^"]*"/g, '');
  content = content.replace(/onsubmit="[^"]*"/g, '');

  let tsxContent = `import Link from 'next/link';

export default function ${file.charAt(0).toUpperCase() + file.slice(1)}Page() {
  return (
    <main>
      ${content.trim()}
    </main>
  );
}
`;

  if (fs.existsSync(path.dirname(tsxPath))) {
    fs.writeFileSync(tsxPath, tsxContent);
    console.log(`Updated ${tsxPath}`);
  }
});
