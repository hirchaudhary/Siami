declare const React: any;

interface WhyItem {
  number: string;
  title: string;
  description: string;
}

interface WhySiamiProps {
  items: WhyItem[];
}

export function WhySiami({ items }: WhySiamiProps) {
  return (
    <div className="why-grid">
      <div>
        <div className="sec-head" style={{ marginBottom: 0 }}>
          <span className="tag">Why Siami</span>
          <h2>Delivery that behaves like the networks we operate</h2>
        </div>
        <div className="why-list">
          {items.map((item) => (
            <div className="why-item" key={item.number}>
              <div className="why-num">{item.number}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="why-panel">
        <span className="tag">SIGNAL / STATUS</span>
        <h3>One point of contact. Full-stack accountability.</h3>
        <p>Whether you need one RF specialist for a migration sprint or a turnkey NOC transformation, Siami LLC scopes, staffs, and delivers under a single agreement.</p>
        <div className="signal">
          <div style={{ height: '40%', animationDelay: '0s' }} />
          <div style={{ height: '70%', animationDelay: '0.15s' }} />
          <div style={{ height: '100%', animationDelay: '0.3s' }} />
          <div style={{ height: '55%', animationDelay: '0.45s' }} />
          <div style={{ height: '85%', animationDelay: '0.6s' }} />
          <div style={{ height: '35%', animationDelay: '0.75s' }} />
        </div>
      </div>
    </div>
  );
}
