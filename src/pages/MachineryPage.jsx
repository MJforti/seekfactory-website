import React, { useState } from 'react';
import { Search, ShieldCheck } from 'lucide-react';
import { PRODUCTS, MACHINERY_CATEGORIES } from '../data/machineryData';
import MachineryCard from '../components/MachineryCard';

export default function MachineryPage({ onRequestQuote, onQuickView, onViewDetails }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: '4rem 0 6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Audited Inventory Catalog</span>
          <h2 className="section-title">Industrial Machinery & Equipment</h2>
          <p className="section-desc">
            Filter through 50-verified international machinery, backed by physical factory audit records and precision engineering specifications.
          </p>
        </div>

        {/* Filter Controls */}
        <div style={{ background: 'var(--color-surface-1)', padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '5', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Search input */}
            <div style={{ position: 'relative', flexGrow: 1, minWidth: '280px' }}>
              <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input 
                type="text" 
                placeholder="Search machinery by name, spec (e.g. 5-Axis, 12kW Laser, 650T)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', background: '#171920', border: '1px solid #2A2D39', borderRadius: '3px', color: '#F0F4F8', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontSize: '0.9rem', outline: 'none' }}
              />
            </div>
          </div>

          {/* Category Pills - simplified */}
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                className={`btn-outline ${selectedCategory === 'all' ? 'active' : ''}`}
                style={{
                  backgroundColor: 'transparent',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-secondary)',
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem'
                }}
                onClick={() => setSelectedCategory('all')}
              >
                All Machinery ({PRODUCTS.length})
              </button>

              {MACHINERY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`btn-outline ${selectedCategory === cat.id ? 'active' : ''}`}
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: selectedCategory === cat.id ? 'var(--color-accent)' : 'var(--color-border)',
                    color: selectedCategory === cat.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
                  }}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.shortName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div style={{ display: 'grid', gap: '2rem' }}>
            {filteredProducts.map((product) => (
              <MachineryCard 
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onRequestQuote={onRequestQuote}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 0', background: 'var(--color-surface-1)', border: '1px solid var(--color-border)', borderRadius: '5' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>No machinery matches your criteria</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
              We custom-source industrial equipment beyond listed inventory through our Guangzhou sourcing desk.
            </p>
            <button className="btn-primary" onClick={() => onRequestQuote()}>
              Submit Custom Machinery Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
}