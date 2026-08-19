interface SectionHeaderProps {
  tag: string;
  title: string;
  description: string;
}

export function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <div className="sec-head">
      <span className="tag">{tag}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
