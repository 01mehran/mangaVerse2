// React Hooks;
import { useEffect } from "react";

// Custom Hooks;
import { useSearchManga } from "../hooks/useSearchManga";

// Components
import ModalSeachSkelton from "./ModalSeachSkelton";
import ModalMangaCard from "./ModalMangaCard";

// Icons;
import { X } from "lucide-react";

export default function ModalManga({
  onClose,
  topMangas,
  loadingTopMangas,
  isOpen,
  onSelect,
}) {
  const { query, setQuery, searchedManga, loadingSearch } = useSearchManga();

  const isSearching = !!query;
  const isLoading = isSearching ? loadingSearch : loadingTopMangas;
  const mangas = isSearching ? searchedManga : topMangas;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="xs:mx-0 fixed inset-0 z-50 mx-2 flex items-center justify-center">
      {/* Layer; */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/5 backdrop-blur-sm dark:bg-black/5"
      ></div>
      <div className="z-50 h-112.5 w-105 overflow-hidden rounded-2xl bg-white text-gray-900 shadow-xl dark:bg-gray-900 dark:text-white">
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

        <div className="px-4 pb-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">Top Mangas</p>
        </div>

        <div className="flex max-h-75 flex-col gap-3 overflow-y-auto px-4 pb-4">
          {isLoading ? (
            <ModalSeachSkelton />
          ) : (
            mangas?.map((manga) => (
              <ModalMangaCard
                key={manga.mal_id}
                manga={manga}
                onSelect={onSelect}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
