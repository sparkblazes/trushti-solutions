'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // ---- scroll reveal ----
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { 
        if (en.isIntersecting) { 
          en.target.classList.add('in'); 
          io.unobserve(en.target); 
        } 
      });
    }, { threshold: 0.12 });

    // Find all reveal elements and observe them
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, [pathname]); // Re-run whenever the route changes!

  return null;
}
