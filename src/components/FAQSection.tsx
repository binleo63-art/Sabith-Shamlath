import React, { useState } from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  // First answer open by default (index 0)
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useScrollReveal<HTMLDivElement>();

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="section-ivory"
      style={{
        padding: 'clamp(5rem, 10vw, 7.5rem) 1.25rem',
        position: 'relative',
      }}
    >
      <div className="islamic-pattern-bg" style={{ opacity: 0.05 }} />

      <div ref={sectionRef} className="container-narrow reveal-on-scroll">
        <div className="section-header">
          <span className="section-eyebrow">COMMON QUERIES</span>
          <h2 className="section-title dark">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Essential information to assist you in planning your visit to our celebrations.
          </p>
          <div className="diamond-ornament" style={{ marginTop: '1rem' }}>
            <span style={{ transform: 'rotate(45deg)', display: 'inline-block', width: 6, height: 6, backgroundColor: 'var(--color-burgundy)' }} />
          </div>
        </div>

        {/* Accordion Container */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {WEDDING_DETAILS.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-header-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--color-paper)',
                  border: `1px solid ${isOpen ? 'var(--color-burgundy)' : 'rgba(197, 164, 109, 0.45)'}`,
                  boxShadow: isOpen
                    ? '0 10px 24px -6px rgba(56, 36, 42, 0.15)'
                    : '0 4px 12px -4px rgba(56, 36, 42, 0.05)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                {/* Question Trigger Button */}
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                  style={{
                    width: '100%',
                    padding: 'clamp(0.95rem, 2.5vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    backgroundColor: isOpen ? 'rgba(111, 24, 48, 0.04)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(0.98rem, 2vw, 1.2rem)',
                      color: isOpen ? 'var(--color-burgundy)' : 'var(--color-ink)',
                      fontWeight: 500,
                      paddingRight: '1rem',
                    }}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    color={isOpen ? 'var(--color-burgundy)' : 'var(--color-champagne-gold)'}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.35s var(--transition-smooth)',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {/* Answer Content Panel */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  style={{
                    display: isOpen ? 'block' : 'none',
                    padding: '0 1.5rem 1.5rem 1.5rem',
                    backgroundColor: 'rgba(111, 24, 48, 0.04)',
                    color: 'var(--color-ink)',
                    fontSize: '0.96rem',
                    lineHeight: 1.75,
                    borderTop: '1px solid rgba(197, 164, 109, 0.2)',
                  }}
                >
                  <p style={{ marginTop: '0.75rem' }}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
