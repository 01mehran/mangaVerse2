export default function ModalMangaCard({ manga, onSelect }) {
  return (
    <div
      onClick={() => onSelect?.(manga)}
      className="flex cursor-pointer items-center gap-3 rounded-lg bg-gray-100 p-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {/* Image */}
      <img
        src={manga?.images?.jpg?.image_url}
        alt={manga?.title}
        className="h-14 w-10 rounded object-cover"
      />
      <div className="flex flex-col space-y-1">
        <p className="line-clamp-1 text-sm font-semibold text-gray-900 dark:text-white">
          {manga?.title ?? "N/A"}
        </p>

        <div className="text-xs text-gray-500 dark:text-gray-300">
          {manga?.genres.length > 0
            ? manga?.genres
                .slice(0, 2)
                .map((g) => g.name)
                .join(" , ")
            : "NO jenres"}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          ⭐{manga?.score?.toFixed(1) ?? "N/A"} • Rank #{manga?.rank ?? "?"}
        </p>
      </div>
    </div>
  );
}
