import { PageHero } from "../components/PageHero";
import { faqs } from "../siteData";

export function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions before starting."
        description="Straight answers on scope, timing, tools, and what the service actually does."
      />
      <section className="faq-list">
        {faqs.map((faq) => (
          <article className="faq-card" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </section>
    </>
  );
}
