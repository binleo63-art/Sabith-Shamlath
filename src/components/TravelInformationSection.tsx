import React from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Car, Train, Bus, Plane, ExternalLink } from 'lucide-react';

export const TravelInformationSection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  const getIcon = (type: string) => {
    switch (type) {
      case 'Car':
        return <Car size={26} color="var(--color-burgundy)" />;
      case 'Train':
        return <Train size={26} color="var(--color-burgundy)" />;
      case 'Bus':
        return <Bus size={26} color="var(--color-burgundy)" />;
      case 'Plane':
        return <Plane size={26} color="var(--color-burgundy)" />;
      default:
        return <Car size={26} color="var(--color-burgundy)" />;
    }
  };

  return (
    <section
      id="travel"
      className="section-paper"
      style={{
        padding: 'clamp(5rem, 10vw, 7.5rem) 1.25rem',
        position: 'relative',
        borderTop: '1px solid rgba(197, 164, 109, 0.25)',
      }}
    >
      <div className="islamic-pattern-bg" style={{ opacity: 0.04 }} />

      <div ref={sectionRef} className="container reveal-on-scroll">
        <div className="section-header">
          <span className="section-eyebrow">GETTING THERE</span>
          <h2 className="section-title dark">Travel &amp; Arrival</h2>
          <p className="section-subtitle">
            Helpful guidance to reach Thaqweemul Islam Madarasa, Aiyangeri smoothly.
          </p>
          <div className="diamond-ornament" style={{ marginTop: '1rem' }}>
            <span style={{ transform: 'rotate(45deg)', display: 'inline-block', width: 6, height: 6, backgroundColor: 'var(--color-champagne-gold)' }} />
          </div>
        </div>

        {/* 3 Travel Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            maxWidth: '1040px',
            margin: '0 auto',
          }}
        >
          {WEDDING_DETAILS.travelOptions.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-champagne-gold)',
                padding: 'clamp(1.75rem, 3.5vw, 2.75rem) clamp(1.25rem, 2.5vw, 1.75rem)',
                boxShadow: 'var(--card-shadow)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Corner Notch */}
              <div
                style={{
                  position: 'absolute',
                  top: 6,
                  right: 6,
                  width: 6,
                  height: 6,
                  transform: 'rotate(45deg)',
                  backgroundColor: 'var(--color-champagne-gold)',
                }}
              />

              <div>
                {/* Icon Circle */}
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(197, 164, 109, 0.15)',
                    border: '1px solid var(--color-champagne-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {getIcon(item.icon)}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    color: 'var(--color-burgundy)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.7,
                    color: 'var(--color-ink)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {item.description}
                </p>

                <p
                  style={{
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    color: 'var(--color-soft-wine)',
                    fontStyle: 'italic',
                    borderLeft: '2px solid var(--color-champagne-gold)',
                    paddingLeft: '0.75rem',
                    marginBottom: '1.75rem',
                  }}
                >
                  {item.note}
                </p>
              </div>

              <div>
                <a
                  href={WEDDING_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-burgundy"
                  style={{
                    width: '100%',
                    fontSize: '0.75rem',
                    padding: '0.8rem 1rem',
                    minHeight: '44px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span>VIEW ROUTE ON MAPS</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
