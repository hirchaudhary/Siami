interface AboutProps {
  tags: string[];
}

export function About({ tags }: AboutProps) {
  return (
    <div className="wrap about">
      <div className="about-visual">
        <svg id="aboutMesh" viewBox="0 0 400 400" width="100%" height="100%" />
      </div>
      <div>
        <span className="tag" style={{ fontFamily: 'IBM Plex Mono', fontSize: '12px', color: 'var(--coral-500)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>About Siami LLC</span>
        <h2>Founded on telecom and RF delivery, built for the broader stack</h2>
        <p>Siami LLC is a DFW-area consulting and staffing firm covering Telecom, Software, AI, Consulting, and Staffing. We work with carriers, vendors, and enterprise technology teams who need delivery partners that understand both the RF and the software layers behind modern networks — from 5G RAN migrations to the cloud-native tooling that keeps them observable.</p>
        <p>Our engagements are shaped around how your organization actually procures talent: as an individual consultant, a corp-to-corp partner, a turnkey delivery team, or a staffing pipeline.</p>
        <div className="about-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
