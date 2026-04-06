import { FormEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { faqs, industries, integrationTools, processSteps, serviceCards } from "./siteData";

type ChatMessage = {
  id: number;
  role: "bot" | "user";
  text: string;
  linkLabel?: string;
  linkHref?: string;
};

type ConversationContext = {
  industry: "real_estate" | "clinic" | "concierge" | null;
  interest: "voice_agents" | "automation" | "reporting" | null;
};

let messageId = 1;

const initialMessage: ChatMessage = {
  id: messageId++,
  role: "bot",
  text:
    "Hey, I'm Dravyx. I can help with voice agents, workflow automation, reporting, setup time, pricing, and whether our service is a good fit for your business.",
};

type ChatReply = {
  text: string;
  linkLabel?: string;
  linkHref?: string;
};

const defaultContactLinkLabel = "Contact us";
const defaultContactLinkHref = "/contact";

const integrationAliases: Record<string, string[]> = {
  HubSpot: ["hubspot"],
  Zoho: ["zoho"],
  WhatsApp: ["whatsapp", "wa"],
  Twilio: ["twilio"],
  Calendly: ["calendly"],
  "Google Sheets": ["google sheets", "sheets"],
  Slack: ["slack"],
  n8n: ["n8n", "n8n.io", "n 8 n"],
  OpenAI: ["openai", "chatgpt", "gpt"],
};

function containsAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

function joinLabels(values: string[]) {
  if (values.length === 1) {
    return values[0];
  }

  if (values.length === 2) {
    return `${values[0]} and ${values[1]}`;
  }

  return `${values.slice(0, -1).join(", ")}, and ${values[values.length - 1]}`;
}

function makeReply(text: string, linkLabel?: string, linkHref?: string): ChatReply {
  return {
    text,
    linkLabel: linkLabel ?? defaultContactLinkLabel,
    linkHref: linkHref ?? defaultContactLinkHref,
  };
}

function detectMentionedIntegration(text: string) {
  for (const [tool, aliases] of Object.entries(integrationAliases)) {
    if (aliases.some((alias) => text.includes(alias))) {
      return tool;
    }
  }

  return null;
}

function buildKnownIntegrationAnswer(tool: string): ChatReply {
  const commonIntro = `Yes, ${tool} can be part of a Dravyx AI workflow depending on the use case.`;

  if (tool === "Twilio") {
    return makeReply(
      `${commonIntro} It is especially relevant for calling, messaging, and communication workflows, so it can be a strong fit when you need phone or WhatsApp automation. If you want, tell me the use case and I can suggest where Twilio would typically sit in the flow.`,
    );
  }

  if (tool === "HubSpot") {
    return makeReply(
      `${commonIntro} HubSpot is especially useful when you want enquiries, qualification, follow-up, and internal visibility to stay connected in one CRM workflow. It can be a strong fit for lead response, sales handoff, and keeping your pipeline organised.`,
    );
  }

  if (tool === "Zoho") {
    return makeReply(
      `${commonIntro} Zoho can be used for lead capture, contact updates, qualification handoff, follow-up tracking, and keeping your sales or operations process organised. In most projects, the goal is to make the CRM work better with your enquiry and booking flow rather than replace it.`,
    );
  }

  if (tool === "Slack") {
    return makeReply(
      `${commonIntro} Slack is usually useful for internal alerts, team notifications, and handoff workflows so your team gets the right update at the right time without manual chasing.`,
    );
  }

  if (tool === "Calendly") {
    return makeReply(
      `${commonIntro} Calendly is usually helpful for booking flows, scheduling, and moving qualified enquiries straight into the next step without back-and-forth messages.`,
    );
  }

  if (tool === "Google Sheets") {
    return makeReply(
      `${commonIntro} Google Sheets can work well for lightweight operational tracking, lead logs, reporting support, or transitional workflows when a business is not ready for a heavier system yet.`,
    );
  }

  if (tool === "WhatsApp") {
    return makeReply(
      `${commonIntro} WhatsApp is a strong fit for fast first response, qualification, follow-up, reminders, and keeping customer communication in a familiar channel.`,
    );
  }

  if (tool === "n8n") {
    return makeReply(
      `${commonIntro} n8n is a strong fit when you need custom workflow automation between multiple systems. It is especially useful for routing data between tools, triggering multi-step automations, approvals, notifications, CRM updates, form handling, and other behind-the-scenes business logic. In many projects, n8n can act as the automation layer that connects your enquiry flow, internal operations, and reporting together.`,
    );
  }

  if (tool === "OpenAI") {
    return makeReply(
      `${commonIntro} OpenAI-style models can support conversational logic, classification, summarisation, and AI-assisted workflow steps where language understanding matters.`,
    );
  }

  return makeReply(
    `${commonIntro} The exact setup depends on the workflow, the systems involved, and what result you want to achieve first.`,
  );
}

function buildUnknownIntegrationAnswer(): ChatReply {
  return makeReply(
    "Yes, we can usually support custom integrations as well. The right setup depends on the tool, what you want it to do, and how it should connect with the rest of your workflow. If you share the exact systems and outcome you want, we can recommend the best approach.",
    defaultContactLinkLabel,
    defaultContactLinkHref,
  );
}

function inferConversationContext(
  question: string,
  current: ConversationContext,
): ConversationContext {
  const text = question.toLowerCase();

  let industry = current.industry;
  let interest = current.interest;

  if (containsAny(text, ["real estate", "estate agency", "property", "broker", "brokers", "realtor"])) {
    industry = "real_estate";
  } else if (
    containsAny(text, ["clinic", "medical", "doctor", "dental", "wellness", "healthcare", "patient"])
  ) {
    industry = "clinic";
  } else if (
    containsAny(text, ["concierge", "luxury", "premium service", "hospitality", "vip"])
  ) {
    industry = "concierge";
  }

  if (containsAny(text, ["voice", "phone", "call", "calls", "whatsapp", "lead response", "missed call"])) {
    interest = "voice_agents";
  } else if (
    containsAny(text, ["automation", "workflow", "crm", "calendar", "forms", "handoff", "sync", "reminder"])
  ) {
    interest = "automation";
  } else if (
    containsAny(text, ["report", "reporting", "dashboard", "analytics", "bi", "metrics", "visibility"])
  ) {
    interest = "reporting";
  }

  return { industry, interest };
}

function getIndustrySpecificRecommendation(industry: ConversationContext["industry"]) {
  if (industry === "clinic") {
    return "For a clinic or wellness business, the best first automation is usually reminders, rebooking, missed-call follow-up, or front-desk enquiry handling. That tends to save staff time quickly while also improving patient response speed.";
  }

  if (industry === "real_estate") {
    return "For a real estate team, the best first step is usually missed-call handling, instant lead response, qualification, and viewing coordination. Speed-to-lead matters a lot, so that is usually where value appears fastest.";
  }

  if (industry === "concierge") {
    return "For a concierge or premium service business, the best first step is usually fast first response and clean routing, especially for after-hours or high-intent enquiries where tone and responsiveness matter most.";
  }

  return "The best starting point is usually the workflow closest to revenue or time loss. For many businesses, that means missed calls, lead follow-up, booking flow, reminders, or CRM updates.";
}

function getInterestSpecificRecommendation(interest: ConversationContext["interest"]) {
  if (interest === "voice_agents") {
    return "Based on what you've asked so far, voice-agent style response sounds like the best first place to start.";
  }

  if (interest === "automation") {
    return "Based on what you've asked so far, workflow automation sounds like the strongest first step.";
  }

  if (interest === "reporting") {
    return "Based on what you've asked so far, reporting and visibility sound like the area you care about most.";
  }

  return "";
}

function getDravyxAnswer(question: string, context: ConversationContext): ChatReply {
  const text = question.toLowerCase();
  const serviceNames = serviceCards.map((service) => service.title);
  const servicePoints = serviceCards.flatMap((service) => service.points);
  const industriesList = industries.map((industry) => industry.name);
  const processNames = processSteps.map((step) => step.title);
  const mentionedIntegration = detectMentionedIntegration(text);
  const asksAboutIntegration = /(integrate|integration|connect|sync|work with|use with)/.test(text);
  const looksLikeToolQuestion =
    mentionedIntegration !== null &&
    (asksAboutIntegration || text.trim() === mentionedIntegration.toLowerCase() || text.split(/\s+/).length <= 5);

  if (/^(hi|hii|hello|hey|hey dravyx|yo|hola)\b/.test(text)) {
    return makeReply(
      "Hey, how can I help you today? You can ask me about our services, setup time, pricing, or what Dravyx AI can automate for your business.",
    );
  }

  if (/(how are you|how are you doing|how's it going|whats up|what's up)/.test(text)) {
    return makeReply(
      "I'm doing well, thanks for asking. I'm here to help you understand what Dravyx AI offers and what might be the best first automation for your business.",
    );
  }

  if (/(who are you|what are you|are you a bot)/.test(text)) {
    return makeReply(
      "I'm Dravyx, your website assistant. I can give quick answers about our voice agents, automation services, reporting, timelines, and next steps.",
    );
  }

  if (/(what is dravyx|what is dravyx ai|tell me about dravyx|about dravyx)/.test(text)) {
    return makeReply(
      "Dravyx AI helps service businesses respond faster, automate repetitive follow-up, and get clearer visibility into leads, bookings, and workflow performance. The offer is focused on three areas: voice agents, workflow automation, and strategic reporting.",
    );
  }

  if (/(thank you|thanks|thankyou|thx)/.test(text)) {
    return makeReply(
      "You're welcome. If you want, I can also help you figure out which Dravyx service is the best starting point for your business.",
    );
  }

  if (/(bye|goodbye|see you|talk later|catch you later)/.test(text)) {
    return makeReply(
      "Happy to help. If you need anything else, just ask. You can also book a strategy call whenever you're ready.",
      defaultContactLinkLabel,
      defaultContactLinkHref,
    );
  }

  if (/(price|pricing|cost|budget|quote)/.test(text)) {
    return makeReply(
      "Pricing depends on the workflow, channels, and tools involved. We usually recommend starting with one focused automation first, then expanding once it is working well. The best next step is a strategy call so we can scope it properly.",
      defaultContactLinkLabel,
      defaultContactLinkHref,
    );
  }

  if (/(roi|return|value|results|outcome|benefit|worth it)/.test(text)) {
    return makeReply(
      "The main business value usually comes from faster response, cleaner follow-up, lower admin load, and better visibility into what is converting. In practical terms, that often means fewer missed enquiries, less manual chasing, and a clearer path from inbound lead to booked next step.",
    );
  }

  if (looksLikeToolQuestion) {
    return buildKnownIntegrationAnswer(mentionedIntegration);
  }

  if (
    (asksAboutIntegration || /can you|do you|support/.test(text)) &&
    !mentionedIntegration &&
    /(salesforce|pipedrive|intercom|stripe|shopify|zendesk|xero|quickbooks|monday|notion|airtable|freshdesk|typeform|jotform|gmail|teams)/.test(
      text,
    )
  ) {
    return buildUnknownIntegrationAnswer();
  }

  if (/(integration|integrations|tools|software)/.test(text)) {
    return makeReply(
      `We try to work with the tools you already use instead of forcing a full replacement. Right now the integrations we actively mention on the site are ${joinLabels(integrationTools)}. If your stack includes something else, we can usually support custom integrations too. The best next step is to send us the exact tools and workflow through the contact form.`,
      defaultContactLinkLabel,
      defaultContactLinkHref,
    );
  }

  if (/(voice|phone|call|calls|whatsapp|inbound|lead response)/.test(text)) {
    return makeReply(
      "Yes, this is one of the main things we do. Dravyx AI offers voice agents for phone and WhatsApp so your business can respond instantly, qualify enquiries, and hand over clean next steps without missing the first conversation.",
    );
  }

  if (/(missed call|missed calls|missed enquiry|missed enquiries|slow response|speed to lead)/.test(text)) {
    return makeReply(
      "That is exactly the kind of problem Dravyx AI is designed to solve. We help businesses respond faster to missed calls and new enquiries so leads do not go cold while your team is busy or offline.",
    );
  }

  if (/(follow up|follow-up|followups|chasing leads|reminder|reminders|rebooking)/.test(text)) {
    return makeReply(
      "Yes. Dravyx AI can automate follow-up, reminders, rebooking, and handoff flows so your team does not have to manually chase every step. This is especially useful when a lot of admin sits between the first enquiry and the actual booking.",
    );
  }

  if (/(automation|workflow|crm|calendar|forms|handoff|sync)/.test(text)) {
    return makeReply(
      "We build workflow automation that connects the tools you already use, such as CRM, forms, calendars, notifications, and follow-up, so your team spends less time on repetitive manual work and your process feels smoother.",
    );
  }

  if (/(report|reporting|dashboard|analytics|bi|visibility|metrics)/.test(text)) {
    return makeReply(
      "Dravyx AI also provides strategic reporting so you can clearly see response time, enquiry quality, bookings, and where revenue leakage or process issues need attention. The idea is to make decision-making clearer, not just automate tasks.",
    );
  }

  if (/(monthly|optimi[sz]e|improve after launch|after launch|ongoing|support)/.test(text)) {
    return makeReply(
      "After launch, the work should not just sit there. We review performance, look at the numbers, and refine the workflow based on real enquiries so the system keeps improving over time.",
    );
  }

  if (/(how long|timeline|setup|launch|weeks|go live)/.test(text)) {
    return makeReply(
      "Most focused setups can go live within a few weeks. Voice-agent projects are often live in 2 to 4 weeks, and lighter workflow automations can move even faster when the process and tools are already clear.",
    );
  }

  if (/(how does it work|process|steps|implementation|delivery|plan)/.test(text)) {
    return makeReply(
      `The process is intentionally simple: ${joinLabels(processNames)}. In practice, that means we first identify the workflow with the clearest business impact, agree the scope and timeline, build and test it properly, then launch and improve based on real usage.`,
    );
  }

  if (/(arabic|english|language|bilingual)/.test(text)) {
    return makeReply(
      "Yes. Dravyx AI can support both Arabic and English customer-facing workflows depending on the channel and use case.",
    );
  }

  if (/(what do you do|what can you do|what can dravyx do|how can you help)/.test(text)) {
    return makeReply(
      `Dravyx AI helps service businesses in three main ways: ${joinLabels(serviceNames)}. That usually means faster first response, less repetitive admin, and better visibility into what is happening across enquiries and bookings.`,
    );
  }

  if (/(which service|what should i choose|where should i start|best first step|recommend|recommendation|what should we automate first)/.test(text)) {
    const industryRecommendation = getIndustrySpecificRecommendation(context.industry);
    const interestRecommendation = getInterestSpecificRecommendation(context.interest);

    return makeReply(
      `${industryRecommendation}${interestRecommendation ? ` ${interestRecommendation}` : ""} If you want, I can also suggest the most practical first use case based on your business type.`,
    );
  }

  if (/(real estate|estate agency|property)/.test(text)) {
    return makeReply(
      "Real estate is a strong fit for Dravyx AI because speed-to-lead matters so much. We can help with instant response, lead qualification, viewing coordination, and reducing the time it takes for a new enquiry to reach the right agent.",
    );
  }

  if (/(clinic|medical|doctor|dental|wellness|healthcare)/.test(text)) {
    return makeReply(
      "Clinics and wellness businesses are a good fit when the front desk is overloaded with reminders, repeat questions, bookings, and rebooking. Dravyx AI can reduce routine admin so staff can focus on higher-value patient communication.",
    );
  }

  if (/(concierge|luxury|premium|hospitality)/.test(text)) {
    return makeReply(
      "Luxury concierge and premium service businesses are a strong fit when clients expect fast, polished replies at any hour. Dravyx AI helps maintain responsiveness without making the customer experience feel robotic.",
    );
  }

  if (/(industry|fit|is this for me|is this suitable|good fit|my business)/.test(text)) {
    return makeReply(
      `Dravyx AI is generally a good fit for service-led businesses that deal with regular enquiries, follow-up, reminders, bookings, or front-office admin. Strong examples include ${joinLabels(industriesList)} and similar teams where response speed and workflow clarity matter.`,
    );
  }

  if (/(i run|we run|my business is|we are a|i own|we own)/.test(text) && context.industry) {
    return makeReply(
      `${getIndustrySpecificRecommendation(context.industry)} If you want, ask me what Dravyx AI would automate first for that kind of business and I can make it more specific.`,
    );
  }

  if (/(replace|team|staff|human)/.test(text)) {
    return makeReply(
      "The goal is not to replace your team. Dravyx AI handles repetitive tasks and first-line communication so your team can focus on higher-value conversations and closing.",
    );
  }

  if (/(human handoff|handoff|escalate|complex question)/.test(text)) {
    return makeReply(
      "A good automation should know when to hand things over. Dravyx AI is designed so important or more complex conversations can be routed to a human when needed instead of forcing everything through automation.",
    );
  }

  if (/(security|safe|privacy|data)/.test(text)) {
    return makeReply(
      "We keep the approach practical and business-focused. Exact data handling depends on the workflow and tools involved, but the general principle is to use only the systems needed for delivery and keep the setup appropriate to the business context. If data handling is important for your team, that should be covered in scoping.",
    );
  }

  if (/(contact|book|call|demo|talk|meeting)/.test(text)) {
    return makeReply(
      "You can book a strategy call through the contact page. That is the fastest way to choose the right first workflow and understand what Dravyx AI should automate first for your business.",
      defaultContactLinkLabel,
      defaultContactLinkHref,
    );
  }

  if (/(services|offer|do you do|what do you offer|help)/.test(text)) {
    return makeReply(
      `We focus on three core services: ${joinLabels(serviceNames)}. Typical delivery includes ${joinLabels(servicePoints.slice(0, 6))}, depending on the workflow and business need.`,
    );
  }

  if (/(contact details|email|location|dubai|where are you based)/.test(text)) {
    return makeReply(
      "Dravyx AI is positioned for Dubai-based service businesses. If you want to move forward, the simplest route is the contact page where you can send a project enquiry and book a strategy call.",
      defaultContactLinkLabel,
      defaultContactLinkHref,
    );
  }

  if (/(faq|common question|questions)/.test(text)) {
    return makeReply(
      `The most common questions we get are about who the service is for, what to automate first, setup time, whether it works with current tools, and what happens after launch. If you want, ask me one of those directly and I can answer in more detail.`,
    );
  }

  const matchingFaq = faqs.find((faq) => text.includes(faq.question.toLowerCase().replace("?", "")));
  if (matchingFaq) {
    return makeReply(matchingFaq.answer);
  }

  return makeReply(
    "Yes, custom integrations are possible as well. If you share the tools you use and what you want the workflow to do, we can review it and recommend the best setup for your business.",
    defaultContactLinkLabel,
    defaultContactLinkHref,
  );
}

function RobotAvatar({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "dravyx-bot dravyx-bot-compact" : "dravyx-bot"} aria-hidden="true">
      <div className="dravyx-bot-antenna" />
      <div className="dravyx-bot-head">
        <span className="dravyx-bot-ear dravyx-bot-ear-left" />
        <span className="dravyx-bot-ear dravyx-bot-ear-right" />
        <div className="dravyx-bot-face">
          <span className="dravyx-bot-eye" />
          <span className="dravyx-bot-eye" />
          <span className="dravyx-bot-mouth" />
        </div>
      </div>
      <div className="dravyx-bot-body" />
    </div>
  );
}

