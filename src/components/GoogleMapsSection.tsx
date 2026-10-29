import React from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

export const GoogleMapsSection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="location"
      className="section-paper"
      style={{
        padding: 'clamp(4rem, 8vw, 6.5rem) 1.25rem',
        position: 'relative',
        borderTop: '1px solid rgba(197, 164, 109, 0.25)',
        borderBottom: '1px solid rgba(197, 164, 109, 0.25)',
      }}
    >
      <div ref={sectionRef} className="container reveal-on-scroll">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-eyebrow">DESTINATION GUIDE</span>
          <h2 className="section-title dark">Venue Location &amp; Directions</h2>
          <div className="diamond-ornament">
            <span style={{ transform: 'rotate(45deg)', display: 'inline-block', width: 6, height: 6, backgroundColor: 'var(--color-champagne-gold)' }} />
          </div>
        </div>

        {/* Decorative Map-style Location Panel */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            backgroundColor: 'var(--color-ivory)',
            border: '1px solid var(--color-champagne-gold)',
            boxShadow: 'var(--card-shadow)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Decorative Header */}
          <div
            style={{
              padding: 'clamp(1rem, 3vw, 1.25rem) clamp(1rem, 3vw, 2rem)',
              backgroundColor: 'var(--color-deep-wine)',
              color: 'var(--color-ivory)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              borderBottom: '1px solid var(--color-champagne-gold)',
            }}
          >
            <div style={{ flex: '1 1 280px' }}>
              <span className="font-mono-meta" style={{ fontSize: '0.68rem', color: 'var(--color-champagne-gold)', display: 'block' }}>
                WEDDING DESTINATION
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)', color: 'var(--color-ivory)' }}>
                {WEDDING_DETAILS.events[0].venue}
              </span>
            </div>

            <a
              href={WEDDING_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-champagne"
              style={{
                fontSize: '0.75rem',
                padding: '0.75rem 1.4rem',
                minHeight: '44px',
              }}
            >
              <span>OPEN GOOGLE MAPS</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Minimal Map-Inspired Linework Graphic Area */}
          <div
            style={{
              height: 'clamp(230px, 35vw, 320px)',
              backgroundColor: '#EDE5D4',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {/* SVG Map Grid & Roads Decorative Graphics */}
            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity: 0.55,
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D8C8B0" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Stylized road lines */}
              <path d="M-50,220 C200,240 350,150 500,160 S800,210 1050,140" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
              <path d="M-50,220 C200,240 350,150 500,160 S800,210 1050,140" fill="none" stroke="#D3B88C" strokeWidth="6" strokeLinecap="round" />
              
              <path d="M480,0 L500,160 L540,320" fill="none" stroke="#FFFFFF" strokeWidth="8" />
              <path d="M480,0 L500,160 L540,320" fill="none" stroke="#D3B88C" strokeWidth="4" />

              <path d="M220,50 L220,320" fill="none" stroke="#FFFFFF" strokeWidth="6" opacity="0.7" />
              <path d="M720,20 L720,300" fill="none" stroke="#FFFFFF" strokeWidth="6" opacity="0.7" />

              {/* Concentric rings around destination */}
              <circle cx="500" cy="160" r="45" fill="none" stroke="#C5A46D" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8" />
              <circle cx="500" cy="160" r="85" fill="none" stroke="#C5A46D" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
            </svg>

            {/* Pulsing Marker */}
            <div
              style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transform: 'translateY(-12px)',
              }}
            >
              {/* Tooltip Card */}
              <div
                style={{
                  backgroundColor: 'var(--color-deep-wine)',
                  color: 'var(--color-ivory)',
                  padding: '0.6rem 1.1rem',
                  border: '1px solid var(--color-champagne-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                  marginBottom: '10px',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                <span className="font-mono-meta" style={{ fontSize: '0.62rem', color: 'var(--color-champagne-gold)', display: 'block' }}>
                  OFFICIAL VENUE
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 600 }}>
                  {WEDDING_DETAILS.events[0].venue}
                </span>
              </div>

              {/* Champagne Gold Pulsing Pin */}
              <div
                className="pulse-marker"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-burgundy)',
                  border: '2px solid var(--color-champagne-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-champagne-gold)',
                  boxShadow: '0 4px 14px rgba(53, 16, 30, 0.4)',
                }}
              >
                <MapPin size={24} color="var(--color-champagne-gold)" />
              </div>
            </div>
          </div>

          {/* Bottom Info Banner */}
          <div
            style={{
              padding: 'clamp(1.25rem, 3vw, 1.5rem) clamp(1rem, 3vw, 2rem)',
              backgroundColor: 'var(--color-paper)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem',
            }}
          >
            <div style={{ flex: '1 1 280px' }}>
              <p style={{ fontSize: 'clamp(0.88rem, 1.8vw, 0.95rem)', color: 'var(--color-ink)', fontWeight: 500 }}>
                Click below to launch Google Maps navigation directly on your mobile device or car display.
              </p>
              <p className="font-mono-meta" style={{ fontSize: '0.7rem', color: 'var(--color-soft-wine)', marginTop: '0.25rem' }}>
                DESTINATION VERIFIED · FAST ROUTE ACCESSIBLE
              </p>
            </div>

            <a
              href={WEDDING_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-burgundy"
              style={{
                minHeight: '44px',
              }}
            >
              <Navigation size={16} />
              <span>GET DIRECTIONS ON MAPS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
