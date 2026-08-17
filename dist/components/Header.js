export function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);
    return (React.createElement("header", null,
        React.createElement("nav", { className: "wrap" },
            React.createElement("a", { href: "#" },
                React.createElement("img", { className: "brand-mark", src: "./siami-logo.png", alt: "Siami logo" })),
            React.createElement("div", { className: `navlinks${menuOpen ? ' open' : ''}`, id: "navlinks" },
                React.createElement("a", { href: "#models", onClick: closeMenu }, "Engagement Models"),
                React.createElement("a", { href: "#practices", onClick: closeMenu }, "Practice Areas"),
                React.createElement("a", { href: "#why", onClick: closeMenu }, "Why Siami"),
                React.createElement("a", { href: "#about", onClick: closeMenu }, "About"),
                React.createElement("a", { href: "#contact", className: "nav-cta", onClick: closeMenu }, "Start a Conversation")),
            React.createElement("button", { className: "hamburger", id: "hamburger", "aria-label": "Toggle menu", "aria-expanded": menuOpen, onClick: toggleMenu },
                React.createElement("span", null),
                React.createElement("span", null),
                React.createElement("span", null)))));
}