export default function AskDravyxChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ConversationContext>({
    industry: null,
    interest: null,
  });
  const endRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed || isTyping) {
      return;
    }

    const userMessage: ChatMessage = {
      id: messageId++,
      role: "user",
      text: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    const nextContext = inferConversationContext(trimmed, context);
    setContext(nextContext);
    const response = getDravyxAnswer(trimmed, nextContext);
    const typingDelay = 2200 + Math.floor(Math.random() * 700);

    timerRef.current = window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: messageId++,
          role: "bot",
          text: response.text,
          linkLabel: response.linkLabel,
          linkHref: response.linkHref,
        },
      ]);
      setIsTyping(false);
      timerRef.current = null;
    }, typingDelay);
  }

  return (
    <div className="ask-dravyx-shell">
      {isOpen ? (
        <section className="ask-dravyx-panel" aria-label="Ask Dravyx chat assistant">
          <div className="ask-dravyx-header">
            <div className="ask-dravyx-header-brand">
              <RobotAvatar compact />
              <div>
                <strong>Ask Dravyx</strong>
                <p>Quick answers about what we offer.</p>
              </div>
            </div>
            <button
              type="button"
              className="ask-dravyx-close"
              aria-label="Collapse Ask Dravyx chat"
              onClick={() => setIsOpen(false)}
            >
              <span />
              <span />
            </button>
          </div>

          <div className="ask-dravyx-messages">
            {messages.map((message) => (
              <article
                key={message.id}
                className={
                  message.role === "bot"
                    ? "ask-dravyx-message ask-dravyx-message-bot"
                    : "ask-dravyx-message ask-dravyx-message-user"
                }
              >
                <p>{message.text}</p>
                {message.role === "bot" && message.linkLabel && message.linkHref ? (
                  <Link className="ask-dravyx-message-link" to={message.linkHref} onClick={() => setIsOpen(false)}>
                    {message.linkLabel}
                  </Link>
                ) : null}
              </article>
            ))}

            {isTyping ? (
              <article className="ask-dravyx-message ask-dravyx-message-bot ask-dravyx-message-typing">
                <div className="ask-dravyx-typing" aria-label="Dravyx is typing">
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            ) : null}
            <div ref={endRef} />
          </div>

          <form className="ask-dravyx-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about services, setup, pricing..."
              aria-label="Ask Dravyx a question"
            />
            <button className="ask-dravyx-send" type="submit" disabled={!input.trim() || isTyping}>
              Send
            </button>
          </form>
          <p className="ask-dravyx-note">
            Please avoid sharing sensitive personal or confidential information in chat.
          </p>
        </section>
      ) : null}

      <button
        type="button"
        className="ask-dravyx-toggle"
        aria-label={isOpen ? "Collapse Ask Dravyx" : "Open Ask Dravyx"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <RobotAvatar />
        <div className="ask-dravyx-toggle-copy">
          <strong>Ask Dravyx</strong>
          <span>Chat with our assistant</span>
        </div>
      </button>
    </div>
  );
}
