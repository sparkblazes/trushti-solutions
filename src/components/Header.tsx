'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BookDemoButton from './BookDemoButton';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={mobileMenuOpen ? 'mobile-menu-active' : ''}>
      <nav>
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          <img src="/sidebar-logo.png" alt="Trushti Solutions Logo" style={{ height: "48px", objectFit: "contain" }} />
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-only-links">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/career">Career</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="nav-cta desktop-only-cta">
          <Link href="/contact" className="btn btn-ghost" style={{ display: "none" }} id="callLink"></Link>
          <BookDemoButton text="Book Free Demo" className="btn btn-accent" />
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-links">
            <Link href="/" onClick={closeMobileMenu}>Home</Link>
            <Link href="/products" onClick={closeMobileMenu}>Products</Link>
            <Link href="/services" onClick={closeMobileMenu}>Services</Link>
            <Link href="/about" onClick={closeMobileMenu}>About</Link>
            <Link href="/career" onClick={closeMobileMenu}>Career</Link>
            <Link href="/blog" onClick={closeMobileMenu}>Blog</Link>
            <Link href="/contact" onClick={closeMobileMenu}>Contact</Link>
          </div>
          <div className="mobile-nav-footer">
            <BookDemoButton text="Book Free Demo" className="btn btn-accent full-width-btn" onClick={closeMobileMenu} />
          </div>
        </div>
      </div>
      
      {/* Backdrop overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-backdrop" onClick={closeMobileMenu}></div>
      )}
    </header>
  );
}
