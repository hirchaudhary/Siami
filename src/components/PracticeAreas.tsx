declare const React: any;

interface ServiceItem {
  title: string;
  description: string;
}

interface PracticeAreasProps {
  practices: ServiceItem[];
}

export function PracticeAreas({ practices }: PracticeAreasProps) {
  return (
    <div className="practices">
      {practices.map((practice) => (
        <div className="practice-card" key={practice.title}>
          <svg className="picon" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M17 4v8M9 12l8-8 8 8M6 30l11-20 11 20" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="17" cy="12" r="1.6" fill="currentColor" stroke="none" />
          </svg>
          <div>
            <h3>{practice.title}</h3>
            <p>{practice.description}</p>
          </div>
        </div>
      ))}
      <div className="practice-card" style={{ background: 'var(--navy-950)', color: 'var(--paper-50)' }}>
        <div>
          <div className="mono" style={{ fontSize: '12px', color: 'var(--amber-400)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Not sure which fits?</div>
          <h3 style={{ marginTop: '12px' }}>Let&apos;s scope it together</h3>
        </div>
        <a href="#contact" style={{ color: 'var(--coral-400)', fontWeight: 600, fontSize: '14.5px', marginTop: '16px', display: 'inline-block' }}>Talk to Siami →</a>
      </div>
    </div>
  );
}
