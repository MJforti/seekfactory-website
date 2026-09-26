import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldAlert, FileText } from 'lucide-react';
import { PRODUCTS } from '../data/machineryData';

export default function QuoteModal({ isOpen, onClose, selectedProduct = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    selectedMachine: selectedProduct ? selectedProduct.name : PRODUCTS[0].name,
    quantity: '1 Unit',
    targetDelivery: '30-45 Days',
    requirements: '',
    fileAttached: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRfq = 'RFQ-SF-' + Math.floor(100000 + Math.random() * 900000);
    setRfqNumber(generatedRfq);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                <FileText size={14} /> Formal B2B Inquiry
              </div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>Request Machinery Quotation</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                Direct factory pricing with transparent customs, freight & 50-point quality audit details.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Target Machinery / Equipment *</label>
                  <select 
                    className="form-select"
                    value={formData.selectedMachine}
                    onChange={(e) => setFormData({ ...formData, selectedMachine: e.target.value })}
                    required
                  >
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="Custom Engineering Request">Custom Machinery / Other Requirement</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Required Quantity *</label>
                  <select 
                    className="form-select"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  >
                    <option value="1 Unit">1 Unit (Sample / Pilot)</option>
                    <option value="2-5 Units">2 - 5 Units (Multi-line setup)</option>
                    <option value="5+ Units">5+ Units (Turnkey Plant Order)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Rajesh Kumar" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Company Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Kumar Manufacturing Pvt. Ltd." 
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Work Email Address *</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="name@company.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="+91 98765 43210" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Technical Requirements & Drawing Notes</label>
                <textarea 
                  className="form-textarea" 
                  rows="3"
                  placeholder="Specify material thickness, spindle speed, clamping force, target delivery port, or BIS compliance requirements..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                ></textarea>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '1.25rem 0', background: 'var(--color-surface-2)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                  Attach Drawing / Specs (CAD / PDF / STEP)
                </div>
                <label className="btn-outline" style={{ cursor: 'pointer', fontSize: '0.78rem' }}>
                  Choose File
                  <input type="file" style={{ display: 'none' }} onChange={() => setFormData({ ...formData, fileAttached: true })} />
                </label>
              </div>

              {formData.fileAttached && (
                <div style={{ fontSize: '0.78rem', color: 'var(--color-success)', marginBottom: '1rem' }}>
                  ✓ Spec file attached successfully
                </div>
              )}

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                <Send size={16} /> Submit Quotation Inquiry
              </button>

              <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                🔒 NDA Protected. Your technical drawings and business data remain 100% confidential.
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-success-bg)', color: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>Quotation Inquiry Transmitted</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              Reference ID: <strong style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}>{rfqNumber}</strong>
            </p>
            <div style={{ background: 'var(--color-surface-2)', padding: '1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'left', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '2rem', border: '1px solid var(--color-border)' }}>
              <div><strong>Selected Machine:</strong> {formData.selectedMachine}</div>
              <div style={{ marginTop: '0.35rem' }}><strong>Company:</strong> {formData.company}</div>
              <div style={{ marginTop: '0.35rem' }}><strong>Assigned Hub:</strong> Guangzhou Audit Desk & Mumbai Engineering Center</div>
              <div style={{ marginTop: '0.35rem' }}><strong>Next Action:</strong> A technical sales engineer will send an itemized FOB/CIF quotation with factory audit details within 4 business hours.</div>
            </div>
            <button className="btn-primary" onClick={handleReset}>
              Return to Catalog
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
