export default function InfoBox({ title, value }) {
  return (
    <div>
      <p className="text-text-muted text-xs tracking-wide uppercase">{title}</p>
      <span className="xs:text-lg text-text dark:text-text-dark text-xs font-semibold">
        {value}
      </span>
    </div>
  );
}
