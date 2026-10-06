import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <div className="wrap contact-grid">
      <div>
        <span className="mono" style={{ fontSize: '12px', color: 'var(--amber-400)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get In Touch</span>
        <h2 style={{ marginTop: '14px' }}>Let&apos;s build something that feels like you</h2>
        <p className="lead">Tell us what you&apos;re building, what you want your site to communicate, and where you want it to go next — we&apos;ll shape a proposal around your goals.</p>
        <div className="contact-info">
          <div>
            <div className="lbl">Location</div>
            <div className="val">United States</div>
          </div>
          <div>
            <div className="lbl">Email</div>
            <div className="val">siamifortech@gmail.com</div>
          </div>
          <div>
            <div className="lbl">Focus</div>
            <div className="val">Web Design · UX · Development · Brand</div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
