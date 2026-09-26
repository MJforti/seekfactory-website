import React from 'react';
import { ArrowRight, CheckCircle2, Factory } from 'lucide-react';
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {INDUSTRIES.map((ind, idx) => (
            <div 
              key={ind.id} 
              style={{
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
                gap: '3rem',
                alignItems: 'center',
                background: 'var(--color-surface-1)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden'
              }}
            >
              <div style={{ order: idx % 2 === 0 ? 1 : 2, height: '340px' }}>
                <img src={ind.image} alt={ind.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ order: idx % 2 === 0 ? 2 : 1, padding: '2.5rem' }}>
                <span className="section-tag">{ind.tag}</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', margin: '0.5rem 0 1rem 0' }}>{ind.name}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {ind.description}
                </p>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button className="btn-primary" onClick={() => setActiveTab('machinery')}>
                    Explore {ind.name} Machinery <ArrowRight size={16} />
                  </button>
                  <button className="btn-secondary" onClick={() => onRequestQuote()}>
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
