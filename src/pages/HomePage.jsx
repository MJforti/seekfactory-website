import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MACHINERY_CATEGORIES, PRODUCTS, WHY_SEEKFACTORY, SOURCING_PROCESS, TESTIMONIALS, INDUSTRIES } from '../data/machineryData';
import MachineryCard from '../components/MachineryCard';

export default function HomePage({ setActiveTab, onRequestQuote, onQuickView, onViewDetails }) {
  return (
    <div>
      {/* 1. HERO SECTION */
      <section className="hero">
        <img 
          src="/images/hero_machinery.jpg" 
          alt="Industrial machinery facility" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content">
            <h1 className="hero-title">
              Machinery that <span>moves industry</span> forward.
            </h1>
            
            <p className="hero-subtitle">
              SeekFactory connects Indian manufacturers with audited international machinery builders. End-to-end quality inspection and BIS certification facilitation.
            </p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => setActiveTab('machinery')}>
                Explore Machinery Catalog
              </button>
              <button className="btn-secondary" onClick={() => onRequestQuote()}>
                Talk to a Technical Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">High-Performance Equipment</span>
            <h2 className="section-title">Engineered Machinery Categories</h2>
            <p className="section-desc">
              Browse audited industrial machinery backed by verified factory inspection reports.
            </p>
          </div>

          <div className="category-grid">
            {MACHINERY_CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                className="category-card"
                onClick={() => setActiveTab('machinery')}
              >
                <div className="category-img-wrapper">
                  <img src={cat.image} alt={cat.name} className="category-img" loading="lazy" />
                </div>
                <div className="category-body">
                  <h3 className="category-title">{cat.name}</h3>
                  <p className="category-desc">{cat.description}</p>
                  
                  <div style={{ marginTop: '1rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                    Browse Category <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS - large showcases instead of 3 small cards */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-surface-1)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Audited Inventory</span>
            <h2 className="section-title">Featured Industrial Machinery</h2>
            <p className="section-desc">Ready for immediate factory audit, pre-shipment inspection, and global shipment.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '2rem' }}>
            {PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.id} style={{ background: 'var(--color-surface-1)', border: '1px solid var(--color-border)', borderRadius: '5', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ height: '280px', background: '#050608', overflow: 'hidden' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(9,11,14,0.8)', border: '1px solid var(--color-border)', color: var(--color-text-primary), fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: var(--radius-sm), textTransform: 'uppercase' }}>Verified</div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                    {product.categoryName}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--color-text-primary)', lineHeight: '1.35', marginBottom: '0.75rem' }}>
                    {product.name}
                  </h3>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)' }}>
                    {product.priceRange}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem', fontSize: '0.8rem' }}>
                    <span style={{ color: 'var(--color-text-secondary)' }}>Min Order: </span><span style={{ color: 'var(--color-text-primary)' } fontFamily: 'var(--font-mono)' }>{product.minOrder}</span>
                    <span style={{ color: 'var(--color-text-secondary)' }}>|</span>
                    <span style={{ color: 'var(--color-text-primary)' }} fontFamily: 'var(--font-mono)' }>{product.leadTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY SEEKFACTORY - editorial content instead of numbered cards */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Institutional Credibility</span>
            <h2 className="section-title">Why Manufacturing Businesses Trust SeekFactory</h2>
            <p className="section-desc">
              We eliminate cross-border machinery risk through physical on-site audits, pre-shipment quality verification, and complete BIS regulatory compliance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {WHY_SEEKFACTORY.map((item, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: 'var(--color-surface-1)', border: '1px solid var(--color-border)', borderRadius: '5', transition: 'var(--transition-normal)' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: '900', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', marginBottom: '0.75rem', lineHeight: '1' }}>
                  {item.number}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                  {item.label}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.5', marginBottom: '0' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOURCING PROCESS - simplified */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-surface-1)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">End-to-End Workflow</span>
            <h2 className="section-title">How Working With SeekFactory Works</h2>
            <p className="section-desc">
              A transparent, engineering-led sourcing protocol designed for high-value machinery procurement.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
            {SOURCING_PROCESS.slice(0, 3).map((proc, i) => (
              <div key={i} style={{ flex: '1', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', fontWeight: '800', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                  {proc.step}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                  {proc.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                  {proc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SHOWCASE - split layouts instead of card grid */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Target Sectors</span>
            <h2 className="section-title">Industries Powered by SeekFactory</h2>
            <p className="section-desc">
              From high-precision automotive components to structural steel fabrication.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {INDUSTRIES.map((ind, i) => (
              <div key={ind.id} style={{ background: 'var(--color-surface-1)', border: '1px solid var(--color-border)', borderRadius: '5', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '340px' }}>
                <img src={ind.image} alt={ind.name} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    {ind.tag}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', margin: '0.5rem 0 0.75rem 0' }}>
                    {ind.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5', flexGrow: 1 }}>
                    {ind.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF - simplified testimonials */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-surface-1)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">Verified Proof</span>
            <h2 className="section-title">Trusted by Manufacturers Across India & Global Markets</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} style={{ padding: '2rem', borderRadius: '5', border: '1px solid var(--color-border)', marginBottom: '1.5rem', background: 'var(--color-surface-2)' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--color-text-primary)' }}>{t.author}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-accent)' }}>{t.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. REQUEST A QUOTE CTA - no gradient */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border-bright)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Ready to Upgrade Your Manufacturing Facility?</span>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', margin: '0.5rem 0 1rem 0' }}>
            Request an Itemized Machinery Quotation
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
            Receive complete machine specifications, FOB/CIF pricing, lead times, and factory audit verification data.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }} onClick={() => onRequestQuote()}>
              Request a Custom Quote
            </button>
            <button className="btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }} onClick={() => setActiveTab('contact')}>
              Contact Mumbai Sales Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}