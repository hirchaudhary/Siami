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
        <span className="eyebrow">Custom digital experiences, tailored to your business</span>
        <h1>
          We don&apos;t just build a website — we shape a digital presence that feels like your business and carries your personal touch.
        </h1>
        <p className="lead">
          Siami designs and develops polished websites that balance strategy, aesthetics, and clarity for modern brands.
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
