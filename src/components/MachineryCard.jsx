import React from 'react';
import { Eye, FileText, ArrowRight } from 'lucide-react';
import VerificationBadge from './VerificationBadge';

export default function MachineryCard({ product, onQuickView, onRequestQuote, onViewDetails }) {
  // Take top 3 key specs for quick display
  const keySpecs = Object.entries(product.specs).slice(0, 3);

  return (
    <div className="product-card">
      <div className="product-img-wrapper" onClick={() => onViewDetails(product)}>
        <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
        <VerificationBadge level={product.verificationLevel} />
      </div>

      <div className="product-body">
        <div className="product-cat">{product.categoryName}</div>
        <h3 className="product-title" onClick={() => onViewDetails(product)}>
          {product.name}
        </h3>
        
        <div className="product-price">{product.priceRange}</div>

        <table className="specs-table-mini">
          <tbody>
            {keySpecs.map(([key, val]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="product-actions">
          <button 
            className="btn-secondary" 
            style={{ padding: '0.5rem 0.75rem', fontSize: '0.8rem' }}
            onClick={() => onQuickView(product)}
          >
            <Eye size={14} /> Quick Specs
          </button>
          
          <button 
            className="btn-primary" 
            style={{ padding: '0.5rem 0.75rem', fontSize: '0.8rem' }}
            onClick={() => onRequestQuote(product)}
          >
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
}
