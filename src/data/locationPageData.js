// Location-specific SEO data for dynamic pages
export const locationPageData = {
  "waste-removal": {
    london: {
      seo: {
        title: "Waste Removal Services in London - Fast & Reliable Collection",
        description: "Professional waste removal London services. Same-day collection, eco-friendly disposal, licensed carriers. Book your waste removal in London today!",
        keywords: "waste removal London, rubbish collection London, London waste disposal, same day waste removal London, licensed waste carriers London",
        canonical: "https://wasterescuers.uk/services/waste-removal/london",
      },
    },
    manchester: {
      seo: {
        title: "Waste Removal Services in Manchester - Fast & Reliable Collection",
        description: "Professional waste removal Manchester services. Same-day collection, eco-friendly disposal, licensed carriers. Book your waste removal in Manchester today!",
        keywords: "waste removal Manchester, rubbish collection Manchester, Manchester waste disposal, same day waste removal Manchester, licensed waste carriers Manchester",
        canonical: "https://wasterescuers.uk/services/waste-removal/manchester",
      },
    },
    birmingham: {
      seo: {
        title: "Waste Removal Services in Birmingham - Fast & Reliable Collection",
        description: "Professional waste removal Birmingham services. Same-day collection, eco-friendly disposal, licensed carriers. Book your waste removal in Birmingham today!",
        keywords: "waste removal Birmingham, rubbish collection Birmingham, Birmingham waste disposal, same day waste removal Birmingham, licensed waste carriers Birmingham",
        canonical: "https://wasterescuers.uk/services/waste-removal/birmingham",
      },
    },
    cardiff: {
      seo: {
        title: "Waste Removal Services in Cardiff - Fast & Reliable Collection",
        description: "Professional waste removal Cardiff services. Same-day collection, eco-friendly disposal, licensed carriers. Book your waste removal in Cardiff today!",
        keywords: "waste removal Cardiff, rubbish collection Cardiff, Cardiff waste disposal, same day waste removal Cardiff, licensed waste carriers Cardiff",
        canonical: "https://wasterescuers.uk/services/waste-removal/cardiff",
      },
    },
    "milton-keynes": {
      seo: {
        title: "Waste Removal Services in Milton Keynes - Fast & Reliable Collection",
        description: "Professional waste removal Milton Keynes services. Same-day collection, eco-friendly disposal, licensed carriers. Book your waste removal in Milton Keynes today!",
        keywords: "waste removal Milton Keynes, rubbish collection Milton Keynes, Milton Keynes waste disposal, same day waste removal Milton Keynes",
        canonical: "https://wasterescuers.uk/services/waste-removal/milton-keynes",
      },
    },
    maidenhead: {
      seo: {
        title: "Waste Removal Services in Maidenhead - Fast & Reliable Collection",
        description: "Professional waste removal Maidenhead services. Same-day collection, eco-friendly disposal, licensed carriers. Book your waste removal in Maidenhead today!",
        keywords: "waste removal Maidenhead, rubbish collection Maidenhead, Maidenhead waste disposal, same day waste removal Maidenhead",
        canonical: "https://wasterescuers.uk/services/waste-removal/maidenhead",
      },
    },
    oxford: {
      seo: {
        title: "Waste Removal Services in Oxford - Fast & Reliable Collection",
        description: "Professional waste removal Oxford services. Same-day collection, eco-friendly disposal, licensed carriers. Book your waste removal in Oxford today!",
        keywords: "waste removal Oxford, rubbish collection Oxford, Oxford waste disposal, same day waste removal Oxford, licensed waste carriers Oxford",
        canonical: "https://wasterescuers.uk/services/waste-removal/oxford",
      },
    },
  },
  "mattress-removal": {
    london: {
      seo: {
        title: "Mattress Removal London - Fast & Eco-Friendly Pickup",
        description: "Mattress removal London service. Quick, affordable, and eco-friendly collection. Book your same-day mattress disposal in London now.",
        keywords: "mattress removal London, mattress disposal London, old mattress collection London, eco-friendly mattress disposal London",
        canonical: "https://wasterescuers.uk/services/mattress-removal/london",
      },
    },
    birmingham: {
      seo: {
        title: "Mattress Removal Birmingham - Professional Collection Service",
        description: "Professional mattress removal in Birmingham. Same-day collection, eco-friendly disposal. Book your mattress pickup today!",
        keywords: "mattress removal Birmingham, mattress disposal Birmingham, Birmingham mattress collection",
        canonical: "https://wasterescuers.uk/services/mattress-removal/birmingham",
      },
    },
    manchester: {
      seo: {
        title: "Mattress Removal Manchester - Fast & Reliable Service",
        description: "Mattress removal Manchester service. Quick, affordable, and eco-friendly collection. Book your mattress disposal in Manchester today!",
        keywords: "mattress removal Manchester, mattress disposal Manchester, Manchester mattress collection",
        canonical: "https://wasterescuers.uk/services/mattress-removal/manchester",
      },
    },
    cardiff: {
      seo: {
        title: "Mattress Removal Cardiff - Professional Collection Service",
        description: "Professional mattress removal in Cardiff. Same-day collection, eco-friendly disposal. Book your mattress pickup today!",
        keywords: "mattress removal Cardiff, mattress disposal Cardiff, Cardiff mattress collection",
        canonical: "https://wasterescuers.uk/services/mattress-removal/cardiff",
      },
    },
    "milton-keynes": {
      seo: {
        title: "Mattress Removal Milton Keynes - Fast & Reliable Service",
        description: "Mattress removal Milton Keynes service. Quick, affordable, and eco-friendly collection. Book your mattress disposal today!",
        keywords: "mattress removal Milton Keynes, mattress disposal Milton Keynes, Milton Keynes mattress collection",
        canonical: "https://wasterescuers.uk/services/mattress-removal/milton-keynes",
      },
    },
    maidenhead: {
      seo: {
        title: "Mattress Removal Maidenhead - Professional Collection Service",
        description: "Professional mattress removal in Maidenhead. Same-day collection, eco-friendly disposal. Book your mattress pickup today!",
        keywords: "mattress removal Maidenhead, mattress disposal Maidenhead, Maidenhead mattress collection",
        canonical: "https://wasterescuers.uk/services/mattress-removal/maidenhead",
      },
    },
    oxford: {
      seo: {
        title: "Mattress Removal Oxford - Fast & Reliable Service",
        description: "Mattress removal Oxford service. Quick, affordable, and eco-friendly collection. Book your mattress disposal in Oxford today!",
        keywords: "mattress removal Oxford, mattress disposal Oxford, Oxford mattress collection",
        canonical: "https://wasterescuers.uk/services/mattress-removal/oxford",
      },
    },
  },
};

// Helper function to get location data
export const getLocationPageData = (service, location) => {
  return locationPageData[service]?.[location] || null;
};

// Helper function to check if location exists
export const isValidLocation = (service, location) => {
  return locationPageData[service]?.[location] !== undefined;
};