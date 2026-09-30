import React, { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import VerificationBadge from '../components/VerificationBadge';

export default function ProductDetailPage({ product, onBack, onRequestQuote }) {
  const [activeImage, setActiveImage] = useState(product.image);

  const productCardStyle = {
    background: '#11141A', border: '1px solid #2A2D39', borderRadius: '5',
    overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%'
  };
  const imgWrapperStyle = {
    position: 'relative', height: '420px', overflow: 'hidden', borderRadius: '5',
    border: '1px solid #2A2D39', backgroundColor: '#050608'
  };
  const badgeStyle = {
    position: 'absolute', top: '1rem', left: '1rem',
    background: 'rgba(9,11,14,0.8)', border: '1px solid #C58619',
    color: '#FBBF24', fontSize: '0.72rem', fontWeight: '700',
    padding: '0.25rem 0.6rem', borderRadius: '3px',
    textTransform: 'uppercase', letterSpacing: '0.05em'
  };
  const categoryStyle = {
    fontSize: '0.8rem', fontFamily: 'JetBrains Mono, SFMono-Regular, Consolas, monospace',
    color: '#E65100', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem'
  };
  const titleStyle = {
    fontSize: '2rem', fontWeight: '800', color: '#F0F4F8', lineHeight: '1.2', marginBottom: '1rem'
  };
  const priceStyle = {
    fontSize: '1.1rem', fontWeight: '800', fontFamily: 'JetBrains Mono, SFMono-Regular, Consolas, monospace',
    color: '#fff', marginBottom: '1rem', background: '#171920', padding: '0.75rem 1rem',
    borderRadius: '3px', border: '1px solid #2A2D39', display: 'inline-block'
  };
  const specTableStyle = { width: '100%', borderCollapse: 'collapse' };
  const thStyle = {
    fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase',
    letterSpacing: '0.05em', color: '#A8B2C4', padding: '0.75rem 1rem',
    borderBottom: '1px solid #2A2D39'
  };
  const tdStyle = {
    fontSize: '0.85rem', padding: '0.75rem 1rem',
    borderBottom: '1px solid #2A2D39'
  };
  const tdStylePrimary = {
    fontSize: '0.85rem', fontWeight: '500', color: '#F0F4F8',
    padding: '0.75rem 1rem', textAlign: 'right', fontFamily: 'JetBrains Mono, SFMono-Regular, Consolas, monospace'
  };
  const featureListStyle = {
    listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem'
  };
  const featureItemStyle = {
    display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#A8B2C4'
  };
  const appListStyle = {
    listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem'
  };
  const appItemStyle = {
    fontSize: '0.9rem', color: '#A8B2C4', padding: '0.5rem 0', borderBottom: '1px solid #2A2D39'
  };
  const auditBgStyle = {
    background: '#11141A', border: '1px solid #C58619', borderRadius: '5', padding: '2rem'
  };
  const auditTitleStyle = {
    fontSize: '1.35rem', fontWeight: '800', color: '#F0F4F8', marginBottom: '1rem',
    borderBottom: '1px solid #2A2D39', paddingBottom: '0.75rem'
  };
  const h2Style = {
    fontSize: '1.35rem', fontWeight: '800', color: '#F0F4F8', marginBottom: '1rem',
    borderBottom: '1px solid #2A2D39', paddingBottom: '0.75rem'
  };
  const ulStyle = {
    listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem'
  };

  return (
    <div style={{ padding: '3rem 0 6rem 0' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        {/* Back Link */}
        <button 
          onClick={onBack} 
          style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          className="btn-outline"
        >
          <span style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-3-3l-5 5L7 8l-3 3 5 5l5-5-5-5l3-3z"/></svg>
          </span> Back to Machinery Catalog
        </button>

        {/* Product Header: Image + Core Details */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={imgWrapperStyle}>
            <img src={activeImage} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ ...badgeStyle }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg> {product.verificationLevel}
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ ...categoryStyle }}>
              {product.categoryName}
            </div>

            <h1 style={titleStyle}>{product.name}</h1>

            <p style={{ fontSize: '1.05rem', color: '#A8B2C4', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              {product.tagline}
            </p>

            <div style={priceStyle}>
              {product.priceRange}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#A8B2C4' }}>Min Order: </span>
              <span style={{ fontFamily: 'JetBrains Mono, SFMono-Regular, Consolas, monospace', color: '#F0F4F8' }}>{product.minOrder}</span>
              <span style={{ marginLeft: '1rem', color: '#A8B2C4' }}>|</span>
              <span style={{ fontSize: '0.8rem', color: '#F0F4F8', fontFamily: 'JetBrains Mono, SFMono-Regular, Consolas, monospace' }}>{product.leadTime}</span>
            </div>
          </div>
        </div>

        {/* Request Quotation Button */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <button 
            style={{ padding: '0.85rem 2rem', fontSize: '0.95rem', margin: '0 auto' }}
            className="btn-primary" 
            onClick={() => onRequestQuote(product)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg> Request Official Quotation
          </button>
        </div>

        {/* Key Specifications Table */}
        <div style={{ borderTop: '1px solid #2A2D39', borderBottom: '1px solid #2A2D39', padding: '3rem 0' }}>
          <h2 style={h2Style}>Comprehensive Machine Specifications</h2>

          <table style={specTableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Engineering Parameter</th>
                <th style={thStyle}>Certified Value / Specification</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(product.specs).map(([key, val], idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #2A2D39' }}>
                  <td style={{ ...tdStyle, color: '#A8B2C4', fontSize: '0.85rem' }}>{key}</td>
                  <td style={{ ...tdStylePrimary, color: '#F0F4F8', fontFamily: 'JetBrains Mono, SFMono-Regular, Consolas, monospace' }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Technical Features */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={h2Style}>Key Technical Features</h2>
          <ul style={ulStyle}>
            {product.features.map((feat, idx) => (
              <li key={idx} style={{ ...featureItemStyle }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"/><path d="M8 14l1.5-1.5 2.5 2.5M12 8v4l3 3"/></svg> {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Industrial Applications */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={h2Style}>Industrial Applications</h2>
          <ul style={appListStyle}>
            {product.applications.map((app, idx) => (
              <li key={idx} style={{ ...appItemStyle }}>
                ⚙️ {app}
              </li>
            ))}
          </ul>
        </div>

        {/* Audit Guarantee */}
        <div style={auditBgStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#FBBF24', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, SFMono-Regular, Consolas, monospace' }}> SeekFactory Quality Audit Guarantee</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#A8B2C4', lineHeight: '1.5' }}>
            Every unit undergoes 50-point dimensional calibration, electrical safety wiring checks, and 24-hour continuous dry-run testing before export clearance.
          </p>
          <button style={{ width: '100%', padding: '0.75rem' }} className="btn-primary" onClick={() => onRequestQuote(product)}>
            Request Audit Certificate & Quote
          </button>
        </div>
      </div>
    </div>
  );
}