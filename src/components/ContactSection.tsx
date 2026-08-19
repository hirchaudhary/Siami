import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
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
  );
}
