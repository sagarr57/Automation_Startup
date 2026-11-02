import { CtaBanner, defaultPrimaryCta } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { RoiEstimator } from "../components/RoiEstimator";
import { resultStories } from "../siteData";

export function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="What to Expect"
        title="The outcomes Dravyx AI is built to deliver."
        description="Every engagement is designed around one measurable improvement — faster response, cleaner follow-up, or reduced admin. Here is what that looks like across different industries."
      />
      <section className="results-card-grid card-grid">
        {resultStories.map((story) => (
          <article className="card result-card" key={story.vertical}>
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
      <RoiEstimator />
      <CtaBanner
        eyebrow="Ready to See This in Your Business"
        title="Start with the workflow that affects enquiries, bookings, or follow-up first."
        primary={defaultPrimaryCta}
        secondary={{ label: "See our shipped work", to: "/work" }}
      />
    </>
  );
}
