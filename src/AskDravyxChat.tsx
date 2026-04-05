import { FormEvent, useEffect, useRef, useState } from "react";
import { faqs, industries, processSteps, serviceCards } from "./siteData";

type ChatMessage = {
  id: number;
  role: "bot" | "user";
  text: string;
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

function getDravyxAnswer(question: string, context: ConversationContext) {
  const text = question.toLowerCase();
  const serviceNames = serviceCards.map((service) => service.title);
  const servicePoints = serviceCards.flatMap((service) => service.points);
  const industriesList = industries.map((industry) => industry.name);
  const processNames = processSteps.map((step) => step.title);

  if (/^(hi|hii|hello|hey|hey dravyx|yo|hola)\b/.test(text)) {
    return "Hey, how can I help you today? You can ask me about our services, setup time, pricing, or what Dravyx AI can automate for your business.";
  }

  if (/(how are you|how are you doing|how's it going|whats up|what's up)/.test(text)) {
    return "I'm doing well, thanks for asking. I'm here to help you understand what Dravyx AI offers and what might be the best first automation for your business.";
  }

  if (/(who are you|what are you|are you a bot)/.test(text)) {
    return "I'm Dravyx, your website assistant. I can give quick answers about our voice agents, automation services, reporting, timelines, and next steps.";
  }

  if (/(what is dravyx|what is dravyx ai|tell me about dravyx|about dravyx)/.test(text)) {
    return "Dravyx AI helps service businesses respond faster, automate repetitive follow-up, and get clearer visibility into leads, bookings, and workflow performance. The offer is focused on three areas: voice agents, workflow automation, and strategic reporting.";
  }

  if (/(thank you|thanks|thankyou|thx)/.test(text)) {
    return "You're welcome. If you want, I can also help you figure out which Dravyx service is the best starting point for your business.";
  }

  if (/(bye|goodbye|see you|talk later|catch you later)/.test(text)) {
    return "Happy to help. If you need anything else, just ask. You can also book a strategy call whenever you're ready.";
  }

  if (/(price|pricing|cost|budget|quote)/.test(text)) {
    return "Pricing depends on the workflow, channels, and tools involved. We usually recommend starting with one focused automation first, then expanding once it is working well. The best next step is a strategy call so we can scope it properly.";
  }

  if (/(roi|return|value|results|outcome|benefit|worth it)/.test(text)) {
    return "The main business value usually comes from faster response, cleaner follow-up, lower admin load, and better visibility into what is converting. In practical terms, that often means fewer missed enquiries, less manual chasing, and a clearer path from inbound lead to booked next step.";
  }

  if (/(voice|phone|call|calls|whatsapp|inbound|lead response)/.test(text)) {
    return "Yes, this is one of the main things we do. Dravyx AI offers voice agents for phone and WhatsApp so your business can respond instantly, qualify enquiries, and hand over clean next steps without missing the first conversation.";
  }

  if (/(missed call|missed calls|missed enquiry|missed enquiries|slow response|speed to lead)/.test(text)) {
    return "That is exactly the kind of problem Dravyx AI is designed to solve. We help businesses respond faster to missed calls and new enquiries so leads do not go cold while your team is busy or offline.";
  }

  if (/(follow up|follow-up|followups|chasing leads|reminder|reminders|rebooking)/.test(text)) {
    return "Yes. Dravyx AI can automate follow-up, reminders, rebooking, and handoff flows so your team does not have to manually chase every step. This is especially useful when a lot of admin sits between the first enquiry and the actual booking.";
  }

  if (/(automation|workflow|crm|calendar|forms|handoff|sync)/.test(text)) {
    return "We build workflow automation that connects the tools you already use, such as CRM, forms, calendars, notifications, and follow-up, so your team spends less time on repetitive manual work and your process feels smoother.";
  }

  if (/(integration|integrations|tools|software|hubspot|zoho|twilio|calendly|slack|google sheets|n8n|openai)/.test(text)) {
    return "We try to work with the tools you already use instead of forcing a full replacement. Typical integrations can include CRM, forms, calendars, WhatsApp, Twilio, Google Sheets, Slack, n8n, and related workflow tools depending on the project.";
  }

  if (/(report|reporting|dashboard|analytics|bi|visibility|metrics)/.test(text)) {
    return "Dravyx AI also provides strategic reporting so you can clearly see response time, enquiry quality, bookings, and where revenue leakage or process issues need attention. The idea is to make decision-making clearer, not just automate tasks.";
  }

  if (/(monthly|optimi[sz]e|improve after launch|after launch|ongoing|support)/.test(text)) {
    return "After launch, the work should not just sit there. We review performance, look at the numbers, and refine the workflow based on real enquiries so the system keeps improving over time.";
  }

  if (/(how long|timeline|setup|launch|weeks|go live)/.test(text)) {
    return "Most focused setups can go live within a few weeks. Voice-agent projects are often live in 2 to 4 weeks, and lighter workflow automations can move even faster when the process and tools are already clear.";
  }

  if (/(how does it work|process|steps|implementation|delivery|plan)/.test(text)) {
    return `The process is intentionally simple: ${joinLabels(processNames)}. In practice, that means we first identify the workflow with the clearest business impact, agree the scope and timeline, build and test it properly, then launch and improve based on real usage.`;
  }

  if (/(arabic|english|language|bilingual)/.test(text)) {
    return "Yes. Dravyx AI can support both Arabic and English customer-facing workflows depending on the channel and use case.";
  }

  if (/(what do you do|what can you do|what can dravyx do|how can you help)/.test(text)) {
    return `Dravyx AI helps service businesses in three main ways: ${joinLabels(serviceNames)}. That usually means faster first response, less repetitive admin, and better visibility into what is happening across enquiries and bookings.`;
  }

  if (/(which service|what should i choose|where should i start|best first step|recommend|recommendation|what should we automate first)/.test(text)) {
    const industryRecommendation = getIndustrySpecificRecommendation(context.industry);
    const interestRecommendation = getInterestSpecificRecommendation(context.interest);

    return `${industryRecommendation}${interestRecommendation ? ` ${interestRecommendation}` : ""} If you want, I can also suggest the most practical first use case based on your business type.`;
  }

  if (/(real estate|estate agency|property)/.test(text)) {
    return "Real estate is a strong fit for Dravyx AI because speed-to-lead matters so much. We can help with instant response, lead qualification, viewing coordination, and reducing the time it takes for a new enquiry to reach the right agent.";
  }

  if (/(clinic|medical|doctor|dental|wellness|healthcare)/.test(text)) {
    return "Clinics and wellness businesses are a good fit when the front desk is overloaded with reminders, repeat questions, bookings, and rebooking. Dravyx AI can reduce routine admin so staff can focus on higher-value patient communication.";
  }

  if (/(concierge|luxury|premium|hospitality)/.test(text)) {
    return "Luxury concierge and premium service businesses are a strong fit when clients expect fast, polished replies at any hour. Dravyx AI helps maintain responsiveness without making the customer experience feel robotic.";
  }

  if (/(industry|fit|is this for me|is this suitable|good fit|my business)/.test(text)) {
    return `Dravyx AI is generally a good fit for service-led businesses that deal with regular enquiries, follow-up, reminders, bookings, or front-office admin. Strong examples include ${joinLabels(industriesList)} and similar teams where response speed and workflow clarity matter.`;
  }

  if (/(i run|we run|my business is|we are a|i own|we own)/.test(text) && context.industry) {
    return `${getIndustrySpecificRecommendation(context.industry)} If you want, ask me what Dravyx AI would automate first for that kind of business and I can make it more specific.`;
  }

  if (/(replace|team|staff|human)/.test(text)) {
    return "The goal is not to replace your team. Dravyx AI handles repetitive tasks and first-line communication so your team can focus on higher-value conversations and closing.";
  }

  if (/(human handoff|handoff|escalate|complex question)/.test(text)) {
    return "A good automation should know when to hand things over. Dravyx AI is designed so important or more complex conversations can be routed to a human when needed instead of forcing everything through automation.";
  }

  if (/(security|safe|privacy|data)/.test(text)) {
    return "We keep the approach practical and business-focused. Exact data handling depends on the workflow and tools involved, but the general principle is to use only the systems needed for delivery and keep the setup appropriate to the business context. If data handling is important for your team, that should be covered in scoping.";
  }

  if (/(contact|book|call|demo|talk|meeting)/.test(text)) {
    return "You can book a strategy call through the contact page. That is the fastest way to choose the right first workflow and understand what Dravyx AI should automate first for your business.";
  }

  if (/(services|offer|do you do|what do you offer|help)/.test(text)) {
    return `We focus on three core services: ${joinLabels(serviceNames)}. Typical delivery includes ${joinLabels(servicePoints.slice(0, 6))}, depending on the workflow and business need.`;
  }

  if (/(contact details|email|location|dubai|where are you based)/.test(text)) {
    return "Dravyx AI is positioned for Dubai-based service businesses. If you want to move forward, the simplest route is the contact page where you can send a project enquiry and book a strategy call.";
  }

  if (/(faq|common question|questions)/.test(text)) {
    return `The most common questions we get are about who the service is for, what to automate first, setup time, whether it works with current tools, and what happens after launch. If you want, ask me one of those directly and I can answer in more detail.`;
  }

  const matchingFaq = faqs.find((faq) => text.includes(faq.question.toLowerCase().replace("?", "")));
  if (matchingFaq) {
    return matchingFaq.answer;
  }

  return "I can help with that. Dravyx AI is built for service businesses that want faster response, less manual work, and clearer visibility into enquiries, bookings, and follow-up. You can ask me about services, industries, setup time, integrations, pricing, reporting, or the best first workflow to automate.";
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
          text: response,
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
