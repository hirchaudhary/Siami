export function About({ tags }) {
    return (React.createElement("div", { className: "wrap about" },
        React.createElement("div", { className: "about-visual" },
            React.createElement("svg", { id: "aboutMesh", viewBox: "0 0 400 400", width: "100%", height: "100%" })),
        React.createElement("div", null,
            React.createElement("span", { className: "tag", style: { fontFamily: 'IBM Plex Mono', fontSize: '12px', color: 'var(--coral-500)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' } }, "About Siami LLC"),
            React.createElement("h2", null, "Founded on telecom and RF delivery, built for the broader stack"),
            React.createElement("p", null, "Siami LLC is a DFW-area consulting and staffing firm covering Telecom, Software, AI, Consulting, and Staffing. We work with carriers, vendors, and enterprise technology teams who need delivery partners that understand both the RF and the software layers behind modern networks \u2014 from 5G RAN migrations to the cloud-native tooling that keeps them observable."),
            React.createElement("p", null, "Our engagements are shaped around how your organization actually procures talent: as an individual consultant, a corp-to-corp partner, a turnkey delivery team, or a staffing pipeline."),
            React.createElement("div", { className: "about-tags" }, tags.map((tag) => (React.createElement("span", { key: tag }, tag)))))));
}
