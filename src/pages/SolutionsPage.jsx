import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Truck, Award, AlertTriangle, ArrowRight } from 'lucide-react';

export default function SolutionsPage({ onRequestQuote }) {
  const auditPoints = [
    { title: 'Legal & Entity Verification', desc: 'Validating business licenses, export permissions, tax registrations, and site ownership in China/Taiwan.' },
    { title: 'Factory Machine Tooling & Capacity', desc: 'Inspecting CNC bed sizes, assembly bays, overhead crane capacity, and daily production volume.' },
    { title: 'Quality Control Infrastructure', desc: 'Evaluating CMM inspection labs, laser interferometers, hardness testers, and ISO quality management systems.' },
    { title: 'Financial & Reference Audits', desc: 'Reviewing banking records, past export bill of ladings, and interviewing past Indian & European buyers.' },
    { title: 'Pre-Shipment Testing (FAT)', desc: 'Conducting 24-hour dry-runs, high-speed spindle vibration tests, laser positioning accuracy, and safety wiring inspections.' }
  ];

  return (
    <div style={{ padding: '4rem 0 6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Cross-Border Risk Mitigation</span>
          <h2 className="section-title">Quality Inspection & BIS Regulatory Solutions</h2>
          <p className="section-desc">
            We bridge the gap between foreign machinery manufacturers and domestic Indian factories with on-site engineering audits, pre-shipment quality assurance, and BIS compliance.
          </p>
        </div>

        {/* Quality Audit Image Banner */}
        <div style={{ position: 'relative', height: '360px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-border)', marginBottom: '4rem' }}>
          <img src="/images/quality_inspection.jpg" alt="Quality Audit Lab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(9,11,14,0.95) 0%, rgba(9,11,14,0.4) 60%, transparent 100%)', padding: '3rem', display: 'flex', flexDirection: 'column', justifyCenter: 'center', maxWidth: '640px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FBBF24', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              <Award size={18} /> SeekFactory Inspection Labs
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
              Physical On-Site Verification Before You Wire Funds
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Our stationed inspection team in Guangzhou and Changzhou conducts 50-point technical audits so you never receive under-spec or defective industrial machinery.
            </p>
            <div>
              <button className="btn-primary" onClick={() => onRequestQuote()}>
                Request Factory Audit Sample Report
              </button>
            </div>
          </div>
        </div>

        {/* 50-Point Audit Breakdown */}
        <div style={{ marginBottom: '5rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>
            The 50-Point SeekFactory Audit Framework
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {auditPoints.map((item, idx) => (
              <div key={idx} style={{ background: 'var(--color-surface-1)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BIS Regulatory Facilitation */}
        <div style={{ background: 'var(--color-surface-1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '3rem', marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-tag" style={{ color: 'var(--color-gold)' }}>Regulatory Compliance</span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', margin: '0.5rem 0 1rem 0' }}>
                Bureau of Indian Standards (BIS) Facilitation
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Importing heavy machinery and electrical equipment into India requires strict compliance with Mandatory BIS Safety Standards. Foreign factories must undergo certified safety testing and inspection observations before customs release.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-gold)' }} />
                  Foreign Manufacturer BIS Application & Documentation
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-gold)' }} />
                  On-Site Inspection Observation & Sample Testing Setup
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-gold)' }} />
                  Customs Duty Classification & Import License Alignment
                </li>
              </ul>
            </div>

            <div style={{ background: 'var(--color-surface-2)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-bright)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FBBF24', fontWeight: 700, marginBottom: '1rem' }}>
                <AlertTriangle size={20} /> Prevent Customs Detention
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Non-compliant machinery imports are subject to heavy port demurrage charges or rejection at Indian customs. We ensure all equipment leaves the factory certified.
              </p>
              <button className="btn-primary" style={{ width: '100%' }} onClick={() => onRequestQuote()}>
                Consult a BIS Specialist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
