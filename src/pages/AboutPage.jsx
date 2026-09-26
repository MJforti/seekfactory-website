import React from 'react';
import { ShieldCheck, MapPin, Globe, Award, CheckCircle2, Building2 } from 'lucide-react';
import { LOCATIONS, TRUST_METRICS } from '../data/machineryData';

export default function AboutPage({ onRequestQuote }) {
  return (
    <div style={{ padding: '4rem 0 6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Institutional Profile</span>
          <h2 className="section-title">About SeekFactory</h2>
          <p className="section-desc">
            Redefining cross-border industrial machinery procurement through transparency, physical verification, and precision engineering compliance.
          </p>
        </div>

        {/* Company Vision & Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', marginBottom: '5rem', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.25 }}>
              Engineered for Manufacturing Excellence
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              SeekFactory was founded to solve a critical challenge facing growing manufacturers: sourcing high-capital industrial machinery across international borders with complete confidence in quality, technical specifications, and legal compliance.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              Rather than functioning as a passive listing directory, SeekFactory operates a physical inspection infrastructure with stationed engineers in Guangzhou and Changzhou (China), alongside technical sales desks in Mumbai and Delhi (India).
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: 'var(--color-surface-1)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>500+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>Verified Machines Sourced</div>
              </div>
              <div style={{ background: 'var(--color-surface-1)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'var(--font-mono)', color: 'var(--color-gold)' }}>50+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>Audit Inspection Parameters</div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ position: 'relative', height: '380px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              <img src="/images/hero_machinery.jpg" alt="SeekFactory Facility" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Global Operating Hubs */}
        <div style={{ marginBottom: '5rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>
            Our Dual-Presence Infrastructure (India & China)
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {LOCATIONS.map((loc, idx) => (
              <div key={idx} style={{ background: 'var(--color-surface-1)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.35rem' }}>
                  <Building2 size={18} /> {loc.city}
                </div>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  {loc.role}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {loc.address}
                </p>
                <div style={{ fontSize: '0.825rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)' }}>
                  ✉️ {loc.email}<br />
                  📞 {loc.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
