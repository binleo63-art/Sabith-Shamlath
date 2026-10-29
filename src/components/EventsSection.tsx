import React from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Clock, Calendar, MapPin, Navigation, Bus, Train, Plane, UtensilsCrossed } from 'lucide-react';
import { CalendarDropdown } from './CalendarDropdown';

export const EventsSection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  const celebrationCalendarEvent = {
    title: `Wedding Celebration: ${WEDDING_DETAILS.groom} & ${WEDDING_DETAILS.bride}`,
    description: `Wedding celebration & dinner feast of ${WEDDING_DETAILS.groom} & ${WEDDING_DETAILS.bride} at ${WEDDING_DETAILS.events[0].venue} (After Maghrib). Hosted warmly by the ${WEDDING_DETAILS.familyName}. Directions: ${WEDDING_DETAILS.googleMapsUrl}`,
    location: `${WEDDING_DETAILS.events[0].venue}, Kodagu, Karnataka, India`,
    startUtc: WEDDING_DETAILS.events[0].startUtc,
    endUtc: WEDDING_DETAILS.events[0].endUtc,
  };

  return (
    <section
      id="events"
      className="section-ivory"
      style={{
        padding: 'clamp(5rem, 10vw, 7.5rem) 1.25rem',
        position: 'relative',
        color: 'var(--color-ink)',
      }}
    >
      <div className="islamic-pattern-bg" style={{ opacity: 0.05 }} />

      <div ref={sectionRef} className="container reveal-on-scroll">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">CELEBRATION DETAILS</span>
          <h2 className="section-title dark">Wedding Reception &amp; Itinerary</h2>
          <p className="section-subtitle">
            Together with our families, we cordially invite you to join us with your prayers and presence for our wedding celebration.
          </p>
          <div className="diamond-ornament" style={{ marginTop: '1rem' }}>
            <span style={{ transform: 'rotate(45deg)', display: 'inline-block', width: 6, height: 6, backgroundColor: 'var(--color-burgundy)' }} />
          </div>
        </div>

        {/* Centerpiece Grand Wedding Card */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            backgroundColor: 'var(--color-deep-wine)',
            color: 'var(--color-ivory)',
            padding: 'clamp(2.25rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
            border: '2px solid var(--color-champagne-gold)',
            boxShadow: '0 24px 60px -12px rgba(53, 16, 30, 0.45), 0 0 0 6px rgba(246, 240, 229, 0.9)',
            position: 'relative',
          }}
        >
          {/* Inner Gold Frame */}
          <div
            style={{
              position: 'absolute',
              inset: 'clamp(8px, 2vw, 14px)',
              border: '1px solid rgba(197, 164, 109, 0.35)',
              pointerEvents: 'none',
            }}
          />

          {/* Corner diamond accents */}
          <div style={{ position: 'absolute', top: 9, left: 9, width: 8, height: 8, transform: 'rotate(45deg)', border: '1px solid var(--color-champagne-gold)' }} />
          <div style={{ position: 'absolute', top: 9, right: 9, width: 8, height: 8, transform: 'rotate(45deg)', border: '1px solid var(--color-champagne-gold)' }} />
          <div style={{ position: 'absolute', bottom: 9, left: 9, width: 8, height: 8, transform: 'rotate(45deg)', border: '1px solid var(--color-champagne-gold)' }} />
          <div style={{ position: 'absolute', bottom: 9, right: 9, width: 8, height: 8, transform: 'rotate(45deg)', border: '1px solid var(--color-champagne-gold)' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Event Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 1rem',
                backgroundColor: 'rgba(197, 164, 109, 0.15)',
                border: '1px solid var(--color-champagne-gold)',
                marginBottom: '1.5rem',
              }}
            >
              <UtensilsCrossed size={14} color="var(--color-champagne-gold)" />
              <span className="font-mono-meta" style={{ fontSize: '0.7rem', color: 'var(--color-soft-champagne)', letterSpacing: '0.16em' }}>
                RECEPTION &amp; WEDDING FEAST
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                color: 'var(--color-ivory)',
                lineHeight: 1.12,
                marginBottom: '1.5rem',
              }}
            >
              Wedding Celebration
            </h3>

            {/* Meta details list */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '1.25rem',
                backgroundColor: 'rgba(35, 10, 20, 0.65)',
                border: '1px solid rgba(197, 164, 109, 0.25)',
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                marginBottom: '2rem',
              }}
            >
              {/* Date */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(197, 164, 109, 0.15)',
                    border: '1px solid var(--color-champagne-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Calendar size={18} color="var(--color-champagne-gold)" />
                </div>
                <div>
                  <span className="font-mono-meta" style={{ fontSize: '0.68rem', color: 'var(--color-champagne-gold)', display: 'block', letterSpacing: '0.12em' }}>
                    DATE
                  </span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-ivory)', display: 'block', marginTop: '0.2rem' }}>
                    {WEDDING_DETAILS.weddingDate}
                  </span>
                </div>
              </div>

              {/* Time */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(197, 164, 109, 0.15)',
                    border: '1px solid var(--color-champagne-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={18} color="var(--color-champagne-gold)" />
                </div>
                <div>
                  <span className="font-mono-meta" style={{ fontSize: '0.68rem', color: 'var(--color-champagne-gold)', display: 'block', letterSpacing: '0.12em' }}>
                    TIME
                  </span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-ivory)', display: 'block', marginTop: '0.2rem' }}>
                    {WEDDING_DETAILS.events[0].time}
                  </span>
                  <span className="font-mono-meta" style={{ fontSize: '0.68rem', color: 'var(--color-soft-champagne)', display: 'block', marginTop: '0.15rem' }}>
                    6:30 PM Onwards
                  </span>
                </div>
              </div>

              {/* Venue */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', gridColumn: '1 / -1' }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(197, 164, 109, 0.15)',
                    border: '1px solid var(--color-champagne-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <MapPin size={18} color="var(--color-champagne-gold)" />
                </div>
                <div>
                  <span className="font-mono-meta" style={{ fontSize: '0.68rem', color: 'var(--color-champagne-gold)', display: 'block', letterSpacing: '0.12em' }}>
                    VENUE
                  </span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', display: 'block', marginTop: '0.2rem' }}>
                    {WEDDING_DETAILS.events[0].venue}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-soft-champagne)', display: 'block', marginTop: '0.2rem' }}>
                    Aiyangeri, Napoklu, Kodagu, Karnataka
                  </span>
                </div>
              </div>
            </div>

            {/* Program Highlights Timeline */}
            <div
              style={{
                backgroundColor: 'rgba(197, 164, 109, 0.08)',
                borderLeft: '3px solid var(--color-champagne-gold)',
                padding: '1.15rem 1.25rem',
                marginBottom: '2rem',
              }}
            >
              <span className="font-mono-meta" style={{ fontSize: '0.68rem', color: 'var(--color-champagne-gold)', display: 'block', letterSpacing: '0.14em', marginBottom: '0.65rem' }}>
                EVENING PROGRAMME
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'rgba(246, 240, 229, 0.9)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: 6, height: 6, transform: 'rotate(45deg)', backgroundColor: 'var(--color-champagne-gold)', flexShrink: 0 }} />
                  <span><strong>Maghrib Prayers &amp; Welcome</strong> — In congregation</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: 6, height: 6, transform: 'rotate(45deg)', backgroundColor: 'var(--color-champagne-gold)', flexShrink: 0 }} />
                  <span><strong>Guest Reception &amp; Duas</strong> — Family gathering and prayers</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: 6, height: 6, transform: 'rotate(45deg)', backgroundColor: 'var(--color-champagne-gold)', flexShrink: 0 }} />
                  <span><strong>Traditional Wedding Feast</strong> — Dinner served with warmth &amp; gratitude</span>
                </li>
              </ul>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.75,
                color: 'rgba(246, 240, 229, 0.9)',
                marginBottom: '2.25rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Together with our families, we joyously invite you to celebrate our union with prayers, blessings, and dinner. Your presence will bring immense happiness to our families on this blessed evening.
            </p>

            {/* Action Buttons: Directions & Add to Calendar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                gap: '1rem',
              }}
            >
              <a
                href={WEDDING_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-champagne"
                style={{
                  width: '100%',
                  padding: '0.95rem 1.25rem',
                  fontSize: '0.78rem',
                  minHeight: '48px',
                  justifyContent: 'center',
                }}
              >
                <Navigation size={16} />
                <span>GET DIRECTIONS</span>
              </a>

              <CalendarDropdown
                event={celebrationCalendarEvent}
                buttonLabel="SAVE TO CALENDAR"
                variant="outline"
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Quick Travel Highlights Bar below the main card */}
        <div
          style={{
            maxWidth: '720px',
            margin: '2rem auto 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
            gap: '1rem',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--color-paper)',
              border: '1px solid rgba(197, 164, 109, 0.35)',
              padding: '1rem 1.15rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <Bus size={20} color="var(--color-burgundy)" style={{ flexShrink: 0 }} />
            <div>
              <span className="font-mono-meta" style={{ fontSize: '0.62rem', color: 'var(--color-soft-wine)', display: 'block' }}>
                BUS ROUTE
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-ink)' }}>
                Virajpet / Madikeri – Napoklu – Aiyangeri
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'var(--color-paper)',
              border: '1px solid rgba(197, 164, 109, 0.35)',
              padding: '1rem 1.15rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <Train size={20} color="var(--color-burgundy)" style={{ flexShrink: 0 }} />
            <div>
              <span className="font-mono-meta" style={{ fontSize: '0.62rem', color: 'var(--color-soft-wine)', display: 'block' }}>
                NEAREST TRAIN
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-ink)' }}>
                Thalassery &amp; Kanhangad
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'var(--color-paper)',
              border: '1px solid rgba(197, 164, 109, 0.35)',
              padding: '1rem 1.15rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <Plane size={20} color="var(--color-burgundy)" style={{ flexShrink: 0 }} />
            <div>
              <span className="font-mono-meta" style={{ fontSize: '0.62rem', color: 'var(--color-soft-wine)', display: 'block' }}>
                AIRPORTS
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-ink)' }}>
                Kannur (CNN) &amp; Bangalore (BLR)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
