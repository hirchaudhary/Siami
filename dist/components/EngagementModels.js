export function EngagementModels({ models }) {
    return (React.createElement("div", { className: "models" }, models.map((model, index) => (React.createElement("div", { className: "model-card", key: model.title },
        React.createElement("div", { className: "model-idx" },
            "MODEL / ",
            String(index + 1).padStart(2, '0')),
        React.createElement("h3", null, model.title),
        React.createElement("p", { className: "model-desc" }, model.description))))));
}
