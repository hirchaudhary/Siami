import { ContactForm } from './ContactForm.js';
import { SectionHeader } from './SectionHeader.js';

declare const React: any;

interface Stat { value: string; label: string }
interface ServiceItem { title: string; description: string }
interface WhyItem { number: string; title: string; description: string }

const stats: Stat[] = [
  { value: '15+', label: 'YRS TELECOM / RF DELIVERY' },
  { value: '5', label: 'ENGAGEMENT MODELS' },
  { value: '5', label: 'PRACTICE AREAS' },
  { value: '1000s', label: 'SITES / NODES MANAGED' },
];

const engagementModels: ServiceItem[] = [
  { title: 'Individual Consulting', description: 'A single senior specialist embedded directly with your team for hands-on delivery, design review, or advisory work.' },
  { title: 'Corp-to-Corp (C2C)', description: 'Contract engagements between Siami LLC and your organization, with consultants deployed under our entity.' },
  { title: 'Turnkey Project', description: 'Fixed-scope, fixed-outcome delivery — Siami owns planning, execution, and results against an agreed statement of work.' },
  { title: 'Time & Expense', description: 'Flexible T&E billing for evolving scopes, ideal for exploratory work or programs without a fixed end state.' },
  { title: 'Staff Augmentation', description: 'We source and provide vetted consultants who plug directly into your existing team and reporting structure.' },
];

const practiceAreas: ServiceItem[] = [
  { title: 'Telecom', description: 'RAN, RF, and 5G/LTE engineering — KPI monitoring, performance validation, migration programs, and fault isolation across large multi-vendor networks.' },
  { title: 'Software', description: 'Cloud-native platforms, observability tooling, and integration work supporting service assurance and operational systems.' },
  { title: 'AI', description: 'Applied AI for network operations — anomaly detection, predictive fault isolation, and automation layered onto existing NOC workflows.' },
  { title: 'Consulting', description: 'Program and project management for large-scale operational improvement initiatives — incident management, NOC design, and process transformation.' },
  { title: 'Staffing', description: 'Sourcing and placing vetted telecom and software talent — from single specialists to full delivery teams — matched to your program\'s pace.' },
];

const whyItems: WhyItem[] = [
  { number: '01', title: 'Operator-grade experience', description: 'Our consultants have run service assurance, NOC, and RF programs at carrier scale — not just advised on them.' },
  { number: '02', title: 'Flexible commercial structure', description: 'C2C, T&E, turnkey, or staff augmentation — we adapt to your procurement model, not the other way around.' },
  { number: '03', title: 'DFW-rooted, nationally deployed', description: 'Based in the DFW metro with the reach to staff and deliver programs across markets.' },
  { number: '04', title: 'Fault-isolation mindset', description: 'We diagnose root causes before proposing scope — the same discipline used to isolate faults across thousands of network sites.' },
];

const aboutTags = ['RAN / RF Engineering', '5G & LTE Migration', 'NOC & Incident Mgmt', 'Service Assurance', 'Cloud-Native Ops'];

export function App() {
  return (
    <div>
      <header>
        <nav className="wrap">
          <a href="#">
            <img className="brand-mark" src="./siami-logo.png" alt="Siami logo" />
          </a>
          <div className="navlinks" id="navlinks">
            <a href="#models">Engagement Models</a>
            <a href="#practices">Practice Areas</a>
            <a href="#why">Why Siami</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">Start a Conversation</a>
          </div>
          <button className="hamburger" id="hamburger" aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <section className="hero">
        <svg className="hero-mesh" id="heroMesh" viewBox="0 0 1180 620" preserveAspectRatio="xMidYMid slice" />
        <div className="wrap hero-inner">
          <span className="eyebrow">DFW-Based · Telecom & Software Delivery Partner</span>
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

      <section className="section" id="models">
        <div className="wrap">
          <SectionHeader
            tag="How We Engage"
            title="Five ways to bring Siami onto your program"
            description="Every engagement is scoped to how your team actually needs to work — whether that&apos;s one specialist or a fully staffed delivery unit."
          />
          <div className="models">
            {engagementModels.map((model, index) => (
              <div className="model-card" key={model.title}>
                <div className="model-idx">MODEL / {String(index + 1).padStart(2, '0')}</div>
                <h3>{model.title}</h3>
                <p className="model-desc">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="practices">
        <div className="wrap">
          <SectionHeader
            tag="Where We Work"
            title="Practice areas built on real network experience"
            description="From RAN engineering to cloud-native software delivery, our practice areas reflect the full stack our consultants have actually operated in."
          />
          <div className="practices">
            {practiceAreas.map((practice) => (
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
        </div>
      </section>

      <section className="section" id="why">
        <div className="wrap why-grid">
          <div>
            <div className="sec-head" style={{ marginBottom: 0 }}>
              <span className="tag">Why Siami</span>
              <h2>Delivery that behaves like the networks we operate</h2>
            </div>
            <div className="why-list">
              {whyItems.map((item) => (
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
      </section>

      <section className="section section-alt" id="about">
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
              {aboutTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="wrap contact-grid">
          <div>
            <span className="mono" style={{ fontSize: '12px', color: 'var(--amber-400)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get In Touch</span>
            <h2 style={{ marginTop: '14px' }}>Let&apos;s scope your next engagement</h2>
            <p className="lead">Tell us what you&apos;re trying to deliver and how you&apos;d like to engage — we&apos;ll follow up with a fit and a proposed model.</p>
            <div className="contact-info">
              <div>
                <div className="lbl">Location</div>
                <div className="val">DFW Metro, Texas</div>
              </div>
              <div>
                <div className="lbl">Email</div>
                <div className="val">hello@siamillc.com</div>
              </div>
              <div>
                <div className="lbl">Practice Areas</div>
                <div className="val">Telecom · Software · AI · Consulting · Staffing</div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>© 2026 Siami LLC. All rights reserved.</span>
          <span className="mono">TELECOM · SOFTWARE · AI · CONSULTING · STAFFING</span>
        </div>
      </footer>
    </div>
  );
}
