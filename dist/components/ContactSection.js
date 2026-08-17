import { ContactForm } from './ContactForm.js';
export function ContactSection() {
    return (React.createElement("div", { className: "wrap contact-grid" },
        React.createElement("div", null,
            React.createElement("span", { className: "mono", style: { fontSize: '12px', color: 'var(--amber-400)', letterSpacing: '0.12em', textTransform: 'uppercase' } }, "Get In Touch"),
            React.createElement("h2", { style: { marginTop: '14px' } }, "Let's scope your next engagement"),
            React.createElement("p", { className: "lead" }, "Tell us what you're trying to deliver and how you'd like to engage \u2014 we'll follow up with a fit and a proposed model."),
            React.createElement("div", { className: "contact-info" },
                React.createElement("div", null,
                    React.createElement("div", { className: "lbl" }, "Location"),
                    React.createElement("div", { className: "val" }, "DFW Metro, Texas")),
                React.createElement("div", null,
                    React.createElement("div", { className: "lbl" }, "Email"),
                    React.createElement("div", { className: "val" }, "hello@siamillc.com")),
                React.createElement("div", null,
                    React.createElement("div", { className: "lbl" }, "Practice Areas"),
                    React.createElement("div", { className: "val" }, "Telecom \u00B7 Software \u00B7 AI \u00B7 Consulting \u00B7 Staffing")))),
        React.createElement(ContactForm, null)));
}
