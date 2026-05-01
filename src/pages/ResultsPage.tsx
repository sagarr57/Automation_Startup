import { NavLink } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { resultStories } from "../siteData";

export function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Examples of where Dravyx AI creates practical business value."
        description="The focus stays simple: faster replies, cleaner follow-up, fewer missed opportunities, and better visibility into what is working."
      />
      <section className="card-grid">
        {resultStories.map((story) => (
          <article className="card" key={story.vertical}>
            <p className="mini-label">
              {story.category} / {story.vertical}
            </p>
            <h3>{story.headline}</h3>
            <p>{story.summary}</p>
            <ul>
              {story.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="cta-banner page-cta">
        <div>
          <p className="eyebrow">Need Similar Results</p>
          <h2>Start with the workflow that affects enquiries, bookings, or follow-up first.</h2>
        </div>
        <div className="cta-actions">
          <NavLink className="button button-primary" to="/contact">
            Book a strategy call
          </NavLink>
        </div>
      </section>
    </>
  );
}
