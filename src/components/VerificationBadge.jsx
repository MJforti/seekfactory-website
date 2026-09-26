import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export default function VerificationBadge({ level = 'Gold Audit Verified' }) {
  const isGold = level.includes('Gold');
  
  return (
    <div className={`verified-tag ${isGold ? 'gold' : ''}`}>
      {isGold ? <Award size={14} /> : <ShieldCheck size={14} />}
      <span>{level}</span>
    </div>
  );
}
