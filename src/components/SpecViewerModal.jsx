import React from 'react';
import { X, Check, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import VerificationBadge from './VerificationBadge';

export default function SpecViewerModal({ product, isOpen, onClose, onRequestQuote }) {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '820px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ position: 'relative', height: '260px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-border)', backgroundColor: '#000' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                <VerificationBadge level={product.verificationLevel} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
              {product.gallery.map((img, i) => (
                <div key={i} style={{ width: '60px', height: '50px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                  <img src={img} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              {product.categoryName}
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.25, marginBottom: '0.75rem' }}>
              {product.name}
            </h2>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
              {product.priceRange}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              {product.overview}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', background: 'var(--color-surface-2)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
              <div>📍 <strong>Origin Base:</strong> {product.origin}</div>
              <div>🚚 <strong>Lead Time:</strong> {product.leadTime}</div>
              <div>🛡️ <strong>BIS Compliance:</strong> {product.bisCompliant ? 'Verified Compliant' : 'Audit Ready'}</div>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%' }}
              onClick={() => { onClose(); onRequestQuote(product); }}
            >
              Request Official Quotation
            </button>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
            Technical Specifications
          </h3>
          <table className="spec-table-full">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Engineered Specification</th>
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
        </div>
      </div>
    </div>
  );
}
