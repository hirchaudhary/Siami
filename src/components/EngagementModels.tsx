declare const React: any;

interface ServiceItem {
  title: string;
  description: string;
}

interface EngagementModelsProps {
  models: ServiceItem[];
}

export function EngagementModels({ models }: EngagementModelsProps) {
  return (
    <div className="models">
      {models.map((model, index) => (
        <div className="model-card" key={model.title}>
          <div className="model-idx">MODEL / {String(index + 1).padStart(2, '0')}</div>
          <h3>{model.title}</h3>
          <p className="model-desc">{model.description}</p>
        </div>
      ))}
    </div>
  );
}
