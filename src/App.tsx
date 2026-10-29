import React from 'react';
import { OpeningVeil } from './components/OpeningVeil';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { EventsSection } from './components/EventsSection';
import { GoogleMapsSection } from './components/GoogleMapsSection';
import { QuranVerseSection } from './components/QuranVerseSection';
import { InvitationCardSection } from './components/InvitationCardSection';
import { RSVPSection } from './components/RSVPSection';
import { FamilyContactSection } from './components/FamilyContactSection';
import { FAQSection } from './components/FAQSection';
import { TravelInformationSection } from './components/TravelInformationSection';
import { ClosingSection } from './components/ClosingSection';
import { FloatingNavigation } from './components/FloatingNavigation';

export const App: React.FC = () => {
  return (
    <div className="wedding-app-root">
      {/* Paper Grain Overlay */}
      <div className="paper-grain" aria-hidden="true" />

      {/* Opening Invitation Veil Cover */}
      <OpeningVeil />

      {/* Main Website Content */}
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <StorySection />
        <EventsSection />
        <GoogleMapsSection />
        <QuranVerseSection />
        <InvitationCardSection />
        <RSVPSection />
        <FamilyContactSection />
        <FAQSection />
        <TravelInformationSection />
        <ClosingSection />
      </main>

      {/* Floating Navigation Dock (revealed once user opens or anytime) */}
      <FloatingNavigation />
    </div>
  );
};

export default App;
