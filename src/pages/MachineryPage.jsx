import React, { useState } from 'react';
import { Search, SlidersHorizontal, ShieldCheck, Filter } from 'lucide-react';
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
            Filter through 50-point verified international machinery, backed by physical factory audit records, pre-shipment testing logs, and BIS compliance certification.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div style={{ background: 'var(--color-surface-1)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Search input */}
            <div style={{ position: 'relative', flexGrow: 1, minWidth: '280px' }}>
              <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input 
                type="text" 
                className="form-input" 
                placeholder="Search machinery by name, spec (e.g. 5-Axis, 12kW Laser, 650T)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: '2.75rem' }}
              />
            </div>
          </div>

          {/* Category Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
            <button
              className={`btn-outline ${selectedCategory === 'all' ? 'active' : ''}`}
              style={{
                backgroundColor: selectedCategory === 'all' ? 'var(--color-accent)' : 'transparent',
                borderColor: selectedCategory === 'all' ? 'var(--color-accent)' : 'var(--color-border)',
                color: selectedCategory === 'all' ? '#fff' : 'var(--color-text-secondary)'
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
                  backgroundColor: selectedCategory === cat.id ? 'var(--color-accent)' : 'transparent',
                  borderColor: selectedCategory === cat.id ? 'var(--color-accent)' : 'var(--color-border)',
                  color: selectedCategory === cat.id ? '#fff' : 'var(--color-text-secondary)'
                }}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
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
          <div style={{ textAlign: 'center', padding: '4rem 0', background: 'var(--color-surface-1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>No machinery matches your criteria</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
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
