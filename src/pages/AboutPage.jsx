import React from 'react';
import { MapPin, Globe } from 'lucide-react';
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

        {/* Company Vision & Infrastructure */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#fff', marginBottom: '1rem', lineHeight: '1.25' }}>
            Engineered for Manufacturing Excellence
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
            SeekFactory was founded to solve a critical challenge facing growing manufacturers: sourcing high-capital industrial machinery across international borders with complete confidence in quality, technical specifications, and legal compliance.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
            Rather than functioning as a passive listing directory, SeekFactory operates a physical inspection infrastructure with stationed engineers in Guangzhou and Changzhou (China), alongside technical sales desks in Mumbai and Delhi (India).
          </p>
        </div>

        {/* Key Metrics - subtle presentation instead of numeral boxes */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                {TRUST_METRICS[0]?.metric || '500+'}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Verified Machines Sourced
              </div>
            </div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                {TRUST_METRICS[3]?.metric || '15+'}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Years Combined Expertise
              </div>
            </div>
          </div>
        </div>

        {/* Global Operating Hubs */}
        <div>
          <h2 className="section-title" style={{ fontSize: '1.65rem', marginBottom: '2rem' }}>
            Our Dual-Presence Infrastructure (India & China)
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {LOCATIONS.map((loc, idx) => (
              <div key={idx} style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '5', background: 'var(--color-surface-1)', transition: 'var(--transition-normal)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', fontWeight: '700', fontSize: '1.15rem', marginBottom: '0.35rem' }}>
                  <MapPin size={18} /> {loc.city}
                </div>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  {loc.role}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5', marginBottom: '1rem' }}>
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