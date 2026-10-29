import React, { useState, useEffect } from 'react';
import { Home, Calendar, Send, Compass } from 'lucide-react';

export const FloatingNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Real page order: home -> events -> location -> rsvp
      const sections = ['home', 'events', 'location', 'rsvp'];
      const scrollPosition = window.scrollY + 280;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'events', label: 'Events', icon: Calendar, href: '#events' },
    { id: 'location', label: 'Venue', icon: Compass, href: '#location' },
    { id: 'rsvp', label: 'RSVP', icon: Send, href: '#rsvp' },
  ];

  return (
    <nav
      aria-label="Floating Navigation"
      style={{
        position: 'fixed',
        bottom: 'calc(clamp(0.75rem, 2.5vh, 1.5rem) + var(--safe-bottom))',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 900,
        backgroundColor: 'rgba(53, 16, 30, 0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid var(--color-champagne-gold)',
        borderRadius: '40px',
        padding: '0.4rem 0.65rem',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45), 0 0 16px var(--gold-glow)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        maxWidth: 'calc(100vw - 1.5rem)',
      }}
    >
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.55rem 0.9rem',
              borderRadius: '24px',
              textDecoration: 'none',
              backgroundColor: isActive ? 'var(--color-burgundy)' : 'transparent',
              color: isActive ? 'var(--color-ivory)' : 'var(--color-champagne-gold)',
              border: isActive ? '1px solid rgba(197, 164, 109, 0.5)' : '1px solid transparent',
              transition: 'all 0.25s var(--transition-smooth)',
              minHeight: '44px',
              minWidth: '44px',
              justifyContent: 'center',
            }}
          >
            <IconComponent size={17} color={isActive ? 'var(--color-ivory)' : 'var(--color-champagne-gold)'} />
            <span
              className="font-mono-meta"
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                fontWeight: isActive ? 700 : 500,
                display: isActive ? 'inline-block' : 'none',
              }}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};
