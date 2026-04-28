export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <p className="section-label mb-1" style={{ color: 'var(--amber)' }}>Our story</p>
        <h2 className="section-title mb-4" style={{ color: 'white' }}>About <span>Us</span></h2>
        <div className="row g-5 align-items-center">
          <div className="col-md-7">
            <p className="about-body mb-3">
              くちさびしい — <em>Kuchisabishii</em> — is a Japanese word without a direct English
              translation. It describes that feeling when your mouth is lonely; when you crave not
              out of hunger, but out of a deeper, almost emotional need to taste something.
            </p>
            <p className="about-body mb-3">
              We built this restaurant around that feeling. Founded by a Guyanese-Japanese family
              in 2010, Kuchisabishii started as a small weekend kitchen in Queens, New York, where
              neighbors would gather to share dishes that didn't belong to any single culture —
              they belonged to everyone.
            </p>
            <p className="about-body">
              Today, our menu draws from Japan, Guyana, India, Spain, and beyond. Every dish is
              made with locally-sourced ingredients and cooked with care that turns a meal into
              a memory. Come in whenever your mouth feels lonely.
            </p>
          </div>
          <div className="col-md-5">
            <p className="about-quote">
              "Food is the only universal language — we speak all of them."
              <span style={{ display: 'block', fontFamily: "'Noto Sans JP', sans-serif", fontStyle: 'normal', fontSize: '0.85rem', color: '#888', marginTop: 14, letterSpacing: 3 }}>
                — くちさびしい, since 2010
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
