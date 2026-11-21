// A general-purpose card with an icon, a title and any content inside.
// "icon" is a Lucide icon component, e.g. <InfoCard icon={Target} title="Goals">...</InfoCard>
export default function InfoCard({ icon: Icon, title, children, className = "" }) {
  return (
    <article className={`card info-card ${className}`}>
      <div className="info-card-header">
        {Icon && (
          <div className="icon-tile">
            <Icon size={22} />
          </div>
        )}
        <h3>{title}</h3>
      </div>
      <div className="info-card-body">{children}</div>
    </article>
  );
}
