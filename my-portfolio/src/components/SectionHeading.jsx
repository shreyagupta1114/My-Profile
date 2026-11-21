// Reusable heading used at the top of every section/page.
export default function SectionHeading({ eyebrow, title, subtitle, as = "h2" }) {
  const HeadingTag = as;
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <HeadingTag className="section-title">{title}</HeadingTag>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
