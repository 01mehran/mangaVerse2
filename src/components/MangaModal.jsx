import { X } from "lucide-react";
import { useSearchManga } from "../hooks/useSearchManga";

export default function MangaModal({ onClose, topMangas, loadingTopMangas }) {
  const { query, setQuery, results, loadingSearch } = useSearchManga();

  return (
    <div className="fixed inset-0 z-50 mx-2 flex items-center justify-center bg-black/60 dark:bg-black/70">
      <div className="h-112.5 w-105 overflow-hidden rounded-2xl bg-white text-gray-900 shadow-xl dark:bg-gray-900 dark:text-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
          <h2 className="text-lg font-semibold">Select a Manga</h2>

          <button
            onClick={onClose}
            className="cursor-pointer text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white/80"
          >
            <X className="h-5 w-5 transition duration-200 hover:rotate-90" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search manga..."
            className="w-full rounded-lg bg-gray-100 px-3 py-2 text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Top Mangas */}
        <div className="px-4 pb-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">Top Mangas</p>
        </div>

        {/* List */}
        <div className="flex max-h-75 flex-col gap-3 overflow-y-auto px-4 pb-4">
          {/* {loadingTopMangas
            ? "Top mangas ..."
            : topMangas.map((manga) => (
                <div
                  key={manga.mal_id}
                  className="flex cursor-pointer items-center gap-3 rounded-lg bg-gray-100 p-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    src={manga.images.jpg.image_url}
                    alt={`cover of ${manga.title}`}
                    className="h-14 w-10 rounded object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="line-clamp-1 text-sm font-semibold text-gray-900 dark:text-white">
                      {manga.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      ⭐ {manga.score ?? "N/A"} • Rank #{manga.rank ?? "?"}
                    </p>
                  </div>
                </div>
              ))} */}
          {query
            ? loadingSearch
              ? [1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="flex animate-pulse cursor-pointer items-center gap-3 rounded-lg bg-gray-100 p-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    {/* Image skeleton */}
                    <div className="h-14 w-10 rounded bg-gray-300 dark:bg-gray-700" />
                    {/* Text skeleton */}
                    <div className="flex flex-col gap-2">
                      <div className="h-3 w-32 rounded bg-gray-300 dark:bg-gray-700" />
                      <div className="h-2 w-20 rounded bg-gray-300 dark:bg-gray-700" />
                    </div>
                  </div>
                ))
              : results.map((manga) => (
                  <div
                    key={manga.mal_id}
                    className="flex cursor-pointer items-center gap-3 rounded-lg bg-gray-100 p-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
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
                        ⭐ {manga.score ?? "N/A"} • Rank #{manga.rank ?? "?"}
                      </p>
                    </div>
                  </div>
                ))
            : loadingTopMangas
              ? "loadingTop"
              : topMangas?.map((manga) => (
                  <div
                    key={manga.mal_id}
                    className="flex cursor-pointer items-center gap-3 rounded-lg bg-gray-100 p-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
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
                        ⭐ {manga.score ?? "N/A"} • Rank #{manga.rank ?? "?"}
                      </p>
                    </div>
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
}
