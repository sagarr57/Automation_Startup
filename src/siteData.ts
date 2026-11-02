export const calendlyUrl = "https://calendly.com/hello-dravyx/30min";

export const contactChannels = {
  email: {
    href: "mailto:hello.dravyx@gmail.com",
    label: "hello.dravyx@gmail.com",
  },
  whatsapp: {
    href: "https://wa.me/971553084546",
    label: "+971 55 308 4546",
  },
  instagram: {
    href: "https://www.instagram.com/dravyx.ai",
    label: "@dravyx.ai",
  },
} as const;

export type NavItem = {
  label: string;
  to: string;
};

export type ServiceCard = {
  index: string;
  title: string;
  tagline: string;
  scenario: string;
  summary: string;
  launchWindow: string;
  points: string[];
  /** Headline figure shown on the stacked home-page card. */
  stat: string;
  statLabel: string;
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
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Results", to: "/results" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
];

export const integrationTools = [
  "HubSpot",
  "Salesforce",
  "Zoho",
  "Pipedrive",
  "GoHighLevel",
  "WhatsApp",
  "Telegram",
  "Facebook Messenger",
  "Instagram",
  "Twilio",
  "Slack",
  "Microsoft Teams",
  "Gmail",
  "ActiveCampaign",
  "Mailchimp",
  "Brevo",
  "SendGrid",
  "Calendly",
  "Google Workspace",
  "Microsoft 365",
  "Google Sheets",
  "Airtable",
  "Notion",
  "Monday.com",
  "ClickUp",
  "Trello",
  "Asana",
  "Jira",
  "n8n",
  "Make",
  "Zapier",
  "Pipedream",
  "OpenAI",
  "Stripe",
  "Xero",
  "QuickBooks",
  "Shopify",
  "WooCommerce",
  "Typeform",
  "Jotform",
  "Google Forms",
  "Intercom",
  "Zendesk",
  "Freshdesk",
  "DocuSign",
  "Webflow",
  "WordPress",
];

export const fitSignals = [
  "You handle calls, WhatsApp messages, form leads, or website chats every day.",
  "Your team loses time on follow-up, reminders, and manual updates.",
  "You want more bookings without growing headcount at the same speed.",
  "You want one clear view of enquiries, response time, and conversions.",
  "You need a website or web app that actually converts — not just looks good.",
  "You want a custom CRM, client portal, or internal tool built to your exact process.",
];

