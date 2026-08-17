export function Hero({ stats }) {
    return (React.createElement("section", { className: "hero" },
        React.createElement("svg", { className: "hero-mesh", id: "heroMesh", viewBox: "0 0 1180 620", preserveAspectRatio: "xMidYMid slice" }),
        React.createElement("div", { className: "wrap hero-inner" },
            React.createElement("span", { className: "eyebrow" }, "DFW-Based \u00B7 Telecom & Software Delivery Partner"),
            React.createElement("h1", null,
                "Consulting built like a ",
                React.createElement("em", null, "resilient network"),
                " \u2014 redundant, tested, always in service."),
            React.createElement("p", { className: "lead" }, "Siami LLC delivers telecom, software, AI, consulting, and staffing engagements across the DFW area and beyond \u2014 from a single embedded expert to a fully managed turnkey program."),
            React.createElement("div", { className: "hero-actions" },
                React.createElement("a", { href: "#contact", className: "btn-primary" }, "Scope an Engagement"),
                React.createElement("a", { href: "#models", className: "btn-ghost" }, "See Engagement Models")),
            React.createElement("div", { className: "hero-stats" }, stats.map((stat, index) => (React.createElement("div", { key: `${stat.label}-${index}` },
                React.createElement("div", { className: "num" }, stat.value),
                React.createElement("div", { className: "lbl" }, stat.label))))))));
}
