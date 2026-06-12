
export default function MangaSlot({ title, value }) {
  return (
    <div className="border-border bg-surface dark:border-border-dark dark:bg-surface-dark rounded-2xl border p-5">
      <h3 className="text-text dark:text-text-dark mb-4 font-semibold">
        {title}
      </h3>

      <button className="border-border dark:border-border-dark text-text-muted dark:text-text-muted-dark flex h-48 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed">
        {value}
      </button>
    </div>
  );
}