export const serviceCards: ServiceCard[] = [
  {
    index: "01",
    title: "Voice Agents",
    tagline: "Never miss the first conversation.",
    scenario:
      "Picture this: a potential client calls at 10pm on a Thursday. Instead of voicemail, they speak to your AI agent, get qualified, and book a viewing — before your competitor wakes up.",
    summary:
      "Always-on phone and WhatsApp agents that respond instantly, qualify inbound demand, and book next steps in Arabic and English.",
    launchWindow: "Live in 2-4 weeks",
    stat: "24/7",
    statLabel: "Inbound coverage, Arabic & English",
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
    scenario:
      "Picture this: a lead fills your website form at noon. Within 30 seconds, your CRM is updated, a WhatsApp follow-up is sent, and your team is notified — without anyone lifting a finger.",
    summary:
      "Workflow systems that sync CRM, forms, calendars, notifications, documents, and follow-up into one operating layer.",
    launchWindow: "Results in 2-3 weeks",
    stat: "30s",
    statLabel: "Form to CRM to WhatsApp follow-up",
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
    scenario:
      "Picture this: every Monday morning your dashboard shows exactly how many leads came in, how fast they were contacted, and where deals are stalling — no spreadsheets, no chasing your team.",
    summary:
      "Executive-grade reporting that shows what your AI systems are producing, where revenue leakage lives, and what should change next.",
    launchWindow: "Built into every engagement",
    stat: "1 view",
    statLabel: "Every channel, every Monday",
    points: [
      "Conversion visibility",
      "Channel quality insight",
      "Monthly optimization view",
    ],
  },
  {
    index: "04",
    title: "Web Development",
    tagline: "Build the app. Ship it automated.",
    scenario:
      "Picture this: your new site goes live and on day one, every lead is captured, your CRM is updated, and WhatsApp follow-up fires automatically — because we built the automation into the site, not bolted it on later.",
    summary:
      "Static sites, dynamic web apps, 3D immersive experiences, custom CRMs, and client portals — built fast, connected to automation from the first commit.",
    launchWindow: "Delivered in 2-6 weeks",
    stat: "Day 1",
    statLabel: "Automation live at launch",
    points: [
      "Static, dynamic & 3D sites",
      "Custom CRMs & portals",
      "Automated from day one",
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
  {
    name: "Startups & Scale-Ups",
    problem:
      "Off-the-shelf tools do not fit the exact workflow — leads slip through gaps.",
    solution:
      "Dravyx builds the custom web app, CRM, or client portal that matches the exact process.",
    edge: "Best when you have outgrown templates and need something built to spec.",
  },
  {
    name: "Professional Services",
    problem:
      "A generic website does not reflect the firm's quality — and does not convert.",
    solution:
      "Dravyx builds fast, professional sites with conversion-focused structure and automation baked in.",
    edge: "Strong fit for firms that want a digital presence that actually generates enquiries.",
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
    vertical: "Real Estate",
    headline: "Faster replies turn more enquiries into booked viewings.",
    summary:
      "Every missed call or delayed reply is pipeline handed to a competitor. An always-on voice agent captures, qualifies, and books before your team logs in.",
    metrics: ["24/7 lead capture", "Faster viewing bookings", "Less manual chasing"],
  },
  {
    category: "Automation",
    vertical: "Clinic & Wellness",
    headline: "Reminder and rebooking flows reduce no-shows and free the front desk.",
    summary:
      "Front-desk teams lose hours each day to reminders, rebooking calls, and routine FAQs. Automating these flows means fewer no-shows and more time for complex patient interactions.",
    metrics: ["Fewer no-shows", "Less staff time on routine calls", "Cleaner scheduling"],
  },
  {
    category: "Service Experience",
    vertical: "Luxury Concierge",
    headline: "Instant, on-brand replies keep premium clients engaged at any hour.",
    summary:
      "Premium clients expect a polished response within minutes, not a business-hours voicemail. An AI-handled first response keeps the brand tone and routes to the right person.",
    metrics: ["After-hours coverage", "On-brand first response", "Better request routing"],
  },
  {
    category: "Intelligent Automation",
    vertical: "Professional Services",
    headline: "Automated follow-up ensures no warm lead goes cold.",
    summary:
      "Leads that do not hear back within an hour are 7× less likely to convert. Automated sequences keep engagement high while your team focuses on closing.",
    metrics: ["Consistent follow-up cadence", "CRM always up to date", "Less admin per sale"],
  },
  {
    category: "BI Reporting",
    vertical: "Multi-Location Business",
    headline: "One dashboard shows where revenue is leaking across every channel.",
    summary:
      "When leads come in across WhatsApp, phone, web forms, and Instagram, visibility disappears. A unified reporting layer shows response times, conversion by channel, and where to focus next.",
    metrics: ["Single source of truth", "Channel performance at a glance", "Monthly optimization view"],
  },
  {
    category: "Voice Agent",
    vertical: "Education & Training",
    headline: "Enrolment queries answered instantly, 24 hours a day.",
    summary:
      "Prospective students ask the same questions repeatedly. An AI agent handles course FAQs, collects contact details, and books discovery calls so no enrolment opportunity is lost overnight.",
    metrics: ["Instant FAQ handling", "Lead collection outside office hours", "Seamless booking handoff"],
  },
  {
    category: "Web Development",
    vertical: "Startup & Scale-Up",
    headline: "A custom web app replaces three spreadsheets and a shared inbox.",
    summary:
      "When the business has grown past what a template or generic tool can handle, a purpose-built web app or internal portal gives the team a single place to manage clients, leads, and operations.",
    metrics: ["Built to exact workflow", "Replaces manual coordination", "Integrates with existing tools"],
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
  {
    step: "05",
    title: "Ongoing Support",
    text: "We do not disappear after launch. We stay close, refine the system, and build on what is working.",
  },
];

export const principles = [
  "Start with one clear business problem",
  "Keep the experience simple for your customers",
  "Send important conversations to humans when needed",
  "Track results from day one",
];

export type WaitingCost = {
  stat: string;
  label: string;
  detail: string;
};

export const waitingCosts: WaitingCost[] = [
  {
    stat: "4–8 hrs",
    label: "Average response time",
    detail: "How long Dubai service businesses take to respond to an online enquiry on average.",
  },
  {
    stat: "78%",
    label: "Go to the first responder",
    detail: "Of buyers choose the business that responds first — not the cheapest or most experienced.",
  },
  {
    stat: "60%",
    label: "Never hear back",
    detail: "Of leads are never followed up at all — they move on before a human gets to them.",
  },
  {
    stat: "AED 10K+",
    label: "Monthly pipeline at risk",
    detail: "Estimated value lost per month for a typical service business from slow lead response alone.",
  },
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
  {
    question: "We tried automation before and it did not work. Why would this be different?",
    answer:
      "Most automation failures happen when the tool is chosen before the process is understood. We start by mapping the actual workflow first, then build to fit it. That is why we start with one focused flow rather than a platform-wide rollout.",
  },
  {
    question: "We are not a tech company. Will we be able to manage this?",
    answer:
      "That is exactly who we build for. The output is a working system your team uses through the tools they already know — WhatsApp, email, your CRM. You do not need to touch any code or configuration after launch.",
  },
  {
    question: "What if we want to change or stop?",
    answer:
      "You own everything. The workflows, the data, the connections. If you want to pause, change direction, or hand it to an internal team, we make that transition straightforward.",
  },
  {
    question: "Do we need to replace our current tools?",
    answer:
      "Almost never. We prefer to layer automation onto what you already use. Replacing a working CRM or calendar adds risk and delay — we avoid that unless there is a clear case for it.",
  },
  {
    question: "How do you charge?",
    answer:
      "Engagements are scoped and priced per project. Founding clients get locked-in pricing that does not increase as their systems grow. We discuss specifics on the strategy call once we understand the scope.",
  },
  {
    question: "Do you build websites and web applications?",
    answer:
      "Yes — web development is one of our four services. We build static sites, dynamic React and Next.js apps, 3D immersive experiences, e-commerce stores, custom CRMs, and client portals. Unlike a regular web agency, we ship automation into the build from day one — leads captured, CRM updated, follow-up triggered the moment your site goes live.",
  },
  {
    question: "What types of websites do you build?",
    answer:
      "Static marketing sites, dynamic web apps, 3D immersive product experiences, e-commerce stores, custom CRMs, client portals, booking systems, and admin dashboards. Every build is scoped around a business goal — not a template.",
  },
  {
    question: "Can you build the site and automate it in one go?",
    answer:
      "That is the end-to-end path. We build the site or app and connect the automation layer in a single engagement — so on launch day, leads flow into your CRM, follow-up fires automatically, and reporting is already running.",
  },
];
