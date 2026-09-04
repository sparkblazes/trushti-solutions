'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import BookDemoButton from './BookDemoButton';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={isMobileMenuOpen ? 'menu-open' : ''}>
      <nav>
        <Link href="/" className="logo" onClick={closeMenu}>
          <img src="/sidebar-logo.png" alt="Trushti Solutions Logo" style={{ height: '48px', objectFit: 'contain' }} />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/career">Career</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="nav-cta">
          <Link href="/contact" className="btn btn-ghost" style={{ display: 'none' }} id="callLink"></Link>
          <BookDemoButton text="Book Free Demo" className="btn btn-accent" />
        </div>

        {/* Mobile Hamburger Icon */}
        <button className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/products" onClick={closeMenu}>Products</Link>
          <Link href="/services" onClick={closeMenu}>Services</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/career" onClick={closeMenu}>Career</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <div className="mobile-nav-cta">
            <BookDemoButton text="Book Free Demo" className="btn btn-accent" />
          </div>
        </div>
      </div>
    </header>
  );
}
