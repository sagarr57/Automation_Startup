import { FormEvent, useState } from "react";
import { ContactReachLinks } from "../components/ContactReachLinks";
import { FoundingBadge } from "../components/FoundingBadge";
import { PageTitleBlock } from "../components/PageTitleBlock";
import { getSupabase, isSupabaseConfigured } from "../lib/supabaseClient";
import { CalendlyEmbed } from "../components/CalendlyEmbed";

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState<string | null>(null);

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setErrorText(null);

    if (!isSupabaseConfigured()) {
      setStatus("error");
      setErrorText("This form is not connected yet. Please reach out directly via email or WhatsApp.");
      return;
    }

    setStatus("sending");
    const supabase = getSupabase();
    const { error } = await supabase.from("enquiries").insert({
      name: name.trim(),
      email: email.trim(),
      company: company.trim() || null,
      message: message.trim(),
    });

    if (error) {
      setStatus("error");
      setErrorText(error.message);
      return;
    }

    setStatus("success");
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
  }

  return (
    <>
      <section className="contact-booking">
        <PageTitleBlock
          eyebrow="Book a Strategy Call"
          title="Pick a time that works for you."
          description="Choose a slot and we will review your biggest workflow gap, map the right first automation, and agree on next steps — all in 30 minutes."
        >
          <FoundingBadge standalone />
        </PageTitleBlock>
        <CalendlyEmbed />
      </section>

      <div className="contact-divider">
        <span>Or send a written enquiry</span>
      </div>

      <section className="contact-shell">
        <div className="contact-sidebar">
          <PageTitleBlock
            eyebrow="Written Enquiry"
            title="Prefer to write first?"
            description="Send us a message and we will get back to you within a few hours."
            headingLevel="h2"
          />

          <div className="contact-card contact-reach-card">
            <h2>Reach us directly</h2>
            <ContactReachLinks />
          </div>
        </div>

        <div className="contact-card contact-form-card">
          <h2>Project enquiry</h2>
          <p className="contact-form-note-founding">
            We are currently onboarding our first clients at a founding rate.
            Early partners get priority support, direct founder access, and locked-in pricing.
          </p>

          {status === "success" ? (
            <p className="contact-form-success" role="status">
              Thanks, we received your enquiry. We will get back to you shortly — usually within a few hours.
            </p>
          ) : null}
          {status === "error" && errorText ? (
            <p className="contact-form-error" role="alert">
              {errorText}
            </p>
          ) : null}

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={status === "sending"}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "sending"}
              />
            </label>
            <label>
              <span>Company</span>
              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                disabled={status === "sending"}
              />
            </label>
            <label>
              <span>What do you want to automate first?</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Lead response, reminders, CRM updates, reporting..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={status === "sending"}
              />
            </label>
            <button
              className="button button-primary"
              type="submit"
              disabled={status === "sending" || status === "success"}
            >
              {status === "sending" ? "Sending…" : "Send enquiry"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
