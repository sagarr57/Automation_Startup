import { PageHero } from "../components/PageHero";

export function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Basic terms for using the Dravyx AI website and contacting the team."
        description="This page outlines simple public terms for website use, enquiries, and project discussions."
      />
      <section className="stack">
        <article className="band-card">
          <h3>Website use</h3>
          <p>
            The information on this website is provided for general business and service
            information. It may change as our offer evolves.
          </p>
        </article>
        <article className="band-card">
          <h3>Project discussions</h3>
          <p>
            Any proposal, scope, pricing, or implementation timeline is only final once agreed in
            writing between Dravyx AI and the client.
          </p>
        </article>
        <article className="band-card">
          <h3>Liability</h3>
          <p>
            We aim to keep the website accurate and available, but we do not guarantee uninterrupted
            access or suitability for every use case.
          </p>
        </article>
      </section>
    </>
  );
}
