import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Download, ExternalLink, ChevronDown } from 'lucide-react';
import type { CalendarEventData } from '../utils/calendar';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

interface CalendarDropdownProps {
  event: CalendarEventData;
  buttonLabel?: string;
  variant?: 'champagne' | 'burgundy' | 'outline';
  fullWidth?: boolean;
}

export const CalendarDropdown: React.FC<CalendarDropdownProps> = ({
  event,
  buttonLabel = 'SAVE THE DATE',
  variant = 'champagne',
  fullWidth = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const buttonClass =
    variant === 'burgundy'
      ? 'btn-burgundy'
      : variant === 'outline'
      ? 'btn-gold-outline'
      : 'btn-champagne';

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        display: fullWidth ? 'block' : 'inline-block',
        width: fullWidth ? '100%' : 'auto',
      }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${buttonLabel} for ${event.title}`}
        className={buttonClass}
        style={{
          width: fullWidth ? '100%' : 'auto',
          justifyContent: 'center',
          cursor: 'pointer',
          minHeight: '44px',
        }}
      >
        <Calendar size={15} />
        <span>{buttonLabel}</span>
        <ChevronDown
          size={14}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
            marginLeft: '2px',
          }}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          aria-label="Calendar options"
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 8px)',
            left: '50%',
            transform: 'translateX(-50%)',
            minWidth: '260px',
            maxWidth: 'calc(100vw - 2rem)',
            width: 'max-content',
            backgroundColor: 'var(--color-paper)',
            border: '1px solid var(--color-champagne-gold)',
            boxShadow: '0 16px 40px rgba(53, 16, 30, 0.25), 0 0 0 1px rgba(197, 164, 109, 0.2)',
            zIndex: 100,
            padding: '0.5rem',
            animation: 'fadeIn 0.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
          }}
        >
          <div
            style={{
              padding: '0.4rem 0.6rem 0.5rem',
              borderBottom: '1px solid rgba(197, 164, 109, 0.25)',
              marginBottom: '0.3rem',
              textAlign: 'left',
            }}
          >
            <span
              className="font-mono-meta"
              style={{
                fontSize: '0.62rem',
                color: 'var(--color-soft-wine)',
                letterSpacing: '0.14em',
                display: 'block',
              }}
            >
              ADD TO CALENDAR
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.85rem',
                color: 'var(--color-burgundy)',
                fontWeight: 600,
              }}
            >
              {event.title}
            </span>
          </div>

          {/* Google Calendar Link */}
          <a
            href={getGoogleCalendarUrl(event)}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              padding: '0.65rem 0.8rem',
              color: 'var(--color-ink)',
              textDecoration: 'none',
              fontSize: '0.825rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              transition: 'background-color 0.15s ease',
              borderRadius: '2px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(197, 164, 109, 0.14)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ExternalLink size={15} color="var(--color-burgundy)" />
              <span>Google Calendar</span>
            </span>
            <span
              className="font-mono-meta"
              style={{ fontSize: '0.6rem', color: 'var(--color-soft-wine)' }}
            >
              ONLINE
            </span>
          </a>

          {/* Apple / Outlook / iCal Download */}
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              downloadIcsFile(event, `${event.title.replace(/[^a-zA-Z0-9]/g, '-')}.ics`);
              setIsOpen(false);
            }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              padding: '0.65rem 0.8rem',
              backgroundColor: 'transparent',
              color: 'var(--color-ink)',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.825rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              textAlign: 'left',
              transition: 'background-color 0.15s ease',
              borderRadius: '2px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(197, 164, 109, 0.14)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Download size={15} color="var(--color-burgundy)" />
              <span>Apple / Outlook (.ics)</span>
            </span>
            <span
              className="font-mono-meta"
              style={{ fontSize: '0.6rem', color: 'var(--color-champagne-gold)', fontWeight: 700 }}
            >
              .ICS
            </span>
          </button>
        </div>
      )}
    </div>
  );
};
