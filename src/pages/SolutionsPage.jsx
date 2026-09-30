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
        {/* Quality Audit Image Banner - no gradient overlay */}
        <div style={{ position: 'relative', height: '340px', marginBottom: '3rem', borderRadius: '5', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
          <img src="/images/quality_inspection.jpg" alt="Quality Audit Lab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(9,11,14,0.8)', display: 'flex', alignItems: 'flex-end', padding: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FBBF24', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              <Award size={18} /> SeekFactory Inspection Labs
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fff', marginBottom: '1rem', lineHeight: '1.2' }}>
              Physical On-Site Verification Before You Wire Funds
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Our stationed inspection team in Guangzhou and Changzhou conducts thorough technical audits so you never receive under-spec or defective industrial machinery.
            </p>
            <div>
              <button className="btn-primary" onClick={() => onRequestQuote()}>
                Request Factory Audit Sample Report
              </button>
            </div>
          </div>
        </div>

        {/* 50-Point Audit Framework - simplified presentation */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>
            The SeekFactory Audit Framework
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {auditPoints.map((item, idx) => (
              <div key={idx} style={{ background: 'var(--color-surface-1)', border: '1px solid var(--color-border)', borderRadius: '5', padding: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1rem', left: '1rem', fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: '800', color: 'var(--color-accent)' }}>#{idx + 1}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BIS Regulatory Facilitation */}
        <div style={{ background: 'var(--color-surface-1)', border: '1px solid var(--color-border)', borderRadius: '5', padding: '2rem' }}>
          <span className="section-tag" style={{ color: 'var(--color-gold)' }}>Regulatory Compliance</span>
          <h2 style={{ fontSize: '1.7rem', fontWeight: '800', color: '#fff', margin: '0.5rem 0 1rem 0' }}>
            Bureau of Indian Standards (BIS) Facilitation
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Importing heavy machinery and electrical equipment into India requires strict compliance with Bureau of Indian Standards regulations. Foreign factories must undergo certified safety testing and inspection observations before customs release.
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
          <button className="btn-primary" style={{ width: '100%' }} onClick={() => onRequestQuote()}>
            Consult a BIS Specialist
          </button>
        </div>
      </div>
    </div>
  );
}