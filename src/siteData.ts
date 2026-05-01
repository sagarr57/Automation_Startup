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

export const integrationTools = [
  "HubSpot",
  "Zoho",
  "WhatsApp",
  "Twilio",
  "Calendly",
  "Google Sheets",
  "Slack",
  "n8n",
  "OpenAI",
];

export const fitSignals = [
  "You handle calls, WhatsApp messages, form leads, or website chats every day.",
  "Your team loses time on follow-up, reminders, and manual updates.",
  "You want more bookings without growing headcount at the same speed.",
  "You want one clear view of enquiries, response time, and conversions.",
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
      "Leads go cold when response is slow.",
    solution:
      "Dravyx replies instantly, qualifies buyers, and books viewings faster.",
    edge: "Strong fit for speed-to-lead improvement.",
  },
  {
    name: "Clinics & Wellness",
    problem:
      "Front-desk teams lose time to reminders, FAQs, and rebooking.",
    solution:
      "Dravyx handles reminders, rebooking, and routine questions automatically.",
    edge: "Good fit where admin pressure is high.",
  },
  {
    name: "Luxury Concierge",
    problem:
      "Premium clients expect quick, polished replies at any hour.",
    solution:
      "Dravyx handles first response and routing without losing brand tone.",
    edge: "Best for high-touch businesses that cannot afford delays.",
  },
];

export const featuredMetrics = [
  { value: "24/7", label: "reply coverage" },
  { value: "<1 min", label: "first response" },
  { value: "1 flow", label: "fast proof" },
];

export const resultStories: ResultStory[] = [
  {
    category: "Voice Agent",
    vertical: "Estate Agency",
    headline: "Faster replies can turn more enquiries into viewings.",
    summary:
      "Useful when every missed call or delayed reply means lost pipeline.",
    metrics: ["24/7 lead capture", "Faster viewing bookings", "Less manual chasing"],
  },
  {
    category: "Automation",
    vertical: "Clinic",
    headline: "Reminder and rebooking flows reduce front-desk pressure.",
    summary:
      "Useful when teams are overloaded by reminders, FAQs, and repeat admin.",
    metrics: ["Fewer no-shows", "Less staff time on routine calls", "Cleaner scheduling"],
  },
  {
    category: "Service Experience",
    vertical: "Concierge",
    headline: "Instant replies help premium brands feel more responsive.",
    summary:
      "Useful when speed, tone, and clean handoff matter as much as availability.",
    metrics: ["After-hours coverage", "On-brand communication", "Better request routing"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Strategy Call",
    text: "We find the first workflow that will save time or recover revenue fastest.",
  },
  {
    step: "02",
    title: "Plan & Scope",
    text: "You get a clear plan, timeline, and the success metrics we will track.",
  },
  {
    step: "03",
    title: "Build & Test",
    text: "We set it up, test it, and make sure the handoffs work properly.",
  },
  {
    step: "04",
    title: "Go Live & Optimize",
    text: "We launch, monitor performance, and improve based on real enquiries.",
  },
];

export const principles = [
  "Start with one clear business problem",
  "Keep the experience simple for your customers",
  "Send important conversations to humans when needed",
  "Track results from day one",
];

export const faqs: FAQItem[] = [
  {
    question: "Who is Dravyx AI for?",
    answer:
      "Dravyx AI is for service businesses that want faster lead response, less repetitive admin, and clearer visibility into enquiries and bookings.",
  },
  {
    question: "What should we automate first?",
    answer:
      "Usually the best first step is the workflow closest to revenue: missed calls, lead follow-up, booking, reminders, or CRM updates.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Focused setups can usually go live in a few weeks. Simpler flows move faster, especially when the tools and process are already clear.",
  },
  {
    question: "Will this replace my team?",
    answer:
      "No. Dravyx AI handles repetitive tasks and first-line communication so your team can focus on higher-value conversations and closing.",
  },
  {
    question: "Can this work with our current tools?",
    answer:
      "Yes. We try to work with your current CRM, calendar, forms, and communication channels instead of forcing a full replacement on day one.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We monitor performance, refine the flow, and review the numbers with you so the system keeps improving after it goes live.",
  },
];
