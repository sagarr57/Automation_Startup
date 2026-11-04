export type WorkStat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export type WorkProject = {
  id: string;
  name: string;
  client: string;
  sector: string;
  location: string;
  year: string;
  headline: string;
  summary: string;
  challenge: string;
  built: string[];
  automation: string[];
  stack: string[];
  stats: WorkStat[];
  accent: string;
  url?: string;
  urlLabel?: string;
  status: string;
  images: {
    desktop: string;
    mobile: string;
    desktopAlt: string;
    mobileAlt: string;
  };
};

export const workProjects: WorkProject[] = [
  {
    id: "ipf-uae",
    name: "IPF UAE Digital Platform",
    client: "Indian People's Forum UAE",
    sector: "Community Platform",
    location: "Ajman, UAE",
    year: "2026",
    headline: "A 10-language community platform with a governed CMS behind it.",
    summary:
      "IPF UAE's old site was about 20 static PHP pages and its events calendar was stuck in 2021. We replaced it with a multilingual website and member platform. Every chapter and council can now publish its own content, and a central approval workflow keeps all of it on-brand.",
    challenge:
      "A community spread across 7 emirates and 19 home-state councils needed one platform for publishing, events, and membership. Regional admins had to be able to edit their own sections without being able to break the rest of the site.",
    built: [
      "Public website plus member and Yuva (youth wing) portals",
      "Chapter and council landing pages with committee rosters and scoped events",
      "Event system: RSVP, volunteer opt-in, registrations, and check-in",
      "Block-based page CMS with scheduling and an editable homepage hero",
      "Role-based admin workspace with 9 tabs",
      "Drishti e-magazine, news, sponsors, and an interactive India state map",
    ],
    automation: [
      "Content written by admins is translated automatically into 10 languages",
      "Draft → review → publish approval queue for scoped edits",
      "Digital member ID cards with QR codes, issued at registration",
      "Append-only audit log, purged monthly by a scheduled job",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase (Postgres + RLS)",
      "Vercel Functions",
      "Upstash Redis",
      "PWA",
    ],
    stats: [
      { value: 10, label: "Languages, auto-translated" },
      { value: 26, label: "Chapters & councils served" },
      { value: 5, label: "Scoped admin roles" },
      { value: 46, label: "Public & admin routes" },
    ],
    accent: "#e0b45c",
    status: "Delivered",
    images: {
      desktop: "/work/ipf-desktop.jpg",
      mobile: "/work/ipf-mobile.jpg",
      desktopAlt: "IPF UAE platform homepage on desktop, showing a news ticker, navigation, and a video hero",
      mobileAlt: "IPF UAE platform on mobile, showing the language switcher and bottom app navigation",
    },
  },
  {
    id: "srr-auto-parts",
    name: "SRR Auto Spare Parts",
    client: "SRR Auto Spare Parts LLC",
    sector: "Automotive Commerce",
    location: "Dubai, UAE",
    year: "2026",
    headline: "A 4,700-part catalog with vehicle-fit search and WhatsApp ordering.",
    summary:
      "SRR's inventory was spread across spreadsheets and phone calls. We turned it into a searchable online catalog. Customers pick their vehicle, find the right part by name, part number, or OEM reference, and send a priced order to the counter over WhatsApp in one tap.",
    challenge:
      "Garages and car owners in Dubai search by part number, OEM reference, and vehicle, not by product name. The catalog had to cover thousands of SKUs and nearly 4,000 vehicle variants and still feel instant on mobile.",
    built: [
      "Make → model → year vehicle picker with a saved \"My Vehicle\"",
      "Live search across part names, part numbers, and alternate numbers",
      "Hierarchical category catalog with filters and stock status",
      "Product pages with gallery, compatibility check, and similar parts",
      "Basket that turns into a pre-filled WhatsApp order with an AED total",
      "Admin console for parts, categories, vehicles, and bulk fitment",
    ],
    automation: [
      "Inventory exported from Zoho imported in bulk from CSV",
      "Rule-based auto-categorisation of uncategorised parts",
      "WhatsApp order builder: no checkout, and no missed orders",
      "Image uploads to cloud storage straight from the admin panel",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Prisma",
      "Neon Postgres",
      "Vercel Blob",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    stats: [
      { value: 4700, suffix: "+", label: "Parts in the catalog" },
      { value: 3992, label: "Vehicle variants mapped" },
      { value: 39, label: "Vehicle makes" },
      { value: 32, label: "Part categories" },
    ],
    accent: "#e5383b",
    status: "Pre-launch",
    images: {
      desktop: "/work/srr-desktop.jpg",
      mobile: "/work/srr-mobile.jpg",
      desktopAlt: "SRR Auto Spare Parts homepage on desktop, showing part search, the Shop by Vehicle selector, and catalog stats",
      mobileAlt: "SRR Auto Spare Parts homepage on mobile, showing part search, vehicle selector, and popular categories",
    },
  },
  {
    id: "kaash-journal",
    name: "The Kaash Journal",
    client: "The Kaash Journal",
    sector: "Digital Publishing",
    location: "United Kingdom",
    year: "2026",
    headline: "An AI & fintech publication that publishes and reports on itself.",
    summary:
      "A UK-focused publication covering AI, health tech, debt management, and fintech. We built it to run with almost no manual work: posts publish themselves on schedule, readers flow into a newsletter, and a private dashboard tracks traffic and revenue.",
    challenge:
      "Financial content is a YMYL niche, so the site needed strong SEO, compliance pages, and credibility signals from day one. It also had to stay cheap to run for a two-person editorial team.",
    built: [
      "Multi-category blog with category, tag, and author pages",
      "Markdown publishing pipeline with reading progress and sharing",
      "Private admin dashboard with 9 tabs: traffic, clicks, revenue, sources",
      "Newsletter capture, cookie consent, and FCA-aware disclaimers",
      "Ad placements (Ezoic and AdSense) built into the article layout",
      "Full SEO setup: dynamic sitemap, canonicals, and per-page meta",
    ],
    automation: [
      "Daily scheduled job publishes queued posts automatically",
      "Newsletter sign-ups sync straight into Brevo",
      "First-party analytics: page views, events, and conversions",
      "GA4 data pulled into the admin dashboard on the server",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "Vercel Functions + Cron",
      "Brevo",
      "GA4 Data API",
    ],
    stats: [
      { value: 92, label: "Articles published" },
      { value: 108, label: "URLs indexed in sitemap" },
      { value: 9, label: "Admin dashboard views" },
      { value: 5, label: "Content verticals" },
    ],
    accent: "#3d7bff",
    url: "https://www.thekaashjournal.com",
    urlLabel: "Read the journal",
    status: "Live",
    images: {
      desktop: "/work/kaash-desktop.jpg",
      mobile: "/work/kaash-mobile.jpg",
      desktopAlt: "The Kaash Journal homepage on desktop, with the headline 'AI, Health & Fintech — Practical guides for everyone'",
      mobileAlt: "The Kaash Journal homepage on mobile, with the hero headline and Explore Articles button",
    },
  },
];
