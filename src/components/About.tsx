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
        <span className="tag" style={{ fontFamily: 'IBM Plex Mono', fontSize: '12px', color: 'var(--coral-500)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>About Siami</span>
        <h2>Design-led digital experiences tailored to your business</h2>
        <p>Siami helps founders, operators, and growing businesses translate their ideas into websites that feel clear, elevated, and true to who they are. We focus on making the site work for your business goals while reflecting the personality behind the brand.</p>
        <p>Whether you need a sharper online presence, a cleaner conversion path, or a full custom website that feels personal and intentional, we shape the process around your goals and your story.</p>
        <div className="about-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
