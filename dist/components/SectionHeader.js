export function SectionHeader({ tag, title, description }) {
    return (React.createElement("div", { className: "sec-head" },
        React.createElement("span", { className: "tag" }, tag),
        React.createElement("h2", null, title),
        React.createElement("p", null, description)));
}
