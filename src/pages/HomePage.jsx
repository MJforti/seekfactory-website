import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Cpu, Flame, Wrench, Factory, Layers, FileCheck } from 'lucide-react';
import { MACHINERY_CATEGORIES, PRODUCTS, WHY_SEEKFACTORY, SOURCING_PROCESS, TRUST_METRICS, TESTIMONIALS, INDUSTRIES } from '../data/machineryData';
import MachineryCard from '../components/MachineryCard';

export default function HomePage({ setActiveTab, onRequestQuote, onQuickView, onViewDetails }) {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/images/hero_machinery.jpg"
          className="hero-bg"
        >
          <source src="/videos/hero_machinery.webm" type="video/webm" />
          <source src="/videos/hero_cnc_lathe.webm" type="video/webm" />
          <source src="/videos/hero_machinery.mp4" type="video/mp4" />
          <img src="/images/hero_machinery.jpg" alt="Industrial Machinery Facility" className="hero-bg" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content">
            <div className="hero-eyebrow">
              <ShieldCheck size={16} /> Verified Cross-Border Machinery Marketplace
            </div>
            
            <h1 className="hero-title">
              Machinery that <span>moves industry</span> forward.
            </h1>
            
            <p className="hero-subtitle">
              SeekFactory connects Indian SMEs and enterprise manufacturers directly with 50-point audited international machinery builders. End-to-end quality inspection, BIS certification facilitation, and door-to-door delivery.
            </p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => setActiveTab('machinery')}>
                Explore Machinery Catalog <ArrowRight size={16} />
              </button>
              <button className="btn-secondary" onClick={() => onRequestQuote()}>
                Talk to a Technical Expert
              </button>
            </div>

            <div className="hero-stats-row">
              {TRUST_METRICS.map((stat, i) => (
                <div key={i} className="hero-stat-item">
                  <span className="hero-stat-num">{stat.metric}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED MACHINERY CATEGORIES */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">High-Performance Equipment</span>
            <h2 className="section-title">Engineered Machinery Categories</h2>
            <p className="section-desc">
              Browse audited industrial machinery backed by verified factory inspection reports and precision engineering specifications.
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
                  <span className="category-count">{cat.count}</span>
                </div>
                <div className="category-body">
                  <h3 className="category-title">{cat.name}</h3>
                  <p className="category-desc">{cat.description}</p>
                  
                  <div className="category-specs-list">
                    {cat.featuredSpecs.map((spec, idx) => (
                      <span key={idx} className="spec-pill">{spec}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                    Browse Category <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS CATALOG PREVIEW */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-surface-1)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <span className="section-tag">Audited Inventory</span>
              <h2 className="section-title">Featured Industrial Machinery</h2>
              <p className="section-desc">Ready for immediate factory audit, pre-shipment inspection, and global shipment.</p>
            </div>
            <button className="btn-secondary" onClick={() => setActiveTab('machinery')}>
              View All {PRODUCTS.length} Machines <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
            {PRODUCTS.slice(0, 3).map((product) => (
              <MachineryCard 
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onRequestQuote={onRequestQuote}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY SEEKFACTORY - PROOF & DIFFERENTIATORS */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Institutional Credibility</span>
            <h2 className="section-title">Why Manufacturing Businesses Trust SeekFactory</h2>
            <p className="section-desc">
              We eliminate cross-border machinery risk through physical on-site audits, pre-shipment quality verification, and complete BIS regulatory compliance.
            </p>
          </div>

          <div className="why-grid">
            {WHY_SEEKFACTORY.map((item, idx) => (
              <div key={idx} className="why-card">
                <div className="why-number">{item.number}</div>
                <h3 className="why-title">{item.label}</h3>
                <p className="why-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL SOURCING PROCESS */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-surface-1)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">End-to-End Workflow</span>
            <h2 className="section-title">How Working With SeekFactory Works</h2>
            <p className="section-desc">
              A transparent, engineering-led sourcing protocol designed for high-value machinery procurement.
            </p>
          </div>

          <div className="process-timeline">
            {SOURCING_PROCESS.map((proc, i) => (
              <div key={i} className="process-step">
                <div className="process-num">{proc.step}</div>
                <h3 className="process-title">{proc.title}</h3>
                <p className="process-desc">{proc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SHOWCASE */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Target Sectors</span>
            <h2 className="section-title">Industries Powered by SeekFactory</h2>
            <p className="section-desc">
              From high-precision automotive components to structural steel fabrication.
            </p>
          </div>

          <div className="industry-grid">
            {INDUSTRIES.map((ind) => (
              <div key={ind.id} className="industry-card" onClick={() => setActiveTab('machinery')}>
                <img src={ind.image} alt={ind.name} className="industry-img" loading="lazy" />
                <div className="industry-overlay">
                  <div className="industry-tag">{ind.tag}</div>
                  <h3 className="industry-title">{ind.name}</h3>
                  <p className="industry-desc">{ind.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF & TESTIMONIALS */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-surface-1)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">Verified Proof</span>
            <h2 className="section-title">Trusted by Manufacturers Across India & Global Markets</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} style={{ background: 'var(--color-surface-2)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  "{t.quote}"
                </p>
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>{t.author}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-accent)' }}>{t.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. REQUEST A QUOTE CONVERSION CTA */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #11141A 0%, #1D232F 100%)', borderTop: '1px solid var(--color-border-bright)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Ready to Upgrade Your Manufacturing Facility?</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', margin: '0.75rem 0 1.25rem 0' }}>
            Request an Itemized Machinery Quotation
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
            Receive complete machine specifications, FOB/CIF pricing, lead times, and factory audit verification data within 4 business hours.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }} onClick={() => onRequestQuote()}>
              Request a Custom Quote
            </button>
            <button className="btn-secondary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }} onClick={() => setActiveTab('contact')}>
              Contact Mumbai Sales Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
