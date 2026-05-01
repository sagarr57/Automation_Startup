import { PageHero } from "../components/PageHero";

export function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How Dravyx AI handles website enquiries and shared information."
        description="This page is a simple public-facing privacy summary for website visitors and prospective clients."
      />
      <section className="stack">
        <article className="band-card">
          <h3>Information we collect</h3>
          <p>
            We may collect your name, email address, company details, and any project information
            you share through the contact form or direct outreach. Contact form submissions are
            stored securely so our team can respond to your enquiry.
          </p>
          <p>
            If you use the website chat assistant, we may also receive the questions or project
            details you choose to type into that chat.
          </p>
        </article>
        <article className="band-card">
          <h3>How we use it</h3>
          <p>
            We use this information to respond to enquiries, discuss potential projects, improve our
            service, and communicate relevant updates.
          </p>
        </article>
        <article className="band-card">
          <h3>Data handling</h3>
          <p>
            We do not sell your information. Data is only shared with tools or service providers
            required to operate the website, communication, or project delivery workflow.
          </p>
        </article>
      </section>
    </>
  );
}
