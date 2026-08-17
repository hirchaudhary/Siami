export function PracticeAreas({ practices }) {
    return (React.createElement("div", { className: "practices" },
        practices.map((practice) => (React.createElement("div", { className: "practice-card", key: practice.title },
            React.createElement("svg", { className: "picon", viewBox: "0 0 34 34", fill: "none", stroke: "currentColor", strokeWidth: "1.6" },
                React.createElement("path", { d: "M17 4v8M9 12l8-8 8 8M6 30l11-20 11 20", strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement("circle", { cx: "17", cy: "12", r: "1.6", fill: "currentColor", stroke: "none" })),
            React.createElement("div", null,
                React.createElement("h3", null, practice.title),
                React.createElement("p", null, practice.description))))),
        React.createElement("div", { className: "practice-card", style: { background: 'var(--navy-950)', color: 'var(--paper-50)' } },
            React.createElement("div", null,
                React.createElement("div", { className: "mono", style: { fontSize: '12px', color: 'var(--amber-400)', letterSpacing: '0.08em', textTransform: 'uppercase' } }, "Not sure which fits?"),
                React.createElement("h3", { style: { marginTop: '12px' } }, "Let's scope it together")),
            React.createElement("a", { href: "#contact", style: { color: 'var(--coral-400)', fontWeight: 600, fontSize: '14.5px', marginTop: '16px', display: 'inline-block' } }, "Talk to Siami \u2192"))));
}
