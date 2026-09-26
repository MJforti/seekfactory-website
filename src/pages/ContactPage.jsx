import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Building } from 'lucide-react';
import { LOCATIONS } from '../data/machineryData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    location: 'Mumbai HQ',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '4rem 0 6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Direct Communication</span>
          <h2 className="section-title">Contact SeekFactory Engineering & Sales Desks</h2>
          <p className="section-desc">
            Connect directly with our machinery specialists in Mumbai, Delhi, Guangzhou, or Changzhou.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
          {/* Form */}
          <div style={{ background: 'var(--color-surface-1)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem' }}>Send Direct Message</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Rajesh Kumar" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company Name *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Kumar Manufacturing" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
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
                    <label className="form-label">Phone / WhatsApp *</label>
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
                  <label className="form-label">Preferred Regional Hub</label>
                  <select 
                    className="form-select"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  >
                    <option value="Mumbai HQ">Mumbai HQ (West & South India)</option>
                    <option value="Delhi Regional">Delhi NCR (North India)</option>
                    <option value="Guangzhou Hub">Guangzhou Hub (China Sourcing)</option>
                    <option value="Changzhou Center">Changzhou Center (Inspection)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Inquiry Details *</label>
                  <textarea 
                    className="form-textarea" 
                    rows="4"
                    placeholder="Describe your machinery requirement, factory audit request, or general inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                  <Send size={16} /> Send Direct Inquiry
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle2 size={48} style={{ color: 'var(--color-success)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Message Transmitted</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                  Thank you, {formData.name}. Our regional desk in {formData.location} will contact you within 2 business hours.
                </p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            )}
          </div>

          {/* Locations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {LOCATIONS.map((loc, idx) => (
              <div key={idx} style={{ background: 'var(--color-surface-1)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff', marginBottom: '0.25rem' }}>{loc.city}</div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{loc.role}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>{loc.address}</p>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)' }}>
                  ✉️ {loc.email} | 📞 {loc.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
