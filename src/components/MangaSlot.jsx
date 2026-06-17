import { X } from "lucide-react";

export default function MangaSlot({
  title,
  value,
  onClick,
  selectedMangas,
  onDelete,
}) {
  return (
    <div className="border-border bg-surface/90 dark:border-border-dark dark:bg-surface-dark grid grid-rows-[auto_1fr] rounded-xl border">
      <h3 className="text-text dark:text-text-dark mb-px p-2 font-semibold">
        {title}
      </h3>
      {selectedMangas ? (
        <div
          className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl"
          style={{
            backgroundImage: `url(${selectedMangas.images.jpg.image_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* overlay  */}
          <div className="absolute inset-0 bg-black/70" />

          {/* content */}
          <div
            onClick={onClick}
            className="relative z-10 flex flex-col items-center gap-1 p-2"
          >
            <img
              src={selectedMangas.images.jpg.image_url}
              alt="logo"
              className="h-38 cursor-pointer rounded-lg object-cover"
            />
            <p className="text-center text-sm font-medium text-white">
              {selectedMangas.title}
            </p>
          </div>

          <button
            onClick={() => onDelete(selectedMangas.mal_id)}
            className="absolute top-2 right-2 z-30 cursor-pointer text-white"
          >
            <X size={24} />
          </button>
        </div>
      ) : (
        <button
          onClick={onClick}
          className="border-border dark:border-border-dark text-text-muted dark:text-text-muted-dark flex h-54 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed"
        >
          {value}
        </button>
      )}
    </div>
  );
}
