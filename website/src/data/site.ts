export const site = {
  name: "Little Genius Island",
  tagline: "Le petit génie",
  phone: "905 977 1151",
  phoneHref: "tel:+19059771151",
  email: "info@littlegeniusisland.ca",
  emailHref: "mailto:info@littlegeniusisland.ca",
  address: {
    street: "78 Main St S",
    city: "Newmarket",
    region: "ON",
    postal: "L3Y 3Y6",
  },
  mapsUrl: "https://www.google.com/maps/place/78+Main+St+S,+Newmarket,+ON+L3Y+3Y6",
  facebook: "https://www.facebook.com/share/1BF6qM1poT/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/little_genius_island/",
  // Hours differ by service; there are no general business hours.
  serviceHours: {
    daycare: [{ day: "Monday – Friday", hours: "7:00 am – 6:00 pm" }],
    lessons: [
      { day: "Monday – Friday", hours: "7:00 am – 6:00 pm" },
      { day: "Saturday – Sunday", hours: "9:00 am – 6:00 pm" },
    ],
  },
  // First bookable hour (24h clock) on weekends for piano and tutoring.
  lessonWeekendStart: 9,
  // Flip to true when the Montessori daycare opens for sign-ups and tours.
  // While false, the daycare shows "Coming soon" and its sign-up and tour paths are hidden.
  daycareLive: false,
  // Set to a string such as "$1,250" to show the monthly daycare tuition on the site.
  // While this is null, the site tells families the fee is shared when they visit.
  daycareMonthlyTuition: null as string | null,
};

export const routes = {
  home: "/",
  tour: "/book-tour",
  team: "/team",
  hours: "/hours",
  location: "/location",
  faq: "/faq",
} as const;
