interface Stat {
  value: string;
  label: string;
}

interface HeroProps {
  stats: Stat[];
}

export function Hero({ stats }: HeroProps) {
  return (
    <section className="hero">
      <svg className="hero-mesh" id="heroMesh" viewBox="0 0 1180 620" preserveAspectRatio="xMidYMid slice" />
      <div className="wrap hero-inner">
        <span className="eyebrow">DFW-Based · Telecom &amp; Software Delivery Partner</span>
        <h1>
          Consulting built like a <em>resilient network</em> — redundant, tested, always in service.
        </h1>
        <p className="lead">
          Siami LLC delivers telecom, software, AI, consulting, and staffing engagements across the DFW area and beyond — from a single embedded expert to a fully managed turnkey program.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Scope an Engagement</a>
          <a href="#models" className="btn-ghost">See Engagement Models</a>
        </div>
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div key={`${stat.label}-${index}`}>
              <div className="num">{stat.value}</div>
              <div className="lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
