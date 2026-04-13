// components/HeritageLeadForm.tsx - Editorial-styled inline lead form
'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface HeritageLeadFormProps {
  city?: string;
  service?: string;
  title?: string;
  sub?: string;
}

const GATE_TYPES = [
  'Electric Sliding Gates',
  'Electric Swing Gates',
  'Wooden Driveway Gates',
  'Metal Driveway Gates',
  'Automated Gate Systems',
  'Gate Repair and Maintenance',
];

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzPwtFtpK_ChLARoqlehndwwD_Gd6EMkiEN-NUvjp70D4753vkmnmLq5Ei9MvC__x6e/exec';

export function HeritageLeadForm({ city, service, title = 'Request quotes', sub = '3 Installers · No Obligation' }: HeritageLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: city || '',
    treatment: service || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location || city || '',
        treatment: formData.treatment || service || '',
        page: window.location.href,
        source: 'Driveway Gates Hertfordshire',
      };
      const res = await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: JSON.stringify(payload) });
      const text = await res.text();
      let data: { ok?: boolean; error?: string } = {};
      try { data = JSON.parse(text); } catch {}
      if (data && data.ok === false) throw new Error(data.error || 'Submission failed');
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div className="form-heritage text-center py-12">
        <div className="inline-flex w-14 h-14 items-center justify-center mb-4" style={{ border: '1px solid var(--brass)', borderRadius: '50%' }}>
          <CheckCircle className="w-7 h-7" style={{ color: 'var(--brass)' }} />
        </div>
        <div className="font-display text-[24px] font-medium mb-2" style={{ color: 'var(--cream)' }}>Request received</div>
        <div className="text-[13px]" style={{ color: 'rgba(245,237,224,0.7)' }}>A specialist will be in touch within 4 working hours.</div>
      </div>
    );
  }

  return (
    <div className="form-heritage">
      <div className="font-display text-[24px] font-medium tracking-tight mb-1" style={{ color: 'var(--cream)' }}>{title}</div>
      <div className="text-[11px] uppercase tracking-[0.18em] font-medium mb-6" style={{ color: 'var(--brass)' }}>{sub}</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your name" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" required />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder={city ? `${city} postcode` : 'Postcode'} required />
        <select name="treatment" value={formData.treatment} onChange={handleChange} required>
          <option value="">Gate type</option>
          {GATE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send request'}</button>
      </form>
    </div>
  );
}
