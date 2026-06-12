import React from "react";

export default function ModalSearchedManga({ manga }) {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-gray-100 p-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
      {/* Image */}
      <img
        src={manga.images.jpg.image_url}
        alt={manga.title}
        className="h-14 w-10 rounded object-cover"
      />
      {/* Text */}
      <div className="flex flex-col">
        <p className="line-clamp-1 text-sm font-semibold text-gray-900 dark:text-white">
          {manga.title}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          ⭐ {manga.score ?? "N/A"} • Rank #{manga.rank ?? "?"} id{" "}
          {manga.mal_id}
        </p>
      </div>
    </div>
  );
}
