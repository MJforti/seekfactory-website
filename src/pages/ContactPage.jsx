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

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem', background: '#171920',
    border: '1px solid #2A2D39', borderRadius: '3px', color: '#F0F4F8',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif'",
    fontSize: '0.9rem', outline: 'none', marginBottom: '0.5rem'
  };

  const labelStyle = {
    display: 'block', fontSize: '0.85rem', fontWeight: '600',
    color: '#A8B2C4', marginBottom: '0.5rem'
  };

  const selectStyle = {
    width: '100%', padding: '0.75rem 1rem', background: '#171920',
    border: '1px solid #2A2D39', borderRadius: '3px', color: '#F0F4F8',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif'",
    fontSize: '0.9rem', outline: 'none'
  };

  const textareaStyle = {
    width: '100%', padding: '0.75rem 1rem', background: '#171920',
    border: '1px solid #2A2D39', borderRadius: '3px', color: '#F0F4F8',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif'",
    fontSize: '0.9rem', outline: 'none', resize: 'vertical', marginBottom: '0.5rem', height: '120px'
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
          {/* Form */}
          <div style={{ background: '#11141A', padding: '2rem', border: '1px solid #2A2D39', borderRadius: 5 }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#F0F4F8', marginBottom: '1.25rem' }}>Send Direct Message</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', ...labelStyle }}>Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rajesh Kumar" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required 
                      style={inputStyle}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'block', ...labelStyle }}>Company Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Kumar Manufacturing" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required 
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', ...labelStyle }}>Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required 
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', ...labelStyle }}>Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required 
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', ...labelStyle }}>Preferred Regional Hub</label>
                  <select 
                    style={selectStyle}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  >
                    <option value="Mumbai HQ">Mumbai HQ (West & South India)</option>
                    <option value="Delhi Regional">Delhi Regional (North India)</option>
                    <option value="Guangzhou Hub">Guangzhou Hub (China Sourcing)</option>
                    <option value="Changzhou Center">Changzhou Center (Inspection)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', ...labelStyle }}>Message / Inquiry Details *</label>
                  <textarea 
                    placeholder="Describe your machinery requirement, factory audit request, or general inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    style={textareaStyle}
                  ></textarea>
                </div>

                <button type="submit" style={{ width: '100%', padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
                  <Send size={16} /> Send Direct Inquiry
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <CheckCircle2 size={48} style={{ color: '#0D9488', margin: '0 auto 1.5rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#F0F4F8', marginBottom: '0.5rem' }}>Message Transmitted</h3>
                <p style={{ fontSize: '0.9rem', color: '#A8B2C4', marginBottom: '1.5rem' }}>
                  Thank you, {formData.name}. Our regional desk in {formData.location} will contact you within 2 business hours.
                </p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            )}
          </div>

          {/* Locations */}
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#F0F4F8', marginBottom: '1.5rem' }}>Our Regional Desks</h3>
            {LOCATIONS.map((loc, idx) => (
              <div key={idx} style={{ padding: '1.5rem', border: '1px solid #2A2D39', borderRadius: 5, background: '#171920', marginBottom: '1.25rem' }}>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#F0F4F8', marginBottom: '0.25rem' }}>
                  {loc.city}
                </div>
                <div style={{ fontSize: '0.78rem', fontFamily: 'JetBrains Mono, SFMono-Regular, Consolas, monospace', color: '#E65100', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {loc.role}
                </div>
                <p style={{ fontSize: '0.85rem', color: '#A8B2C4', marginBottom: '0.5rem' }}>
                  {loc.address}
                </p>
                <div style={{ fontSize: '0.825rem', color: '#F0F4F8', fontFamily: 'JetBrains Mono, SFMono-Regular, Consolas, monospace' }}>
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