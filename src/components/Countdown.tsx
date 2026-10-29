import React, { useState, useEffect } from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export const Countdown: React.FC<{ lightBackground?: boolean }> = ({ lightBackground = false }) => {
  const calculateTimeLeft = (): TimeLeft => {
    // Target is 5 November 2026, After Maghrib (UTC+5:30)
    const target = WEDDING_DETAILS.targetTimestamp;
    const now = Date.now();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, isComplete: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  if (timeLeft.isComplete) {
    return (
      <div
        style={{
          padding: '1.5rem 2rem',
          backgroundColor: lightBackground ? 'var(--color-ivory)' : 'rgba(53, 16, 30, 0.7)',
          border: '1px solid var(--color-champagne-gold)',
          textAlign: 'center',
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <span
          className="font-mono-meta"
          style={{
            fontSize: '0.85rem',
            color: 'var(--color-champagne-gold)',
            letterSpacing: '0.2em',
          }}
        >
          ALHAMDULILLAH · TODAY WE CELEBRATE
        </span>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.5rem',
            color: lightBackground ? 'var(--color-burgundy)' : 'var(--color-ivory)',
            marginTop: '0.5rem',
          }}
        >
          The Wedding Celebration has Commenced
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: 'clamp(0.35rem, 1.5vw, 1.25rem)',
        width: '100%',
        maxWidth: '540px',
        margin: '0 auto',
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: lightBackground ? 'var(--color-paper)' : 'rgba(35, 10, 20, 0.65)',
            border: '1px solid rgba(197, 164, 109, 0.4)',
            padding: 'clamp(0.65rem, 1.8vw, 1.25rem) clamp(0.2rem, 1vw, 0.75rem)',
            textAlign: 'center',
            position: 'relative',
            boxShadow: '0 8px 20px -8px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Top subtle gold corner notch */}
          <div
            style={{
              position: 'absolute',
              top: 3,
              right: 3,
              width: 4,
              height: 4,
              transform: 'rotate(45deg)',
              backgroundColor: 'var(--color-champagne-gold)',
            }}
          />

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1.2rem, 3.8vw, 2.2rem)',
              fontWeight: 700,
              color: lightBackground ? 'var(--color-burgundy)' : 'var(--color-ivory)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {String(item.value).padStart(2, '0')}
          </div>
          <div
            className="font-mono-meta"
            style={{
              fontSize: 'clamp(0.5rem, 1.1vw, 0.68rem)',
              color: 'var(--color-champagne-gold)',
              marginTop: '0.35rem',
              letterSpacing: 'clamp(0.1em, 0.5vw, 0.18em)',
              fontWeight: 600,
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};
