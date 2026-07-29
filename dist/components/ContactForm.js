export function ContactForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const target = event.currentTarget.querySelector('.submit');
        if (target) {
            target.textContent = 'Sent — we\'ll be in touch';
        }
    };
    return (React.createElement("form", { onSubmit: handleSubmit },
        React.createElement("div", { className: "field" },
            React.createElement("label", { htmlFor: "name" }, "Name"),
            React.createElement("input", { id: "name", type: "text", placeholder: "Your name", required: true })),
        React.createElement("div", { className: "field" },
            React.createElement("label", { htmlFor: "email" }, "Email"),
            React.createElement("input", { id: "email", type: "email", placeholder: "you@company.com", required: true })),
        React.createElement("div", { className: "field" },
            React.createElement("label", { htmlFor: "model" }, "Preferred Engagement Model"),
            React.createElement("select", { id: "model" },
                React.createElement("option", null, "Individual Consulting"),
                React.createElement("option", null, "Corp-to-Corp (C2C)"),
                React.createElement("option", null, "Turnkey Project"),
                React.createElement("option", null, "Time & Expense"),
                React.createElement("option", null, "Staff Augmentation"),
                React.createElement("option", null, "Not sure yet"))),
        React.createElement("div", { className: "field" },
            React.createElement("label", { htmlFor: "msg" }, "Project Details"),
            React.createElement("textarea", { id: "msg", placeholder: "Briefly describe what you're looking to deliver..." })),
        React.createElement("button", { className: "submit", type: "submit" }, "Submit Inquiry")));
}
