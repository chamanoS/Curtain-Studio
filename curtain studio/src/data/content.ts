export const brand = {
  name: "The Curtain Studio",
  tagline: "Style it. Hang it. Love it.",
  locationLine: "33 Lemonwood Eco Park Estate",
  email: "temogosilowa95@gmail.com",
  phoneDisplay: "+27 (0) 63 501 5824",
  phoneE164: "+27635015824",
  month: "November 2025",
};

export const sections = {
  executiveSummary: {
    mission:
      "To deliver affordable, stylish, and high-quality curtain and décor solutions to households and small businesses.",
    vision:
      "To become a trusted home décor brand in South Africa, offering complete curtain and woodwork solutions.",
    highlights: [
      "Custom curtains, rods, rails, accessories, and professional installation",
      "Deposit-based, low-risk model designed for steady cash flow and trust",
      "Mobile consultations for flexible service delivery",
      "Planned expansion into wood décor (shelves, headboards, TV stands, wall panels) and blinds",
    ],
  },
  whatMakesDifferent: [
    "Fully customised curtain designs",
    "Affordable installation services",
    "Mobile service (we travel to clients)",
    "Deposit-based model reduces risk",
    "Expansion into wood décor (unique in our segment)",
  ],
  growthOpportunities: [
    "Blinds (Venetian & Roller)",
    "Motorised rails",
    "Wood décor (shelves, headboards, panels)",
    "Complete home makeover packages",
  ],
};

export type ProductRow = {
  label: string;
  description: string;
  price: string;
};

export const productRanges = {
  curtainRange: [
    { label: "Modern Wave", description: "Eyelet • Linen Blend • Cream/Grey/Teal", price: "R750–R1,200" },
    { label: "Classic Touch", description: "Pencil Pleat • Velvet • Burgundy/Mustard", price: "R900–R1,500" },
    { label: "Breeze Light", description: "Sheer • Voile • White/Beige", price: "R450–R700" },
    { label: "Cozy Home", description: "Blackout • Cotton/Polyester • Charcoal/Navy", price: "R800–R1,300" },
    { label: "Elegant Layers", description: "Layered • Sheer + Satin • Gold/Blush Pink", price: "R1,000–R1,800" },
  ],
  rodsAndRails: [
    { label: "Single Rod", description: "Metal • Basic & durable", price: "R180–R250" },
    { label: "Double Rod", description: "Metal/Wood • For layered curtains", price: "R250–R400" },
    { label: "Extendable Rod", description: "Metal • Adjustable", price: "R220–R350" },
    { label: "Decorative Rod", description: "Metal/Wood • Finials (leaf/globe/crystal)", price: "R300–R500" },
    { label: "Aluminium Rail", description: "Aluminium • Sleek & strong", price: "R250–R400" },
    { label: "Ceiling Rail", description: "Plastic/Aluminium • Hidden system", price: "R280–R450" },
  ],
  services: [
    { label: "Curtain installation", description: "Rod fitting + curtain hanging", price: "R250–R500 per window" },
    { label: "Measurement consultation", description: "Sizing + fabric advice", price: "Free with purchase" },
    { label: "Rod cutting", description: "Custom sizing", price: "Included" },
    { label: "Repairs / reinstallation", description: "Fixing, adjusting, rehanging", price: "From R200" },
  ],
  futureDecorAdditions: [
    "Pelmets",
    "Wooden shelves",
    "TV stands & pedestals",
    "Headboards",
    "Wall panels",
    "Blinds & motorised systems",
  ],
};

export const capitalRequirements = [
  { item: "Tools & equipment (curtain + woodwork)", amount: "R35,000" },
  { item: "Initial stock (fabric, rods, rails)", amount: "R25,000" },
  { item: "Marketing & branding", amount: "R15,000" },
  { item: "Transport & fuel buffer", amount: "R10,000" },
  { item: "Working capital reserve", amount: "R15,000" },
];

export const monthlyProjection = [
  { tier: "Minimum", clients: 4, avgProfit: 1000, totalProfit: 4000 },
  { tier: "Moderate", clients: 8, avgProfit: 1000, totalProfit: 8000 },
  { tier: "Strong", clients: 12, avgProfit: 1000, totalProfit: 12000 },
];

export const milestones = [
  { year: "2026", text: "Open Sekgosese showroom and expand mobile services" },
  { year: "2027", text: "Establish Gauteng workshop and introduce motorised blinds" },
  { year: "2028", text: "Launch online store and grow digital catalogue" },
  { year: "2030", text: "Reach 10,000 clients served across South Africa" },
];
