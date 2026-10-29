export interface EventItem {
  id: string;
  title: string;
  time: string;
  day: string;
  date: string;
  venue: string;
  description: string;
  directionsUrl: string;
  cardTheme: 'burgundy' | 'paper';
  startUtc?: string;
  endUtc?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TravelOption {
  title: string;
  icon: 'Car' | 'Train' | 'Bus' | 'Plane';
  description: string;
  note: string;
}

export const WEDDING_DETAILS = {
  groom: 'Muhammad Sabith B H',
  bride: 'Shamlath Hadiya',
  monogram: 'S & S',
  weddingDate: 'Thursday, 5 November 2026',
  dateFormatted: '5 November 2026',
  weekday: 'Thursday',
  year: '2026',
  targetIso: '2026-11-05T18:30:00+05:30', // After Maghrib (approx 6:30 PM IST / UTC+05:30)
  targetTimestamp: new Date('2026-11-05T18:30:00+05:30').getTime(),
  
  familyName: 'Sabith & Shamlath Families',
  whatsappUrl: 'https://wa.me/919353888465',
  whatsappRawNumber: '+91 93538 88465',
  googleMapsUrl: 'https://maps.app.goo.gl/b1Mga16cU2MQQNZT6?g_st=aw',
  
  credits: {
    craftedBy: 'Sanu Frameart',
    instagramHandle: '@sanu_frameart',
    instagramUrl: 'https://instagram.com/sanu_frameart',
    whatsappUrl: 'https://wa.me/916235838332',
    phone: '+91 62358 38332',
    phoneRaw: '+916235838332',
  },
  
  calendarDates: {
    startUtc: '20261105T130000Z',
    endUtc: '20261105T163000Z',
    title: 'Wedding of Muhammad Sabith & Shamlath Hadiya',
    description: 'Wedding celebration of Muhammad Sabith B H & Shamlath Hadiya at Thaqweemul Islam Madarasa, Aiyangeri (After Maghrib). Directions: https://maps.app.goo.gl/b1Mga16cU2MQQNZT6?g_st=aw',
    location: 'Thaqweemul Islam Madarasa, Aiyangeri, Kodagu, Karnataka, India',
  },
  
  bismillahArabic: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
  bismillahEnglish: 'In the name of Allah, the Most Gracious, the Most Merciful',
  
  quranVerse: {
    surah: 'Surah Ar-Rum, 30:21',
    arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ',
    english: 'And among His signs is that He created for you spouses from among yourselves that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who reflect.',
  },

  events: [
    {
      id: 'wedding',
      title: 'Wedding Celebration',
      time: 'After Maghrib',
      day: 'Thursday',
      date: '5 November 2026',
      venue: 'Thaqweemul Islam Madarasa, Aiyangeri',
      description: 'Join us with your family and prayers as we celebrate our blessed wedding reception and dinner feast.',
      directionsUrl: 'https://maps.app.goo.gl/b1Mga16cU2MQQNZT6?g_st=aw',
      cardTheme: 'burgundy',
      startUtc: '20261105T130000Z',
      endUtc: '20261105T163000Z',
    },
  ] as (EventItem & { startUtc: string; endUtc: string })[],

  faqs: [
    {
      question: 'When does the wedding celebration take place?',
      answer: 'The wedding celebration takes place on Thursday, 5 November 2026, starting after Maghrib prayers (from 6:30 PM onwards).',
    },
    {
      question: 'Where is the wedding venue located?',
      answer: 'The celebration is held at Thaqweemul Islam Madarasa, Aiyangeri (near Napoklu, Kodagu). Direct Google Maps navigation is available on this site.',
    },
    {
      question: 'How do I reach the venue by bus?',
      answer: 'Buses run regularly via the Virajpet / Madikeri – Napoklu – Aiyangeri route. From Napoklu, frequent connecting buses and auto-rickshaws proceed straight to Aiyangeri.',
    },
    {
      question: 'Which are the nearest railway stations?',
      answer: 'The closest railway hubs are Thalassery and Kanhangad. Taxis, cabs, and buses connect regularly from the stations towards Kodagu.',
    },
    {
      question: 'Which are the nearby airports?',
      answer: 'Kannur International Airport (CNN) is the closest airport, and Kempegowda International Airport, Bangalore (BLR) provides comprehensive flight connectivity.',
    },
    {
      question: 'Where can I find directions to the venue?',
      answer: 'You can navigate directly using our designated Google Maps link: https://maps.app.goo.gl/b1Mga16cU2MQQNZT6?g_st=aw.',
    },
    {
      question: 'How can I RSVP?',
      answer: 'You can RSVP easily using the digital RSVP form on this website. It prepares a formatted message for you to send via WhatsApp to our family contact.',
    },
  ] as FaqItem[],

  travelOptions: [
    {
      title: 'By Bus',
      icon: 'Bus',
      description: 'Buses run regularly via the Virajpet / Madikeri – Napoklu – Aiyangeri route.',
      note: 'From Napoklu, frequent connecting buses and auto-rickshaws proceed directly to Aiyangeri.',
    },
    {
      title: 'By Train',
      icon: 'Train',
      description: 'Nearest railway stations are Thalassery and Kanhangad (also accessible from Mysore / Mangalore).',
      note: 'Taxis, direct cabs, and state transport buses run regularly from the station hubs towards Kodagu.',
    },
    {
      title: 'By Air',
      icon: 'Plane',
      description: 'Kannur International Airport (CNN) is the closest airport; Kempegowda International Airport, Bangalore (BLR) offers comprehensive flight connections.',
      note: 'Prepaid cabs, car rentals, and intercity buses connect smoothly from the airports to Kodagu.',
    },
    {
      title: 'By Car',
      icon: 'Car',
      description: 'Scenic and well-connected drive via Madikeri or Virajpet through Napoklu straight to Aiyangeri.',
      note: 'Turn-by-turn guidance is available directly through the Google Maps link on this page.',
    },
  ] as TravelOption[],
};
