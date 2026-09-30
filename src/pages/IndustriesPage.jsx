import React from 'react';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../data/machineryData';

export default function IndustriesPage({ setActiveTab, onRequestQuote }) {
  return (
    <div style={{ padding: '4rem 0 6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Sector Expertise</span>
          <h2 className="section-title">Industries Powered by SeekFactory</h2>
          <p className="section-desc">
            Custom engineered machinery, production tooling, and turnkey line integration for high-demand industrial sectors.
          </p>
        </div>

        {/* Industry Showcase - split imagery + text layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.id} style={{ background: 'var(--color-surface-1)', border: '1px solid var(--color-border)', borderRadius: '5', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '360px' }}>
              <img src={ind.image} alt={ind.name} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  {ind.tag}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', margin: '0.5rem 0 0.75rem 0' }}>
                  {ind.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.5', flexGrow: 1 }}>
                  {ind.description}
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                  <button className="btn-primary" style={{ flex: '1', padding: '0.6rem 1rem', fontSize: '0.85rem' }} onClick={() => setActiveTab('machinery')}>
                    Explore {ind.name} Machinery <ArrowRight size={12} />
                  </button>
                  <button className="btn-secondary" style={{ flex: '1', padding: '0.6rem 1rem', fontSize: '0.85rem' }} onClick={() => onRequestQuote()}>
                    Request Technical Proposal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}