// Centralized FAQ data for all pages
export const faqData = {
  // General/Default FAQ for most pages
  general: [
    {
      question: "What types of waste do you remove?",
      answer: "We handle household, commercial, construction, garden, and electronic waste. Hazardous material removal is considered on a case-by-case basis."
    },
    {
      question: "Are your services eco-friendly?",
      answer: "Yes. We recycle wherever possible and follow all regulations for safe and sustainable waste disposal."
    },
    {
      question: "Do I need to be present during collection?",
      answer: "Not always. As long as access to the waste is available and you've given us instructions, we can handle everything for you."
    },
    {
      question: "How quickly can you collect my waste?",
      answer: "We offer same-day or next-day service in most cases, depending on availability and location."
    }
  ],

  // Service-specific FAQs
  wasteRemoval: [
    {
      question: "What types of waste can you remove?",
      answer: "We handle all types of non-hazardous waste including household rubbish, office waste, construction debris, garden waste, and bulky items."
    },
    {
      question: "Do you provide same-day waste removal?",
      answer: "Yes, we offer same-day waste removal services subject to availability. Contact us early in the day for the best chance of same-day collection."
    },
    {
      question: "How do you ensure environmentally responsible disposal?",
      answer: "We sort all collected waste and send recyclable materials to licensed recycling facilities. You'll receive a waste transfer note as proof of proper disposal."
    },
    {
      question: "What areas do you cover for waste removal?",
      answer: "We provide waste removal services across all London boroughs and surrounding areas. Contact us to confirm coverage for your specific location."
    }
  ],

  mattressRemoval: [
    {
      question: "Do you collect mattresses from inside my home?",
      answer: "Yes, our team will collect mattresses from anywhere in your property, including upstairs bedrooms. No heavy lifting required from you."
    },
    {
      question: "What happens to my old mattress after collection?",
      answer: "We take all mattresses to certified recycling facilities where they are broken down into component materials for reuse, keeping them out of landfills."
    },
    {
      question: "Can you collect multiple mattresses at once?",
      answer: "Absolutely! We can collect any number of mattresses in a single visit, whether it's one mattress or an entire hotel's worth."
    },
    {
      question: "Do you collect damaged or stained mattresses?",
      answer: "Yes, we collect mattresses in any condition, including those that are damaged, stained, or heavily worn."
    }
  ],

  furnitureRemoval: [
    {
      question: "What types of furniture do you remove?",
      answer: "We remove all types of furniture including sofas, chairs, tables, wardrobes, beds, desks, and office furniture, regardless of size or condition."
    },
    {
      question: "Do you dismantle furniture if needed?",
      answer: "Yes, our team can dismantle large furniture pieces if necessary to safely remove them from your property."
    },
    {
      question: "Can you donate furniture that's still in good condition?",
      answer: "Absolutely! We work with local charities and will donate suitable furniture items rather than disposing of them, helping reduce waste."
    },
    {
      question: "Do you remove furniture from upper floors?",
      answer: "Yes, we can remove furniture from any floor level. Our experienced team has the equipment and expertise to handle challenging removals safely."
    }
  ],

  gardenWaste: [
    {
      question: "What types of garden waste do you collect?",
      answer: "We collect all types of garden waste including grass cuttings, hedge trimmings, tree branches, leaves, soil, and old garden furniture."
    },
    {
      question: "Do you provide garden clearance services?",
      answer: "Yes, we offer complete garden clearance services, removing all unwanted vegetation, debris, and garden items in one visit."
    },
    {
      question: "What happens to collected garden waste?",
      answer: "All organic garden waste is taken to licensed composting facilities where it's processed into useful compost, supporting the circular economy."
    },
    {
      question: "Can you remove large tree branches and logs?",
      answer: "Yes, we can handle large garden waste including substantial tree branches, logs, and even tree stumps with appropriate equipment."
    }
  ]
};

// Helper function to get FAQ data by key
export const getFaqData = (key) => {
  return faqData[key] || faqData.general;
};