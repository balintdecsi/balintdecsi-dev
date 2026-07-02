import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/featured/msc-thesis")({
  head: () => ({
    meta: [
      { title: "MSc capstone — Budapest rental prediction — Bálint Décsi" },
      {
        name: "description",
        content:
          "Public summary of my CEU MSc Business Analytics capstone with ingatlan.com: temporal validation, medallion pipeline, geospatial enrichment on H3, model leaderboard, SHAP diagnostics, and product recommendations.",
      },
      { property: "og:title", content: "MSc capstone — Budapest rental prediction" },
      {
        property: "og:description",
        content:
          "End-to-end modelling report: temporal CV, WorldPop + Sentinel-2 NDVI on H3, boosting leaderboard, SHAP.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://balintdecsi.dev/featured/msc-thesis" },
    ],
    links: [{ rel: "canonical", href: "https://balintdecsi.dev/featured/msc-thesis" }],
  }),
  component: Report,
});

function Kicker({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs text-[color:var(--color-ink-muted)] uppercase tracking-widest mt-10 mb-1">
      <span className="mr-2">[§{id}]</span>
      {children}
    </p>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: React.ReactNode;
}) {
  return (
    <figure className="my-4 border border-[color:var(--color-rule)] bg-white p-3">
      <img src={src} alt={alt} loading="lazy" className="w-full h-auto" />
      {caption && (
        <figcaption className="font-mono text-xs text-[color:var(--color-ink-muted)] mt-2 px-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Report() {
  return (
    <article className="max-w-none">
      <p className="font-mono text-xs text-[color:var(--color-ink-muted)] mb-2">
        <Link to="/featured" className="no-underline hover:underline">
          ← featured
        </Link>
      </p>
      <h1 className="text-3xl sm:text-4xl mt-2 mb-2">
        Budapest rental price prediction
      </h1>
      <p className="italic text-[color:var(--color-ink-muted)] mb-1">
        A reproducible offline modelling artifact for ingatlan.com's data team —
        temporal validation, geospatial enrichment, and model diagnostics.
      </p>
      <p className="font-mono text-xs text-[color:var(--color-ink-muted)] mb-4">
        MSc Business Analytics · Central European University · June 2026 ·{" "}
        <a
          href="https://github.com/balintdecsi/ceu-public-thesis"
          className="underline"
        >
          source repo ↗
        </a>
      </p>

      <nav className="font-mono text-xs text-[color:var(--color-ink-muted)] border-y border-[color:var(--color-rule)] py-2 my-4 flex flex-wrap gap-x-4 gap-y-1">
        <a href="#decision" className="no-underline hover:underline">[decision]</a>
        <a href="#data" className="no-underline hover:underline">[data]</a>
        <a href="#pipeline" className="no-underline hover:underline">[pipeline]</a>
        <a href="#models" className="no-underline hover:underline">[models]</a>
        <a href="#features" className="no-underline hover:underline">[features]</a>
        <a href="#geo" className="no-underline hover:underline">[geo]</a>
        <a href="#product" className="no-underline hover:underline">[product]</a>
        <a href="#risks" className="no-underline hover:underline">[risks]</a>
        <a href="#appendix" className="no-underline hover:underline">[appendix]</a>
      </nav>

      {/* Decision */}
      <section id="decision">
        <Kicker id="1">The decision this supports</Kicker>
        <h2 className="text-2xl mb-2">Can we suggest a credible rent at upload?</h2>
        <p>
          The product question: can ingatlan.com show landlords a credible rent
          suggestion during listing upload, so they price competitively and
          reduce time-on-market? The capstone stays offline — modelling and
          recommendations, not deployment or A/B testing.
        </p>
        <ul className="mt-2">
          <li><strong>Scope:</strong> Budapest rental flats.</li>
          <li><strong>Target:</strong> monthly rent per square metre (HUF/sqm).</li>
          <li><strong>Metric:</strong> MdAPE — typical absolute % miss.</li>
          <li><strong>Success criterion:</strong> ≤10% MdAPE, set by the client. Met at ~9.8% in time-ordered CV.</li>
        </ul>
      </section>

      {/* Data */}
      <section id="data">
        <Kicker id="2">Data & temporal validation</Kicker>
        <h2 className="text-2xl mb-2">Why the newest 20% is reserved</h2>
        <p>
          Budapest rental prices move quickly, so a random split would leak
          market-regime information from the future. Candidate selection uses
          rolling time-series CV on older listings; a frozen holdout on the
          newest 20% is kept for the eventual production go/no-go.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
          {[
            ["50,898", "modelling rows", "Budapest rental flats, through 2026-06-02"],
            ["40,718", "train rows", "2021-01-01 → 2025-11-29"],
            ["10,180", "holdout rows", "2025-11-29 → 2026-06-02"],
            ["+17.6%", "test-period rent shift", "median HUF/sqm higher in newest 20%"],
          ].map(([v, l, n]) => (
            <div key={l} className="border border-[color:var(--color-rule)] p-3">
              <div className="text-2xl font-mono">{v}</div>
              <div className="font-mono text-xs uppercase tracking-wide">{l}</div>
              <div className="font-mono text-xs text-[color:var(--color-ink-muted)] mt-1">{n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section id="pipeline">
        <Kicker id="3">Pipeline · medallion architecture</Kicker>
        <h2 className="text-2xl mb-2">Bronze → silver → gold</h2>
        <p>
          The medallion pattern layers a warehouse into three progressively
          curated tiers. <strong>Bronze</strong> is raw ingested data as it
          arrived, with lineage but no cleaning.{" "}
          <strong>Silver</strong> is typed, deduplicated, and quality-checked
          — the same shape as source but trustworthy.{" "}
          <strong>Gold</strong> is modelling-ready feature marts: business
          rules applied, scope filters baked in, joins with enrichment tables
          done.
        </p>
        <p>
          This capstone follows the same shape: raw listing dumps land in a
          bronze layer, the data-prep pipeline produces a cleaned silver
          extract, and the modelling table plus geospatial features form the
          gold layer that CV and the holdout consume.
        </p>
        <pre className="font-mono text-xs sm:text-sm border border-[color:var(--color-rule)] p-4 my-4 overflow-x-auto leading-relaxed">
{`  bronze                silver                 gold
  ──────                ──────                 ────
  raw dumps    ─────►   typed / cleaned  ────► modelling extract
  ingatlan.com          scope filters          + WorldPop lag features
  scrape                dedup + QA             + NDVI H3 features
                                               + 90-day comparable prior
                                                     │
                                                     ▼
                                          time-series CV  +  holdout`}
        </pre>
      </section>

      {/* Models */}
      <section id="models">
        <Kicker id="4">Model leaderboard</Kicker>
        <h2 className="text-2xl mb-2">Boosting clears the 10% bar; linear stays close</h2>
        <p>
          Same target, same rolling time-series CV, same metric. Boosting
          leads at ~9.8–9.9% MdAPE, but well-specified linear models are only
          ~0.2 pp behind — and both are ~7 pp better than a district-median
          baseline. Stability and product fit matter more than the marginal
          CV gain.
        </p>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[color:var(--color-ink)]">
                <th className="text-left py-2 pr-4">model</th>
                <th className="text-right py-2 pr-4">CV MdAPE</th>
                <th className="text-right py-2 pr-4">CV MAPE</th>
                <th className="text-right py-2 pr-4">MAE HUF/sqm</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {[
                ["XGBoost (log price/sqm)", "9.84%", "12.19%", "629"],
                ["HistGradientBoosting", "9.86%", "12.24%", "632"],
                ["LightGBM", "9.94%", "12.33%", "635"],
                ["Ridge", "10.06%", "12.61%", "646"],
                ["OLS", "10.07%", "12.58%", "645"],
                ["Random Forest", "10.78%", "13.29%", "693"],
                ["district median (baseline)", "16.80%", "19.32%", "1,010"],
                ["dummy median (baseline)", "17.95%", "20.26%", "1,067"],
              ].map(([m, a, b, c]) => (
                <tr key={m} className="border-b border-[color:var(--color-rule)]">
                  <td className="py-1.5 pr-4">{m}</td>
                  <td className="py-1.5 pr-4 text-right">{a}</td>
                  <td className="py-1.5 pr-4 text-right">{b}</td>
                  <td className="py-1.5 pr-4 text-right">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section id="features">
        <Kicker id="5">What the model attends to</Kicker>
        <h2 className="text-2xl mb-2">Size, comparables, condition, location</h2>
        <p>
          Filling core structured fields matters more than adding NLP at this
          stage. The neighbourhood comparable prior and location features
          carry strong signal, confirming the client team's interim
          feedback. Importance is not causality — use it for field
          prioritization and sanity checks.
        </p>
        <p className="font-mono text-xs my-3">
          {["size & layout", "local comparables", "condition", "balcony ratio", "air conditioning", "centrality"]
            .map((tag) => `[${tag}]`)
            .join("  ")}
        </p>

        <Figure
          src="/thesis/shap_beeswarm.png"
          alt="SHAP beeswarm plot for the best model"
          caption="SHAP beeswarm — each dot is one held-out observation; horizontal position is contribution to predicted log HUF/sqm, colour is the feature value."
        />

        <h3 className="text-lg mt-6 mb-2">Interaction terms kept in the model</h3>
        <p>
          A small set of numeric interactions, chosen to represent plausible
          housing-market effects without exploding the one-hot feature
          space.
        </p>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[color:var(--color-ink)]">
                <th className="text-left py-2 pr-4">term</th>
                <th className="text-left py-2 pr-4">formula</th>
                <th className="text-left py-2 pr-4">interpretation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Distance × log area", "centrality × log(area)", "Centrality gradient differs by flat size."],
                ["Balcony × distance", "balcony × distance to centre", "Balcony premium may vary with centrality."],
                ["Elevator × floor", "elevator × floor number", "Higher floors are valued differently when an elevator exists."],
                ["Room equivalent × log area", "eff. rooms × log(area)", "Layout usefulness interacts with size."],
                ["Balcony-to-area ratio", "balcony size / area (capped)", "Bounded ratio, not simple multiplication."],
                ["Room density", "eff. rooms / area", "Captures compactness of the layout."],
              ].map(([t, f, i]) => (
                <tr key={t} className="border-b border-[color:var(--color-rule)]">
                  <td className="py-1.5 pr-4">{t}</td>
                  <td className="py-1.5 pr-4 font-mono text-xs">{f}</td>
                  <td className="py-1.5 pr-4">{i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Geo */}
      <section id="geo">
        <Kicker id="6">Geospatial enrichment</Kicker>
        <h2 className="text-2xl mb-2">Population and greenness, lagged and historized</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
          <div className="border border-[color:var(--color-rule)] p-3">
            <h3 className="text-lg mb-1">WorldPop</h3>
            <ul className="text-sm">
              <li>Hungary rasters, 2020–2025.</li>
              <li>H3 resolutions 6, 7, 8.</li>
              <li>Total population + age/sex cohorts.</li>
              <li>Lag: a 2025 listing sees 2024 features.</li>
            </ul>
          </div>
          <div className="border border-[color:var(--color-rule)] p-3">
            <h3 className="text-lg mb-1">NDVI greenness</h3>
            <ul className="text-sm">
              <li>Sentinel-2 L2A via Microsoft Planetary Computer.</li>
              <li>Summer composites, 2020–2025.</li>
              <li>H3 mean, p90, and pixel count.</li>
              <li>Point coverage ≈ 100% for the prototype.</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-[color:var(--color-ink-muted)] italic">
          Geospatial features stay lagged and source-dated to avoid leakage.
          Static land cover is useful for EDA but is not aligned with
          historized validation.
        </p>

        <h3 className="text-lg mt-8 mb-2">A quick primer on H3</h3>
        <p>
          H3 is Uber's open-source discrete global grid: the earth is tiled
          with hexagons, each with a stable string ID (e.g.{" "}
          <code className="font-mono text-xs">8830953b13fffff</code>).
          Hexagons are convenient because every neighbour is the same
          distance away, so aggregations and lookups behave uniformly.
          Resolution controls cell size — res 6 covers a metro area, res 7
          fits a district, and <strong>res 8</strong> (used below) is about
          the size of a few city blocks, matching how buyers think about
          local rent.
        </p>

        <div className="my-4 border border-[color:var(--color-rule)]">
          <iframe
            src="/thesis/ndvi_h3_r8_map.html"
            title="Sentinel-2 NDVI aggregated to H3 resolution 8 over Budapest"
            loading="lazy"
            className="w-full block"
            style={{ height: "60vh", minHeight: 420, border: 0 }}
          />
        </div>
        <p className="font-mono text-xs text-[color:var(--color-ink-muted)]">
          Fig. summer Sentinel-2 NDVI, aggregated to H3 res-8 cells over
          Budapest. Darker green = more vegetation, useful as a proxy for
          green-space amenity around a listing.
        </p>
      </section>

      {/* Product */}
      <section id="product">
        <Kicker id="7">Implications for the upload flow</Kicker>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
          <div className="border border-[color:var(--color-rule)] p-3">
            <h3 className="text-lg mb-1">Fields worth prioritizing</h3>
            <ul className="text-sm">
              <li>Area, rooms, and room density.</li>
              <li>Condition, comfort, subtype, heating.</li>
              <li>Balcony size relative to area.</li>
              <li>Air conditioning and equipment flags.</li>
              <li>District, zone, and enough address detail for local signal.</li>
            </ul>
          </div>
          <div className="border border-[color:var(--color-rule)] p-3">
            <h3 className="text-lg mb-1">Potential UX pattern</h3>
            <ul className="text-sm">
              <li>Predict HUF/sqm; multiply by area for total rent.</li>
              <li>Show a range when uncertainty is high.</li>
              <li>Suppress the suggestion when coverage or slice reliability is poor.</li>
              <li>Optionally show "what drives this estimate" via a local SHAP explanation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section id="risks">
        <Kicker id="8">Risks & recommended next steps</Kicker>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[color:var(--color-ink)]">
                <th className="text-left py-2 pr-4">risk</th>
                <th className="text-left py-2 pr-4">why it matters</th>
                <th className="text-left py-2 pr-4">mitigation in the artifact</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Temporal leakage / drift", "Prices move quickly.", "Chronological split, rolling CV, reserved newest 20%."],
                ["Aggregate metric hides local failure", "Districts / subtypes behave differently.", "District + subtype MdAPE slices before product claims."],
                ["Missing optional fields", "Model can lean on data users don't always provide.", "Pipeline imputation, coverage guardrail, missingness profile."],
                ["Scope creep to national rentals", "Budapest priors misprice countryside listings.", "Explicit Budapest-only pilot; retrain + validate for rollout."],
                ["Business-metric gap", "MdAPE gains may not reduce time-on-market.", "Acceptance bands + later link predictions to TOM / experiment."],
              ].map(([r, w, m]) => (
                <tr key={r} className="border-b border-[color:var(--color-rule)] align-top">
                  <td className="py-1.5 pr-4">{r}</td>
                  <td className="py-1.5 pr-4">{w}</td>
                  <td className="py-1.5 pr-4">{m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          {[
            ["1 · Freeze evaluation", "One-shot holdout run; publish MdAPE / MAPE / RMSE, total-rent errors, coverage, and slice diagnostics."],
            ["2 · Define UX bands", "Map the 10% MdAPE target to product behaviour: exact suggestion, range, or none."],
            ["3 · Pilot safely", "Budapest rental flats only; monitor input coverage and prediction drift."],
          ].map(([h, b]) => (
            <div key={h} className="border border-[color:var(--color-rule)] p-3">
              <div className="font-mono text-xs uppercase tracking-wide mb-1">{h}</div>
              <p className="text-sm m-0">{b}</p>
            </div>
          ))}
        </div>

        <p className="border-l-2 border-[color:var(--color-ink)] pl-3 italic text-sm">
          Bottom line: a credible, reproducible offline artifact and a
          practical roadmap. The remaining decision is product governance,
          not more exploratory modelling.
        </p>
      </section>

      {/* Appendix */}
      <section id="appendix">
        <Kicker id="A">Appendix</Kicker>
        <h2 className="text-2xl mb-2">Diagnostics, feature policy, data quality</h2>

        <Figure
          src="/thesis/shap_group_importance.png"
          alt="SHAP group importance"
          caption="SHAP group importance — magnitudes are in log-points, not raw HUF. For explanation and sanity checks, not causal claims."
        />

        <Figure
          src="/thesis/permutation_importance.png"
          alt="Permutation importance for the best model"
          caption="Permutation importance — drop in CV score when each feature is shuffled."
        />

        <h3 className="text-lg mt-6 mb-2">Feature policy</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
          <div className="border border-[color:var(--color-rule)] p-3">
            <div className="font-mono text-xs uppercase tracking-wide mb-1">included</div>
            <ul className="text-sm">
              <li>Core structure: area, rooms, floor, age.</li>
              <li>Quality / amenity: condition, comfort, subtype, furnishment, heating, balcony, aircon.</li>
              <li>Location: district / zone aggregates, distance to centre.</li>
              <li>Fold-safe 90-day neighbourhood prior + local deltas.</li>
              <li>Lagged WorldPop and NDVI features.</li>
            </ul>
          </div>
          <div className="border border-[color:var(--color-rule)] p-3">
            <div className="font-mono text-xs uppercase tracking-wide mb-1">excluded / constrained</div>
            <ul className="text-sm">
              <li>Rent per sqm is the target, never a feature.</li>
              <li>Total rent is not a feature.</li>
              <li>No fine-grained street or geo-cell identifiers.</li>
              <li>Listing text bodies not used; only language-presence flags.</li>
              <li>Model-specific filters stay downstream of the modelling table.</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg mt-6 mb-2">Data-quality summary</h3>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[color:var(--color-ink)]">
                <th className="text-left py-2 pr-4">check</th>
                <th className="text-left py-2 pr-4">result</th>
                <th className="text-left py-2 pr-4">action</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Duplicate records", "None observed", "Passes basic uniqueness."],
                ["Non-positive target / area", "None after filters", "OK after downstream scope rules."],
                ["Weak location quality", "~1% of rows", "Coverage guardrail; avoid forcing location features."],
                ["Building floor count missing", "~22%", "Resolved earlier contradiction; imputed inside CV folds."],
                ["Common charges missing", "~72%", "Useful when present; not a mandatory UI dependency."],
                ["Utility costs missing", "~48%", "Impute and monitor; potentially improve upload completion."],
              ].map(([c, r, a]) => (
                <tr key={c} className="border-b border-[color:var(--color-rule)] align-top">
                  <td className="py-1.5 pr-4">{c}</td>
                  <td className="py-1.5 pr-4 font-mono text-xs">{r}</td>
                  <td className="py-1.5 pr-4">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-mono text-xs text-[color:var(--color-ink-muted)] mt-6">
          Source repo:{" "}
          <a href="https://github.com/balintdecsi/ceu-public-thesis" className="underline">
            github.com/balintdecsi/ceu-public-thesis
          </a>
          {" · "}
          Original slide deck:{" "}
          <a
            href="https://balintdecsi.github.io/ceu-public-thesis/client_final_presentation_june2026.html"
            className="underline"
          >
            html deck ↗
          </a>
        </p>
      </section>
    </article>
  );
}