export default function MangaSlot({ title, value, onClick, selectedMangas }) {
  return (
    <div
      onClick={onClick}
      className="border-border bg-surface dark:border-border-dark dark:bg-surface-dark rounded-2xl border p-5"
    >
      <h3 className="text-text dark:text-text-dark mb-4 font-semibold">
        {title}
      </h3>
      {selectedMangas ? (
        <div className="flex cursor-pointer flex-col items-center">
          <img
            src={selectedMangas.images.jpg.image_url}
            alt={selectedMangas.title}
            className="h-36 rounded object-cover"
          />

          <p className="dark:text-bg mt-2 text-center text-sm font-medium text-black">
            {selectedMangas.title}
          </p>
        </div>
      ) : (
        <button className="border-border dark:border-border-dark text-text-muted dark:text-text-muted-dark flex h-48 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed">
          {value}
        </button>
      )}
    </div>
  );
}
