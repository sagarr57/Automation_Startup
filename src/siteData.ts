export type NavItem = {
  label: string;
  to: string;
};

export type ServiceCard = {
  index: string;
  title: string;
  tagline: string;
  summary: string;
  launchWindow: string;
  points: string[];
};

export type Industry = {
  name: string;
  problem: string;
  solution: string;
  edge: string;
};

export type ResultStory = {
  category: string;
  vertical: string;
  headline: string;
  summary: string;
  metrics: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const navigation: NavItem[] = [
  { label: "Services", to: "/services" },
  { label: "Results", to: "/results" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
];

export const heroStats = [
  { value: "24/7", label: "agent coverage" },
  { value: "<60s", label: "lead response target" },
  { value: "3-layer", label: "interaction, action, insight" },
  { value: "Dubai", label: "local market positioning" },
];

export const integrationTools = [
  "HubSpot",
  "Zoho",
  "WhatsApp",
  "Twilio",
  "Calendly",
  "Slack",
  "OpenAI",
  "n8n",
];

export const realityChecks = [
  {
    title: "Speed now shapes trust.",
    text: "The first business to respond usually earns the first serious conversation.",
  },
  {
    title: "Manual ops slow growth.",
    text: "Admin-heavy follow-up and disconnected tools quietly reduce conversion and visibility.",
  },
];

export const fitSignals = [
  "Missed or delayed lead follow-up is costing you revenue.",
  "Your team is spending too much time on repetitive coordination.",
  "You want clearer reporting without adding more manual work.",
];

export const serviceCards: ServiceCard[] = [
  {
    index: "01",
    title: "Voice Agents",
    tagline: "Never miss the first conversation.",
    summary:
      "Always-on phone and WhatsApp agents that respond instantly, qualify inbound demand, and book next steps in Arabic and English.",
    launchWindow: "Live in 2-4 weeks",
    points: [
      "24/7 inbound response",
      "Qualification and routing",
      "Booking and summaries",
    ],
  },
  {
    index: "02",
    title: "Intelligent Automation",
    tagline: "Connect the tools you already use.",
    summary:
      "Workflow systems that sync CRM, forms, calendars, notifications, documents, and follow-up into one operating layer.",
    launchWindow: "Results in 2-3 weeks",
    points: [
      "CRM and tool sync",
      "Automated handoffs",
      "Less admin overhead",
    ],
  },
  {
    index: "03",
    title: "Strategic BI Reporting",
    tagline: "Turn workflow data into board-level clarity.",
    summary:
      "Executive-grade reporting that shows what your AI systems are producing, where revenue leakage lives, and what should change next.",
    launchWindow: "Built into every engagement",
    points: [
      "Conversion visibility",
      "Channel quality insight",
      "Monthly optimization view",
    ],
  },
];

export const industries: Industry[] = [
  {
    name: "Real Estate",
    problem:
      "Lead response is slow and competitors get there first.",
    solution:
      "An AI broker qualifies and books viewings instantly.",
    edge: "Best first vertical for fast proof.",
  },
  {
    name: "Clinics & Wellness",
    problem:
      "No-shows and front-desk admin keep hurting throughput.",
    solution:
      "An AI coordinator handles reminders, rebooking, and FAQs.",
    edge: "Strong recurring retainer fit.",
  },
  {
    name: "Luxury Concierge",
    problem:
      "Premium guests expect instant, polished replies.",
    solution:
      "A brand-tuned guest agent handles requests with speed and tone.",
    edge: "Premium positioning supports higher retainers.",
  },
];

export const featuredMetrics = [
  { value: "24/7", label: "coverage" },
  { value: "<60s", label: "response target" },
  { value: "5+", label: "qualified bookings" },
];

export const challengePoints = [
  {
    title: "Focused pilot",
    text: "One clear launch offer with a measurable commercial outcome.",
  },
  {
    title: "Clear reporting",
    text: "Simple metrics around response time, qualification, and bookings.",
  },
];

export const resultStories: ResultStory[] = [
  {
    category: "Voice Agent",
    vertical: "Estate Agency",
    headline: "Viewing enquiries answered in under a minute.",
    summary:
      "Capture after-hours demand and move it into the calendar faster.",
    metrics: ["<60s speed to lead", "3x more booked viewings", "24/7 lead capture"],
  },
  {
    category: "Voice Agent",
    vertical: "Clinic",
    headline: "Reminder workflows reduce no-shows and free staff time.",
    summary:
      "Patients get reminders and rebooking support without front-desk overload.",
    metrics: ["62% fewer no-shows", "800+ calls/week handled", "2 FTE worth of admin freed"],
  },
  {
    category: "Voice Agent + Automation",
    vertical: "Concierge",
    headline: "Premium guest requests handled instantly.",
    summary:
      "The first response feels polished, immediate, and on-brand.",
    metrics: ["3 languages supported", "0 missed after-hours requests", "VIP escalation workflows"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Strategy Call",
    text: "We identify the first workflow worth fixing.",
  },
  {
    step: "02",
    title: "Solution Blueprint",
    text: "You get a focused scope, timeline, and success metrics.",
  },
  {
    step: "03",
    title: "Build & Test",
    text: "We build, test, and refine the workflow before launch.",
  },
  {
    step: "04",
    title: "Go Live & Optimize",
    text: "We launch, monitor, and improve based on real usage.",
  },
];

export const principles = [
  "Commercial outcomes before AI theatrics",
  "One clear MVP before broader transformation",
  "Human escalation when trust matters",
  "Reporting built in, not bolted on later",
];

export const faqs: FAQItem[] = [
  {
    question: "Who is Drash for?",
    answer:
      "Drash is built for service businesses that need faster lead response, less repetitive admin, and clearer reporting without scaling headcount at the same rate.",
  },
  {
    question: "What should we build first?",
    answer:
      "For Dubai, the strongest first offer is usually a real-estate lead response engine on WhatsApp, web chat, or phone. It is easy to prove value quickly through response time and booked appointments.",
  },
  {
    question: "How fast can results appear?",
    answer:
      "Focused agent and automation systems can go live in weeks. The fastest wins usually come from speed-to-lead improvement, missed-call recovery, reminders, and cleaner handoffs into CRM.",
  },
  {
    question: "Do you replace the team?",
    answer:
      "No. The system handles repetitive contact, routing, and reporting so humans spend time on higher-value conversations, escalation, and closing.",
  },
  {
    question: "Can this work with our existing tools?",
    answer:
      "Yes. We design around the tools you already use where possible, then automate the handoffs between them rather than forcing a full platform replacement on day one.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We monitor, refine, and report. Strong automation is an operating layer, not a one-off asset, so post-launch optimization is part of the value.",
  },
];
