import React, { useState } from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';

export const RSVPSection: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [attendance, setAttendance] = useState<'accept' | 'decline'>('accept');
  const [personalNote, setPersonalNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sectionRef = useScrollReveal<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!guestName.trim()) {
      setErrorMessage('Please enter your full name to proceed with your RSVP.');
      return;
    }

    setErrorMessage('');

    const attendanceText = attendance === 'accept' ? 'Joyfully Accept' : 'Regretfully Decline';
    
    // Construct prefilled WhatsApp message
    let message = `Assalamu Alaikum,\n\n*RSVP for the Wedding of ${WEDDING_DETAILS.groom} & ${WEDDING_DETAILS.bride}*\n`;
    message += `📅 Date: ${WEDDING_DETAILS.weddingDate}\n\n`;
    message += `👤 *Guest Name:* ${guestName.trim()}\n`;
    message += `✨ *Attendance:* ${attendanceText}\n`;
    
    if (attendance === 'accept') {
      message += `👥 *Number of Guests:* ${guestCount}\n`;
    }
    
    if (personalNote.trim()) {
      message += `💌 *Personal Note / Duas:* ${personalNote.trim()}\n`;
    }
    
    message += `\nThank you, ${WEDDING_DETAILS.familyName}!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${WEDDING_DETAILS.whatsappUrl}?text=${encodedMessage}`;

    // Open WhatsApp safely in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="section-burgundy"
      style={{
        padding: 'clamp(5rem, 10vw, 7.5rem) 1.25rem',
        position: 'relative',
        borderTop: '1px solid rgba(197, 164, 109, 0.25)',
        borderBottom: '1px solid rgba(197, 164, 109, 0.25)',
      }}
    >
      <div className="islamic-pattern-bg" />

      <div ref={sectionRef} className="container-narrow reveal-on-scroll">
        <div className="section-header">
          <span className="section-eyebrow">REPLY CORDIALLY</span>
          <h2 className="section-title light">RSVP &amp; Blessings</h2>
          <p className="section-subtitle">
            Please let us know if you will be celebrating with us on {WEDDING_DETAILS.weddingDate}.
          </p>
          <div className="diamond-ornament" style={{ marginTop: '1rem' }}>
            <span style={{ transform: 'rotate(45deg)', display: 'inline-block', width: 6, height: 6, backgroundColor: 'var(--color-champagne-gold)' }} />
          </div>
        </div>

        {/* Form Container Card */}
        <div
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            backgroundColor: 'var(--color-paper)',
            color: 'var(--color-ink)',
            border: '2px solid var(--color-champagne-gold)',
            padding: 'clamp(1.75rem, 4.5vw, 3.25rem) clamp(1rem, 3.5vw, 2.5rem)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
            position: 'relative',
          }}
        >
          {/* Inner Frame */}
          <div
            style={{
              position: 'absolute',
              inset: 'clamp(8px, 2vw, 12px)',
              border: '1px solid rgba(197, 164, 109, 0.3)',
              pointerEvents: 'none',
            }}
          />

          {/* Arabic Welcome Header in Almarai */}
          <div style={{ textAlign: 'center', marginBottom: '1.25rem', position: 'relative', zIndex: 1 }}>
            <p
              dir="rtl"
              lang="ar"
              className="font-arabic-calligraphy"
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.55rem)',
                color: 'var(--color-burgundy)',
                lineHeight: 1.8,
                marginBottom: '0.25rem',
                fontWeight: 700,
              }}
            >
              أَهْلًا وَسَهْلًا بِكُمْ
            </p>
            <span
              className="font-mono-meta"
              style={{
                fontSize: '0.65rem',
                color: 'var(--color-soft-wine)',
                letterSpacing: '0.16em',
              }}
            >
              WE WARMLY WELCOME YOUR PRESENCE
            </span>
          </div>

          <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
            {/* Guest Name */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="guestName"
                className="font-mono-meta"
                style={{
                  display: 'block',
                  fontSize: '0.72rem',
                  color: 'var(--color-burgundy)',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  letterSpacing: '0.14em',
                }}
              >
                YOUR FULL NAME *
              </label>
              <input
                id="guestName"
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Dr. Salman & Family"
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  minHeight: '48px',
                  border: '1px solid #D5C2A5',
                  backgroundColor: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  color: 'var(--color-ink)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-burgundy)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#D5C2A5';
                }}
              />
            </div>

            {/* Attendance Choice */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span
                className="font-mono-meta"
                style={{
                  display: 'block',
                  fontSize: '0.72rem',
                  color: 'var(--color-burgundy)',
                  fontWeight: 700,
                  marginBottom: '0.65rem',
                  letterSpacing: '0.14em',
                }}
              >
                WILL YOU BE ATTENDING? *
              </span>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                }}
              >
                <button
                  type="button"
                  onClick={() => setAttendance('accept')}
                  style={{
                    padding: '0.9rem 0.5rem',
                    minHeight: '48px',
                    backgroundColor: attendance === 'accept' ? 'var(--color-burgundy)' : '#F5EFE6',
                    color: attendance === 'accept' ? 'var(--color-ivory)' : 'var(--color-ink)',
                    border: `1px solid ${attendance === 'accept' ? 'var(--color-burgundy)' : '#D5C2A5'}`,
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                  }}
                >
                  Joyfully Accept
                </button>
                <button
                  type="button"
                  onClick={() => setAttendance('decline')}
                  style={{
                    padding: '0.9rem 0.5rem',
                    minHeight: '48px',
                    backgroundColor: attendance === 'decline' ? 'var(--color-burgundy)' : '#F5EFE6',
                    color: attendance === 'decline' ? 'var(--color-ivory)' : 'var(--color-ink)',
                    border: `1px solid ${attendance === 'decline' ? 'var(--color-burgundy)' : '#D5C2A5'}`,
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                  }}
                >
                  Regretfully Decline
                </button>
              </div>
            </div>

            {/* Guest Count (only if accepting) */}
            {attendance === 'accept' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="guestCount"
                  className="font-mono-meta"
                  style={{
                    display: 'block',
                    fontSize: '0.72rem',
                    color: 'var(--color-burgundy)',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    letterSpacing: '0.14em',
                  }}
                >
                  NUMBER OF GUESTS (INCLUDING YOU)
                </label>
                <select
                  id="guestCount"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1rem',
                    minHeight: '48px',
                    border: '1px solid #D5C2A5',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '16px',
                    color: 'var(--color-ink)',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="5">5 Persons</option>
                  <option value="6+">6+ (Family / Group)</option>
                </select>
              </div>
            )}

            {/* Optional Personal Note */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label
                htmlFor="personalNote"
                className="font-mono-meta"
                style={{
                  display: 'block',
                  fontSize: '0.72rem',
                  color: 'var(--color-burgundy)',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  letterSpacing: '0.14em',
                }}
              >
                PRAYERS / NOTE FOR THE COUPLE (OPTIONAL)
              </label>
              <textarea
                id="personalNote"
                rows={3}
                value={personalNote}
                onChange={(e) => setPersonalNote(e.target.value)}
                placeholder="Share your prayers, heartfelt wishes, or dietary notes..."
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  border: '1px solid #D5C2A5',
                  backgroundColor: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  color: 'var(--color-ink)',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#FDE8E8',
                  border: '1px solid #F8B4B4',
                  color: '#9B1C1C',
                  fontSize: '0.85rem',
                  marginBottom: '1.25rem',
                }}
              >
                {errorMessage}
              </div>
            )}

            {/* Explanatory notice */}
            <div
              style={{
                backgroundColor: 'rgba(197, 164, 109, 0.12)',
                border: '1px solid rgba(197, 164, 109, 0.35)',
                padding: '0.85rem 1rem',
                marginBottom: '1.5rem',
                fontSize: '0.82rem',
                color: 'var(--color-ink)',
                lineHeight: 1.5,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.6rem',
              }}
            >
              <MessageCircle size={18} color="var(--color-burgundy)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>How RSVP Confirmation Works:</strong> Clicking the button below opens WhatsApp with your prefilled details addressed to {WEDDING_DETAILS.whatsappRawNumber} ({WEDDING_DETAILS.familyName}). <em>Please tap &lsquo;Send&rsquo; in WhatsApp to officially deliver your confirmation.</em>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-burgundy"
              style={{
                width: '100%',
                padding: '1.1rem',
                fontSize: '0.88rem',
                minHeight: '52px',
                cursor: 'pointer',
              }}
            >
              <Send size={16} />
              <span>CONFIRM VIA WHATSAPP</span>
            </button>

            {/* Confirmation status once initiated */}
            {isSubmitted && (
              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#EDFDF5',
                  border: '1px solid #319795',
                  color: '#234E52',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.88rem',
                }}
              >
                <CheckCircle2 size={20} color="#319795" style={{ flexShrink: 0 }} />
                <span>
                  WhatsApp window opened! Please tap <strong>&ldquo;Send&rdquo;</strong> inside WhatsApp to finalize your RSVP with the {WEDDING_DETAILS.familyName}. Jazakumullahu Khair!
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
