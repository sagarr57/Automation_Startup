import { FormEvent, useState } from "react";
import { getSupabase, isSupabaseConfigured } from "../lib/supabaseClient";

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
      setErrorText(
        "This form is not connected yet. Please email us directly or try again later.",
      );
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
      <section className="contact-shell">
        <div className="contact-sidebar">
          <div className="contact-intro">
            <p className="eyebrow">Contact</p>
            <h1>Book a strategy call and choose the right first workflow.</h1>
            <p className="page-copy">
              We will look at where you are losing time or leads, then map the best starting point.
            </p>
          </div>
          <div className="contact-card">
            <h2>What happens on the call</h2>
            <ul>
              <li>Review the workflow that is costing you time or revenue</li>
              <li>Choose the best first channel: phone, WhatsApp, web chat, or forms</li>
              <li>Agree on scope, timeline, and success measures</li>
            </ul>
          </div>
        </div>
        <div className="contact-card contact-form-card">
          <h2>Project enquiry</h2>
          {!isSupabaseConfigured() ? (
            <p className="contact-form-note">
              Online submissions are temporarily unavailable. Please use the email on this page or
              reach out via LinkedIn.
            </p>
          ) : null}
          {status === "success" ? (
            <p className="contact-form-success" role="status">
              Thanks, we received your enquiry. We will get back to you shortly.
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
