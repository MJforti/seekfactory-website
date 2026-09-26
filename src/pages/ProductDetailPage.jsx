import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, Download, CheckCircle2, Send, FileText, Globe, Clock, Award } from 'lucide-react';
import VerificationBadge from '../components/VerificationBadge';

export default function ProductDetailPage({ product, onBack, onRequestQuote }) {
  const [activeImage, setActiveImage] = useState(product.image);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownloadSpec = () => {
    setDownloadStarted(true);
    setTimeout(() => {
      setDownloadStarted(false);
    }, 3000);
  };

  return (
    <div style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container">
        {/* Back Link */}
        <button 
          onClick={onBack} 
          className="btn-outline" 
          style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <ArrowLeft size={16} /> Back to Machinery Catalog
        </button>

        {/* Product Header Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
          {/* Gallery Column */}
          <div>
            <div style={{ position: 'relative', height: '420px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-border)', backgroundColor: '#000', marginBottom: '1rem' }}>
              <img src={activeImage} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                <VerificationBadge level={product.verificationLevel} />
              </div>
            </div>

            {/* Thumbnail Row */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {product.gallery.map((img, i) => (
                <div 
                  key={i} 
                  style={{
                    width: '90px',
                    height: '70px',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    border: activeImage === img ? '2px solid var(--color-accent)' : '1px solid var(--color-border)',
                    cursor: 'pointer',
                    opacity: activeImage === img ? 1 : 0.6
                  }}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`Thumbnail ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Details Column */}
          <div>
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              {product.categoryName}
            </div>

            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.2, marginBottom: '1rem' }}>
              {product.name}
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              {product.tagline}
            </p>

            <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#fff', marginBottom: '1.5rem', background: 'var(--color-surface-1)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', display: 'inline-block' }}>
              {product.priceRange}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem', background: 'var(--color-surface-1)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <div><strong style={{ color: '#fff' }}>Min. Order:</strong> {product.minOrder}</div>
              <div><strong style={{ color: '#fff' }}>Lead Time:</strong> {product.leadTime}</div>
              <div><strong style={{ color: '#fff' }}>Manufacturing Origin:</strong> {product.origin}</div>
              <div><strong style={{ color: '#fff' }}>BIS Compliance:</strong> Verified Compliant</div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                className="btn-primary" 
                style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}
                onClick={() => onRequestQuote(product)}
              >
                <Send size={16} /> Request Official Quotation
              </button>

              <button 
                className="btn-secondary" 
                style={{ padding: '0.85rem 1.25rem', fontSize: '0.9rem' }}
                onClick={handleDownloadSpec}
              >
                <Download size={16} /> {downloadStarted ? 'Generating Spec PDF...' : 'Download Technical Datasheet'}
              </button>
            </div>

            {downloadStarted && (
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--color-success)' }}>
                ✓ Technical PDF Datasheet compiled for {product.name}
              </div>
            )}
          </div>
        </div>

        {/* Detailed Sections: Specs, Features & Applications */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>
              Comprehensive Machine Specifications
            </h2>

            <table className="spec-table-full">
              <thead>
                <tr>
                  <th>Engineering Parameter</th>
                  <th>Certified Value / Specification</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(product.specs).map(([key, val]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ marginTop: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>
                Key Technical Features
              </h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {product.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Applications & Audit protocol */}
          <div>
            <div style={{ background: 'var(--color-surface-1)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Industrial Applications</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {product.applications.map((app, idx) => (
                  <li key={idx} style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', padding: '0.5rem 0.75rem', background: 'var(--color-surface-2)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                    ⚙️ {app}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'var(--color-surface-1)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gold)', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FBBF24', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                <Award size={18} /> SeekFactory Quality Audit Guarantee
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Every unit undergoes 50-point dimensional calibration, electrical safety wiring checks, and 24-hour continuous dry-run testing before export clearance.
              </p>
              <button className="btn-primary" style={{ width: '100%', padding: '0.75rem' }} onClick={() => onRequestQuote(product)}>
                Request Audit Certificate & Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
