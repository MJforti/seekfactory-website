import React, { useState } from 'react';
import { Menu, X, ShieldCheck, PhoneCall, ChevronRight, SlidersHorizontal } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ activeTab, setActiveTab, onRequestQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'machinery', label: 'Machinery Catalog' },
    { id: 'solutions', label: 'Solutions & Audit' },
    { id: 'industries', label: 'Industries' },
    { id: 'about', label: 'About SeekFactory' },
    { id: 'contact', label: 'Contact & Offices' },
  ];

  return (
    <>
      {/* Top Status Ticker */}
      <div className="status-ticker">
        <div className="container status-ticker-content">
          <div className="ticker-badge">
            <span className="ticker-dot"></span>
            <span>China-India Industrial Machinery Sourcing Desk Active</span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span>🏢 Mumbai HQ & Guangzhou Inspection Hub</span>
            <span>🔒 BIS Audit Certified</span>
            <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>📞 +91 (022) 4982-5000</span>
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a 
            href="#home" 
            style={{ textDecoration: 'none' }}
            onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}
          >
            <Logo height={42} />
          </a>

          {/* Desktop Nav */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                  style={{ background: 'none', border: 'none', font: 'inherit', padding: 0 }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="btn-primary" onClick={() => onRequestQuote()}>
              Request a Quote
            </button>

            {/* Mobile Toggle */}
            <button 
              className="btn-outline mobile-menu-btn" 
              style={{ padding: '0.4rem 0.6rem' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'rgba(9,11,14,0.98)', top: '100px', padding: '2rem' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  style={{ background: 'none', border: 'none', color: 'var(--color-text-primary)', fontSize: '1.2rem', fontWeight: 700, width: '100%', textAlign: 'left' }}
                  onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
