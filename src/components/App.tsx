import { About } from './About';
import { ContactSection } from './ContactSection';
import { EngagementModels } from './EngagementModels';
import { Header } from './Header';
import { Hero } from './Hero';
import { PracticeAreas } from './PracticeAreas';
import { SectionHeader } from './SectionHeader';
import { WhySiami } from './WhySiami';

interface Stat { value: string; label: string }
interface ServiceItem { title: string; description: string }
interface WhyItem { number: string; title: string; description: string }

const stats: Stat[] = [
  { value: '5', label: 'ENGAGEMENT MODELS' },
  { value: '3', label: 'CORE SERVICE PILLARS' },
  { value: '100%', label: 'DESIGN-LED APPROACH' },
  { value: '4W', label: 'FROM DISCOVERY TO LAUNCH' },
];

const engagementModels: ServiceItem[] = [
  { title: 'Discovery Workshop', description: 'We clarify your business goals, audience, and positioning so the design direction is rooted in real strategy.' },
  { title: 'Brand Direction', description: 'We shape your visual language, messaging, and tone to make the website feel consistent with your business and personality.' },
  { title: 'UX / UI Design', description: 'We design clear, conversion-focused experiences that make your offers easy to understand and easy to trust.' },
  { title: 'Website Development', description: 'We build polished, responsive websites that are fast, reliable, and easy to maintain as your business grows.' },
  { title: 'Launch Support', description: 'We refine the details after launch, optimize the experience, and help keep the site aligned with your goals.' },
];

const practiceAreas: ServiceItem[] = [
  { title: 'Brand Strategy', description: 'Positioning, messaging, and design direction that helps your business communicate clearly and feel memorable.' },
  { title: 'Web Design', description: 'High-converting landing pages and full website concepts designed to look polished and feel intuitive.' },
  { title: 'UX Design', description: 'User journeys, information architecture, and interface decisions built around how real visitors engage with your brand.' },
  { title: 'Development', description: 'Responsive front-end builds, component systems, and clean implementation that turns design into a working product.' },
  { title: 'Optimization', description: 'Refinement, improvements, and launch support to keep your website evolving with your business needs.' },
];

const whyItems: WhyItem[] = [
  { number: '01', title: 'Design-first process', description: 'We start with business context and visual direction so the site tells your story with clarity and intent.' },
  { number: '02', title: 'Built around your brand', description: 'Every visual decision is shaped around your positioning, goals, and the personal touch you want reflected online.' },
  { number: '03', title: 'Hands-on collaboration', description: 'You work closely with a partner who listens, iterates, and shapes the site around what matters most to you.' },
  { number: '04', title: 'Launch-ready execution', description: 'We translate strategy and design into a polished, responsive website that is ready to perform.' },
];

const aboutTags = ['Brand Strategy', 'UX / UI Design', 'Responsive Web Design', 'Front-End Development', 'Launch Support'];

export function App() {
  return (
    <div>
      <Header />
      <Hero stats={stats} />

      <section className="section" id="models">
        <div className="wrap">
          <SectionHeader
            tag="How We Engage"
            title="Five ways to bring Siami into your next website project"
            description="Every engagement is shaped around your business, your goals, and how much support you want at each step of the build."
          />
          <EngagementModels models={engagementModels} />
        </div>
      </section>

      <section className="section section-alt" id="practices">
        <div className="wrap">
          <SectionHeader
            tag="What We Do"
            title="Design and development support built around your business"
            description="From brand clarity to polished launch, our service areas are focused on creating a website that feels intentional, modern, and distinctly yours."
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
          <span>© 2026 Siami. All rights reserved.</span>
          <span className="mono">WEB DESIGN · UX · DEVELOPMENT · BRAND</span>
        </div>
      </footer>
    </div>
  );
}
