export interface CalendarEventData {
  title: string;
  description: string;
  location: string;
  startUtc: string; // Format: YYYYMMDDTHHMMSSZ (e.g. 20261212T050000Z)
  endUtc: string;
}

/**
 * Generate Google Calendar URL for an event
 */
export function getGoogleCalendarUrl(event: CalendarEventData): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${event.startUtc}/${event.endUtc}`,
    details: event.description,
    location: event.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generate standard iCalendar (.ics) string
 */
export function generateIcsContent(event: CalendarEventData): string {
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const cleanDescription = event.description.replace(/\n/g, '\\n');
  const cleanLocation = event.location.replace(/,/g, '\\,');

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Muhammad Sabith & Shamlath Hadiya//Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-${event.startUtc}-${Date.now()}@sabith-shamlath.com`,
    `DTSTAMP:${now}`,
    `DTSTART:${event.startUtc}`,
    `DTEND:${event.endUtc}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${cleanDescription}`,
    `LOCATION:${cleanLocation}`,
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'DESCRIPTION:Reminder: Wedding of Muhammad Sabith & Shamlath Hadiya tomorrow',
    'ACTION:DISPLAY',
    'END:VALARM',
    'BEGIN:VALARM',
    'TRIGGER:-PT2H',
    'DESCRIPTION:Reminder: Wedding Celebration in 2 hours',
    'ACTION:DISPLAY',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

/**
 * Download .ics file on the client (supported by Apple Calendar, Outlook, Google Calendar import)
 */
export function downloadIcsFile(event: CalendarEventData, filename = 'Muhammad-Sabith-Shamlath-Hadiya-Wedding.ics'): void {
  const icsData = generateIcsContent(event);
  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
