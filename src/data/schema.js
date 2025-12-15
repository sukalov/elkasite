export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "ёлка и сказка",
  "description": "Детский новогодний праздник 'ёлка и сказка' - интерактивное представление для всей семьи в Москве 3, 4 и 5 января 2025 года",
  "startDate": "2025-01-03T15:00:00+03:00",
  "endDate": "2025-01-05T20:00:00+03:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Москва",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU",
      "addressLocality": "Москва",
      "addressRegion": "Москва"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "мосмузсин",
    "url": "https://elka.mkeverything.org"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://qtickets.ru/event/198955",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock"
  },
  "performer": {
    "@type": "PerformingGroup",
    "name": "Артисты и музыканты представления 'ёлка и сказка'"
  },
  "keywords": "ёлка и сказка, новый год 2025 москва, детский новогодний праздник",
  "inLanguage": "ru"
};

export const theaterSchema = {
  "@context": "https://schema.org",
  "@type": "TheaterEvent",
  "name": "ёлка и сказка - новогодний интерактивный спектакль",
  "description": "Чешская народная сказка 'гонза и скрипка' в интерактивном формате для детей и взрослых в Москве",
  "startDate": "2025-01-03T15:00:00+03:00",
  "endDate": "2025-01-05T20:00:00+03:00",
  "location": {
    "@type": "Place",
    "name": "Москва",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU",
      "addressLocality": "Москва"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "мосмузсин"
  }
};

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "мосмузсин",
  "url": "https://elka.mkeverything.org",
  "description": "Организация детских праздников и интерактивных представлений в Москве",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU",
    "addressLocality": "Москва"
  },
  "sameAs": [
    "https://instagram.com/via_na_prazdnik",
    "https://t.me/povsemmestam"
  ]
};