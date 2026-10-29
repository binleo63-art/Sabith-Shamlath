import React from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MessageSquare, Phone } from 'lucide-react';

export const FamilyContactSection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="family"
      className="section-paper"
      style={{
        padding: 'clamp(4.5rem, 8vw, 6.5rem) 1.25rem',
        position: 'relative',
        textAlign: 'center',
        borderTop: '1px solid rgba(197, 164, 109, 0.25)',
      }}
    >
      <div ref={sectionRef} className="container-narrow reveal-on-scroll">
        <span className="section-eyebrow">WITH LOVE AND BLESSINGS</span>
        
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 5.5vw, 3.5rem)',
            color: 'var(--color-burgundy)',
            lineHeight: 1.15,
            marginBottom: '0.75rem',
          }}
        >
          {WEDDING_DETAILS.familyName}
        </h2>

        <p
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            color: 'var(--color-ink)',
            maxWidth: '560px',
            margin: '0 auto 1.5rem',
            opacity: 0.85,
          }}
        >
          We eagerly look forward to welcoming you and your family to our celebration. For any questions, travel assistance, or blessings, please connect with us.
        </p>

        {/* Champagne-Gold Ornamental Divider */}
        <div className="diamond-ornament" style={{ margin: '1.5rem 0 2rem' }}>
          <span style={{ transform: 'rotate(45deg)', display: 'inline-block', width: 6, height: 6, backgroundColor: 'var(--color-champagne-gold)' }} />
        </div>

        {/* Contact Info Display */}
        <p
          className="font-mono-meta"
          style={{
            fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
            color: 'var(--color-burgundy)',
            fontWeight: 700,
            letterSpacing: '0.12em',
            marginBottom: '1.25rem',
          }}
        >
          CONTACT / RSVP: {WEDDING_DETAILS.whatsappRawNumber}
        </p>

        {/* Action Buttons */}
        <div className="responsive-btn-group">
          <a
            href={WEDDING_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-burgundy"
            style={{
              padding: '0.9rem 2rem',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <MessageSquare size={16} />
            <span>MESSAGE ON WHATSAPP</span>
          </a>

          <a
            href={`tel:${WEDDING_DETAILS.whatsappRawNumber.replace(/\s+/g, '')}`}
            className="btn-champagne"
            style={{
              padding: '0.9rem 2rem',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <Phone size={16} />
            <span>CALL: {WEDDING_DETAILS.whatsappRawNumber}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
