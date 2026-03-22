export default function SobrePage() {
  return (
    <main className="page-shell">
      <section className="content-shell">
        <span className="section-kicker">About</span>
        <h1 className="page-title">We select objects that carry identity, not trends.</h1>

        <div className="page-prose">
          <p>
            D&apos;OUTRO LADO is an independent curation platform created to connect
            refined Brazilian products with international clients who value
            design, authenticity and material quality.
          </p>

          <p>
            We work with a clear editorial standard: visual restraint, premium
            execution, discreet presence and export potential.
          </p>

          <p>
            Our focus is not mass retail. It is access. Access to Brazilian
            objects that deserve international visibility without losing their
            cultural clarity or formal elegance.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h2>Vision</h2>
              <p>
                Present Brazilian design with international discipline and premium
                visual language.
              </p>
            </div>

            <div className="about-card">
              <h2>Curation</h2>
              <p>
                Select products with strong material identity, clean aesthetics
                and no unnecessary visual noise.
              </p>
            </div>

            <div className="about-card">
              <h2>Brazil → World</h2>
              <p>
                Build a direct bridge between local production and buyers abroad
                without generic marketplace mediation.
              </p>
            </div>

            <div className="about-card">
              <h2>Criteria</h2>
              <p>
                Material quality, discreet sophistication, export compatibility
                and coherent presentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}