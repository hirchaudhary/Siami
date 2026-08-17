declare const React: any;

import { About } from './About.js';
import { ContactSection } from './ContactSection.js';
import { EngagementModels } from './EngagementModels.js';
import { Header } from './Header.js';
import { Hero } from './Hero.js';
import { PracticeAreas } from './PracticeAreas.js';
import { SectionHeader } from './SectionHeader.js';
import { WhySiami } from './WhySiami.js';

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
      <Header />
      <Hero stats={stats} />

      <section className="section" id="models">
        <div className="wrap">
          <SectionHeader
            tag="How We Engage"
            title="Five ways to bring Siami onto your program"
            description="Every engagement is scoped to how your team actually needs to work — whether that&apos;s one specialist or a fully staffed delivery unit."
          />
          <EngagementModels models={engagementModels} />
        </div>
      </section>

      <section className="section section-alt" id="practices">
        <div className="wrap">
          <SectionHeader
            tag="Where We Work"
            title="Practice areas built on real network experience"
            description="From RAN engineering to cloud-native software delivery, our practice areas reflect the full stack our consultants have actually operated in."
          />
          <PracticeAreas practices={practiceAreas} />
        </div>
      </section>

      <section className="section" id="why">
        <div className="wrap">
          <WhySiami items={whyItems} />
        </div>
      </section>

      <section className="section section-alt" id="about">
        <About tags={aboutTags} />
      </section>

      <section className="section contact" id="contact">
        <ContactSection />
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
