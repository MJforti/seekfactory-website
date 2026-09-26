import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { LOCATIONS } from '../data/machineryData';

export default function Footer({ setActiveTab, onRequestQuote }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div className="brand-icon">SF</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>SEEKFACTORY</div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '360px' }}>
              India's premier B2B cross-border marketplace and technical audit platform for verified industrial machinery, heavy manufacturing equipment, and BIS-compliant international imports.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-gold)' }}>
              <ShieldCheck size={16} /> 50-Point Foreign Factory Audit Certified
            </div>
          </div>

          {/* Col 2: Machinery Links */}
          <div>
            <div className="footer-col-title">Machinery Categories</div>
            <ul className="footer-links">
              <li><a href="#machinery" onClick={(e) => { e.preventDefault(); setActiveTab('machinery'); }}>5-Axis CNC Machining</a></li>
              <li><a href="#machinery" onClick={(e) => { e.preventDefault(); setActiveTab('machinery'); }}>Fiber Laser Cutters</a></li>
              <li><a href="#machinery" onClick={(e) => { e.preventDefault(); setActiveTab('machinery'); }}>CNC Press Brakes</a></li>
              <li><a href="#machinery" onClick={(e) => { e.preventDefault(); setActiveTab('machinery'); }}>Plastic Injection Molding</a></li>
              <li><a href="#machinery" onClick={(e) => { e.preventDefault(); setActiveTab('machinery'); }}>CMM Metrology & Inspection</a></li>
              <li><a href="#machinery" onClick={(e) => { e.preventDefault(); setActiveTab('machinery'); }}>Robotic Welding Automation</a></li>
            </ul>
          </div>

          {/* Col 3: Solutions & Regulatory */}
          <div>
            <div className="footer-col-title">Solutions & Quality</div>
            <ul className="footer-links">
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); setActiveTab('solutions'); }}>On-Site Factory Audits</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); setActiveTab('solutions'); }}>Pre-Shipment Inspection (FAT)</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); setActiveTab('solutions'); }}>BIS Regulatory Compliance</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); setActiveTab('solutions'); }}>Door-to-Door Freight Logistics</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); setActiveTab('about'); }}>About SeekFactory</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); setActiveTab('contact'); }}>Contact Global Hubs</a></li>
            </ul>
          </div>

          {/* Col 4: Global Hubs */}
          <div>
            <div className="footer-col-title">Global Operations</div>
            <div style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <strong style={{ color: '#fff' }}>Mumbai HQ (India):</strong><br />
                Suite 804, Express Towers, Nariman Point, Mumbai 400021<br />
                <span style={{ color: 'var(--color-accent)' }}>+91 (022) 4982-5000</span>
              </div>
              <div>
                <strong style={{ color: '#fff' }}>Guangzhou Audit Desk (China):</strong><br />
                Tower A, Poly World Trade Center, Haizhu District, Guangzhou<br />
                <span style={{ color: 'var(--color-text-muted)' }}>support@seekfactory.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} SeekFactory Marketplace Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Procurement</span>
            <span>BIS Foreign Manufacturer Guidelines</span>
            <span>Supplier Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
